<div class="loader" id="loader" style="display: none;">
	<!-- Use your preferred loading icon here -->
	<div class="spinner-border" role="status">
		<span class="sr-only">Loading...</span>
	</div>
</div>
<?php include 'inc/header.php'; ?>

<?php
$base_url = 'https://explorelogicsit.net/nca/portal/api';
$image_url = 'https://explorelogicsit.net/nca/portal/uploads/blog/';
if (isset($_GET['category'])) {
	$apiEndpoint = $base_url . '/blogs-category/' . $_GET['category'];
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $apiEndpoint);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$response = curl_exec($ch);
	if (curl_errno($ch)) {
		echo 'Curl error: ' . curl_error($ch);
	}
	curl_close($ch);
	$data = json_decode($response, true);
} else {
	$apiEndpoint = $base_url . '/blogs';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $apiEndpoint);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$response = curl_exec($ch);
	if (curl_errno($ch)) {
		echo 'Curl error: ' . curl_error($ch);
	}
	curl_close($ch);
	$data = json_decode($response, true);
	$data = $data['data'];
}

$apiEndpoint = $base_url . '/categories';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiEndpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
if (curl_errno($ch)) {
	echo 'Curl error: ' . curl_error($ch);
}
curl_close($ch);
$category_names = json_decode($response, true);
?>


<style>
	.post-img img{
    width: 275px;
}
.mobile-date{
	display: none;
}
.card-img-top{
	height: 200px;
    object-fit: cover;
    object-position: top;
}
#blogGrid .social_icon.post-btn{
    width: 90% !important;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    bottom: 20px;
}
#blogGrid .card {
    height: 100%;
    padding-bottom: 80px;
}
#blogGrid .social_icon.post-btn:focus{
	background-color: #e57200 !important;
}
@media only screen and (max-width: 1229px){
.post-content-div{
	max-width: 500px;
}
}
@media only screen and (max-width: 991px){
	.post-img img{
		width: 250px;
}
.social_icon.post-btn{
	width: 280px;
}
.post-content-div{
	max-width: 320px;
}
}
@media only screen and (max-width: 767px){
.view-list-box{
    display: none !important;
}
.post-img img{
	max-width: 100%;
	width: 100%;
}
.post-content-div{
	max-width: 100%;
	padding-left: 0px;
	padding-top: 30px;
}
.date-div{
	display: none;
}
.mobile-date{
	display: block;
}
}
</style>
<section class="blog-banner pt-120 pb-70">
	<div class="container">
		<div class="row d-flex align-items-center">
			<div class="col-md-6">
				<h2 class="stroke_text px-5 text-uppercase text-center text-lg-left mb-10 mb-lg-0 wow fadeInLeft">NCA INSIGHTS</h2>
				<h4 class="blog-banner-head-2">
					Discover Articles Here
				</h4>
			</div>
			<div class="col-md-6">
				<h3 class="mb-3 underline title blog-title wow fadeInUp">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
				</h3>
			</div>
		</div>
	</div>
</section>

