(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.kidswhatsthestory5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
		this.onClick = function (pg5next1) {
		this.gotoAndPlay(50);
		}
	}
	this.frame_68 = function() {
		this.stop();
		this.onClick = function (pg5next2) {
		this.gotoAndPlay(72);
		}
	}
	this.frame_120 = function() {
		this.stop();
		this.onClick = function (pg5next3) {
		this.gotoAndPlay(138);
		}
	}
	this.frame_175 = function() {
		this.stop();
		this.onClick = function (pg5next5) {
		this.gotoAndPlay(176);
		}
	}
	this.frame_200 = function() {
		this.stop();
		this.onClick = function (pg5next6) {
		this.gotoAndPlay(201);
		}
	}
	this.frame_225 = function() {
		this.onClick = function(pg5next7) {
		    window.location = "kids-whatsthestory6a.html";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(19).call(this.frame_68).wait(52).call(this.frame_120).wait(55).call(this.frame_175).wait(25).call(this.frame_200).wait(25).call(this.frame_225));

	// next7
	this.pg5next7 = new lib.Symbol40();
	this.pg5next7.setTransform(652.1,483.9);
	this.pg5next7._off = true;
	new cjs.ButtonHelper(this.pg5next7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg5next7).wait(225).to({_off:false},0).wait(1));

	// next6
	this.pg5next6 = new lib.Symbol40();
	this.pg5next6.setTransform(652.1,536.9);
	this.pg5next6._off = true;
	new cjs.ButtonHelper(this.pg5next6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg5next6).wait(200).to({_off:false},0).wait(24).to({_off:true},1).wait(1));

	// next5
	this.pg5next5 = new lib.Symbol40();
	this.pg5next5.setTransform(652.1,483.9);
	this.pg5next5._off = true;
	new cjs.ButtonHelper(this.pg5next5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg5next5).wait(175).to({_off:false},0).wait(24).to({_off:true},1).wait(26));

	// next4
	this.pg5next4 = new lib.Symbol40();
	this.pg5next4.setTransform(652.1,483.9);
	this.pg5next4._off = true;
	new cjs.ButtonHelper(this.pg5next4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg5next4).wait(137).to({_off:false},0).wait(37).to({_off:true},1).wait(51));

	// next3
	this.pg5next3 = new lib.Symbol40();
	this.pg5next3.setTransform(652.1,483.9);
	this.pg5next3._off = true;
	new cjs.ButtonHelper(this.pg5next3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg5next3).wait(120).to({_off:false},0).wait(16).to({_off:true},1).wait(89));

	// next2
	this.pg5next2 = new lib.Symbol40();
	this.pg5next2.setTransform(652.1,442.9);
	this.pg5next2._off = true;
	new cjs.ButtonHelper(this.pg5next2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg5next2).wait(68).to({_off:false},0).wait(51).to({_off:true},1).wait(106));

	// next1
	this.pg5next1 = new lib.Symbol40();
	this.pg5next1.setTransform(652.1,442.9);
	this.pg5next1._off = true;
	new cjs.ButtonHelper(this.pg5next1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg5next1).wait(49).to({_off:false},0).wait(18).to({_off:true},1).wait(158));

	// ddr6-cabin
	this.instance = new lib.Symbol105("synched",0);
	this.instance.setTransform(456,303,1,1,0,0,0,234,216);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({startPosition:0,_off:false},0).to({alpha:1},15).wait(22).to({startPosition:0},0).to({alpha:0},13).wait(38));

	// ddr6-text4new
	this.instance_1 = new lib.Symbol137("synched",0);
	this.instance_1.setTransform(261.2,458,1,1,0,0,0,115.7,85);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200).to({startPosition:0,_off:false},0).to({x:268.2,y:465,alpha:1},20).wait(6));

	// ddr6-text3
	this.instance_2 = new lib.Symbol106("synched",0);
	this.instance_2.setTransform(256,473,1,1,0,0,0,136,58.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({startPosition:0,_off:false},0).to({alpha:1},13).wait(12).to({startPosition:0},0).to({alpha:0},20).wait(6));

	// ddr6-text2
	this.instance_3 = new lib.Symbol104("synched",0);
	this.instance_3.setTransform(255,463,1,1,0,0,0,85,58.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(138).to({startPosition:0,_off:false},0).to({alpha:1},15).wait(22).to({startPosition:0},0).to({alpha:0},13).wait(38));

	// labelsnw
	this.instance_4 = new lib.Symbol149();
	this.instance_4.setTransform(363,281,1,1,0,0,0,126,72);

	this.instance_5 = new lib.Symbol148();
	this.instance_5.setTransform(706,411,1,1,108.5,0,0,126,72);

	this.instance_6 = new lib.Symbol147();
	this.instance_6.setTransform(415,215,1,1,0,0,0,126,72);

	this.instance_7 = new lib.Symbol146();
	this.instance_7.setTransform(443,400,1,1,0,0,0,126,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},120).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},16).to({state:[]},1).wait(89));

	// dd6txtnw
	this.instance_8 = new lib.Symbol145();
	this.instance_8.setTransform(254.5,461.5,1,1,0,0,0,87.5,78.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(92).to({_off:false},0).to({x:259.5,y:467.5,alpha:1},13).wait(16).to({x:254.5,y:461.5},0).to({x:255.5,alpha:0},16).to({_off:true},1).wait(88));

	// ddr6-notes
	this.instance_9 = new lib.Symbol91("synched",0);
	this.instance_9.setTransform(171,449,1,1,0,0,0,245.5,208.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(92).to({startPosition:0,_off:false},0).to({alpha:1},13).wait(16).to({startPosition:0},0).to({alpha:0},16).wait(1).to({startPosition:0},0).to({alpha:1},15).wait(73));

	// ddr6-crew
	this.instance_10 = new lib.Symbol92("synched",0);
	this.instance_10.setTransform(185,351,1,1,0,0,0,109,225.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(92).to({startPosition:0,_off:false},0).to({alpha:1},13).wait(16).to({startPosition:0},0).to({alpha:0},16).to({_off:true},1).wait(88));

	// ddr6-painting
	this.instance_11 = new lib.Symbol108("synched",0);
	this.instance_11.setTransform(390,300,1,1,0,0,0,360,270);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(200).to({startPosition:0,_off:false},0).to({alpha:1},20).wait(6));

	// ddr6-wholefarm
	this.instance_12 = new lib.Symbol107();
	this.instance_12.setTransform(1168.5,302,1.004,1.004,0,0,0,360,269.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(175).to({_off:false},0).to({x:390.5},24).wait(27));

	// ddr6-3d
	this.instance_13 = new lib.Symbol100("synched",0);
	this.instance_13.setTransform(419,247,1,1,0,0,0,390,350);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(121).to({startPosition:0,_off:false},0).to({alpha:1},16).to({alpha:0},37).wait(52));

	// ddr6-background
	this.instance_14 = new lib.Symbol90("synched",0);
	this.instance_14.setTransform(390,306,1,1,0,0,0,360,270);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(92).to({startPosition:0,_off:false},0).to({alpha:1},13).wait(70).to({startPosition:0},0).to({alpha:0},24).wait(27));

	// franklinarrow
	this.instance_15 = new lib.Symbol89("synched",0);
	this.instance_15.setTransform(659,159.1,0.582,0.594,0,0,0,91,103.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(68).to({startPosition:0,_off:false},0).wait(36).to({startPosition:0},0).to({_off:true},1).wait(121));

	// drfranklin
	this.instance_16 = new lib.Symbol88("synched",0);
	this.instance_16.setTransform(618,115,1,1,0,0,0,126,72);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(68).to({startPosition:0,_off:false},0).wait(12).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(12).to({startPosition:0},0).to({_off:true},1).wait(121));

	// descendents
	this.instance_17 = new lib.Symbol87("synched",0);
	this.instance_17.setTransform(390,306,1,1,0,0,0,360,270);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50).to({startPosition:0,_off:false},0).to({alpha:1},18).to({_off:true},52).wait(106));

	// buddy arrow
	this.instance_18 = new lib.Symbol86();
	this.instance_18.setTransform(551.9,382.4,0.797,0.797,-44.9,0,0,48.7,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:48.9,regY:55.6,scaleX:0.77,scaleY:0.77,rotation:0,x:552.1,y:382.3},24).to({regX:48.7,scaleX:1,scaleY:1,rotation:-44.8,x:552,y:382.4},25).to({_off:true},71).wait(106));

	// buddy
	this.instance_19 = new lib.Symbol85();
	this.instance_19.setTransform(539,364,0.758,0.758,0,0,0,91,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:91.4,regY:103.6,rotation:0.3,x:540.1,y:363.6},0).wait(1).to({regX:90.6,regY:103.9,rotation:0.5,x:540.4,y:363.3},0).wait(1).to({regX:91,regY:103.6,rotation:1,x:541.7,y:362.6},0).wait(1).to({regX:91.2,regY:103.7,rotation:1.3,x:542.7,y:362.2},0).wait(1).to({regX:90.9,regY:103.6,rotation:1.5,x:543.5,y:361.7},0).wait(1).to({regX:91,regY:103.5,rotation:2,x:544.5,y:361.3},0).wait(1).to({regY:103.6,rotation:2.3,x:545.5,y:361.1},0).wait(1).to({regY:103.4,rotation:2.5,x:546.5,y:360.7},0).wait(1).to({regX:91.3,regY:103.6,rotation:3,x:547.7,y:360.6},0).wait(1).to({regX:91,regY:103.5,rotation:3.3,x:548.5,y:360.4},0).wait(1).to({regY:103.6,rotation:3.5,x:549.5,y:360.3},0).wait(1).to({regX:91.2,regY:103.4,rotation:4,x:550.8},0).wait(1).to({regX:91,regY:103.5,rotation:4.3,x:551.7},0).wait(1).to({regY:103.3,rotation:4.5,x:552.7},0).wait(1).to({regX:90.9,regY:103.4,rotation:5,x:553.6,y:360.5},0).wait(1).to({regX:91.2,regY:103.6,rotation:5.3,x:554.9,y:360.8},0).wait(1).to({regX:90.9,regY:103.4,rotation:5.5,x:555.7,y:360.9},0).wait(1).to({regX:91,regY:103.6,rotation:6,x:556.7,y:361.4},0).wait(1).to({regY:103.5,rotation:6.3,x:557.6,y:361.7},0).wait(1).to({regY:103.6,rotation:6.5,x:558.6,y:362.1},0).wait(1).to({regY:103.8,rotation:7,x:559.5,y:362.7},0).wait(1).to({regY:103.5,rotation:7.3,x:560.4,y:363},0).wait(1).to({rotation:7.5,x:561.4,y:363.5},0).wait(1).to({regY:103.6,rotation:8,x:562.2,y:364.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:0,y:364},0).wait(1).to({rotation:-0.1,x:561.4,y:363.5},0).wait(1).to({regY:103.5,rotation:-0.3,x:560.4,y:363},0).wait(1).to({regY:103.6,rotation:-0.8,x:559.6,y:362.5},0).wait(1).to({regX:90.9,regY:103.9,rotation:-1.1,x:558.6,y:362.3},0).wait(1).to({regX:91,regY:103.6,rotation:-1.3,x:557.6,y:361.7},0).wait(1).to({regY:103.7,rotation:-1.8,x:556.7,y:361.3},0).wait(1).to({regY:103.6,rotation:-2.1,x:555.8,y:361},0).wait(1).to({rotation:-2.3,x:554.7,y:360.7},0).wait(1).to({regY:103.7,rotation:-2.8,x:553.7,y:360.6},0).wait(1).to({rotation:-3.1,x:552.7,y:360.4},0).wait(1).to({regX:91.1,regY:103.6,rotation:-3.3,x:551.7,y:360.3},0).wait(1).to({regX:91,rotation:-3.8,x:550.6},0).wait(1).to({regX:90.5,regY:103.5,rotation:-4.1,x:549.3},0).wait(1).to({regX:91,regY:103.6,rotation:-4.3,x:548.6,y:360.5},0).wait(1).to({regY:103.5,rotation:-4.8,x:547.5,y:360.6},0).wait(1).to({regY:103.6,rotation:-5.1,x:546.5,y:360.8},0).wait(1).to({regX:91.2,regY:103.9,rotation:-5.3,x:545.7,y:361.2},0).wait(1).to({regX:91.4,regY:103.6,rotation:-5.8,x:544.8,y:361.3},0).wait(1).to({regX:91,rotation:-6.1,x:543.6,y:361.7},0).wait(1).to({rotation:-6.3,x:542.6,y:362.1},0).wait(1).to({regX:90.6,regY:103.5,rotation:-6.8,x:541.4,y:362.4},0).wait(1).to({regX:91,regY:103.6,rotation:-7.1,x:540.8,y:363},0).wait(1).to({regX:91.3,rotation:-7.3,x:540.1,y:363.5},0).wait(1).to({regX:90.5,rotation:-7.8,x:538.6,y:364.1},0).to({_off:true},1).wait(176));

	// historian-scene
	this.instance_20 = new lib.Tween60("synched",0);
	this.instance_20.setTransform(390,302);

	this.instance_21 = new lib.historian1();
	this.instance_21.setTransform(30,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},65).to({state:[]},1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,32,720,540);


