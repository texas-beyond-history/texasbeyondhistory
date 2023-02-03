// This class is linked to navRectangle in stpMap.fla.
class NavRect extends MovieClip{
	
	var navRectangle:MovieClip;
	var app;
	
	function NavRect() {
		app = _root.application;
		}
	
	// When stpMap.swf initially loads, a white box with a set size (1/4th the size of the loader the map loads
	// into) is loaded inside the navigation window.
	function onLoad() {
		navRectangle = this.createEmptyMovieClip("navRectangle", this.getNextHighestDepth());
		with(navRectangle) {
			lineStyle(2,0xFFFFFF);
			beginFill(0xFFFFFF, 0);
			moveTo(100, 0);
    		lineTo(165, 0);
    		lineTo(165, 107);
   		 	lineTo(0, 107);
   			lineTo(0, 0);
			endFill();
			}
		}
	
	// This is moving the scrollpane (spBigMap) relative to where the white box created in the navigation map
	// is moved.
	function scrollBigMap() {
		app.spBigMap.hPosition = this._x * 4;
		app.spBigMap.vPosition = this._y * 4;
		}
	
	// These next two functions are for clicking and dragging that white box created in the navigation window.
	function onPress() {
		this.startDrag(false,2,2,_parent._width - this._width,_parent._height-this._height);
		this.onMouseMove = scrollBigMap;
		}
		
	function onRelease() {
		this.stopDrag();
		delete onMouseMove;
		}
	}