// "use strict";

var intervID, oldIntervID;


//  DELETE ME IM FOR DEBUGGING ONLYE
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  return h + ":" + m + ":" + s;

}
//  END DEBUGGING
function findAncestorWithClass(el, cls) {
  // console.log('----------------------------------------------------------');
  // console.log('---------------------findAncestorWithClass--------------------');
  // console.log('----------------------------------------------------------');
  if (!el){
    console.log("NO ELEMENT, MAN!");
    return false;
  }
  if (el.classList.contains(cls)){
    return el;
  }
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

document.onmousemove = function(e) {
  var event = e || window.event;
  window.mouseX = event.clientX;
  window.mouseY = event.clientY;
}

function checkSubmenuActivity(){
  // console.log('****************************newfunction******************************');
  // console.log('************************ ' + startTime() + ' ************************');
  // console.log('**********************************************************');

  var elementMouseIsOver = document.elementFromPoint(window.mouseX, window.mouseY);
  var ancestor = findAncestorWithClass(elementMouseIsOver, 'has-active-submenus');
  // console.log("* * * * CURRENT ANCESTOR:   ", ancestor);
  // console.log('classes', elementMouseIsOver.classList);
  if (!ancestor){
    // console.log('IM TRYING TO KILL THIS THING', intervID, oldIntervID);
    closeSubMenu();
    oldIntervID = intervID;
    clearInterval(intervID);
  }
}

function closeSubMenu(){
  var className = 'has-active-submenus';
  var activeSubmenus = document.getElementsByClassName(className);
  for (var i = 0; i < activeSubmenus.length; i++) {
    activeSubmenus[i].classList.remove(className);
  }
}

function buildNewMenu(name, hook, links) {
  if(!Array.isArray(links) || links.length === 0) {
    throw "no links provided!";
  }

  var location = document.getElementById(hook);
  // create our navigation container
  var container = document.createElement('ul');
  container.classList.add(name + "-menu");
  var spacer = document.createElement('div');
  spacer.classList.add(name + "-spacer");

  if (location && location.parentNode) {
    location.parentNode.insertBefore(spacer, location.nextSibling);
    location.parentNode.insertBefore(container, location.nextSibling);
  }

  for(let i = 0; i < links.length; i++) {
    // append individual links
    let menuItem = links[i];
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    listItem.classList.add(name + "-link");
    // console.log(links[i]);
    link.setAttribute('href', menuItem.url);
    link.innerHTML += menuItem.title;
    listItem.appendChild(link);
    container.appendChild(listItem);

    if (menuItem.submenu != 'undefined'){
      // console.log("submenu creation commenced");
      let submenu = menuItem.submenu;
      let ulSubMenu = document.createElement('ul');
      ulSubMenu.classList.add('submenu');
      ulSubMenu.classList.add(convertToSlug(menuItem.title));

      for (let j = 0; j < submenu.length; j++) {
        let subMenuItem = submenu[j];
        let subListItem = document.createElement('li');
        let subLink = document.createElement('a');
        if (subMenuItem.header){
          subListItem.classList.add("header");
        }
        subLink.classList.add("sub-menu-link");
        subLink.setAttribute('href', subMenuItem.url);
        subLink.innerHTML += subMenuItem.title;
        subListItem.appendChild(subLink);
        ulSubMenu.appendChild(subListItem);

        subLink.addEventListener('click', function(e){
          // console.log('sublink', subLink);
          e.stopPropagation();
        });
      }

      listItem.appendChild(ulSubMenu);
      ulSubMenu.addEventListener('mouseout', function(){
        closeSubMenu();
        // console.log("mouseoout submenu called");
      });
    }

    listItem.touched = false;

    listItem.addEventListener('touchstart', function(e){
      listItem.touched = true;
    });

    listItem.addEventListener('mouseover', function(e){
      if(listItem.touched) {
        closeSubMenu();
      } else {
        closeSubMenu();
        this.classList.add('has-active-submenus');
      }
    });

    listItem.addEventListener('mouseout', function(){
      if (intervID == oldIntervID){
        intervID = setInterval(checkSubmenuActivity, 200);
      }
    });
    listItem.addEventListener('click', function(e){
      // console.log('click listener ...');
      // console.log('this', this);
      // console.log('this classlist', this.classList);

      if (this.classList && this.classList.contains('has-active-submenus')){
        // console.log('has active submenu');
        closeSubMenu();
        // console.log('this', this);
        // console.log('this classList', this.classList);
      } else {
        // console.log('didnt have active submenu');
        this.classList.add('has-active-submenus');
        // console.log('this classlist', this.classlist);
      }
      e.preventDefault();
    });
  }


}

var tbh_full_links = [
  {
    "title": "About",
    "url": "/abouttbh/index.html",
    "submenu": [
      {
        "header":true,
        "title": "About",
        "url": "/abouttbh/index.html",
      },
      {
        "title": "Partners",
        "url": "/abouttbh/partners.html",
      },
      {
        "title": "Underwriters",
        "url": "/abouttbh/underwriters.html",
      },
      {
        "title": "Content Contributors",
        "url": "/abouttbh/contributors.html",
      },
      {
        "title": "Future Plans",
        "url": "/abouttbh/plans.html",
      },
      {
        "title": "Donate",
        "url": "/abouttbh/donate.html",
      },
      {
        "title": "Viewing Tips",
        "url": "/abouttbh/viewing.html",
      },
      {
        "title": "TBH In the News",
        "url": "/abouttbh/inthenews.html",
      },
    ]
  },
  {
    "title": "Special Exhibits",
    "url": "/theme.html",
    "submenu": [
      {
        "header":true,
        "title": "Special Exhibits",
        "url": "/theme.html",
      },
      {
        "title": "Stone Cairns",
        "url": "/cairn/index.html",
      },
      {
        "title": "Lower Pecos Ethnobotany",
        "url": "/ethnobot/index.html",
      },
      {
        "title": "Cabeza de Vaca ",
        "url": "/cabeza-cooking/index.html",
      },
      {
        "title": "Plains Villagers",
        "url": "/villagers/index.html",
      },
      {
        "title": "Tejas (Caddo)",
        "url": "/tejas/index.html",
      },
      {
        "title": "Frontier Forts",
        "url": "/forts/index.html",
      },
      {
        "title": "Stone Tools",
        "url": "/theme/tools/index.html",
      },
    ]
  },
  {
    "title": "Prehistoric Explorer",
    "url": "/prehistoric/index.html",
    "submenu": [
      {
        "header":true,
        "title": "Prehistoric Texas",
        "url": "/prehistoric/index.html",
      },
      {
        "title": "Coastal Prairies and Marshes ",
        "url": "/coast/index.html",
      },
      {
        "title": "Trans-Pecos Texas",
        "url": "/trans-p/index.html",
      },
      {
        "title": "South Texas Plains",
        "url": "/st-plains/index.html",
      },
      {
        "title": "Plateaus and Canyonlands",
        "url": "/plateaus/index.html",
      },
    ]
  },
  {
    "title": "Kids",
    "url": "/kids/index.html",
    "submenu": [
      {
        "header":true,
        "title": "Kids",
        "url": "/kids/index.html",
      },
      {
        "title": "Fun and Games",
        "url": "/kids/fun-games.html",
      },
      {
        "title": "Fantastic Facts",
        "url": "/kids/facts-new.html",
      },
      {
        "title": "Adventures",
        "url": "/kids/adventures.html",
      },
      {
        "title": "Be a Scientist",
        "url": "/kids/scientist.html",
      },
      {
        "title": "New Words",
        "url": "/kids/newwords.html",
      },
      {
        "title": "Cool Links",
        "url": "/kids/coollinks.html",
      },
      {
        "title": "Research",
        "url": "/kids/research.html",
      },
    ]
  },
  {
    "title": "Teachers",
    "url": "/teach/index.html",
    "submenu": [
      {
        "header":true,
        "title":"Teachers",
        "url":"/teach/index.html"
      },
      {
        "title":"Teacher's Guide to TBH",
        "url":"/teach/guide.html"
      },
      {
        "title":"Curriculum Standards (TEKS)",
        "url":"/teach/teaching.html"
      },
      {
        "title":"Lesson Plans",
        "url":"/teach/lessons.html"
      },
      {
        "title":"Unit Plans",
        "url":"/teach/unit.html"
      },
      {
        "title": "Teacher Links",
        "url": "/teach/links.html",
      },
      {
        "title": "Evaluate Our Site",
        "url": "/teach/comments.html",
      }
    ]
  },
  {
    "title": "Spotlight",
    "url": "/spotlight.html",
    "submenu": [
      {
        "header":true,
        "title":"Spotlight",
        "url":"/spotlights.html"
      },
      {
        "title":"Mystery Cache",
        "url":"/spotlights/hunterspouch/hunterspouch.html"
      },
      {
        "title":"Geometric Morphometrics and Clovis Points",
        "url":"/spotlights/geomet-morphomet/geomet-morphomet.html"
      },
      {
        "title":"Ledger Drawings ",
        "url":"/spotlights/ledgerart/ledger-art.html"
      },
      {
        "title":"Snails",
        "url":"/spotlights/snails/snails.html"
      },
      {
        "title": "Microwear Analysis of Stone Tools",
        "url": "/spotlights/microwear/microwear.html",
      }
    ]
  },
];

(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            console.log(callback)
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);


function addDonateButton(){
  var donateButton = document.createElement('a');
  donateButton.href='/donate.html';
  donateButton.text='Donate';
  donateButton.classList.add('give-button');

  var enclosingDiv = document.createElement('div');
  enclosingDiv.classList.add('give-button-container');
  enclosingDiv.appendChild(donateButton);

  var search = document.getElementById('search');
  if (search) {
    document.getElementById('search').appendChild(enclosingDiv);
  }
}

function addSearchEvents(){
  var searchbox = document.getElementById('searchbox');

  if (!searchbox){ return;}

  var searchboxLabel = searchbox.parentNode;
  var searchboxContainer = searchboxLabel.parentNode;

  searchbox.value = 'Search';

  searchboxLabel.id = 'searchbox-label';
  searchboxContainer.id = 'searchbox-container';

  searchbox.addEventListener("keyup", function(){
    // console.log("keyup fired");
    adjustSearchWidth();
  });
  searchbox.addEventListener("focus", function(){
    // console.log("focus fired");
    if (searchbox.value == "Search"){
      searchbox.value = '';
    }
    searchbox.style.textTransform = 'none';
    adjustSearchWidth();
  });

  searchbox.addEventListener("blur", function(){
    if (searchbox.value == ""){
      searchbox.value = 'Search';
      searchbox.style.textTransform = 'uppercase';
    }
    adjustSearchWidth();
  });
}

function adjustSearchWidth(){
  var search = document.getElementById('searchbox');
  var fontFamily = window.getComputedStyle(search,null).getPropertyValue('font-family');
  var fontSize = window.getComputedStyle(search,null).getPropertyValue('font-size');
  var newTextWidth = getTextWidth(search.value, fontSize + ' ' + fontFamily) + 10;
  search.style.width =newTextWidth + 'px';
  console.log("adjust search width fired", newTextWidth, fontSize, fontFamily, search.value);
}

function convertToSlug(Text)
{
  return Text
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'')
    ;
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  var theText = (text == "Search")? text.toUpperCase() : text;
  context.font = font;
  var metrics = context.measureText(theText);
  return metrics.width;
}

