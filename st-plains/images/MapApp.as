import mx.containers.Window;
import mx.utils.Delegate;
import mx.data.binding.*;

// This is the main class for stpMap.fla.
class MapApp extends mx.screens.Form{
	
	var xmlLayers_con:mx.data.components.XMLConnector;
	var layersFilter_ds:mx.data.components.DataSet;
	var spBigMap:mx.containers.ScrollPane;
	var navWin:MovieClip;
	var legendWin:MovieClip;
	var minimize:Boolean;
	var navMinimize:Boolean;
	var legendWidth:Number;
	var navWidth:Number;
	var navHeight:Number;
	var legendContent;
	
	// Just initializing the boolean variables needed for the functions click and navClick.
	function MapApp(){
		minimize = false;
		navMinimize = false;
		}
	
	function onLoad(){
		
		_global.styles.windowStyles.setStyle("color", 0xFFFFFF);
		
		// This is making the navigation window which makes calls to the NavApp class. Visible is false
		// here but becomes true in NavApp.
		navWin = mx.managers.PopUpManager.createPopUp(this, Window, false, {title:"NAVIGATION", contentPath:"navigationWin", closeButton:true});
		navWin.visible = false;
		navWin.move(570,145);
				
		// Creating the window for the legend.
		legendWin = mx.managers.PopUpManager.createPopUp(this, Window, false, {title:"LEGEND", contentPath:"lgndInitial", closeButton:true});
		legendWin.move(570,330);
		
		spBigMap.contentPath ="bigMap";
		
		legendWin.addEventListener("complete",Delegate.create(this,legendWinComplete));				
		legendWin.addEventListener("click",this);
		navWin.addEventListener("click",Delegate.create(this,navClick));
		}
	
	// Function is called right when the flash file is loaded. This used to complete loading up the 
	// legend window.
	function legendWinComplete(){
		legendWidth = legendWin.content._width + 6;
		legendWin.setSize(legendWidth,33);
		}	
	
	// This function is for minimizing the legend window. Minimize intially set to false, meaning it isn't
	// minimized yet. When the minimize button has been pressed and minimize is false then the code goes
	// into the if otherwise unminimize.
	function click(){
		if(!minimize){
			legendContent = legendWin.contentPath;
			legendWin.content._visible = false;
			minimize = true;
			}
		else{
			legendWin.contentPath = legendContent;
			legendWin.content._visible = true;
			minimize = false;
			}
		}
	
	// This function minimizes the navigation window and is a bit more tricky. The navigation window's width
	// and height has to be recorded so that when the window does minimize the title bar does not change and
	// when you unminimize, the window opens up to the right size.
	function navClick(){
		navWidth = navWin.content._width + 5;
		navHeight = navWin._height;
		if(!navMinimize){
			navWin.setSize(navWidth,33);
			navWin.content._visible = false
			navMinimize = true;
			}
		else{
			navWin.setSize(navWidth,navHeight);
			navWin.content._visible = true;
			navMinimize = false;
			}
		}
	}