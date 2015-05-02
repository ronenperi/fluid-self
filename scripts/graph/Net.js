function Net (netStruct, roots, modules) {

    this.threshold = conf.threshold;

    var getNetVertice = function(d3Vertice) {
        var params = {
            // name: d3Vertice.name,
            // id: d3Vertice.group,
            d3Obj: d3Vertice,
            confCache: conf, // in order to check if the configuration has changed
            layers: [{
                id: 'SignalLayer',
                layerCtor: SignalLayer,
                ctorParams: {
                    id: 'SignalLayer',
                    currColor: 'blue'
                }
            },{
                id: 'NeuralNetLayer',
                layerCtor: NeuralNetLayer,
                ctorParams: {
                    id: 'NeuralNetLayer',
                    threshold: conf.threshold,
                    verticeProbability: conf.verticeProbability, //0.5,
                    initScore: 0,
                    roots: roots //[0, 2, 14, 25, 33, 27, 21, 20, 22]
                }
            },]
        };

        params = _.extend(params, d3Vertice);
        params.id = params.group;
        params.group = undefined; // legacy from d3 - we don't want this
        var newVertice =  new Vertice(params);
        d3Vertice.verticeRef = newVertice;
        return newVertice;
    };
    
    this.netVertices  = _.map(netStruct.vertices, getNetVertice);
    this.addEdges(netStruct.edges);

    callModule = function(method, args) {
        _.each(modules, function(m){
            m[method].call(undefined, args);
        });
    };

    this.externaltick = function(args){callModule('tick', args)};
    this.preCycleOps = function(args){callModule('preCycleOps', args)};
    this.externalActivationCallback = function(args){callModule('externalActivationCallback', args)};
};

Net.prototype = {
    constructor: Net,

    // Private Functions
    checkAndSetParams: function(conf) {
        _.each(this.netVertices, function(v) {
            v.checkAndSetParams(conf);
        });
    },
    resetRoots: function(rootsList) {
        _.each(this.netVertices, function(v) {
            var rootStatus = _.contains(rootsList, v.id);
            v.resetRoots(rootStatus);
        })
    },
    addEdge: function(e) {
        var source = this.getV(e.source);
        var target = this.getV(e.target);
        source.outVertices.push(target);
        target.inVertices.push(source);

        source.outEdges.push(e);
        target.inEdges.push(e);
    },
    addEdges: function(edges) {
        _.each(edges, function(e) {
            this.addEdge(e);
        }.bind(this));
        this.allEdges = edges;
    },
    getV: function(eId) {
        return _.findWhere(this.netVertices, {id: eId});
    },
    findEdge: function(edges, source, target) {
        return _.find(edges, function(e){
            // return (e.source.group==source && e.target.group==target);  -  Was changed along with the removal of D3..
            return (e.source==source && e.target==target);
        });
    },
    getSignalingVertices: function() {
        return _.filter(this.netVertices, function(v) {
            return v.isSignaling();
        });
    },
    getActiveVertices: function() {
        return _.filter(this.netVertices, function(v) {
            return v.isActive();
        });
    },



    // Public Functions

    // Perform external operations. e.g. 1) setting D3 visual objects 2) sending data to "Melodi Generator" or DMX components
    prepareExternalDataForNextCycle: function() {
        this.preCycleOps({allEdges: this.allEdges, allVertices: this.netVertices});
    },


    // Give roots an initial value - signal has to start somewhere.
    // We can have more than one root in order to simulate flow from different parts of the net
    // In reality the roots should probably be "hidden", meaning they might not need to represent an actual node
    updateRoots: function() {
        _.each(this.netVertices, function(v){v.updateRoots()});
    },
    determineCurrentState: function() {
        _.each(this.netVertices, function(v){v.determineCurrentState()});
    },
    determineNetworkEffect: function() {
        _.each(this.netVertices, function(v){v.determineNetworkEffect()});
    },
    // Relays the state of each edge through a callback 'externalActivationCallback' which is provided by the external consumer
    relayNetStateToExternalConsumer: function() {
        var currSignalingVertices = this.getSignalingVertices();
        _.each(currSignalingVertices, function(v) {
            var outgoingVertices = v.layers.getLayer('NeuralNetLayer').getOutgoingVertices();
            _.each(outgoingVertices, function(targetVertice){
                edge = this.findEdge(this.allEdges, v.id, targetVertice.id);
                this.externalActivationCallback({edge: edge});
            }.bind(this));
        }.bind(this));
        var currActiveVertices = this.getActiveVertices();
        _.each(currActiveVertices, function(v) {
            this.externalActivationCallback({vertice: v});
        });
    },

    tick: function() {
        this.externaltick();
    },

    causeNetworkEffect: function() {
        _.each(this.netVertices, function(v){v.causeNetworkEffect()});
    },
    prepareForNextState: function() {
        _.each(this.netVertices, function(v){v.prepareForNextState()});
    }

};		