function moveHandleBars(){
  var nav = document.getElementById('nav');

  if (!nav){
    console.log('die....');
    return;
  }

  var middle = document.getElementById('tt');

  var left = document.createElement('div');
  left.classList.add('left-bar');
  var right = document.createElement('div');
  right.classList.add('right-bar');

  nav.insertBefore(left, middle);
  nav.insertBefore(right, middle.nextSibling);

  var pt    = document.getElementById('pt');
  var ptr   = document.getElementById('pt-r');
  var vil   = document.getElementById('vil');
  var theme = document.getElementById('theme');
  var tejas = document.getElementById('tejas');

  if (pt) {
    left.appendChild(pt);
    nav.classList.add('handlebars');
  }

  if (ptr) {
    right.appendChild(ptr);
    nav.classList.add('handlebars');
  }

  if (vil) {
    right.appendChild(vil);
    nav.classList.add('handlebars');
  }

  if (theme) {
    right.appendChild(theme);
    nav.classList.add('handlebars');
  }

  if (tejas) {
    right.appendChild(tejas);
    nav.classList.add('handlebars');
  }
}

docReady(function(){
  buildNewMenu("tbh-topnav", "tbhnav", tbh_full_links);
  addDonateButton();
  addSearchEvents();
  moveHandleBars();
});
