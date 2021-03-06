/**
 * Toolkit JavaScript
 */

'use strict';

// For Node Modules
// Because no path was specified, Module will be included from "node_modules"
//var $ = require('jquery');

// For Bower Components
// Because Bower does not force a module structure, you have use a more specific path.

// we're now requiring it from the node_modules directory
var $ = require('jquery/dist/jquery.min.js');
window.jQuery = $;

// Loading modernizr via a custom node build that is dropped into the local toolkit/script directory.
var Modernizr = require('./modernizr.js');

// Loading foundation from bower in order to support modernizr module
var foundation = require('foundation/js/foundation.min.js');

//require('smoothstate/jquery.smoothState.min.js');
// var smoothState = require('./jquery.smoothState.min.js');

window.foundation = foundation;
// console.log($);
// $('h1').fadeOut(2000);

// Use for custom Pattern Libary Modules
// var fooModule = require('./foo-module');
// var bar = fooModule.foo(); 

// Finally, you can drop test JavaScript here...
$(document).ready(function () {
  //console.log('Script kiddies of the world unite.')
  $(document).foundation(
    {
      equalizer : {
        // Specify if Equalizer should make elements equal height once they become stacked.
        equalize_on_stack: true
      }
  });

  $("body").on("click", ".toggler", function() {
    $(".toggled").toggle(); /*shows or hides #box*/
  });

});
