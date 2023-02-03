import mx.containers.Window;
import mx.utils.Delegate;
import mx.data.binding.*;

class MapApp extends mx.screens.Form{
	
	var xmlLayers_con:mx.data.components.XMLConnector;
	var layersFilter_ds:mx.data.components.DataSet;
	var spBigMap:mx.containers.ScrollPane;
	var navWin:MovieClip;
	var legendWin:MovieClip;
	var minimize:Boolean;
	var navMinimize:Boolean;
	var legendWidth:Number;
	var legendContent;
	var navContent;
	var navX:Number;
	var navY:Number;
	
	// The following 2 variables are used to display the icons on the navWin window.
	var navxml_con:mx.data.components.XMLConnector;
	var navLayersFilter_ds:mx.data.components.DataSet;
	//var xmlLayers_con:mx.data.components.XMLConnector;
	//var layersFilter_ds:mx.data.components.DataSet;
			
	function MapApp(){
		minimize = false;
	}
	
	function onLoad(){
		
		_global.styles.windowStyles.setStyle("color", 0xFFFFFF);
		
		navWin = mx.managers.PopUpManager.createPopUp(this, Window, false, {title:"NAVIGATION", contentPath:"navigationWin"});
		navWin.visible = false;
		navWin.move(570,145);
				
		legendWin = mx.managers.PopUpManager.createPopUp(this, Window, false, {title:"LEGEND", contentPath:"lgndInitial", closeButton:true});
		//legendWin.setSize(165, 100);
		legendWin.move(570,330);
		
		spBigMap.contentPath ="bigMap";
		
		legendWin.addEventListener("complete",Delegate.create(this,legendWinComplete));
				
		//navWin.attachMovie("featuredSitesbtn", "map", navWin.getNextHighestDepth(), {_x:1, _y:1});
				
		legendWin.addEventListener("click",this);
		//navWin.addEventListener("navClick",Delegate.create(this,navClick));
		
		//navxml_con.addEventListener("result", this);
		//navxml_con.trigger();
		//xmlLayers_con.addEventListener("result", this);
		//xmlLayers_con.trigger();
		}
	
	function legendWinComplete(){
		legendWin.setSize(legendWin.content._width,legendWin.content._height+25);
		}	
		
	function result()
	{				
		navDisplayPoints("");
	}
	
	// This function is for minimizing the legend window.
	function click(){
		legendWidth = legendWin.content._width;
		if(!minimize){
			legendContent = legendWin.contentPath;
			legendWin.contentPath = "";
			legendWin.setSize(legendWidth,33);
			minimize = true;
			}
		else{
			legendWin.contentPath = legendContent;
			minimize = false;
			}
		}
		
	function navClick(){
		if(!navMinimize){
			navContent = navWin.contentPath;
			navWin.contentPath = "";
			navWin.setSize(180,33);
			navMinimize = true;
			}
		else{
			//navX = navWin._x;
			//navY = navWin._y;
			//navWin.content = "navigationWin";
			//navWin.deletePopUp();
			//navWin = mx.managers.PopUpManager.createPopUp(this, Window, false, {title:"NAVIGATION", contentPath:"navigationWin", closeButton:true});
			//navWin.visible = false;
			//navWin.move(navX,navY);
			//navWin.contentPath = "navigationWin";
			navWin.contentPath = navContent;
			navMinimize = false;
			}
		}
	
	function navDisplayPoints(section:String):Void
	{
		//trace(navLayersFilter_ds.getLength);
		//trace(layersFilter_ds.getLength);
		//if(navLayersFilter_ds.filtered == true)
		//{
			//deleteMapPoints();
			//navLayersFilter_ds.filtered = false;
		//}
		//trace(navLayersFilter_ds.filtered);
		//navLayersFilter_ds.filtered = true;
		//trace(navLayersFilter_ds.filtered);
		//navLayersFilter_ds.filterFunc = function(item:Object)
		//{
			//trace(item.section == section);
			//navWin.attachMovie("featuredSitesbtn", "map", navWin.getNextHighestDepth(), {_x:50, _y:50});
			//return item.section == section;
		//}
		//navWin.attachMovie("featuredSitesbtn", "map", navWin.getNextHighestDepth(), {_x:10, _y:10});
		//navWin.attachMovie("workSitesbtn", "map", navWin.getNextHighestDepth(), {_x:50, _y:10});
		//trace(section);
		
		//addMapPoints();
	}
	
	//function addMapPoints():Void 
	//{
		//navLayersFilter_ds.first();
		//while(navLayersFilter_ds.hasNext())
		//{
			//navWin.attachMovie("featuredSitesbtn", "map" + navLayersFilter_ds.selectedIndex, navWin.getNextHighestDepth(), {_x:(navLayersFilter_ds.x/4), _y:(navLayersFilter_ds.x/4)});
			//navLayersFilter_ds.next();			
		//}
	//}
	
	//function deleteMapPoints():Void
	//{
		//navLayersFilter_ds.first();
		//while(navLayersFilter_ds.hasNext())
		//{
			//eval("this.map" + navLayersFilter_ds.selectedIndex).removeMovieClip();
    		//navLayersFilter_ds.next();			
		//}
	//}
}