<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html><!-- InstanceBegin template="/Templates/normal.dwt" codeOutsideHTMLIsLocked="false" -->
<head >
    <link rel="stylesheet" href="/css/global.css" type="text/css" media="all">
    <script type="text/javascript" src="/js/global.js"></script>
    <!-- #BeginEditable "doctitle" -->
    <title></title>
    <!-- #EndEditable -->
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <link rel="stylesheet" href="style-fl.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="print.css" type="text/css" media="print"/>
</head>
<body>

<div id="wrapper">

    <div id="wordmark">
        <a href="http://www.utexas.edu/" target="_blank"><img src="images/wordmark_ut.gif" alt="University of Texas at Austin wordmark" width="320" height="18" border="0"></a><a href="http://www.utexas.edu/cola/" target="_blank"><img src="images/wordmark_cola.gif" alt="College of Liberal Arts wordmark" width="255" height="18" border="0"></a>
    </div>

    <h6 id="tbh">Texas Beyond History</h6>

    <div id="tbhnav">
        <a href="index.html">TBH Home</a>
        <form action="/search.php" method="get" name="search" id="search">
            <div>
                <label for="searchbox">
                    <input type="text" size="13" name="words" value="Search" id="searchbox"  autocomplete="off">
                </label>
            </div>
            <div>
                <label for="searchbut">
                    <input type="submit" value="Go" name="submit" id="searchbut">
                </label></div>
            <div><input type="hidden" name="config" value="tbh"></div>
            <div><input type="hidden" name="restrict" value=""></div>
            <div><input type="hidden" name="exclude" value=""></div>
        </form>
    </div>


    <div id="nav">
        <div id="tt"><!-- #BeginEditable "subhead" --><h1>Search</h1>
                <!-- #EndEditable --></div>
    </div>

    <div id="content">
        <p>
            Search Texas Beyond History
        </p>
        <script>
            <?php
            echo 'var searchTerm = "' . htmlspecialchars($_GET["words"], ENT_QUOTES, 'UTF-8') .'";';
            ?>
          var executeSearch = function() {
            if (document.readyState == 'complete') {
              // Document is ready when CSE element is initialized.
              // Render an element with both search box and search results in div with id 'test'.
              var a = google.search.cse.element.getElement('tbhsearch');
              a.execute(searchTerm);
            } else {
              // Document is not ready yet, when CSE element is initialized.
              google.setOnLoadCallback(function() {
                // Render an element with both search box and search results in div with id 'test'.
                var a = google.search.cse.element.getElement('tbhsearch');
                a.execute(searchTerm);
              }, true);
            }
          };

          window.__gcse = {
            callback: executeSearch
          };

          (function() {
            var cx = '003372028364598577009:xekgwgilnt8';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);

          })();
        </script>
        <gcse:search gname="tbhsearch"></gcse:search>
    </div>

    <div id="foot">	<p>
            <a href="http://utopia.utexas.edu" target="_blank"></a>
            <a href="index.html">Texas Beyond History</a><br>
            <a href="sitemap.html">Site Map</a><br>
            <a href="mailto:tbhstaff@www.texasbeyondhistory.net">TBH WebTeam</a><br>
            <!-- InstanceBeginEditable name="date" -->1 October 2001 <!-- InstanceEndEditable --></p>
    </div>

</div>
<style>
  .gsc-results .gsc-cursor-box .gsc-cursor-current-page {
    font-size: 16px;
    font-weight: bold;
    border: none;
  }
  .gsc-results .gsc-cursor-box .gsc-cursor-page:hover {
    font-weight: 800;
    color: #461200;
  }
  .gsc-results .gsc-cursor-box .gsc-cursor-page {
    font-size: 16px;
    font-weight: bold;
    border: none;
    background-color: transparent;
  }
  .gcsc-find-more-on-google-text, .gcsc-find-more-on-google-query {
    font-size: 14px;
  }
</style>
<script language="javascript" type="text/javascript">
//    var useForm = function() {
//      console.log("Trying...");
//      var submitButton = document.querySelectorAll('input.gsc-search-button')[0];
//      var element = google.search.cse.element.getElement('element1');
//
//      if (element) {
//        element.execute('news');
//        console.log("We've got a button...");
////        document.querySelectorAll('input.gsc-input')[0].value = search;
////        submitButton.click();
//        clearInterval(checkExist);
//      } else {
//        console.log("there's no button");
//      }
//    }
//    var test = function() {
//      console.log("set interval... do you work like i think you do?");
//    }
//    docReady(function(){

//    console.log('Searching for: ' + search);
//      checkExist = setInterval(useForm, 100);
//
//  });

</script>
</body>
<!-- InstanceEnd --></html>
