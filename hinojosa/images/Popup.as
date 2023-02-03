class Popup extends MovieClip 
{
	var ldrPop:mx.controls.Loader;
	var labelFormat:TextFormat;
	var picLabel:TextField;
	var app;
	
	function Popup() {
		app = _root.application;
		labelFormat = new TextFormat();
		labelFormat.font = "Verdana";
		labelFormat.color = 0x993300;
		labelFormat.size = 10;
		}
	
	function onLoad() {
		ldrPop.addEventListener("complete",this);
		ldrPop.contentPath = _parent.picture;
		//picLabel = this.createTextField("txt",this.getNextHighestDepth(),0,353,592.5,75);
		picLabel = this.createTextField("txt",this.getNextHighestDepth(),0,353,603,64);
		picLabel.border = true;
		picLabel.borderColor = 0x993300;
		picLabel.background = true;
		picLabel.backgroundColor = 0xF0B467;
		picLabel.text = _parent.caption;
		picLabel.wordWrap = true;
		picLabel.setTextFormat(labelFormat);
	}
	
	function complete(){
		_parent.setSize(610,452);
		_parent.move(77.5,.5);
		_parent.visible = true;
		}
}