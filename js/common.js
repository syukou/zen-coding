/**
 * Created by taguchimunetaka on 2014/12/28.
 */

var TENSHIN = TENSHIN || {};

TENSHIN.COMMON = {};

TENSHIN.COMMON.UA_ADDCLASSIE = {
	init: function () {
		var APP_Version = window.navigator.appVersion.toLowerCase();
		var userAgent = window.navigator.userAgent.toLowerCase();

		if ((APP_Version.indexOf('msie 8.') != -1 || APP_Version.indexOf('msie 9.') != -1 || APP_Version.indexOf('msie 10.') != -1 || APP_Version.indexOf('msie 11.') != -1 || userAgent.indexOf('firefox') != -1)) {
			$('body').addClass('lte-ie9');
		}

		if( userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/) ) {
			$('body').addClass('lte-ie9');
		}
	}
};


TENSHIN.COMMON.FIX_SOCIALBOX = {
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


TENSHIN.COMMON.PAGE_TOTOP = {

	IGNITION_POINT : 1300,
	SCROLL_SPEED : 1000,

	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$window = $(window);
		this.$htmlBody = $('html,body');
		this.$target = $('#jsiBtnPagetop');
	},
	bindEvent : function(){
		this.$window.on('scroll', $.proxy(this.fadeBtn, this));
		this.$target.on('click', $.proxy(this.scrollTop, this));
	},
	fadeBtn : function(){
		if(this.$window.scrollTop() > this.IGNITION_POINT){
			this.$target.css('position','fixed');
			this.$target.fadeIn();
		}else{
			this.$target.fadeOut();
		}
	},
	scrollTop : function(e){
		e.preventDefault();
		this.$htmlBody.animate({ scrollTop: 0 }, this.SCROLL_SPEED, 'swing');
	}
};



$(window).on('load',function(){
	TENSHIN.COMMON.FIX_SOCIALBOX.init();
});

$(function(){
	TENSHIN.COMMON.PAGE_TOTOP.init();
	TENSHIN.COMMON.UA_ADDCLASSIE.init();
});