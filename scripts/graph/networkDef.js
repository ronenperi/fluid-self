function createNetDef(vertices, edges) {
	return {
		vertices: vertices,
		edges: edges
	};
}

networkDef = 
// function() {
	 createNetDef(
		[{"id":1,"v":"-12,-1108,0"},{"id":2,"v":"-57,-841,142"},
		{"id":3,"v":"55,-873,142"},{"id":4,"v":"-108,-696,92"},
		{"id":5,"v":"0,-760,0"},
		{"id":6,"v":"-25,-750,142"},{"id":7,"v":"26,-571,163"},{"id":8,"v":"91,-596,117"},
		{"id":9,"v":"42,-570,0"},{"id":10,"v":"116,-474,88"},{"id":11,"v":"65,-485,146"},{"id":12,"v":"-117,-382,120"},
		{"id":13,"v":"30,-358,183"},{"id":14,"v":"140,-300,75"},{"id":15,"v":"50,-230,180"},{"id":16,"v":"-45,-245,185"},
		{"id":17,"v":"-55,-160,0"},{"id":20,"v":"-235,-245,50"},
		{"id":21,"v":"-140,-305,235"},{"id":22,"v":"-217,-180,205"},{"id":23,"v":"-43,-155,310"},{"id":24,"v":"43,-42,340"},
		{"id":25,"v":"45,-160,320"},{"id":26,"v":"205,-190,210"},{"id":27,"v":"235,-240,35"},{"id":28,"v":"60,90,0"},
		{"id":31,"v":"55,185,0"},
		{"id":33,"v":"-100,295,30"},{"id":34,"v":"-125,265,140"},{"id":35,"v":"130,235,193"},{"id":36,"v":"0,255,245"},
		{"id":37,"v":"40,145,290"},{"id":38,"v":"173,-23,92"},{"id":39,"v":"-175,7,210"},{"id":40,"v":"-72,-87,180"},
		{"id":41,"v":"-60,115,230"},{"id":42,"v":"30,-60,270"}
		],[
		{s:1, t:2},
		{s:2, t:5},
		{s:3, t:4},
		{s:5, t:6},
		{s:4, t:7},
		{s:7, t:10},
		{s:6, t:8},
		{s:8, t:9},
		{s:9, t:11},
		{s:10, t:13},
		{s:11, t:12},
		{s:12, t:17},
		{s:13, t:14},
		{s:14, t:27},
		{s:15, t:17}, //{s:15, t:19},
		{s:15, t:27},
		{s:16, t:21},
		{s:16, t:23},
		{s:17, t:20},
		{s:17, t:25}, //{s:18, t:25},
		{s:17, t:21},
		{s:20, t:21},
		{s:22, t:40},
		{s:22, t:42},
		{s:23, t:41},
		{s:24, t:42},
		{s:26, t:42},
		{s:25, t:27},
		{s:28, t:42},
		{s:15, t:28}, //{s:15, t:29},
		{s:28, t:37}, //{s:30, t:37},
		{s:31, t:35},
		{s:31, t:36}, //{s:32, t:36},
		{s:33, t:35},
		{s:33, t:36},
		{s:41, t:34},
		{s:33, t:41},
		{s:37, t:38},
		{s:39, t:40}
		]
	);


if (isNode) {
	module.exports.networkDef = networkDef
}






