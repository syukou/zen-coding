/**
 * Created by taguchimunetaka on 2014/12/28.
 */

var TENSHIN = TENSHIN || {};

TENSHIN.TOP = {};

TENSHIN.TOP.KV_CAROUSEL = {
	init : function(){
		this.setParameters();
		this.prepare();
		this.bindEvent();
	},
	setParameters : function(){
		this.$kvWrap = $('#jsi-carousel-container');

		this.$kvLists = this.$kvWrap.find('img');
		this.kvListSize = this.$kvLists.size();
		this.kvListWidth = this.$kvLists.width();

		this.currentIndex = 0;

		this.$firstElement = this.$kvWrap.children('li:first');

	},
	prepare : function(){
		console.log(this.$firstElement);
	},
	bindEvent : function(){
	}
};


$(function(){
	TENSHIN.TOP.KV_CAROUSEL.init();
});