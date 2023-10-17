(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.kidswhatsthestory6a = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.onClick = function (pg6next1) {
		this.gotoAndPlay(1);
		}
	}
	this.frame_28 = function() {
		this.stop();
		this.onClick = function (next62) {
		this.gotoAndPlay(29);
		}
	}
	this.frame_55 = function() {
		this.stop();
		document.location = "kids-whatsthestory6b.html";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(27).call(this.frame_55).wait(399));

	// next2
	this.next62 = new lib._6next2();
	this.next62.setTransform(695,542.1,1,1,0,0,0,42.9,28.2);
	this.next62._off = true;
	new cjs.ButtonHelper(this.next62, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.next62).wait(28).to({_off:false},0).to({alpha:0},27).to({_off:true},1).wait(399));

	// text2
	this.instance = new lib.Symbol147();
	this.instance.setTransform(470,338.1,0.695,0.695,0,0,0,123,89.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},27).to({alpha:0},27).to({_off:true},1).wait(399));

	// next1
	this.pg6next1 = new lib.Symbol40();
	this.pg6next1.setTransform(652.1,513.9);
	new cjs.ButtonHelper(this.pg6next1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.pg6next1).to({_off:true},1).wait(454));

	// finaltruck text
	this.instance_1 = new lib.Symbol140("synched",0);
	this.instance_1.setTransform(470,329,1,1,0,0,0,86,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({alpha:0},27).to({_off:true},131).wait(296));

	// final scene truck
	this.instance_2 = new lib.Symbol110("synched",0);
	this.instance_2.setTransform(388,301.1,0.7,0.7,0,0,0,576,413.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({startPosition:0},0).to({alpha:0},27).to({_off:true},105).wait(295));

	// playagain button
	this.instance_3 = new lib.Symbol115();
	this.instance_3.setTransform(400.1,324.1,1,1,0,0,0,192.5,31);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).wait(427));

	// return button
	this.instance_4 = new lib.Symbol116();
	this.instance_4.setTransform(396.1,240.1,1,1,0,0,0,192.5,46);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).wait(427));

	// finalwhite
	this.instance_5 = new lib.Symbol114();
	this.instance_5.setTransform(394.1,241.1,1,1,0,0,0,606.1,417.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).wait(427));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,11.9,808.5,579.6);


// symbols:
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


(lib.buttonplayagain = function() {
	this.initialize(img.buttonplayagain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,62);


(lib.buttonreturn = function() {
	this.initialize(img.buttonreturn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,92);


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
p.nominalBounds = new cjs.Rectangle(0,0,775,202);


(lib.ddrfinalwagonback_1 = function() {
	this.initialize(img.ddrfinalwagonback_1);
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


(lib.Symbol147 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("So let's join\nthe Williams family and\njourney back in time. In the\nother fun activities, you'll\nlearn mroe about them and \ntheir life on the farm over 100 years ago!\nYeeha!", "bold 18px Arial", "#A53131");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 242;
	this.text.setTransform(121,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246,178.8);


(lib.Symbol140 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Well,\npartners, that's how\nour adventure into the past all began. Along the way, we made all sorts of discoveries and many new friends!", "bold 14px Arial", "#993300");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 168;
	this.text.setTransform(84,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172,125.2);


(lib.Symbol116 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buttonreturn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,385,92);


(lib.Symbol115 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buttonplayagain();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,385,62);


(lib.Symbol113 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhesBBLMAAAiCVMC9ZAAAMAAACCVg");
	this.shape.setTransform(606.2,417.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1212.3,834.3);


(lib.Symbol110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.finalddr();
	this.instance.setTransform(0,0,1.003,1.002);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1155,827.9);


(lib.Symbol40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bookbuttonnext();
	this.instance.setTransform(0,0,0.077,0.077);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,56.4);


(lib._6next2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bookbuttonnext();
	this.instance.setTransform(0,0,0.077,0.077);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,56.4);


(lib.Tween54 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol113("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,606.1,417.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("EBetBBLMi9ZAAAMAAAiCVMC9ZAAAg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-606.1,-417,1212.3,834.3);


(lib.Symbol114 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween54("synched",0);
	this.instance.setTransform(606.2,417.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1212.3,834.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;