/**
 * Created by taguchimunetaka on 2014/12/28.
 */

var TENSHIN = TENSHIN || {};

TENSHIN.COMMON = {};

TENSHIN.COMMON.FADE_SOCIALBOX = {

	IGNITION_POINT : 600,
	SCROLL_SPEED : 1000,

	init : function(){
		this.setParameters();
		this.prepare();
		this.runEvent();
	},
	setParameters : function(){
		this.$window = $(window);
		this.$htmlBody = $('html,body');
		this.$target = $('#jsi-social');
		this.targetPosition = this.$target.offset().top;
	},
	prepare : function(){

	},
	runEvent : function(){
		var _self = this;
		this.$window.on('scroll',function(){
			if($(this).scrollTop() >= _self.targetPosition - 40){
				_self.$target.css({
					'position':'fixed',
					'top': 0

				});
			}else{
				_self.$target.css({
					'position':'static'

				});
			}
		});
	}
};





$(function(){
	TENSHIN.COMMON.FADE_SOCIALBOX.init();
});