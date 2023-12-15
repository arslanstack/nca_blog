<?php include 'inc/header.php'; ?>
<?php
$base_url = 'https://explorelogicsit.net/nca/portal/api/';
$image_url = 'https://explorelogicsit.net/nca/portal/uploads/blog/';
if (isset($_GET['slug'])) {
	$apiEndpoint = $base_url . 'blogwithSlug/' . $_GET['slug'];
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $apiEndpoint);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$response = curl_exec($ch);
	if (curl_errno($ch)) {
		echo 'Curl error: ' . curl_error($ch);
	}
	curl_close($ch);
	$data = json_decode($response, true);
	$blog = $data['data'];
}

?>
<section class="blog-details-banner pt-190 pb-40">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
			</div>
			<div class="col-md-6">
				<h3 class="mb-3 underline title blog-details text-white wow fadeInUp">
					<?php echo $blog['title'] ?>
				</h3>
			</div>
		</div>
	</div>
</section>
<section class="blog-banner-bottom">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<img class="blog-detail-main-img" src="<?php echo $image_url . $blog['image']; ?>">
			</div>
			<div class="col-md-6">
				<div class="detail-info pt-3">
					<span class="date-categories">
						<i><?php echo date('d', strtotime($blog['created_at'])); ?> <?php echo date('M', strtotime($blog['created_at'])); ?> <?php echo date('Y', strtotime($blog['created_at'])); ?> | <?php echo implode(' / ', $blog['categories']); ?></i>
					</span>
					<p class="info-text">
						<?php echo $blog['subtitle'] ?>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="blog-details-content pt-70 pb-70">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="intro-content">
					<?php echo $blog['description']; ?>
				</div>
			</div>
		</div>
	</div>
</section>
<a href="#" class="social_icon d-inline-flex align-items-center h-100 justify-content-center border-radius-0 py-4 text-white bg-primary-2 w-100">
	<span>Follow us on Linkedin</span><i class="blog-detail-linkdin fab fa-linkedin-in font__size-18"></i>
</a>
<?php include 'inc/footer-2.php' ?>