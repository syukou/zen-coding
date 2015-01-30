/**
 * Created by taguchimunetaka on 2014/12/28.
 */

var TENSHIN = TENSHIN || {};

TENSHIN.POST = {};

TENSHIN.POST.FIX_SOCIALBOX = {
	init : function(){
		this.setParameters();
		this.prepare();
		this.runEvent();
	},
	setParameters : function(){
		this.$window = $(window);
		this.$target = $('#jsi-social');
		this.showFlag = false;
		this.targetPosition = this.$target.offset().top;
	},
	prepare : function(){

	},
	runEvent : function(){
		var _self = this;
		this.$window.on('scroll',function(){
			var windowScroll = $(this).scrollTop();
			if(windowScroll >= (_self.targetPosition - 40)){
				if(_self.showFlag == false){
					_self.showFlag = true;
					_self.$target.css({
						'position':'fixed',
						'top': 0
					});
				}
			}else{
				if(_self.showFlag == true){
					_self.showFlag = false;
					_self.$target.css({
						'position':'static'
					});
				}
			}
		});
	}
};

$(window).on('load',function(){
	TENSHIN.POST.FIX_SOCIALBOX.init();
});

$(function(){

});