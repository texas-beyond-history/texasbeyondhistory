class DisplayLayers extends MovieClip
{
	var map:MovieClip;
	var xmlLayers_con:mx.data.components.XMLConnector;
	var layersFilter_ds:mx.data.components.DataSet;
	var ldrMap:mx.controls.Loader;
	
	function onLoad():Void 
	{
		xmlLayers_con.addEventListener("result", this);
		xmlLayers_con.trigger();		
	}
	
	function result()
	{
		displayPoints("Ancient Places");
	}
	
	function displayPoints(section:String):Void
	{
		if(layersFilter_ds.filtered == true)
		{
			deleteMapPoints();
			layersFilter_ds.filtered = false;
		}
		layersFilter_ds.filtered = true;
		layersFilter_ds.filterFunc = function(item:Object)
		{
			return item.section == section;
		}
		
		addMapPoints();
	}
	
	function addMapPoints():Void 
	{
		while(layersFilter_ds.hasNext())
		{
			this.attachMovie(layersFilter_ds.icon, "map" + layersFilter_ds.selectedIndex, this.getNextHighestDepth(), {_x:layersFilter_ds.x, _y:layersFilter_ds.y});
    		layersFilter_ds.next();			
		}
	}
	
	function deleteMapPoints():Void
	{
		while(layersFilter_ds.hasNext())
		{
			this.removeMovieClip("map" + layersFilter_ds.selectedIndex);
    		layersFilter_ds.next();			
		}
	}
}