/**
 * Created by taguchimunetaka on 2014/12/28.
 */

var TENSHIN = TENSHIN || {};

TENSHIN.TOP = {};

TENSHIN.TOP.FADE_CAROUSEL = {
	init : function(){
		this.setParameters();
		this.prepare();
		this.bindEvent();
	},
	setParameters : function(){
		this.$kvWrap = $('#jsi-carousel-container');
		this.$kvLists = this.$kvWrap.find('li');
		this.kvListsLength = this.$kvLists.length;
		this.currentIndex = 0;
	},
	prepare : function(){
		this.$kvLists.eq(this.currentIndex).fadeIn('slow');
	},
	bindEvent : function(){
		setInterval($.proxy(this.fadeImages, this),7000);
	},
	fadeImages : function(){
		var nextIndex = (this.currentIndex + 1) % this.kvListsLength;
		this.$kvLists.eq(this.currentIndex).fadeOut('slow');
		this.$kvLists.eq(nextIndex).fadeIn('slow');

		this.currentIndex = nextIndex;
	}
};


$(function(){
	TENSHIN.TOP.FADE_CAROUSEL.init();
});