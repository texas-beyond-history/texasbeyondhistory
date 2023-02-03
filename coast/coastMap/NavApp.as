import mx.data.binding.*;

// This class is linked to navigationWin.
class NavApp extends MovieClip{ 

	var ldrMapTh:mx.controls.Loader;
	var navRectangle:MovieClip;
	var thumbBind:Binding;
	var app;
	
	function NavApp() {
		app = _root.application;
		}
	
	// When the flash file is loaded, the main map thumbnail (which is I believe to be 1/4th the size of the
	// regular map) is loaded in the navigation window.
	function onLoad() {
		this.attachMovie("navRectangle","rect",this.getNextHighestDepth(),{_x:2,_y:2});
		ldrMapTh.addEventListener("complete",this);
		thumbBind = new Binding({component:app.xmlLayers_con,property:"results",location:"region.thumb",event:"result"},{component:ldrMapTh,property:"contentPath"},{},false);
		thumbBind.execute();
		app.xmlLayers_con.addEventListener("result", this);
		app.xmlLayers_con.trigger();
		}
	
	// still need to fix the setSize. Should be and I think it could be dynamic.
	function complete(){
		_parent.setSize(180,185);
		_root.application.navWin.visible = true;	
		}
	}