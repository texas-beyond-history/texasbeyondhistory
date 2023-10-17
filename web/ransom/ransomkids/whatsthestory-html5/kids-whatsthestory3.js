(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.kidswhatsthestory3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_314 = function() {
		this.stop();
		this.onClick = function (newnext1) {
		this.gotoAndPlay(341);
		}
	}
	this.frame_341 = function() {
		this.stop();
		this.onClick = function (newnext2) {
		this.gotoAndPlay(387);
		}
	}
	this.frame_387 = function() {
		this.stop();
		this.onClick = function (newnext3) {
		this.gotoAndPlay(388);
		}
	}
	this.frame_628 = function() {
		this.onClick = function(newnext4) {
		    window.location = "kids-whatsthestory4a.html";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(314).call(this.frame_314).wait(27).call(this.frame_341).wait(46).call(this.frame_387).wait(241).call(this.frame_628));

	// next4
	this.newnext4 = new lib.Symbol40();
	this.newnext4.setTransform(652.1,513.9);
	this.newnext4._off = true;
	new cjs.ButtonHelper(this.newnext4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.newnext4).wait(628).to({_off:false},0).wait(1));

	// next3
	this.newnext3 = new lib.Symbol40();
	this.newnext3.setTransform(652.1,513.9);
	this.newnext3._off = true;
	new cjs.ButtonHelper(this.newnext3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.newnext3).wait(387).to({_off:false},0).to({_off:true},241).wait(1));

	// next2
	this.newnext2 = new lib.Symbol40();
	this.newnext2.setTransform(652.1,513.9);
	this.newnext2._off = true;
	new cjs.ButtonHelper(this.newnext2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.newnext2).wait(341).to({_off:false},0).to({_off:true},46).wait(242));

	// next1
	this.newnext1 = new lib.Symbol40();
	this.newnext1.setTransform(652.1,513.9);
	this.newnext1._off = true;
	new cjs.ButtonHelper(this.newnext1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.newnext1).wait(314).to({_off:false},0).to({_off:true},27).wait(288));

	// ddr5-again
	this.instance = new lib.Symbol29();
	this.instance.setTransform(168.4,340.1,1,1,0,0,0,360.5,360);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(400).to({_off:false},0).to({alpha:1},24).wait(205));

	// ddr5-screenlayer
	this.instance_1 = new lib.ddr5artifacts2screenoverlay();
	this.instance_1.setTransform(-3.9,327.8,1.083,1.083);

	this.instance_2 = new lib.Tween40("synched",0);
	this.instance_2.setTransform(386.5,466.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},409).to({state:[{t:this.instance_2}]},219).wait(1));

	// bones-word
	this.instance_3 = new lib.Symbol135("synched",0);
	this.instance_3.setTransform(287,231,1,1,3.3,0,0,108.1,72);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(624).to({startPosition:0,_off:false},0).to({y:238},4).wait(1));

	// bones
	this.instance_4 = new lib.Symbol60();
	this.instance_4.setTransform(289.5,392.2,1,1,0,0,0,81.5,61.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(605).to({_off:false},0).to({y:264.2},19).to({y:272.2},4).wait(1));

	// harmonica-word
	this.instance_5 = new lib.Symbol134("synched",0);
	this.instance_5.setTransform(499,107.9,1,1,0,0,0,128.4,111.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(599).to({startPosition:0,_off:false},0).to({y:117.9},3).wait(26).to({startPosition:0},0).wait(1));

	// harmonica
	this.instance_6 = new lib.Symbol31();
	this.instance_6.setTransform(520.5,418.1,1,1,0,0,0,105.5,67.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(577).wait(2).to({_off:false},0).to({y:168.1},20).to({y:172.1},3).wait(27));

	// button-word
	this.instance_7 = new lib.Symbol133();
	this.instance_7.setTransform(621.9,269,1,1,0,0,0,129.6,116.7);
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(571).to({_off:false},0).to({regX:129.7,regY:116.8,skewX:-50.4,skewY:-51.5,x:670,y:275},13).wait(45));

	// buttons=
	this.instance_8 = new lib.Symbol59();
	this.instance_8.setTransform(659,448,1,1,0,0,0,88.2,52);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(551).to({_off:false},0).to({y:234},20).to({y:240},3).wait(55));

	// toygun-word
	this.instance_9 = new lib.Symbol131("synched",0);
	this.instance_9.setTransform(671.5,142,1,1,0,0,0,108,72);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(491).to({startPosition:0,_off:false},0).to({y:153},3).wait(134).to({startPosition:0},0).wait(1));

	// toygun
	this.instance_10 = new lib.Symbol30();
	this.instance_10.setTransform(588.5,492.4,1,1,0,0,0,125.5,112);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(469).wait(2).to({_off:false},0).to({y:118.4},20).to({y:124.4},3).wait(135));

	// chin-word
	this.instance_11 = new lib.Symbol132("synched",0);
	this.instance_11.setTransform(482.5,263.9,1,1,0,0,0,108,72);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(545).to({startPosition:0,_off:false},0).to({y:277.9},3).wait(80).to({startPosition:0},0).wait(1));

	// chin2
	this.instance_12 = new lib.Symbol57();
	this.instance_12.setTransform(430.1,424.1,1,1,0,0,0,156,99);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(524).to({_off:false},0).to({y:268.1},21).to({y:283.1},3).wait(81));

	// ddr5-closeup
	this.instance_13 = new lib.Symbol28();
	this.instance_13.setTransform(426.1,416.1,0.526,0.526,0,0,0,360.1,270);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(393).to({_off:false},0).to({regX:360,scaleX:1.08,scaleY:1.08,x:388,y:276.1,alpha:1},16).wait(220));

	// ddr5=text2500
	this.instance_14 = new lib.Symbol129("synched",0);
	this.instance_14.setTransform(406.5,158,1,1,0,0,0,97.5,55);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(342).to({startPosition:0,_off:false},0).to({alpha:1},45).wait(38).to({startPosition:0},0).to({_off:true},1).wait(203));

	// ddr5=
	this.instance_15 = new lib.Symbol128("synched",0);
	this.instance_15.setTransform(387.5,282,1,1,0,0,0,390,292.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(342).to({startPosition:0,_off:false},0).to({alpha:1},45).wait(38).to({startPosition:0},0).to({_off:true},1).wait(203));

	// ddr5=text2
	this.instance_16 = new lib.Symbol56();
	this.instance_16.setTransform(254,220,1,1,0,0,0,117.5,94);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(315).to({_off:false},0).to({alpha:1},26).wait(46).to({_off:true},1).wait(241));

	// ddr5-text1
	this.instance_17 = new lib.Symbol54();
	this.instance_17.setTransform(251.1,222.1,1,1,0,0,0,117.5,94);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(232).to({_off:false},0).to({alpha:1},25).wait(58).to({alpha:0},26).to({_off:true},47).wait(241));

	// ddr1
	this.instance_18 = new lib.Symbol19();
	this.instance_18.setTransform(135,402,1,1,0,0,0,180,216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).wait(629));

	// ddr4-tx1
	this.instance_19 = new lib.Symbol25();
	this.instance_19.setTransform(255.4,220.1,1,1,0,0,0,120.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(232).to({alpha:0},25).to({_off:true},95).wait(277));

	// ddr4-bubble
	this.instance_20 = new lib.Symbol18();
	this.instance_20.setTransform(247.1,216.1,1,1,0,0,0,151,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(315).to({_off:true},171).wait(143));

	// dig background
	this.instance_21 = new lib.Symbol145("synched",0);
	this.instance_21.setTransform(390.1,318.1,1,1,0,0,0,390,230.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(232).to({startPosition:0,_off:false},0).to({alpha:1,mode:"independent"},25).wait(372));

	// ddr4-trail
	this.trailmap = new lib.Symbol24();
	this.trailmap.setTransform(195.4,361.2,0.034,0.034,0,0,0,241.9,236);
	this.trailmap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.trailmap).wait(1).to({_off:false},0).to({regX:241.8,scaleX:1.02,scaleY:1.02,x:530.7,y:291.9},92).wait(121).to({regX:240.7,scaleX:4,scaleY:4,x:374.1,y:304.1,alpha:0},67).to({_off:true},1).wait(347));

	// ddr4-map
	this.instance_22 = new lib.Symbol22();
	this.instance_22.setTransform(298.4,294.1,1,1,0,0,0,247,285);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(214).to({alpha:0},41).wait(58).to({_off:true},1).wait(315));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,9.1,590.4,609);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib._2_1 = function() {
	this.initialize(img._2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1038,745);


(lib._3dplanview = function() {
	this.initialize(img._3dplanview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,700);


(lib._4sitescene = function() {
	this.initialize(img._4sitescene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,585);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib._7 = function() {
	this.initialize(img._7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib.archaeo15 = function() {
	this.initialize(img.archaeo15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,178);


(lib.archaeobackground = function() {
	this.initialize(img.archaeobackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.archaeodirt = function() {
	this.initialize(img.archaeodirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,468);


(lib.archaeos1 = function() {
	this.initialize(img.archaeos1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.archaeos10 = function() {
	this.initialize(img.archaeos10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeos11 = function() {
	this.initialize(img.archaeos11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeos12 = function() {
	this.initialize(img.archaeos12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeos13 = function() {
	this.initialize(img.archaeos13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeos14 = function() {
	this.initialize(img.archaeos14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeos2 = function() {
	this.initialize(img.archaeos2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.archaeos3 = function() {
	this.initialize(img.archaeos3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.archaeos4 = function() {
	this.initialize(img.archaeos4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.archaeos5 = function() {
	this.initialize(img.archaeos5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.archaeos6 = function() {
	this.initialize(img.archaeos6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.archaeos7 = function() {
	this.initialize(img.archaeos7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.archaeos8 = function() {
	this.initialize(img.archaeos8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeos9 = function() {
	this.initialize(img.archaeos9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeotext1 = function() {
	this.initialize(img.archaeotext1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archaeotext2 = function() {
	this.initialize(img.archaeotext2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,207);


(lib.archhouse2 = function() {
	this.initialize(img.archhouse2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,461);


(lib.beigebackground = function() {
	this.initialize(img.beigebackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.blanklesson = function() {
	this.initialize(img.blanklesson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,540);


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


(lib.buttonplayagain = function() {
	this.initialize(img.buttonplayagain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,62);


(lib.buttonreturn = function() {
	this.initialize(img.buttonreturn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,92);


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


(lib.ddr2shade = function() {
	this.initialize(img.ddr2shade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,432);


(lib.ddr2text1 = function() {
	this.initialize(img.ddr2text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,174);


(lib.ddr2text2 = function() {
	this.initialize(img.ddr2text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,174);


(lib.ddr2text3 = function() {
	this.initialize(img.ddr2text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,174);


(lib.ddr2textnew1 = function() {
	this.initialize(img.ddr2textnew1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.ddr2textnew2 = function() {
	this.initialize(img.ddr2textnew2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.ddr2textnew3 = function() {
	this.initialize(img.ddr2textnew3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.ddr3 = function() {
	this.initialize(img.ddr3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,344);


(lib.ddr3lesson = function() {
	this.initialize(img.ddr3lesson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,540);


(lib.ddr3lesson_1 = function() {
	this.initialize(img.ddr3lesson_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,540);


(lib.ddr4map = function() {
	this.initialize(img.ddr4map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,494,570);


(lib.ddr4text1 = function() {
	this.initialize(img.ddr4text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,189);


(lib.ddr4text2 = function() {
	this.initialize(img.ddr4text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,189);


(lib.ddr4trail = function() {
	this.initialize(img.ddr4trail);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,485,472);


(lib.ddr5artifacts = function() {
	this.initialize(img.ddr5artifacts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.ddr5artifacts2 = function() {
	this.initialize(img.ddr5artifacts2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.ddr5artifacts2screenoverlay = function() {
	this.initialize(img.ddr5artifacts2screenoverlay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,256);


(lib.ddr5flatware = function() {
	this.initialize(img.ddr5flatware);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,198);


(lib.ddr5flatware_1 = function() {
	this.initialize(img.ddr5flatware_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,198);


(lib.ddr5harmonica = function() {
	this.initialize(img.ddr5harmonica);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,135);


(lib.ddr5text = function() {
	this.initialize(img.ddr5text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,720);


(lib.ddr5toygun = function() {
	this.initialize(img.ddr5toygun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,224);


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


(lib.horsebackground = function() {
	this.initialize(img.horsebackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2761,1888);


(lib.horseleft = function() {
	this.initialize(img.horseleft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1148,846);


(lib.horseright = function() {
	this.initialize(img.horseright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1148,846);


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


(lib.Tween40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr5artifacts2screenoverlay();
	this.instance.setTransform(-390.4,-138.5,1.083,1.083);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-390.4,-138.5,780.9,277.3);


(lib.Symbol145 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.archhouse2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,780,461);


(lib.Symbol135 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wordbone();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.Symbol134 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wordharmonica();
	this.instance.setTransform(0,91.6,0.997,1.013,-25.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,256.9,223.6);


(lib.Symbol133 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wordbuttons();
	this.instance.setTransform(72.8,0,1,1,30.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,259.2,233.4);


(lib.Symbol132 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.worddishes();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.Symbol131 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wordtoygun();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216,144);


(lib.Symbol129 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("We\nalso found more than 25,000 artifacts!", "bold 22px Arial", "#993300");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 191;
	this.text.setTransform(95.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,195,108.2);


(lib.Symbol128 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._4sitescene();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,780,585);


(lib.Symbol60 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.kidschicken();
	this.instance.setTransform(0,0,0.369,0.369);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,163,122.3);


(lib.Symbol59 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.kidsbutton2_1();
	this.instance.setTransform(0,0,0.176,0.156);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,104);


(lib.Symbol57 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr5flatware_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,312,198);


(lib.Symbol56 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.indirttextnew2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.Symbol54 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.indirttextnew1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.Symbol40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bookbuttonnext();
	this.instance.setTransform(0,0,0.077,0.077);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,56.4);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr5harmonica();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211,135);


(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr5toygun();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,251,224);


(lib.Symbol29 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr5text();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,721,720);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr5artifacts2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr4text2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,241,189);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr4trail();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,485,472);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr4map();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,494,570);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,432);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr2bubble();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,302,245);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;