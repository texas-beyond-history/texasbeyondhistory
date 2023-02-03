<?php
$inhalfanhour = 60 * 30 + time();

if(isset($_COOKIE['truevisit']))
{
  $minmovie = "layers_time_min.swf";
}
else
{
setcookie(truevisit, 1, $inhalfanhour);
$minmovie = "layers_time.swf";
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<title>Digging through layers in Time</title>
<style type="text/css">
<!--
body {
	background-image: url(bg.jpg);
	background-color: #680000;
}
a:link {
	color: #FFFFFF;
	text-decoration: none;
}
a:visited {
	text-decoration: none;
	color: #FFFFFF;
}
a:hover {
	text-decoration: none;
	color: #CCCCCC;
}
a:active {
	text-decoration: none;
	color: #666666;
}
.style8 {font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px; color: #FFFFFF; }
.style9 {color: #000000}
-->
</style>

</head>
<body>

<div align="center">
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="800" height="600" title="">
    <param name="movie" value="<?php echo $minmovie; ?>" />
    <param name="quality" value="high" />
    <embed src="<?php echo $minmovie; ?>" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="800" height="600"></embed>
  </object>
</div>
<div align="center"><span class="style8"><span class="style9"><a href="http://www.texasbeyondhistory.net">TBH Home</a></span> | <a href="http://www.texasbeyondhistory.net/kids/index.html">Kids Main</a> | <a href="http://www.tbh.net/beene/kids"> Richard Beene Kids</a></span></div>
<p>&nbsp;</p>
<p>&nbsp;</p>
</body>
</html>