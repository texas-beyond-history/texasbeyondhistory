import mx.containers.Window;

// This class is linked to the mapPoint movie clip in stpMap.fla.
class MapPoint extends MovieClip {
	
	// The variables beginning with point are initialized in DisplayLayers class.
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
	
	// Here is where the format of the text to be displayed is done.
	function MapPoint(){
		labelFormat = new TextFormat();
		labelFormat.align = "center";
		labelFormat.font = "Verdana";
		labelFormat.color = 0xFFFFFF;
		}
	
	// This is where the icon is being set.
	function onLoad() {
		this.attachMovie(pointIcon,"point",this.getNextHighestDepth(),{_x:0,_y:0});		
		}
	
	// When the arrow rollsover an icon, that icon gets pulled to the top. Meaning if part of the icon is 
	// covered when the cursor rollsover, it'll bring that icon to front of everything covering it.
	function onRollOver() {
		defaultDepth = this.getDepth();
		this.swapDepths(100);
		pointLabel = this.createTextField("txt",this.getNextHighestDepth(),-25,-25,50,25);
		pointLabel.text = pointName;
		pointLabel.autoSize = "center";
		pointLabel.setTextFormat(labelFormat);
		}
		
	// When the curser is no longer on an icon it gets put back where it originally was. Like if it was 
	// somewhat covered by another icon it gets put back under.
	function onRollOut() {
		this.swapDepths(defaultDepth);
		pointLabel.removeTextField();
		}
		
	function onRelease() {
		if(pointSection != "Lay of the Land") {
			getURL("javascript:openNewWindow('"+pointLink+"','','height=700,width=800,scrollbars=1,resizable=1')");
			}
		// If section is Lay of the Land then popups are in flash with orange window.
		else {
			popupWin = mx.managers.PopUpManager.createPopUp(this, Window, true, {title:pointName, contentPath:"popup", closeButton:true, caption:pointCaption, picture:pointPicture});
			popupWin.visible = false;
			popupWin.addEventListener("click",this);
			}
		}
		
	// This function is used to delete the open popups that are on the Lay of the Land Layer.
	function click() {
		popupWin.deletePopUp();
		}
	}