// networkDef = createNetDef(
// 	[{"id":1,"v":"-12,-1108,0"},{"id":2,"v":"-57,-841,142"},{"id":3,"v":"55,-873,142"},{"id":4,"v":"-108,-696,92"},
// 	{"id":5,"v":"0,-760,0"},{"id":6,"v":"-25,-750,142"},{"id":7,"v":"26,-571,163"},{"id":8,"v":"91,-596,117"},
// 	{"id":9,"v":"42,-570,0"},{"id":10,"v":"116,-474,88"},{"id":11,"v":"65,-485,146"},{"id":12,"v":"-117,-382,120"},
// 	{"id":13,"v":"30,-358,183"},{"id":14,"v":"140,-300,75"},{"id":15,"v":"50,-230,180"},{"id":16,"v":"-45,-245,185"},
// 	{"id":17,"v":"-55,-160,0"},{"id":20,"v":"-235,-245,50"},
// 	{"id":21,"v":"-140,-305,235"},{"id":22,"v":"-217,-180,205"},{"id":23,"v":"-43,-155,310"},{"id":24,"v":"43,-42,340"},
// 	{"id":25,"v":"45,-160,320"},{"id":26,"v":"205,-190,210"},{"id":27,"v":"235,-240,35"},{"id":28,"v":"60,90,0"},
// 	{"id":29,"v":"60,90,10"},{"id":30,"v":"60,90,20"},{"id":31,"v":"55,185,0"},{"id":32,"v":"55,185,10"},
// 	{"id":33,"v":"-100,295,30"},{"id":34,"v":"-125,265,140"},{"id":35,"v":"130,235,193"},{"id":36,"v":"0,255,245"},
// 	{"id":37,"v":"40,145,290"},{"id":38,"v":"173,-23,92"},{"id":39,"v":"-175,7,210"},{"id":40,"v":"-72,-87,180"},
// 	{"id":41,"v":"-60,115,230"},{"id":42,"v":"30,-60,270"}
// 	],[
// 	{s:1, t:2},
// 	{s:2, t:5},
// 	{s:3, t:4},
// 	{s:5, t:6},
// 	{s:4, t:7},
// 	{s:7, t:10},
// 	{s:6, t:8},
// 	{s:8, t:9},
// 	{s:9, t:11},
// 	{s:10, t:13},
// 	{s:11, t:12},
// 	{s:12, t:17},
// 	{s:13, t:14},
// 	{s:14, t:27},
// 	{s:15, t:17},
// 	{s:15, t:27},
// 	{s:16, t:21},
// 	{s:16, t:23},
// 	{s:17, t:20},
// 	{s:17, t:25},
// 	{s:17, t:21},
// 	{s:20, t:21},
// 	{s:22, t:40},
// 	{s:22, t:42},
// 	{s:23, t:41},
// 	{s:24, t:42},
// 	{s:26, t:42},
// 	{s:25, t:27},
// 	{s:28, t:42},
// 	{s:15, t:29},
// 	{s:30, t:37},
// 	{s:31, t:35},
// 	{s:32, t:36},
// 	{s:33, t:35},
// 	{s:33, t:36},
// 	{s:41, t:34},
// 	{s:33, t:41},
// 	{s:37, t:38},
// 	{s:39, t:40}
// 	]
// );



// Original!!!
// networkDef = createNetDef(
// 	[{"id":1,"v":"-12,-1108,0"},{"id":2,"v":"-57,-841,142"},{"id":3,"v":"55,-873,142"},{"id":4,"v":"-108,-696,92"},
// 	{"id":5,"v":"0,-760,0"},{"id":6,"v":"-25,-750,142"},{"id":7,"v":"26,-571,163"},{"id":8,"v":"91,-596,117"},
// 	{"id":9,"v":"42,-570,0"},{"id":10,"v":"116,-474,88"},{"id":11,"v":"65,-485,146"},{"id":12,"v":"-117,-382,120"},
// 	{"id":13,"v":"30,-358,183"},{"id":14,"v":"140,-300,75"},{"id":15,"v":"50,-230,180"},{"id":16,"v":"-45,-245,185"},
// 	{"id":17,"v":"-55,-160,0"},{"id":18,"v":"-55,-160,10"},{"id":19,"v":"-55,-160,20"},{"id":20,"v":"-235,-245,50"},
// 	{"id":21,"v":"-140,-305,235"},{"id":22,"v":"-217,-180,205"},{"id":23,"v":"-43,-155,310"},{"id":24,"v":"43,-42,340"},
// 	{"id":25,"v":"45,-160,320"},{"id":26,"v":"205,-190,210"},{"id":27,"v":"235,-240,35"},{"id":28,"v":"60,90,0"},
// 	{"id":29,"v":"60,90,10"},{"id":30,"v":"60,90,20"},{"id":31,"v":"55,185,0"},{"id":32,"v":"55,185,10"},
// 	{"id":33,"v":"-100,295,30"},{"id":34,"v":"-125,265,140"},{"id":35,"v":"130,235,193"},{"id":36,"v":"0,255,245"},
// 	{"id":37,"v":"40,145,290"},{"id":38,"v":"173,-23,92"},{"id":39,"v":"-175,7,210"},{"id":40,"v":"-72,-87,180"},
// 	{"id":41,"v":"-60,115,230"},{"id":42,"v":"30,-60,270"}
// 	],[
// 	{s:1, t:2},
// 	{s:2, t:5},
// 	{s:3, t:4},
// 	{s:5, t:6},
// 	{s:4, t:7},
// 	{s:7, t:10},
// 	{s:6, t:8},
// 	{s:8, t:9},
// 	{s:9, t:11},
// 	{s:10, t:13},
// 	{s:11, t:12},
// 	{s:12, t:17},
// 	{s:13, t:14},
// 	{s:14, t:27},
// 	{s:15, t:19},
// 	{s:15, t:27},
// 	{s:16, t:21},
// 	{s:16, t:23},
// 	{s:17, t:20},
// 	{s:18, t:25},
// 	{s:17, t:21},
// 	{s:20, t:21},
// 	{s:22, t:40},
// 	{s:22, t:42},
// 	{s:23, t:41},
// 	{s:24, t:42},
// 	{s:26, t:42},
// 	{s:25, t:27},
// 	{s:28, t:42},
// 	{s:15, t:29},
// 	{s:30, t:37},
// 	{s:31, t:35},
// 	{s:32, t:36},
// 	{s:33, t:35},
// 	{s:33, t:36},
// 	{s:41, t:34},
// 	{s:33, t:41},
// 	{s:37, t:38},
// 	{s:39, t:40}
// 	]
// );



















