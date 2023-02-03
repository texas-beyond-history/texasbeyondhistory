// This class is linked to the popup movieclip in stpMap.fla. This class takes care of the displaying of the 
// picture and its caption.
class Popup extends MovieClip 
{
	var ldrPop:mx.controls.Loader;
	var labelFormat:TextFormat;
	var picLabel:TextField;
	var app;
	
	// Formatting the text be displayed in the caption.
	function Popup() {
		app = _root.application;
		labelFormat = new TextFormat();
		labelFormat.font = "Verdana";
		labelFormat.color = 0x993300;
		labelFormat.size = 12;
		}
	
	// This function creates the box which the text is displayed in. So you could change the size and color of
	// the text field.
	function onLoad() {
		ldrPop.addEventListener("complete",this);
		ldrPop.contentPath = _parent.picture;
		picLabel = this.createTextField("txt",this.getNextHighestDepth(),0,475,793,65);
		picLabel.border = true;
		picLabel.borderColor = 0x993300;
		picLabel.background = true;
		picLabel.backgroundColor = 0xF0B467;
		picLabel.text = _parent.caption;
		picLabel.wordWrap = true;
		picLabel.setTextFormat(labelFormat);
		}
	
	// This makes the window's content visible and sets the Size to the width of the picture and longer than the
	// height because the text box needs to able to fit.
	function complete() {
		_parent.setSize(800,575);
		_parent.move(0,0);
		_parent.visible = true;
		}
}