class NavRect extends MovieClip{
	
	var navRectangle:MovieClip;
	var app;
	
	function NavRect(){
		app = _root.application;
		}
	
	function onLoad() {
		navRectangle = this.createEmptyMovieClip("navRectangle", this.getNextHighestDepth());
		with(navRectangle) {
			lineStyle(2,0xFFFFFF);
			beginFill(0xFFFFFF, 0);
			moveTo(0, 0);
    		lineTo(165, 0);
    		lineTo(165, 107);
   		 	lineTo(0, 107);
   			lineTo(0, 0);
			endFill();
			}
		}
	
	function scrollBigMap(){
		app.spBigMap.hPosition = this._x * 4;
		app.spBigMap.vPosition = this._y * 4;
		}
	
	function onPress(){
		this.startDrag(false,2,2,_parent._width - this._width,_parent._height-this._height);
		this.onMouseMove = scrollBigMap;
		}
		
	function onRelease(){
		this.stopDrag();
		delete onMouseMove;
		}
	}