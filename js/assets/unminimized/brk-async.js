  var brk_added_libraries = {},
  uniqueUrls = {};

  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.expand = 1200;

  // Attach lazyload 
  function brk_lazyload() {
    $('[data-brk-library]:not(.lazyloaded):not(.lazyload)').addClass('lazyload');  
  }

  brk_lazyload();

  //$('body').bind("DOMNodeInserted", function() {
    // Add lazy event for our elements
    //brk_lazyload();
  //});

  addEventListener('lazybeforeunveil', function(e){
    var library = e.target.getAttribute('data-brk-library');
    if (library) {
      //$(e.target).prepend('<div class = "brk-element-loading"></div>');
      brs_add_libraries_lazy(library);
    }
  });

  function brs_add_libraries_lazy(data_library) {
    // Support for multiple libraries devided by comma
    var required_libs = data_library.split(',');
    for (i in required_libs) {
      if (typeof brk_added_libraries[required_libs[i]] == 'undefined') {
        brk_added_libraries[required_libs[i]] = 1;
        brs_add_libraries_enqueue(required_libs[i]);
      }
    }
  }

  function g(library) {
    if (typeof libraries[library].dependency !== 'undefined') {
      for (i in libraries[library].dependency) {
        if (typeof brk_added_libraries[libraries[library].dependency[i]] === 'undefined') {
          brk_added_libraries[libraries[library].dependency[i]] = 1;
          brs_add_libraries_enqueue(libraries[library].dependency[i]);
        }
      }
    }
    if (typeof libraries[library].css !== 'undefined') {
      for (i in libraries[library].css) {
        if(!uniqueUrls[libraries[library].css[i]]){
          uniqueUrls[libraries[library].css[i]] = true;
          console.log('CSS added: ' + libraries[library].css[i]);
          $('head').append('<link rel="stylesheet"  href="' + libraries[library].css[i] + '">');
        }
      }
    }
    if (typeof libraries[library].js !== 'undefined') {
      for (i in libraries[library].js) {
        if(!uniqueUrls[libraries[library].js[i]]){
          uniqueUrls[libraries[library].js[i]] = true;
          console.log('JS added: ' + libraries[library].js[i]);
          $.cachedScript(libraries[library].js[i]).done(function( script, textStatus ) {
            //context = $('[data-brk-library*="' + library + '"]');
            context = $('body');
            Berserk.attachBehaviors(context, Berserk.settings);
          });
        }
      }
    }
  }
