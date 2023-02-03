import mx.data.binding.*;

// This class is linked to the bigMap movie clip of stpMap.fla
class DisplayLayers extends MovieClip 
{
	var ldrMap:mx.controls.Loader;
	//var xmlLayers_con:mx.data.components.XMLConnector;
	var app;
	var mapBind:Binding;
	
	function DisplayLayers()
	{
		app = _root.application;
	}
	
	function onLoad():Void 
	{
		mapBind = new Binding({component:app.xmlLayers_con,property:"results",location:"region.map",event:"result"},{component:ldrMap,property:"contentPath"},{},false);
		
		app.xmlLayers_con.addEventListener("result", this);
		app.xmlLayers_con.trigger();		
	}
	
	function result()
	{				
		displayPoints("");
	}
	
	function displayPoints(section:String):Void
	{
		if(app.layersFilter_ds.filtered == true)
		{
			deleteMapPoints();
			app.layersFilter_ds.filtered = false;
		}
		
		if(section == "Modern Towns")
		{
			ldrMap.contentPath = "images/south-texas-plains-towns.jpg";
			//ldrMap.contentPath = app.xmlLayers_con.results.region.towns;
			//mapBind = new Binding({component:app.xmlLayers_con,property:"results",location:"",event:"result"},{component:ldrMap,property:"contentPath"},{},false);
			//app.xmlLayers_con.addEventListener("result", this);
			//app.xmlLayers_con.trigger();	
		}
		else if(section == "Geology")
		{
			ldrMap.contentPath = "images/south-texas-plains-geology.jpg";
		}
		else if(section == "Vegetation Map")
		{
			ldrMap.contentPath = "images/south-texas-plains-vegetation.jpg";
		}
		else if(section == "Rainfall")
		{
			ldrMap.contentPath = "images/south-texas-plains-rainfall.jpg";
		}
		else
		{
			if(ldrMap.contentPath != "images/south-texas-plains.jpg") 
			{
				ldrMap.contentPath = "images/south-texas-plains.jpg";
			}
			//ldrMap.contentPath = "xmlLayers_con.results.region.map";
			app.layersFilter_ds.filtered = true;
			app.layersFilter_ds.filterFunc = function(item:Object)
			{
				return item.section == section;
			}
		
			addMapPoints(section);
		}
	}
	
	function addMapPoints(section:String):Void 
	{
		// if the section is lay of the land then the icons on that map layer won't display it's name
		if(section == "Lay of the Land")
		{
			app.layersFilter_ds.first();
			while(app.layersFilter_ds.hasNext())
			{
				this.attachMovie("mapPoint", "map" + app.layersFilter_ds.selectedIndex, this.getNextHighestDepth(), {_x:app.layersFilter_ds.x, _y:app.layersFilter_ds.y,pointSection:section,pointIcon:app.layersFilter_ds.icon,pointName:"",pointLink:app.layersFilter_ds.link,pointPicture:app.layersFilter_ds.picture,pointCaption:app.layersFilter_ds.caption});
				app.layersFilter_ds.next();
			}
		}
		else
		{
			app.layersFilter_ds.first();
			while(app.layersFilter_ds.hasNext())
			{
				this.attachMovie("mapPoint", "map" + app.layersFilter_ds.selectedIndex, this.getNextHighestDepth(), {_x:app.layersFilter_ds.x, _y:app.layersFilter_ds.y,pointSection:section,pointIcon:app.layersFilter_ds.icon,pointName:app.layersFilter_ds.name,pointLink:app.layersFilter_ds.link});
				app.layersFilter_ds.next();
			}
		}
	}
	
	function deleteMapPoints():Void
	{
		app.layersFilter_ds.first();
		while(app.layersFilter_ds.hasNext())
		{
			eval("this.map" + app.layersFilter_ds.selectedIndex).removeMovieClip();
    		app.layersFilter_ds.next();			
		}
	}
}