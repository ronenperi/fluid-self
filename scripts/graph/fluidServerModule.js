
var _moduleName = 'fluidServerModule';

fluidServerModule = function(api) {

	var me = this;
	me.name = _moduleName;

	me.api = api;
	
	me.init = function(netStruct) {
		// Callbacks for the Net 
		me.preCycleOps = function(netStruct) {
			var allVertices = [];
			_.each(netStruct.allVertices, function(v) {
				allVertices.push({
					id: v.id,
					active: v.isActive(),
					sensorActive: v.isActiveByTouch()
				});
			});

			var allEdges = [];
			_.each(netStruct.allEdges, function(e) {
				allEdges.push({
					source: e.source,
					target: e.target,
					active: e.edgeRef.isActive(),
					sensorActive: e.edgeRef.isActiveByTouch()
				});
			});

			var netToSend = {
				allEdges: allEdges,
				allVertices: allVertices
			};

			var toSend = JSON.stringify(netToSend);
			me.api.write(toSend);
			
			_.each(netToSend.allVertices, function(v){
				if (v.sensorActive) {
					console.log("Vertice '"+v.id+"' was touched")
				}
			})
	    };

	    me.externalActivationCallback = function(args) {
	    	if (!_.isEmpty(args.edge)) {
        		console.log('Vertice activation: ' + args);
        	} else if (!_.isEmpty(args.vertice)) {
    			console.log('Edge activation: ' + args);
        	}
	    };


	    me.tick = function () {

	    };
	};

	return me;
}

module.exports.fluidServerModule = fluidServerModule;