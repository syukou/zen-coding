<!doctype html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title><?php wp_title( '|', true, 'right' ); bloginfo('name'); ?></title>
	<!--[if lte IE 9]>
	<script src="/js/html5shiv.js"></script>
	<script src="/js/IE9.js"></script>
	<![endif]-->
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/base.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/common.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/module.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/page_blog.css">
	<link href='http://fonts.googleapis.com/css?family=Raleway:300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/earlyaccess/notosansjapanese.css' rel='stylesheet' type='text/css'>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div class="cm-wrapper">
	<header class="header">
		<div class="header-upper">
			<!--<div class="cm-inner cf">-->
				<!--<h1 class="header-nav-desc">-->
					<!--「もの」創りに<span class="fcR">心</span>を。 天心工房 - WEBと禅 --->
				<!--</h1>-->
				<!--<nav class="header-nav-list">-->
					<!--<ul>-->
						<!--<li><a href="#">天心ブログ</a></li>-->
						<!--<li><a href="#">天心工房について</a></li>-->
						<!--<li><span>制作実績</span></li>-->
						<!--<li><span>動画工房</span></li>-->
						<!--<li><span>お問い合わせ</span></li>-->
						<!--<li><span>Link</span></li>-->
					<!--</ul>-->
				<!--</nav>-->
			<!--</div>-->
		</div>
		<div class="header-logos">
			<div class="cm-inner header-logos-inner cf">
				<h1 class="header-logos-img"><a href="<?php echo home_url('/'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/img/tenshin.svg" alt="天心工房" width="303" height="80"></a></h1>
				<nav class="header-logos-nav">
					<ul class="cf">
						<li>
							<a href="#" class="header-logos-nav-list">
								<div class="header-logos-nav-list-inner">
									<p class="header-logos-nav-list-head">ZEN-CODING</p>
									<p class="header-logos-nav-list-ruby">ブログ</p>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="header-logos-nav-list">
								<div class="header-logos-nav-list-inner">
									<p class="header-logos-nav-list-head">ABOUT TENSHIN</p>
									<p class="header-logos-nav-list-ruby">天心工房について</p>
								</div>
							</a>
						</li>
						<li>
							<span class="header-logos-nav-list">
								<div class="header-logos-nav-list-inner">
									<p class="header-logos-nav-list-head">WORKS</p>
									<p class="header-logos-nav-list-ruby">制作実績</p>
								</div>
							</span>
						</li>
						<li>
							<span class="header-logos-nav-list">
								<div class="header-logos-nav-list-inner">
									<p class="header-logos-nav-list-head">CONTACT</p>
									<p class="header-logos-nav-list-ruby">お問い合わせ</p>
								</div>
							</span>
						</li>
						<li>
							<span class="header-logos-nav-list">
								<div class="header-logos-nav-list-inner">
									<p class="header-logos-nav-list-head">LINK</p>
									<p class="header-logos-nav-list-ruby">リンク</p>
								</div>
							</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
