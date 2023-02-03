(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.kidswhatsthestory2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.onClick = function (new1) {
		this.gotoAndPlay(101);
		}
	}
	this.frame_157 = function() {
		this.stop();
		this.onClick = function (new2) {
		this.gotoAndPlay(158);
		}
	}
	this.frame_667 = function() {
		this.onClick = function(next3) {
		    window.location = "kids-whatsthestory3.html";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(157).call(this.frame_157).wait(510).call(this.frame_667).wait(99));

	// Layer 14
	this.next3 = new lib.Symbol40();
	this.next3.setTransform(688.3,507.9);
	this.next3._off = true;
	new cjs.ButtonHelper(this.next3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.next3).wait(365).to({_off:false},0).wait(402));

	// nextbutton2
	this.next1 = new lib.Symbol40();
	this.next1.setTransform(688.3,507.9);
	new cjs.ButtonHelper(this.next1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.next1).to({_off:true},101).wait(56).to({_off:false},0).to({_off:true},58).wait(21).to({_off:false},0).wait(100).to({_off:true},1).wait(430));

	// drdweman
	this.instance = new lib.ddrdeman();
	this.instance.setTransform(620.5,426.5,1,1,0,0,0,173,172);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(336).to({_off:false},0).to({alpha:1},25).wait(406));

	// ddr3
	/* Layers with classic tweens must contain only a single symbol instance. */

	// ddr2=tx3
	this.instance_1 = new lib.Symbol43();
	this.instance_1.setTransform(273,229,1,1,0,0,0,117.5,94);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(215).to({_off:false},0).to({alpha:1},21).wait(100).to({alpha:0},24).wait(407));

	// ddr2=scameo
	this.instance_2 = new lib.Symbol45();
	this.instance_2.setTransform(127,193,1,1,0,0,0,50,75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({alpha:1},13).wait(475).to({alpha:0},35).to({_off:true},1).wait(99));

	// ddr2=rcameo
	this.instance_3 = new lib.Symbol44();
	this.instance_3.setTransform(191,109,1,1,0,0,0,50,75);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({alpha:1},14).wait(488).to({alpha:0},35).to({_off:true},1).wait(99));

	// ddr3-directions
	this.instance_4 = new lib.Symbol124("synched",0);
	this.instance_4.setTransform(326.5,82,1,1,0,0,0,175.5,10);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(667).to({startPosition:0,_off:false},0).wait(100));

	// eman-new
	this.instance_5 = new lib.emancip();
	this.instance_5.setTransform(320.9,908.9,1,1,0,0,0,175,255);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(336).to({_off:false},0).to({y:348.9},331).wait(100));

	// ddr3=hereswhy
	this.instance_6 = new lib.Symbol47();
	this.instance_6.setTransform(317.5,870,1,1,0,0,0,219.5,270);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(336).to({_off:false},0).to({y:329},331).wait(100));

	// ddr2=tx2
	this.instance_7 = new lib.Symbol42();
	this.instance_7.setTransform(272.4,242.4,1,1,0,0,0,117.5,94);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101).to({_off:false},0).to({alpha:1},20).wait(94).to({alpha:0},21).wait(531));

	// ddr2=tx1
	this.instance_8 = new lib.Symbol41();
	this.instance_8.setTransform(274.5,234.4,1,1,0,0,0,117.5,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(101).to({alpha:0},20).wait(646));

	// ddr2=bubble
	this.instance_9 = new lib.Symbol18();
	this.instance_9.setTransform(265,230,1,1,0,0,0,151,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(215).to({alpha:0},17).wait(103).to({_off:true},1).wait(431));

	// ddr2=alt-bubble
	this.instance_10 = new lib.Symbol120("synched",0);
	this.instance_10.setTransform(266,230,1,1,0,0,0,151,122.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(215).to({startPosition:0,_off:false},0).to({alpha:1},17).wait(104).to({startPosition:0},0).to({alpha:0},24).wait(407));

	// ddr2=
	this.instance_11 = new lib.Symbol19();
	this.instance_11.setTransform(130,416,1,1,0,0,0,180,216);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(215).to({alpha:0},17).wait(535));

	// ddr2=alt
	this.instance_12 = new lib.Symbol121("synched",0);
	this.instance_12.setTransform(521,414,1,1,0,0,0,180,216);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(215).to({startPosition:0,_off:false},0).to({alpha:1},17).wait(104).to({startPosition:0},0).to({alpha:0},24).wait(407));

	// ddr3-background
	this.instance_13 = new lib.Symbol46();
	this.instance_13.setTransform(385,293,1,1,0,0,0,409,333.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(215).to({_off:false},0).to({alpha:1},17).wait(535));

	// ddr2background
	this.instance_14 = new lib.Symbol14();
	this.instance_14.setTransform(388.1,278.1,1,1,0,0,0,390,292.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(370).to({_off:true},1).wait(396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-14.3,828.1,646.4);


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


(lib.backbutton = function() {
	this.initialize(img.backbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1109,729);


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


(lib.prejudicebutton = function() {
	this.initialize(img.prejudicebutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,50);


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


(lib.whatsemancipationtext = function() {
	this.initialize(img.whatsemancipationtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,460);


(lib.whatsexperiencedtext = function() {
	this.initialize(img.whatsexperiencedtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,510);


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


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr3();
	this.instance.setTransform(-172.9,-171.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172.9,-171.9,346,344);


(lib.Symbol124 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Click on the buttons to learn more!", "italic bold 14px Arial", "#FFFFCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 347;
	this.text.setTransform(173.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,351,19.6);


(lib.Symbol121 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr2alt();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,432);


(lib.Symbol120 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr2bubblealt();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,302,245);


(lib.Symbol47 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr3lesson_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,439,540);


(lib.Symbol46 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beigebackground();
	this.instance.setTransform(0,0,1.136,1.237);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,818,667.9);


(lib.Symbol45 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sarahcameo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,150);


(lib.Symbol44 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ransomcameo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,150);


(lib.Symbol43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr2textnew3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.Symbol42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr2textnew2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235,188);


(lib.Symbol41 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr2textnew1();

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


(lib.Symbol20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,346,344);


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


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sitebackground();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,780,585);


(lib.emancip = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Here's why: although slaves\nwere emancipated in 1865, they were not really free.\n\nEven after the gained their freedom from slavery,\nAfrican Americans \nface prejudice and injustice and\nthe threat of violence.\n\nIt was a very scary time\nfor African Americans.\n\nBut in spite of all those\nchallenges, Ransom and Sarah\nWilliams were successful.\nThat's why their story is so\nimportant.", "bold 22px Arial", "#9C3100");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 346;
	this.text.setTransform(173,0,1,1.144);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,350,509.9);


(lib.ddrdeman = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ddr3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,346,344);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;