import mx.data.binding.*;

class NavApp extends MovieClip
{
	var ldrMapTh:mx.controls.Loader;
	var navRectangle:MovieClip;
	var thumbBind:Binding;
	var app;
	
	function NavApp() {
		app = _root.application;
		}
	
	function onLoad() {
		this.attachMovie("navRectangle","rect",this.getNextHighestDepth(),{_x:2,_y:2});
		ldrMapTh.addEventListener("complete",this);
		thumbBind = new Binding({component:app.xmlLayers_con,property:"results",location:"region.thumb",event:"result"},{component:ldrMapTh,property:"contentPath"},{},false);
		thumbBind.execute();
	}
	
	// still need to fix the setSize. Needs to be dynamic.
	function complete(){
		_parent.setSize(180,185);
		_root.application.navWin.visible = true;
		}
}