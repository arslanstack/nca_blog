(function($){
  'use strict';

  $( document ).ready(function() {

  /* Open/Close customizer */
	var $options 		= $('.brk-theme-options'),
			$panelOpen	= $options.find('.panel-open'),
			$panelClose	= $options.find('.panel-close');

	$panelOpen.on('click', function (e) {
		e.preventDefault();
		var $this = $(this);

		$this.toggleClass('checked');
		$options.toggleClass('active');
	});

	$panelClose.on('click', function () {
		$panelOpen.removeClass('checked');
		$options.removeClass('active');
	});

  $(document).on('click', function (e) {
    if (!$options.is(e.target) && $options.has(e.target).length === 0) {
      $panelOpen.removeClass('checked');
      $options.removeClass('active');
    }
  });
  /* Open/Close customizer */

  /* Load bg */
  var brkBgCheck = $('[data-brk-bg-check]');
  $panelOpen.on('click', function (e) {
    e.preventDefault();

    brkBgCheck.each(function () {
      var $this   = $(this),
          bgCheck = $this.data('brk-bg-check');

      $this.attr('style', 'background-image: url('+ bgCheck +')');
    })
  });
  /* End Load bg */

	var themeOptionsColor 			    = $('.brk-theme-options__color'),
			themeOptionsColorButton	    = themeOptionsColor.find('.brk-theme-options__color-radio'),
			//brkSkinColor						    = $('#brk-skin-color'),
      brkSkinColor                = $('link[id^="brk-skin-color"]'), // WordPress
      dataHtmlSkin                = $('html').data('brk-skin');

	themeOptionsColorButton.each(function () {
		var $this 									= $(this),
				themeOptionsColorData		= $this.data('skin');

    if(dataHtmlSkin.indexOf(themeOptionsColorData + '.css') + 1) {
      $this.addClass('checked');
    }

		$this.on('click', function () {
      //brkSkinColor.attr('href', 'css/skins/' + themeOptionsColorData + '.css');
      brkSkinColor.attr('href', Berserk.settings.project_prefix + 'css/skins/' + themeOptionsColorData + '.css'); // WordPress
			themeOptionsColorButton.removeClass('checked');
			$this.addClass('checked');
      $('html').data('brk-skin', themeOptionsColorData + '.css');
		});

	});


	/* direction */
	var $elDir = $('[data-brk-direction]'),
			$optionsCheckGlobal = $elDir.find('.brk-theme-options__check');

  $elDir.each(function () {
    var $this 				= $(this),
        dir           = $this.data('brk-direction'),
        $optionsCheck = $this.find('.brk-theme-options__check');

    if(dir === $('html').attr('dir')) {
      $optionsCheckGlobal.removeClass('brk-theme-options__check_active');
      $optionsCheck.addClass('brk-theme-options__check_active');
    }

  });
  /* end direction */
  
	/* options border */
	var $optBorder 								= $('[data-brk-options-border]'),
			$optionsBorderCheckGlobal = $optBorder.find('.brk-theme-options__check');

	$optBorder.each(function () {
		var $this 							= $(this),
				$optionsBorderCheck = $this.find('.brk-theme-options__check');

		$this.on('click', function (e) {
			e.preventDefault();
			var $dataBorder = $this.data('brk-options-border');

			$optionsBorderCheckGlobal.removeClass('brk-theme-options__check_active');
			$optionsBorderCheck.addClass('brk-theme-options__check_active');

			if($dataBorder !== 0) {
				$('body').addClass('brk-bordered-theme').attr('data-border', $dataBorder);
				Berserk.behaviors.border_theme_init.attach($(document));
			} else {
				$('body').removeClass('brk-bordered-theme').removeAttr('data-border');
				Berserk.behaviors.border_theme_init.attach($(document));
			}
		})
	});
	/* end options border */

  /* Layout */
  var $brkLayout              = $('[data-brk-layout]'),
      $optionsBrkLayoutGlobal = $brkLayout.find('.brk-theme-options__check');

  $brkLayout.each(function () {
    var $this 					= $(this),
      $optionsBrkLayout = $this.find('.brk-theme-options__check');

    $this.on('click', function (e) {
      e.preventDefault();
      var $dataLayout = $this.data('brk-layout');

      $optionsBrkLayoutGlobal.removeClass('brk-theme-options__check_active');
      $optionsBrkLayout.addClass('brk-theme-options__check_active');

      if($dataLayout === 'boxed') {
        $('body').addClass('brk-boxed');
      } else {
        $('body').removeClass('brk-boxed');
      }
    })
  });
  /* end Layout */

  /* Layouts & Skins */
  var $brkPathname  = $('.brk-theme-options-pathname'),
      $brkLocation  = window.location.pathname.replace(/\//g,'');

  $brkPathname.each(function () {
    var $this 					  = $(this),
        $brkPathnameLink  = $this.attr('href').replace(/\//g,''),
        $brkPathnameCheck = $this.find('.brk-theme-options__check');

    if($brkPathnameLink === $brkLocation) {
      $brkPathnameCheck.addClass('brk-theme-options__check_active');
    }
  })
  /* End Layouts & Skins */

  });
})(jQuery);