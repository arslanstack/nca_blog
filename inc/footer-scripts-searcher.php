</div> <!-- /.main-page -->
	<script src="js/assets/jquery.min.js"></script> 
	<script src="js/scripts.js"></script>
	<script src="js/custom.js"></script>

	<!-- <script>
		jQuery(document).ready(function($)  {
			const hasCookieConsent = getCookie('cookies-nca');

			const cookieBanner = $('.cookies_section');

			
			if (!hasCookieConsent) {
				$(document).on('click','.accept_cookies',function() {
					cookieBanner.addClass('d-none');
					setCookie('cookies-nca', 1, 365);
				});
			} else {
				cookieBanner.addClass('d-none');
			}
		});
		function getCookie(name) {
			const decodedCookie = decodeURIComponent(document.cookie);
			const ca = decodedCookie.split(';');
			name = name + "=";

			for(let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) === 0) {
					return c.substring(name.length, c.length);
				}
			}
		}
		function setCookie(name, value, days) {
			const date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			const expires = "expires=" + date.toUTCString();
			document.cookie = name + "=" + value + ";" + expires + ";path=/";
		}
	</script> -->
	<?php // include 'inc/cookies.php'; ?>
</body>

</html>