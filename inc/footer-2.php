</div>
	<footer class="brk-footer position-relative" data-brk-library="component__footer">
		<div class="brk-footer__wrapper"> <span class="brk-abs-overlay brk-bg-color-dark"></span>
			<div class="container">
			<div class="container-inner-1260 m-auto  pt-30 pt-90">
				
				<div class="row">
					<div class="col-12 col-sm-4 col-lg-6 col-xs-12">
						<h3 class="font__size-28 font__weight-bold brk-white-font-color line__height-36 pl-10 footer_main_heading">Taking success<br> to the next level.</h3>
					</div>

					<div class="col-12 col-sm-4 col-lg-3 col-xs-12">
						<ul class="d-flex flex-column brk-white-font-color font__size-14 font__weight-normal line__height-16 text-sm-left  footer_custom_colum">
							<li class="mb-20"><a href="#">Home</a></li>
							<li class="mb-20"><a href="#">About us</a></li>
							<li class="mb-20"><a href="#">Talents</a></li>
							<li class="mb-20"><a href="#">Business owners & Intermediaries</a></li>
							<li class="mb-20"><a href="#">Co-investors</a></li>
							<li class="mb-20"><a href="#">News & Resources</a></li>
						</ul>
					</div>

					<div class="col-12 col-sm-4 col-lg-3 col-xs-12">
						<div class="d-flex align-items-center justify-content-right">
							<a href="#" class="btn btn-prime btn-sm-1 btn-outline-hover font__size-12 bg-transparent letter-spacing-100 border-radius-25 btn-no-shadow" data-brk-library="component__button"><span class="before"></span><span class="after"></span><span class="border-btn"></span>English</a>
							<a href="#" class="social_icon h-100 d-inline-flex align-items-center border-radius-5 p-1"><i class="fab fa-linkedin-in"></i></a>
							
						</div>	
					</div>

					<div class="col-lg-12">
						<p class="font__size-12 line__height-18 footer_text_clr mt-50">
							This website does not constitute an offer to the public or a solicitation to purchase or invest in any financial instrument. The information provided on this website is for information purposes only and does not constitute an offer, a solicitation, or a recommendation, to subscribe to any financial service. To the extent this website expresses views on investment strategies and investment ideas, any such information of a general nature only and shall not be construed as advertisement to subscribe for a financial service or to make an investment in any specific financial instrument.
						</p>
					</div>
                   
				</div>
				</div>
			</div>
			<div class="brk-footer__rights_footer-9">
				<div class="container">
				<div class="container-inner-1260 m-auto pt-20">
					<div class="row align-items-center">
							
						<div class="col-lg-8 col-sm-7 col-12 col-xs-12">
							<p class="footer_text_clr font__size-12 pt-15 pb-15 text-sm-left text-center">&#xA9; Novastone Capital Advisors <?php echo date("Y"); ?> All rights reserved - <a href="#" class="opacity-100 underline brk-white-font-color">Haldenstrasse 5, 6340 Baar, Switzerland</a></p>
						</div>
						<div class="col-lg-4 col-sm-5 col-12 col-xs-12">
							<ul class="copyright_menu d-inline-flex brk-white-font-color font__size-12">
								<li><a href="#">Terms and Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</footer><a href="#top" id="toTop"></a>
	<script src="js/scripts.min.js"></script>
	<!--<script src="vendor/revslider/js/jquery.themepunch.tools.min.js"></script>
	<script src="vendor/revslider/js/jquery.themepunch.revolution.min.js"></script>
	<script src="vendor/revslider/js/extensions/revolution.extension.actions.min.js"></script>
	<script src="vendor/revslider/js/extensions/revolution.extension.layeranimation.min.js"></script>
	<script src="vendor/revslider/js/extensions/revolution.extension.navigation.min.js"></script>
	<script src="vendor/revslider/js/extensions/revolution.extension.parallax.min.js"></script>
	<script src="vendor/revslider/js/extensions/revolution.extension.slideanims.min.js"></script>
	<script src="vendor/revslider/js/extensions/revolution.extension.video.min.js"></script>
	<script>
		var revapi21,
			tpj;
		(function() {
			if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad)
			else
				onLoad();

			function onLoad() {
				if (tpj === undefined) {
					tpj = jQuery;

					if ("on" == "on") tpj.noConflict();
				}
				if (tpj("#rev_slider_21_1").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_21_1");
				} else {
					revapi21 = tpj("#rev_slider_21_1").show().revolution({
						sliderType: "standard",
						jsFileLocation: "vendor/revslider/js/",
						sliderLayout: "fullscreen",
						dottedOverlay: "none",
						delay: 5000,
						navigation: {
							keyboardNavigation: "off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							mouseScrollReverse: "default",
							onHoverStop: "off",
							arrows: {
								style: "custom",
								enable: true,
								hide_onmobile: false,
								hide_onleave: true,
								hide_delay: 200,
								hide_delay_mobile: 1200,
								tmp: '',
								left: {
									h_align: "left",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								},
								right: {
									h_align: "right",
									v_align: "center",
									h_offset: 10,
									v_offset: 0
								}
							}
						},
						visibilityLevels: [1240, 1024, 778, 480],
						gridwidth: 1920,
						gridheight: 960,
						lazyType: "none",
						parallax: {
							type: "mouse",
							origo: "enterpoint",
							speed: 400,
							speedbg: 0,
							speedls: 0,
							levels: [4, 6, 8, 10, 12, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
							disable_onmobile: "on"
						},
						shadow: 0,
						spinner: "spinner2",
						stopLoop: "off",
						stopAfterLoops: -1,
						stopAtSlide: -1,
						shuffle: "off",
						autoHeight: "off",
						fullScreenAutoWidth: "on",
						fullScreenAlignForce: "off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "",
						disableProgressBar: "on",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							nextSlideOnWindowFocus: "off",
							disableFocusListener: false,
						}
					});
				}; 
			}; 
		}()); 
	</script>-->
</body>

</html>