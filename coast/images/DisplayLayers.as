import mx.data.binding.*;

// This class is linked to the bigMap movie clip of stpMap.fla
class DisplayLayers extends MovieClip 
{
	var ldrMap:mx.controls.Loader;
	var navigationWin:MovieClip;
	var app;
	var mapBind:Binding;
	
	function DisplayLayers(){
		app = _root.application;
		}
	
	// When the flash file loads it creates a binding loads the loader with the initial map which is in the xml
	// file, layers.xml.
	function onLoad():Void{
		mapBind = new Binding({component:app.xmlLayers_con,property:"results",location:"region.map",event:"result"},{component:ldrMap,property:"contentPath"},{},false);
		app.xmlLayers_con.addEventListener("result", this);
		app.xmlLayers_con.trigger();		
		}
		
	// This just doesn't display any points on the map with the flash initially loads.
	function result(){				
		displayPoints("");
		}
	
	// This function is called on each button of the file stpMap.fla.
	function displayPoints(section:String,smallMap:String):Void{
		// The map is cleared of any points if points were previously put on it and filtered = false
		// to reset the filter.
		if(app.layersFilter_ds.filtered == true){
			deleteMapPoints();
			app.layersFilter_ds.filtered = false;
			}
		
		// I couldn't figure out how to get the images from the xml file so I had to specifically write its
	    // location in the folders. This is for the maps of each button if it has a different map.
		if(section == "Modern Towns"){
			ldrMap.contentPath = "images/coast-modern-towns.jpg";
			}
		else if(section == "Geology"){
			ldrMap.contentPath = "images/coast-geology.jpg";
			}
		else if(section == "Vegetation Map"){
			ldrMap.contentPath = "images/coast-vegetation.jpg";
			}
		else if(section == "Rainfall"){
			ldrMap.contentPath = "images/coast-rainfall.jpg";
			}
		else if(section == "Natural Areas"){
			ldrMap.contentPath = "images/coast-drainage-basins.jpg";
			}
		else{
			// If the current map isn't the main one, then it is changed to it. Filtered is set to true to 
			// begin filtering to get the right points to show up on the map. Function addMapPoints is called.
			if(ldrMap.contentPath != "images/coast-base-map.jpg"){
				ldrMap.contentPath = "images/coast-base-map.jpg";
				}
			app.layersFilter_ds.filtered = true;
			app.layersFilter_ds.filterFunc = function(item:Object){
				return item.section == section;
				}		
			addMapPoints(section);
			}
		}
	
	// This is where each point gets added to the map. The class MapPoint was made to display the names of 
	// each point on the map. This is seen the while loop.
	function addMapPoints(section:String):Void{
		// If the section is lay of the land then the icons on that map layer won't display it's name.
		if(section == "Lay of the Land"){
			app.layersFilter_ds.first();
			while(app.layersFilter_ds.hasNext()){
				// The part "map" + app.layersFilter_ds.selectedIndex is used to name each icon. It is needed
				// when you begin deleting the icons from the map. (see function deletMapPoints)
				this.attachMovie("mapPoint", "map" + app.layersFilter_ds.selectedIndex, this.getNextHighestDepth(), {_x:app.layersFilter_ds.x, _y:app.layersFilter_ds.y,pointSection:section,pointIcon:app.layersFilter_ds.icon,pointName:"",pointLink:app.layersFilter_ds.link,pointPicture:app.layersFilter_ds.picture,pointCaption:app.layersFilter_ds.caption});
				app.navWin.content.attachMovie("mapPoint", "map" + app.layersFilter_ds.selectedIndex, this.getNextHighestDepth(), {_xscale:25,_yscale:25, _x:app.layersFilter_ds.x/4, _y:app.layersFilter_ds.y/4,pointSection:section,pointIcon:app.layersFilter_ds.icon,pointName:"",pointLink:app.layersFilter_ds.link,pointPicture:app.layersFilter_ds.picture,pointCaption:app.layersFilter_ds.caption});
				app.layersFilter_ds.next();
				}
			}
		else{
			app.layersFilter_ds.first();
			while(app.layersFilter_ds.hasNext()){
				this.attachMovie("mapPoint", "map" + app.layersFilter_ds.selectedIndex, this.getNextHighestDepth(), {_x:app.layersFilter_ds.x, _y:app.layersFilter_ds.y,pointSection:section,pointIcon:app.layersFilter_ds.icon,pointName:app.layersFilter_ds.name,pointLink:app.layersFilter_ds.link});
				app.navWin.content.attachMovie("mapPoint", "map" + app.layersFilter_ds.selectedIndex, this.getNextHighestDepth(), {_xscale:25,_yscale:25, _x:app.layersFilter_ds.x/4, _y:app.layersFilter_ds.y/4,pointSection:section,pointIcon:app.layersFilter_ds.icon,pointName:"",pointLink:app.layersFilter_ds.link,pointPicture:app.layersFilter_ds.picture,pointCaption:app.layersFilter_ds.caption});
				app.layersFilter_ds.next();
				}
			}
		}
	
	// When called, this function deletes any map points previously displayed on the map.
	function deleteMapPoints():Void{
		app.layersFilter_ds.first();
		while(app.layersFilter_ds.hasNext()){
			eval("this.map" + app.layersFilter_ds.selectedIndex).removeMovieClip();
			app.navWin.content["map" + app.layersFilter_ds.selectedIndex].removeMovieClip();
    		app.layersFilter_ds.next();			
			}
		}
	}