Mobile Sensor Web Client
========================

This project aims to build a mobile client for the Sensor Observation Network by [52north](https://wiki.52north.org/bin/view). You will be able to choose from a variety of sensors, add them to your current view and inspect the values.
This project is attendet at the [University of Hamburg](http://www.uni-hamburg.de), Germany, dep. [VSIS](http://vsis-www.informatik.uni-hamburg.de/?lang=en).

## Status 
### 7/10/2013
- I removed JQuery Mobile. This framework was to heavy for my needs. I created an ultra lightweight less/js framework for page and panel navigation myself. (155 lines + 40 lines so far)
- I Changed the target Look&Feel. The legend is now planned as a 300px-panel that opens up on top of the "view-data" page.
- I (re-)added the map.

### 6/28/2013
- Navigation between the main pages
- Frameworks play together

## Target look and feel
The UI will be Android-oriented but with JQuery Mobile styling. It consists of 3 main pages:
- "legend"
  This is the current data management page. You can see the different time series in the corresponding color of the chart. You can drop them from your chart here by tapping the bin-button.
- "data view"
  This is the main page. It shows the data in different ways (eg. as table data or line chart)
- "add"
  You can add new time series in four different ways: via a map, a browser, a search or your personal time series history.
![target l+f](https://raw.github.com/marfnk/sosmobileclient/master/target_app.PNG "Target look and feel")

## Used frameworks
1. [Phonegap 1.9.0](http://phonegap.com/) (Apache License Version 2.0)
    is wrapper for HTML5 web apps, that bundles and desploys the code as native app for nearly every device. It also provides access to the native phone API to enable features like camera, geolocation and data storage.
2. [JQuery 1.7.2](http://jquery.com/) (MIT Open Source License)
    is the de-facto standard for client-side web apps. It is lightweight and provides an intuitive DOM manipulation API. It is an requirement for most of the libraries used in this project. **Version Info:** For now Phonegap needs the deprecated functions of the 1.7.2 JQuery. A migration to 2.0.2 with JQuery Migration is planned.
3. ~~[JQuery Mobile 1.3.1](http://jquerymobile.com/)
   is mostly used as a complete mobile HTML5 framework. It provides lots of mobile elements such as popups, buttons, pages, navigation bars etc. Although it has its own navigation it is downgraded to a view-enhancing frontend framework. The "backend" of this javascript app will be Backbone.js.~~
4. [Backbone.js 1.0.0](http://backbonejs.org/) (MIT Open Source License, with [underscore.js](http://underscorejs.org/))
    is a thin client-MVC framework which also handles the routing of the app. Since the Mobile SWC comes with no own server and only the [REST API](https://wiki.52north.org/bin/view/SensorWeb/SensorWebClientRESTInterface) there was a need for a flexible MVC-architecture style.
5. ~~[Require.js 2.1.6](http://requirejs.org/)
   This project comes to a size where the different javascript files become difficult to handle. Require.js priovides some functions to manage the structured loading of those files.~~
6. [JQuery Geo 1.0b1](http://jquerygeo.com/) (MIT Open Source License)
   is a JQuery plug-in and basically provides a map with with access to a tile server API. This project uses [OpenStreetMap](http://www.openstreetmap.org/) to display its location data. It has a very easy-to-use API with many functions. You can easily add a map to any JQuery enhanced page with only about 28 characters. Ryan Westphal discusses the different [map plug-ins](http://trippingthebits.com/geopres/).
8. [Handlebars](http://handlebarsjs.com/) (MIT Open Source License)
   is a templating engine that works well with backbone.js.
9. [Gumby](http://gumbyframework.com/) (MIT Open Source License)
   is a beautiful flat designed responsive theme, that detects the type of device and loads the JQuery Mobile essentials, if needed.
10. [Less](http://lesscss.org/) (Apache License Version 2.0)
    compiles .less stylesheets at the beginning of an application. Less code is way cleaner than CSS and provides variables and nested rules.
11. [jQuery total storage](https://github.com/jarednova/jquery-total-storage) (free, no licence)
    is a small plugin that guarantees local storage of data - if HTML5 is not supported it falls automatically back to cookies. With total storage its easy to save and retrieve strings, numbers and even complex json objects in one line.
    
## MF-Mobile
The MF mobile script is an ultra lightweight less and JQuery library that allows page oriented navigation with GPU enhancement through CSS3. It requires JQuery and LESS CSS.

To create a panel that is hidden on startup an comes from the left side just add this `<div>` to your page:

        <div class="panel from-left out" id="my-panel">

To create a page that is visible on startup an comes from the right side just add this `<div>` to your page:

        <div class="page from-right in" id="main-page">

To open panels or navigate to pages use Javascript (JQuery):

        navigateToPage("#page-id"); //Navigates to a page with the given ID
        openPanel("#panel-id"); //Opens the panel with the given ID

This closes all panels (note, that all panels will be automatically closed when navigating to any page):

        closeAllPanels(); //Close all open panels

Configure the framework in `mfmobile.less`:

        @panel-size: 300px; //percentage or pixels
        @duration: 500ms; //duration of panel opening and closing as well as page navigation


## How to build and run this app
Warning: This app is under development and not ready to use so far.
You can view the current version either in browser or as a native app on your Android phone.
- To get it to run on your phone install the [Android ADT package](http://developer.android.com/sdk/installing/bundle.html), clone this repo and import it in your ADT Eclipse. Build it, connect your phone in debug mode to your PC and click run.
- To simply view the app an your pc, download or clone this repo, navigate to (repo home)/assets/www and open the indx.html file. I prefer [Google Chrome](https://www.google.com/intl/de/chrome/browser/) since phonegap is build on the same engine. **Attention!** You can't load remote JSON this way due to browser restrictions. You have to set up an XAMPP/LAMPP/MAMPP Server and start your app via http:// protocol. (The file://-protocol is not supported by the SOS Server CORS.)