<section class="filter-section pt-70 pb-30">
	<div class="container">

		<div class="row d-flex align-items-center">
			<div class="col-md-8">
				<div class="filter-list d-inline-flex">
					<div class="flter mr-4">
						<span>Filter :</span>
					</div>
					<div class="filter_list-content">
						<ul>
							<ul>
								<li>
									<a href="./blog.php">
										All
									</a>
								</li>
								<?php foreach ($category_names['data'] as $category) : ?>
									<li>
										<a href="?category=<?php echo $category['slug']; ?>" <?php if (isset($_GET['category']) && $_GET['category'] == $category['slug']) {
																									echo 'style="color: #e57200;"';
																								} else {
																									echo ' ';
																								} ?>>
											<?php echo $category['name']; ?>
										</a>
									</li>
								<?php endforeach; ?>
							</ul>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-4 d-flex justify-content-end">
				<div class="view-list-box d-inline-flex align-items-center">
					<div class="view-text">
						<span>
							view :
						</span>
					</div>
					<div class="view_btns">
						<button class="btn btn-view m-0" id="listView">
							<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="37" height="37" rx="3" fill="" />
								<rect x="4.11133" y="6.85181" width="5.48148" height="5.48148" rx="0.5" fill="#0E2336" />
								<rect x="4.11133" y="15.0742" width="5.48148" height="5.48148" rx="0.5" fill="#0E2336" />
								<rect x="4.11133" y="23.2964" width="5.48148" height="5.48148" rx="0.5" fill="#0E2336" />
								<rect x="12.332" y="8.22217" width="20.5556" height="2.74074" rx="0.5" fill="#0E2336" />
								<rect x="12.332" y="16.4443" width="20.5556" height="2.74074" rx="0.5" fill="#0E2336" />
								<rect x="12.332" y="24.6665" width="20.5556" height="2.74074" rx="0.5" fill="#0E2336" />
							</svg>

						</button>
						<button class="btn btn-view m-0" id="gridView">
							<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<mask id="path-1-inside-1_513_1001" fill="white">
									<rect width="11.617" height="11.617" rx="1" />
								</mask>
								<rect width="11.617" height="11.617" rx="1" stroke="black" stroke-width="3" mask="url(#path-1-inside-1_513_1001)" />
								<mask id="path-2-inside-2_513_1001" fill="white">
									<rect y="14.3831" width="11.617" height="11.617" rx="1" />
								</mask>
								<rect y="14.3831" width="11.617" height="11.617" rx="1" stroke="black" stroke-width="3" mask="url(#path-2-inside-2_513_1001)" />
								<mask id="path-3-inside-3_513_1001" fill="white">
									<rect x="14.3828" width="11.617" height="11.617" rx="1" />
								</mask>
								<rect x="14.3828" width="11.617" height="11.617" rx="1" stroke="black" stroke-width="3" mask="url(#path-3-inside-3_513_1001)" />
								<mask id="path-4-inside-4_513_1001" fill="white">
									<rect x="14.3828" y="14.3831" width="11.617" height="11.617" rx="1" />
								</mask>
								<rect x="14.3828" y="14.3831" width="11.617" height="11.617" rx="1" stroke="black" stroke-width="3" mask="url(#path-4-inside-4_513_1001)" />
							</svg>

						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="container mb-4" id="gridCards">
	<div class="row d-none" id="blogGrid">
		<?php
		if (!empty($data['data'])) {
			$recordNumber = 0;
			foreach ($data['data'] as $blog) {
				$recordNumber++;
		?>
				<div class="col-md-4 mt-4">
					<div class="card ">
						<img class="card-img-top" src="<?php echo $image_url . $blog['image']; ?>" alt="Card image cap">

						<div class="card-body" style="width: 23rem !important">
							<h5 class="card-title" style="font-size: 20px; font-weight: 800;"><?php echo substr($blog['title'], 0, 60); ?></h5>
							<p class="card-text" style=""><?php echo substr($blog['subtitle'], 0, 120); ?> ...</p>

							<a href="./blog-details.php?slug=<?php echo $blog['slug']; ?>" class="social_icon post-btn p-2 float-center text-white bg-primary" style="width: 14rem; height:auto;">Read More</a>
						</div>
					</div>
				</div>
		<?php
			}
		} else {
			echo '
					<div class="container">
						<div class="row d-flex align-items-center">
						<h6 class="text-center">No Blogs Found</h6>
						</div>
					</div>';
		}
		?>
	</div>
</div>
<div id="containerSec">
	<div id="blogContainer" class="mb-4">
		<?php
		if (!empty($data['data'])) {
			$recordNumber = 0;
			foreach ($data['data'] as $blog) {
				$recordNumber++;
				$sectionClass = ($recordNumber % 2 == 0) ? 'posts-section-two' : 'posts-section-one';
		?>
				<section class="<?php echo $sectionClass; ?> post-item pt-40 pb-40 blog-card">
					<div class="container">
						<div class="row d-flex align-items-center">
							<div class="date-div mr-5">
								<h3 class="month-name"><?php echo date('M', strtotime($blog['created_at'])); ?></h3>
								<h2 class="exact-div"><?php echo date('d', strtotime($blog['created_at'])); ?></h2>
							</div>
							<div class="post-img">
								<span class="blog-categories"><?php echo implode(' / ', $blog['categories']); ?></span>
								<img src="<?php echo $image_url . $blog['image']; ?>" alt="Blog Image">
                                <div class="mobile-date mt-4">
									<p>
										<span class="date-month-name">Aug</span> <span class="date">08th</span> <span class="post-year">2023</span>
									</p>
								</div>
							</div>

							<div class="post-content-div">
								<h2 class="post-title"><?php echo substr($blog['title'], 0, 200); ?></h2>
								<p class="post-para mt-3"><?php echo substr($blog['subtitle'], 0, 200); ?> </p>
								<a href="./blog-details.php?slug=<?php echo $blog['slug']; ?>" class="social_icon post-btn p-2 text-white bg-primary">
									Read more
								</a>
							</div>
						</div>
					</div>
				</section>
		<?php
			}
		} else {
			echo '
					<div class="container">
						<div class="row d-flex align-items-center">
						<h6 class="text-center">No Blogs Found</h6>
						</div>
					</div>';
		}
		?>
	</div>
</div>
<?php
if (!isset($_GET['category'])) { ?>
	<section class="load-mor-btn pb-40">
		<div class="container">
			<div class="row">
				<div class="col-12 d-flex justify-content-center">
					<a id="loadMoreBtn" style="cursor: pointer;" class="my-4 load-more-btn underline">
						<span id="loadMoreIcon" style="display: none;">
							<!-- Add your loading icon here -->
							<div class="spinner-border spinner-border-sm" role="status">
								<span class="sr-only">Loading...</span>
							</div>
						</span>
						<span id="loadMoreText">Load More..</span>
					</a>
					<p id="content-end" class="d-none my-4">
						No More Content to Load ;)
					</p>
				</div>
			</div>
		</div>
	</section>