// networkDef = {
// 	roots: [0],
// 	vertices: [
// 	{id:1, v:"1,1,1"},
// 	{id:2, v:"20,20,20"},
// 	{id:3, v:"10,30,40"}
// 	],
// 	edges: [
// 	{s:1, t:2},
// 	{s:1, t:3}
// 	]
// };

// -12,-1108,0 -57,-841,142 55,-873,142 -108,-696,92 0,-760,0 -25,-750,142 26,-571,163 91,-596,117 42,-570,0 116,-474,88 65,-485,146 -117,-382,120 30,-358,183 140,-300,75 50,-230,180 -45,-245,185 -55,-160,0 -55,-160,0 -55,-160,0 -235,-245,50 -140,-305,235 -217,-180,205 -43,-155,310 43,-42,340 45,-160,320 205,-190,210 235,-240,35 60,90,0 60,90,0 60,90,0 55,185,0 55,185,0 -100,295,30 -125,265,140 130,235,193 0,255,245 40,145,290 173,-23,92 -175,7,210 -72,-87,180 -60,115,230 30,-60,270
// networkDef = {
// 	roots: [0, 2, 14, 25, 33, 27, 21, 20, 22],
// 	vertices: [
// 	{id:1},
// 	{id:2},
// 	{id:3},
// 	{id:4},
// 	{id:5},
// 	{id:6},
// 	{id:7},
// 	{id:8},
// 	{id:9},
// 	{id:10},
// 	{id:11},
// 	{id:12},
// 	{id:13},
// 	{id:14},
// 	{id:15},
// 	{id:16},
// 	{id:17},
// 	{id:18},
// 	{id:19},
// 	{id:20},
// 	{id:21},
// 	{id:22},
// 	{id:23},
// 	{id:24},
// 	{id:25},
// 	{id:26},
// 	{id:27},
// 	{id:28},
// 	{id:29},
// 	{id:30},
// 	{id:31},
// 	{id:32},
// 	{id:33},
// 	{id:34},
// 	{id:35},
// 	{id:36},
// 	{id:37},
// 	{id:38},
// 	{id:39},
// 	{id:40},
// 	{id:41},
// 	{id:42}
// 	],
// 	edges: [
// 	{s:1, t:2},
// 	{s:2, t:5},
// 	{s:3, t:4},
// 	{s:5, t:6},
// 	{s:4, t:7},
// 	{s:7, t:10},
// 	{s:6, t:8},
// 	{s:8, t:9},
// 	{s:9, t:11},
// 	{s:10, t:13},
// 	{s:11, t:12},
// 	{s:12, t:17},
// 	{s:13, t:14},
// 	{s:14, t:27},
// 	{s:15, t:19},
// 	{s:15, t:27},
// 	{s:16, t:21},
// 	{s:16, t:23},
// 	{s:17, t:20},
// 	{s:18, t:25},
// 	{s:17, t:21},
// 	{s:20, t:21},
// 	{s:22, t:40},
// 	{s:22, t:42},
// 	{s:23, t:41},
// 	{s:24, t:42},
// 	{s:26, t:42},
// 	{s:25, t:27},
// 	{s:28, t:42},
// 	{s:15, t:29},
// 	{s:30, t:37},
// 	{s:31, t:35},
// 	{s:32, t:36},
// 	{s:33, t:35},
// 	{s:33, t:36},
// 	{s:41, t:34},
// 	{s:33, t:41},
// 	{s:37, t:38},
// 	{s:39, t:40},
// 	]
// };





