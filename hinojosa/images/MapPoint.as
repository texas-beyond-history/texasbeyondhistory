import mx.containers.Window;

class MapPoint extends MovieClip {
	
	var pointSection:String;
	var pointCaption:String;
	var pointPicture:String;
	var pointName:String;
	var pointIcon:String;
	var pointLink:String;
	var pointLabel:TextField;
	var labelFormat:TextFormat;
	var defaultDepth:Number;
	var popupWin:MovieClip;
	
	function MapPoint(){
		labelFormat = new TextFormat();
		labelFormat.align = "center";
		labelFormat.font = "Verdana";
		labelFormat.color = 0xFFFFFF;
		}
	
	function onLoad() {
		this.attachMovie(pointIcon,"point",this.getNextHighestDepth(),{_x:0,_y:0});
		
		}
	
	function onRollOver() {
		defaultDepth = this.getDepth();
		this.swapDepths(100);
		pointLabel = this.createTextField("txt",this.getNextHighestDepth(),-25,-25,50,25);
		pointLabel.text = pointName;
		pointLabel.autoSize = "center";
		pointLabel.setTextFormat(labelFormat);
		}
		
	function onRollOut() {
		this.swapDepths(defaultDepth);
		pointLabel.removeTextField();
		}
		
	function onRelease() {
		if(pointSection != "Lay of the Land") {
			getURL("javascript:openNewWindow(pointLink,pointName,'height=400,width=800,scrollbars=1,resizable=1')");
			}
		// If section is Lay of the Land then popups are in flash with orange window.
		else {
			popupWin = mx.managers.PopUpManager.createPopUp(this, Window, true, {title:pointName, contentPath:"popup", closeButton:true, caption:pointCaption, picture:pointPicture});
			popupWin.visible = false;
			popupWin.addEventListener("click",this);
			}
		}
		
	function click() {
		popupWin.deletePopUp();
		}
	}