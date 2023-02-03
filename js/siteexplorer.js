// site explorer
function explorer() {
   // scrollbar
   function scrolly($) {
     $("#site-list").niceScroll({
       cursorwidth: 15,
       cursorcolor: "#bf5700",
       cursoropacitymin: 1,
       cursorborder: "none",
       cursorborderradius: "0",
       autohidemode: false,
       background: "white",
       enableobserver: false
     });
   };
 
   $(document).ready(scrolly);
 
   // create sorted array of sites
 
   // make request and read file
   var blurbReq = new XMLHttpRequest();
   blurbReq.open("GET", "explorer-assets/content.txt", false);
   blurbReq.send();
   var siteStuff = blurbReq.responseText;
 
   // loop through text response; ignore comments
   var eachSite = [];
   var site = [];
   var j = 0;
 
   var siteLineCount = 5;
 
   var lines = siteStuff.split(/\r\n|\n/);
   for(var line = 0; line < lines.length; line++){
     if (lines[line][0] != "#" & lines[line] != "") {
       site.push(lines[line]);
       j += 1;
     };
     if (j === siteLineCount) {
       eachSite.push(site);
       site = [];
       j = 0;
     };
   };
 
   // sort site array
   eachSite.sort((a, b) => a[0].localeCompare(b[0]));
 
   //console.log(eachSite);
 
   $("#site-list").mouseenter(
     function() {
       $(this).css("height", "300px");
       $(this).getNiceScroll().resize();
     }
   );
 
   $("#site-list").mouseleave(
     function() {
       $(this).css("height", "145px");
       $(this).getNiceScroll().resize();
     }
   );
 
   var siteMenu = document.getElementById("site-list");
   for (var i = 0; i < eachSite.length; i++) {
     var button = document.createElement("button");
     button.classList.add("list-button");
     button.innerText = eachSite[i][0];
     button.setAttribute("data-index", i + 1);
     button.onclick = function() {getContent(this.dataset.index)};
     siteMenu.appendChild(button);
   };
 
   function getContent(idx) {
     $("#site-img").attr("src", "explorer-assets/images/" + eachSite[idx - 1][1]);
     $("#site-name").text(eachSite[idx - 1][0]);
     $("#site-button").text("Visit " + eachSite[idx - 1][0]);
     $("#site-button").addClass("site-button");
     $("#site-button").attr("href",  eachSite[idx - 1][2]);
     $("#pin").css({
       "left": parseInt(eachSite[idx - 1][3]) + 5,
       "top": parseInt(eachSite[idx - 1][4])
     })
   };
 }
 
 $(document).ready(explorer);
 // end site explorer