<?php
}
?>

<script>
	const base_url = '<?php echo $base_url ?>';
	const image_url = '<?php echo $image_url ?>';
	var gridView = false;
	document.addEventListener("DOMContentLoaded", function() {
		function getViewPreference() {
			return localStorage.getItem('blogView') || 'list'; // Default to 'list' if not set
		}

		// Set the initial view based on the user's preference
		const initialView = getViewPreference();
		if (initialView === 'list') {
			containerRow.classList.remove('d-none');
			blogGrid.classList.add('d-none');
			gridView = false;
		} else {
			containerRow.classList.add('d-none');
			blogGrid.classList.remove('d-none');
			gridView = true;
		}
		let page = 2;
		const loader = document.getElementById('loader');
		const loadMoreBtn = document.getElementById('loadMoreBtn');
		const loadMoreIcon = document.getElementById('loadMoreIcon');
		const loadMoreText = document.getElementById('loadMoreText');
		const blogContainer = document.getElementById('blogContainer');
		loadMoreBtn.addEventListener('click', function() {
			loader.style.display = 'inline-block'; // Show the loader
			loadMoreIcon.style.display = 'inline'; // Show the loading icon
			loadMoreText.style.display = 'none'; // Hide the "Load More" text

			const nextPageUrl = `${base_url}/blogs?page=${page}`;
			fetch(nextPageUrl)
				.then(response => response.json())
				.then(data => {
					loader.style.display = 'none'; // Hide the loader
					loadMoreIcon.style.display = 'none'; // Hide the loading icon
					loadMoreText.style.display = 'inline'; //
					console.log(data.data.data);
					if (data.data.data.length > 0) {
						// Append new blogs to the existing blogContainer
						let iteration = 0;
						data.data.data.forEach(blog => {
							iteration += 1;
							const sectionClass = (iteration % 2 === 0) ? 'posts-section-one' : 'posts-section-two';
							const blogCard = document.createElement('div');
							blogCard.className = `${sectionClass} post-item pt-40 pb-40 blog-card`;

							// Add content to the blogCard
							blogCard.innerHTML = `
												<div class="container">
													<div class="row d-flex align-items-center">
														<div class="date-div mr-5">
															<h3 class="month-name">${new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short' })}</h3>
															<h2 class="exact-div">${new Date(blog.created_at).getDate()}</h2>
														</div>
														<div class="post-img">
															<span class="blog-categories">${blog.categories.join(' / ')}</span>
															<img src="${image_url}${blog.image}" alt="Blog Image">
														</div>

														<div class="post-content-div">
															<h2 class="post-title">${blog.title.substring(0, 200)} </h2>
															<p class="post-para mt-3">${blog.subtitle.substring(0, 200)} </p>
															<a href="./blog-details.php?slug=${blog.slug}" class="social_icon post-btn p-2 text-white bg-primary">
																Read more
															</a>
														</div>
													</div>
												</div>
											`;


							// create another card for blogGrid
							const blogGridCard = document.createElement('div');
							blogGridCard.className = 'col-md-4 mt-4';
							blogGridCard.innerHTML = `
							<div class="card" style="">
						<img class="card-img-top" src="${image_url}${blog.image}" alt="Card image cap">

						<div class="card-body" style="width: 23rem !important">
							<h5 class="card-title" style="font-size: 20px; font-weight: 800;">${blog.title.substring(0, 200)}</h5>
							<p class="card-text" style="">${blog.subtitle.substring(0, 120)} ...</p>

							<a href="./blog-details.php?slug=${blog.slug}" class="social_icon post-btn p-2 float-center text-white bg-primary" style="width: 14rem; height:auto;">Read More</a>
						</div>
					</div>
							`;
							blogGrid.appendChild(blogGridCard);
							blogContainer.appendChild(blogCard);

						});
						page++;
					} else {
						loadMoreBtn.style.display = 'none';
						document.getElementById('content-end').classList.remove('d-none');
					}
				})
				.catch(error => {
					console.error('Error fetching blogs:', error);
					loader.style.display = 'none'; // Hide the loader in case of an error
					loadMoreIcon.style.display = 'none'; // Hide the loading icon in case of an error
					loadMoreText.style.display = 'inline';
				});
		});
	});
</script>
<script>
	const listViewBtn = document.getElementById('listView');
	const gridViewBtn = document.getElementById('gridView');
	const containerRow = document.getElementById('blogContainer');
	const blogGrid = document.getElementById('blogGrid');

	function setViewPreference(view) {
		localStorage.setItem('blogView', view);
	}

	listViewBtn.addEventListener('click', function() {
		containerRow.classList.remove('d-none');
		blogGrid.classList.add('d-none');
		gridView = false;
		setViewPreference('list');
	});

	gridViewBtn.addEventListener('click', function() {
		containerRow.classList.add('d-none');
		blogGrid.classList.remove('d-none');
		gridView = true;
		setViewPreference('grid');
	});
</script>
<?php include 'inc/footer-2.php' ?>