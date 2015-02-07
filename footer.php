	<section class="works">
	</section>
	<div class="footnav">

	</div>
	<footer class="footer">
		<div class="cm-inner">
			<div class="footer-left">
				<p><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/foot_logo_beside_w.svg" alt="" width="119" height="40"></a></p>
			</div>
		</div>
	</footer>
	<p class="btn-pagetotop" id="jsiBtnPagetop">
		<a href="#top" class="btnPagetopIco jscFadeinTrigger">ページトップへ</a>
	</p>
</div>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/common.js"></script>

<?php if ( is_home() && is_front_page() ) : ?>
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/top.js"></script>
<?php elseif ( is_single() ) : ?>
	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/post.js"></script>
	<script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	</script>
	<script src="https://apis.google.com/js/platform.js" async defer>
		{lang: 'ja'}
	</script>
	<script type="text/javascript">!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"pocket-btn-js");
	</script>
<?php endif; ?>

</body>
</html>