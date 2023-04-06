#  Please read this document before creating content for Texas Beyond History

## Rationale
Look.  I know it’s weird to have a 10,000+ page flat-html website with no content management system in 2021. But unless you want to convert 700+ pages of complex table layouts into visually-pleasing pages within a content management system we’re all going to have to take a deep breath and love the site we have.

## Instructions and Principles
The **Instructions** section describes how to create content in TBH.  It is focussed on content creators.

# Instructions

## Create a New Exhibit
### Getting started
1.  Copy the contents of the _boilerplate folder into the root folder of dev.texasbeyondhistory.net
2.  Rename the folder to the name of your Exhibit converted to lowercase words separated by hyphens (e.g. “Cairn Burials” becomes "cairn-burials")
3.  For each subpage/subsection of the exhibit, duplicate the original index.html file in the root of the _boilerplate folder.
4.  If the Exhibit is a complex one, see the complex exhibits instructions below

### Edit the Home Page
1. Find all of the places in the file marked with double square brackets [[ ]].
2. Delete the brackets and substitute correct values.
   1. [[YOUR TITLE]] Traditionally the site has replaced this with just the Exhibit name (e.g. "Cairn Burials").  For search engine purposes, it would be preferable to change that to Exhibit Name: Page Name (e.g. "Cairn Burials: Stone Cairns of West-Central Texas") going forward. This will set the text for the title line in Google's search results.
   2. [[YOUR DESCRIPTION]] This should a tweet-sized summary of the content of the page.  When you google a site, the "description" is what Google will use below the title the page on their results page. 
   3. [[YOUR PAGE TITLE]] This is the main header text that shows up in big letters at the top of your page.
   4. [[YOUR SUBSECTION LINKS (should be the same in top and footer)]] Links to other pages in the Exhibit.
   5. [[EXHIBIT HOME PAGE LINKS]] Complex Exhibits sometimes have a deeply nested structure. These links enable users to get back to the home page.  Delete this and the entire div it's inside (labelled pt or pt-r) if you're making a simple exhibit.
   6. [[YOUR PAGE CONTENT]] The stuff on your page.  See the Page Content section below for details.
   7. [[YOUR DATE: 5 March 2021]] Replace this text with the date you published this section.

### Files and Folders

## Creating Pages

### Creating a Home Page

#### The Standard Home Page

#### Complex Home Pages

## Creating Other Pages

## Navigation

## Adding Canvasser

# Web Developer Principles
This section is intended for web developers newly assigned to the project.  It should serve as a starting point for thinking about their design/development decisions.

## Guiding Principles For Dealing With Old Content (in priority order!)
1. Maintain Visual and User Interface Continuity 
2. Preserve the Old Content (Don’t break the old stuff)
Adhere to Accessibility Standards 
   1. You won’t be able to do this 100%, but it actually isn’t currently terrible
1. Adherence to Modern Web Standards
   1. You won’t be able to do this 100%, but it actually isn’t currently terrible
2. Preserve and Improve the Maintainability
   1. The old pages have a ton of old Dreamweaver cruft in them, 
3. Coding Continuity

## Guiding Principles For Creating New Content (in priority order!)
1. Visual and User Interface Continuity
2. Adherence to Accessibility Standards 
3. Adherence to Modern Web Standards
4. Maintainability
5. Coding Continuity

## User Interface Standards
### Navigation
### New Sections

## Coding Standards
### File Structure
Use the following pattern for the entire site
- Site Root
  - index.html
  - exhibit
    - index.html (exhibit home page)
    - minor_subsection.html (exhibit sibling page)
    - images
      - image_on_index_page.jpg
      - single_image_page_for_image_on_index_page.html
      - image_1_on_index_page.jpg
      - single_image_page_for_image_2_on_index_page.html
      - image_on_minor_subesection.jpg
      - single_image_page_for_image_on_minor_subesection.html
    - major subsection (these are only used on Special Exhibits)
  - _canvasser (all canvasser files go here, NOT in the exhibit folders)
   


All canvasser data files should be stored in /_canvasser
HTML

### CSS
1. New pages should always link to global.css
2. New pages should **almost never** require additional css
3. In the **very rare** situations where new css is necessary, deterimine if the new css will ever be used on any future content.
   1. If it will be used on future content...
      1. Carefully namespace it so it will not be accidentally applied to existing content (use a class)
      2. Carefully name it so the name will clearly mark the situations where it should be used.
   2. If it is very unlikely to be used again on future content...
      1. Carefully namespace it so it will not be accidentally applied to existing content
      2. Carefully name it so no one will be tempted to use it in the future (probably by adding a special class to the content div)
### JavaScript
1.  New pages should always link to global.js (that's where the main menu for the site comes from!)
2.  New pages should **almost never** require javascipt aside from what exists in global.js.
3.  In the **very rare** situation where new js is necessary, determine if the new css will ever be used on any future content. 
    1. If it will be used on future content...
         1. Carefully namespace it so it will not be accidentally applied to existing content (use a class)
         2. Carefully name it so the name will clearly mark the situations where it should be used.
    2. If it is very unlikely to be used again on future content...
         1. Carefully namespace it so it will not be accidentally applied to existing content
         2. Carefully name it so no one will be tempted to use it in the future (probably by adding a special class to the content div)
### Design Standards
### Images