// symbols:
(lib._3dplanview = function() {
	this.initialize(img._3dplanview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,700);


(lib.archaeobackground = function() {
	this.initialize(img.archaeobackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.archaeodirt = function() {
	this.initialize(img.archaeodirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,468);


(lib.archaeotext1 = function() {
	this.initialize(img.archaeotext1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeotext2 = function() {
	this.initialize(img.archaeotext2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.bookbutton = function() {
	this.initialize(img.bookbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1109,729);


(lib.bookbuttonback = function() {
	this.initialize(img.bookbuttonback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,376);


(lib.bookbuttonnext = function() {
	this.initialize(img.bookbuttonnext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1109,729);


(lib.buddyarrow = function() {
	this.initialize(img.buddyarrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.buddyname = function() {
	this.initialize(img.buddyname);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.cabinsketch = function() {
	this.initialize(img.cabinsketch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,432);


(lib.cabinwallsword = function() {
	this.initialize(img.cabinwallsword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.cellarword = function() {
	this.initialize(img.cellarword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.chimneyword = function() {
	this.initialize(img.chimneyword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.crewmember = function() {
	this.initialize(img.crewmember);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,451);


(lib.ddr2 = function() {
	this.initialize(img.ddr2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,432);


(lib.ddr2alt = function() {
	this.initialize(img.ddr2alt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,432);


(lib.ddr2bubble = function() {
	this.initialize(img.ddr2bubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,245);


(lib.ddr2bubblealt = function() {
	this.initialize(img.ddr2bubblealt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,245);


(lib.ddrfinal = function() {
	this.initialize(img.ddrfinal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1208,1573);


(lib.ddrfinalwagonback = function() {
	this.initialize(img.ddrfinalwagonback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,720);


(lib.ddrgrid = function() {
	this.initialize(img.ddrgrid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,491,417);


(lib.descendents = function() {
	this.initialize(img.descendents);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.dipix2 = function() {
	this.initialize(img.dipix2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib.drfranlkinname = function() {
	this.initialize(img.drfranlkinname);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.emancipationtext = function() {
	this.initialize(img.emancipationtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,460);


(lib.experiencedtext = function() {
	this.initialize(img.experiencedtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,510);


(lib.farmmap = function() {
	this.initialize(img.farmmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.farmmap_1 = function() {
	this.initialize(img.farmmap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.farmmaptext = function() {
	this.initialize(img.farmmaptext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.farmpainting = function() {
	this.initialize(img.farmpainting);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.finalddr = function() {
	this.initialize(img.finalddr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,826);


(lib.finaltext = function() {
	this.initialize(img.finaltext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,864,864);


(lib.hearthword = function() {
	this.initialize(img.hearthword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.historian1 = function() {
	this.initialize(img.historian1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.historian1text = function() {
	this.initialize(img.historian1text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,63);


(lib.howcabinlookedtext = function() {
	this.initialize(img.howcabinlookedtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,117);


(lib.indirttextnew1 = function() {
	this.initialize(img.indirttextnew1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.indirttextnew2 = function() {
	this.initialize(img.indirttextnew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.indirttextnew3 = function() {
	this.initialize(img.indirttextnew3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.intro2drbubble = function() {
	this.initialize(img.intro2drbubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,826);


(lib.intro2drdirttruck = function() {
	this.initialize(img.intro2drdirttruck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,826);


(lib.kidsbutton2 = function() {
	this.initialize(img.kidsbutton2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,667);


(lib.kidsbutton2_1 = function() {
	this.initialize(img.kidsbutton2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,667);


(lib.kidschicken = function() {
	this.initialize(img.kidschicken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,441,331);


(lib.kidsdoll = function() {
	this.initialize(img.kidsdoll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,655,431);


(lib.leftbushcopy = function() {
	this.initialize(img.leftbushcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,826);


(lib.lefthorse = function() {
	this.initialize(img.lefthorse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1027,753);


(lib.mapnohighway = function() {
	this.initialize(img.mapnohighway);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,925);


(lib.ransomcameo = function() {
	this.initialize(img.ransomcameo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,150);


(lib.rightbush = function() {
	this.initialize(img.rightbush);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1152,826);


(lib.righthorse = function() {
	this.initialize(img.righthorse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1148,846);


(lib.roadbackground1 = function() {
	this.initialize(img.roadbackground1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib.rootcellarword = function() {
	this.initialize(img.rootcellarword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,61);


(lib.sarahcameo = function() {
	this.initialize(img.sarahcameo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,150);


(lib.sceneicwall = function() {
	this.initialize(img.sceneicwall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,942,600);


(lib.sitebackground = function() {
	this.initialize(img.sitebackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,585);


(lib.thenweusedtext = function() {
	this.initialize(img.thenweusedtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,197);


(lib.title1 = function() {
	this.initialize(img.title1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib.titleblack = function() {
	this.initialize(img.titleblack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib.titlecollege = function() {
	this.initialize(img.titlecollege);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib.titletext = function() {
	this.initialize(img.titletext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib.titlewheretext = function() {
	this.initialize(img.titlewheretext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1754,295);


(lib.unitarrows = function() {
	this.initialize(img.unitarrows);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,117);


(lib.unitslabel = function() {
	this.initialize(img.unitslabel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,577,117);


(lib.wholefarmtext = function() {
	this.initialize(img.wholefarmtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,117);


(lib.wordbone = function() {
	this.initialize(img.wordbone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.wordbuttons = function() {
	this.initialize(img.wordbuttons);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.worddishes = function() {
	this.initialize(img.worddishes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.wordharmonica = function() {
	this.initialize(img.wordharmonica);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.wordtoygun = function() {
	this.initialize(img.wordtoygun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.Tween60 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.historian1();
	this.instance.setTransform(-359.9,-269.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-359.9,-269.9,720,540);


(lib.Symbol149 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hearthword();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.Symbol148 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cabinwallsword();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.Symbol147 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.chimneyword();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.Symbol146 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cellarword();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.Symbol145 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Then we used all the evidence to piece together the story of the Ransom Williams family and their life on the farm!", "bold 18px Arial", "#A53131");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 171;
	this.text.setTransform(85.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175,156.7);


(lib.Symbol137 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Now we \ncan really imagine \nhow the Williams’ Farm looked 125 years ago! An artist painted this picture based on the evidence \nwe found at \nthe site.", "bold 17px Arial", "#993300");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 227;
	this.text.setTransform(113.7,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231.5,170);


(lib.Symbol108 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.farmpainting();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.Symbol107 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.farmmap();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.Symbol106 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wholefarmtext();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,117);


(lib.Symbol105 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cabinsketch();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,468,432);


(lib.Symbol104 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.howcabinlookedtext();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,170,117);


(lib.Symbol100 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3dplanview();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,780,700);


(lib.Symbol92 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.crewmember();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218,451);


(lib.Symbol91 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddrgrid();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,491,417);


(lib.Symbol90 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.archaeobackground();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.Symbol89 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buddyarrow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.Symbol88 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.drfranlkinname();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,144);


(lib.Symbol87 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.descendents();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.Symbol86 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buddyarrow();
	this.instance.setTransform(0,0,0.536,0.536);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97.6,111);


(lib.Symbol85 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buddyname();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.Symbol40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bookbuttonnext();
	this.instance.setTransform(0,0,0.077,0.077);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,56.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;