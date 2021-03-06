/**
 * nograb plugin for jQuery 
 * ---
 * @author Mitch Cohen (http://www.kowodi.com)
 * @version 1
 * @updated 24-JAN-13
 * ---
 * ---
 * @info 
 */

(function ($) {
  $.fn.noGrab = function () {
    this.filter('img').add('img[nograb]').map(function () {
      var img = $(this);
      ///we don't get the width and height until the image actually loads.
      ///Future enhancements will be adding Deferred objects and errors on unloadable images (stay tuned)
      img.load(function () {
        var width = this.width,
          height = this.height;
        src = this.src;
        var div = $('<div></div>').css({
          width: width,
          height: height,
          background: 'url(' + src + ') no-repeat center center'
        }).addClass(img.attr('class')); //pride dimensions and applied classes
        img.replaceWith(div);
      });
    });
    
  };
    ///allow the use of markup attribute 'nograb' on any image element instead of assigning explicit selectors.
    $.noGrab = function(){
     $('img[nograb]').noGrab();
    };  
})(jQuery);
