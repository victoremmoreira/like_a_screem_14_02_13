

(function(e){e.fn.cmsmsResponsiveContentSlider=function(t){var n={sliderWidth:1e3,sliderHeight:500,animationSpeed:500,animationEffect:"slide",animationEasing:"easeInOutExpo",pauseTime:5e3,activeSlide:1,touchControls:true,pauseOnHover:true,arrowNavigation:true,arrowNavigationHover:false,slidesNavigation:true,slidesNavigationHover:false,afterSliderLoad:function(){},beforeSlideChange:function(){},afterSlideChange:function(){}},r=this,i=r.wrap('<div class="cmsms_content_slider_parent" />').parent(),s=i.parent(),o=undefined,u={};u={init:function(){u.options=e.extend({},n,t);u.el=r;u.vars={};u.vars.oldSlide=undefined;u.vars.newSlide=undefined;u.vars.active_sl_numb=u.options.activeSlide==="random"?0:Number(u.options.activeSlide-1);u.vars.ifWNumber=typeof u.options.sliderWidth==="number"?true:false;u.vars.ifHNumber=typeof u.options.sliderHeight==="number"?true:false;u.vars.autoHeight=u.options.sliderHeight==="auto"?true:false;u.vars.inPause=true;u.vars.inAnimation=true;u.vars.startResize=false;u.vars.mouseClicked=false;if(u.options.pauseTime!==0){u.vars.countdown=Math.round(u.options.pauseTime/50);u.vars.countMax=Math.round(u.options.pauseTime/50)}else{u.vars.countdown=-1;u.vars.countMax=-1}if(!u.vars.autoHeight){i.css({height:u.options.sliderHeight})}u.setSliderVars();u.preloadSlider()},setSliderVars:function(){u.vars.sliderWidth=u.vars.ifWNumber?u.options.sliderWidth+"px":u.options.sliderWidth;u.vars.sliderHeight=u.vars.ifHNumber?u.options.sliderHeight+"px":u.options.sliderHeight;u.vars.slides=u.el.find("> li");u.vars.sl_count=u.vars.slides.length;u.vars.first_sl=u.vars.slides.first();u.vars.last_sl=u.vars.slides.eq(u.vars.sl_count-1)},preloadSlider:function(){var t=u.vars.slides.find("img:eq(0)"),n=t.length;if(n>0){t.each(function(){var t=new Image,r=e(this).attr("src");t.src=r;e(this).addClass("cmsms_img");var i=setInterval(function(){if(isImageOk(t)||isImageOk(t)==="stop"){clearInterval(i);n-=1;if(n===0){u.buildSlider();u.buildControls();u.attachEvents();u.afterSliderLoad()}}},50)})}else{u.buildSlider();u.buildControls();u.attachEvents();u.afterSliderLoad()}},buildSlider:function(){u.vars.slides.addClass("cmsmsContentSlide").css({left:u.vars.sliderWidth});if(u.options.activeSlide==="random"){u.vars.active_sl_numb=parseInt(Math.random()*u.vars.sl_count)}u.el.css({background:"none"});i.css({width:u.vars.sliderWidth,padding:0,opacity:0});if(u.vars.autoHeight){u.vars.slides.css({height:"auto"});u.setSlideHeight(u.vars.slides.eq(u.vars.active_sl_numb),false)}u.vars.slides.eq(u.vars.active_sl_numb).css({left:0,zIndex:2}).addClass("active");i.animate({opacity:1},u.options.animationSpeed/2,u.options.animationEasing);u.vars.inPause=false;u.vars.inAnimation=false},buildControls:function(){if(u.options.slidesNavigation){i.append('<ul class="cmsms_slides_nav" />');u.vars.slidesNav=i.find("ul.cmsms_slides_nav");if(u.options.slidesNavigationHover){u.vars.slidesNav.css({opacity:0})}for(var e=0;e<u.vars.sl_count;e+=1){u.vars.slidesNav.append('<li><a href="#">'+(e+1)+"</a></li>")}u.vars.slidesNav.find(">li").eq(u.vars.active_sl_numb).addClass("active");u.vars.slidesNavButton=u.vars.slidesNav.find("> li > a")}if(u.options.arrowNavigation){i.parent().prepend('<a href="#" class="cmsms_content_prev_slide"><span /></a>'+'<a href="#" class="cmsms_content_next_slide"><span /></a>');u.vars.prevSlideButton=i.parent().find(".cmsms_content_prev_slide");u.vars.nextSlideButton=i.parent().find(".cmsms_content_next_slide");if(u.options.arrowNavigationHover){u.vars.prevSlideButton.css({opacity:0});u.vars.nextSlideButton.css({opacity:0})}}},attachEvents:function(){if(u.options.touchControls){u.vars.slides.bind("mousedown",function(e){u.mouseDoun(e);return false});u.vars.slides.bind("mousemove",function(e){u.mouseMove(e);return false});u.vars.slides.bind("mouseup",function(){u.mouseUp();return false});i.bind("mouseleave",function(){if(!u.vars.mouseClicked){return}u.mouseUp();return false})}if(u.options.arrowNavigation){u.vars.nextSlideButton.bind("click",function(){u.nextSlide();return false});u.vars.prevSlideButton.bind("click",function(){u.prevSlide();return false})}if(u.options.slidesNavigation){u.vars.slidesNavButton.bind("click",function(){if(e(this).parent().is(".active")){return false}else{u.slideChoose(e(this).parent().index())}return false})}if(u.options.pauseOnHover){s.bind("mouseenter",function(){u.vars.inPause=true}).bind("mouseleave",function(){u.vars.inPause=false})}if(u.options.slidesNavigation&&u.options.slidesNavigationHover){s.bind("mouseenter",function(){u.vars.slidesNav.css({opacity:1})}).bind("mouseleave",function(){u.vars.slidesNav.css({opacity:0})})}if(u.options.arrowNavigation&&u.options.arrowNavigationHover){s.bind("mouseenter",function(){u.vars.prevSlideButton.stop().animate({opacity:1},u.options.animationSpeed,u.options.animationEasing);u.vars.nextSlideButton.stop().animate({opacity:1},u.options.animationSpeed,u.options.animationEasing)}).bind("mouseleave",function(){u.vars.prevSlideButton.stop().animate({opacity:0},u.options.animationSpeed,u.options.animationEasing);u.vars.nextSlideButton.stop().animate({opacity:0},u.options.animationSpeed,u.options.animationEasing)})}if(u.vars.autoHeight){e(window).bind("resize",function(){if(u.vars.startResize){clearTimeout(u.vars.startResize)}u.vars.startResize=setTimeout(function(){u.getSlVars();u.setSlideHeight(u.vars.active_sl,false)},300)})}o=setInterval(function(){u.timerController()},50)},getSlVars:function(){u.vars.active_sl=u.el.find("> li.active")},setSlideHeight:function(e,t){if(t){i.animate({height:e[0].scrollHeight+"px"},u.options.animationSpeed,u.options.animationEasing)}else{i.css({height:e[0].scrollHeight+"px"})}},navActiveSl:function(e,t){u.vars.slidesNav.find("> li").eq(e.index()).removeClass("active");u.vars.slidesNav.find("> li").eq(t.index()).addClass("active")},setTimer:function(){u.vars.inPause=false;if(u.options.pauseTime!==0){u.vars.countdown=Math.round(u.options.pauseTime/50);u.vars.countMax=Math.round(u.options.pauseTime/50)}else{u.vars.countdown=-1;u.vars.countMax=-1}},nextSlide:function(){if(u.vars.inAnimation||u.vars.sl_count<2){return false}else{u.vars.inAnimation=true}u.getSlVars();u.setTimer();u.beforeSlideChange();u.vars.oldSlide=u.vars.active_sl;u.vars.newSlide=u.vars.active_sl.index()<u.vars.sl_count-1?u.vars.active_sl.next():u.vars.first_sl;if(u.options.slidesNavigation){u.navActiveSl(u.vars.oldSlide,u.vars.newSlide)}if(u.vars.autoHeight){u.setSlideHeight(u.vars.newSlide,true)}if(u.options.animationEffect==="slide"){u.vars.oldSlide.removeClass("active").animate({left:"-"+u.vars.sliderWidth},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({left:u.vars.sliderWidth,zIndex:1})});u.vars.newSlide.addClass("active").css({zIndex:3}).animate({left:u.vars.ifWNumber?0:"0%"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:2});u.vars.inAnimation=false;u.afterSlideChange()})}else if(u.options.animationEffect==="fade"){u.fadeSlide(u.vars.oldSlide,u.vars.newSlide,true)}},prevSlide:function(){if(u.vars.inAnimation||u.vars.sl_count<2){return false}else{u.vars.inAnimation=true}u.getSlVars();u.setTimer();u.beforeSlideChange();u.vars.oldSlide=u.vars.active_sl;u.vars.newSlide=u.vars.active_sl.index()>0?u.vars.active_sl.prev():u.vars.last_sl;if(u.options.slidesNavigation){u.navActiveSl(u.vars.oldSlide,u.vars.newSlide)}if(u.vars.autoHeight){u.setSlideHeight(u.vars.newSlide,true)}if(u.options.animationEffect==="slide"){u.vars.oldSlide.removeClass("active").animate({left:u.vars.sliderWidth},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:1})});u.vars.newSlide.addClass("active").css({left:"-"+u.vars.sliderWidth,zIndex:3}).animate({left:u.vars.ifWNumber?0:"0%"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:2});u.vars.inAnimation=false;u.afterSlideChange()})}else if(u.options.animationEffect==="fade"){u.fadeSlide(u.vars.oldSlide,u.vars.newSlide,false)}},slideChoose:function(t){if(u.vars.inAnimation){return false}else{u.vars.inAnimation=true}u.getSlVars();u.setTimer();u.beforeSlideChange();u.vars.oldSlide=u.vars.active_sl;u.vars.newSlide=u.vars.slides.eq(t);if(u.options.slidesNavigation){u.navActiveSl(u.vars.oldSlide,u.vars.newSlide)}if(u.vars.autoHeight){u.setSlideHeight(u.vars.newSlide,true)}if(u.vars.active_sl.index()<u.vars.newSlide.index()){if(u.options.animationEffect==="slide"){u.vars.oldSlide.removeClass("active").animate({left:"-"+u.vars.sliderWidth},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({left:u.vars.sliderWidth,zIndex:1})});u.vars.newSlide.addClass("active").css({zIndex:3}).animate({left:u.vars.ifWNumber?0:"0%"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:2});u.vars.inAnimation=false;u.afterSlideChange()})}else if(u.options.animationEffect==="fade"){u.fadeSlide(u.vars.oldSlide,u.vars.newSlide,true)}}else{if(u.options.animationEffect==="slide"){u.vars.oldSlide.removeClass("active").animate({left:u.vars.sliderWidth},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:1})});u.vars.newSlide.addClass("active").css({left:"-"+u.vars.sliderWidth,zIndex:3}).animate({left:u.vars.ifWNumber?0:"0%"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:2});u.vars.inAnimation=false;u.afterSlideChange()})}else if(u.options.animationEffect==="fade"){u.fadeSlide(u.vars.oldSlide,u.vars.newSlide,false)}}},fadeSlide:function(t,n,r){n.css({left:0});if(r){t.removeClass("active").animate({left:"-"+u.vars.sliderWidth,opacity:0},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({left:u.vars.sliderWidth,opacity:1,zIndex:1});n.addClass("active").css({zIndex:2});u.vars.inAnimation=false;u.afterSlideChange()})}else{t.removeClass("active").animate({left:u.vars.sliderWidth,opacity:0},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({opacity:1,zIndex:1});n.addClass("active").css({zIndex:2});u.vars.inAnimation=false;u.afterSlideChange()})}},mouseDoun:function(e){if(u.vars.inAnimation||u.vars.pj_count<2){return false}else{u.vars.inAnimation=true;u.vars.inPause=true;u.vars.mouseClicked=true;u.vars.startPosX=e.clientX;u.vars.xIndex=0;if(!u.vars.ifWNumber){u.vars.sliderPxWidth=i.width()}else{u.vars.sliderPxWidth=u.options.sliderWidth}u.getSlVars();u.vars.next_sl=u.vars.active_sl.index()!==u.vars.sl_count-1?u.vars.active_sl.next():u.vars.first_sl;u.vars.prev_sl=u.vars.active_sl.index()!==0?u.vars.active_sl.prev():u.vars.last_sl}},mouseMove:function(e){if(!u.vars.mouseClicked){return}u.vars.finishPosX=e.clientX;u.vars.xIndex=Math.round(u.vars.finishPosX-u.vars.startPosX);if(u.options.animationEffect==="slide"){u.vars.active_sl.css({left:u.vars.xIndex+"px"})}else if(u.options.animationEffect==="fade"){u.vars.active_sl.css({left:u.vars.xIndex+"px",opacity:1-(Math.abs(u.vars.xIndex)/Math.round(u.vars.sliderPxWidth*.75)).toFixed(2)})}if(u.vars.xIndex<0){if(u.options.animationEffect==="slide"){u.vars.next_sl.css({left:u.vars.sliderPxWidth+u.vars.xIndex+"px",zIndex:3})}else if(u.options.animationEffect==="fade"){if(u.vars.prevTouch){u.vars.prevTouch=false;u.vars.touchTarget.css({left:u.vars.sliderPxWidth+"px"})}if(!u.vars.nextTouch){u.vars.nextTouch=true}if(u.vars.active_sl.index()!==u.vars.sl_count-1){u.vars.touchTarget=u.vars.active_sl.next()}else{u.vars.touchTarget=u.vars.first_sl}u.vars.touchTarget.css({left:0})}}else if(u.vars.xIndex>0){if(u.options.animationEffect==="slide"){u.vars.prev_sl.css({left:-u.vars.sliderPxWidth+u.vars.xIndex+"px",zIndex:3})}else if(u.options.animationEffect==="fade"){if(u.vars.nextTouch){u.vars.nextTouch=false;u.vars.touchTarget.css({left:u.vars.sliderPxWidth+"px"})}if(!u.vars.prevTouch){u.vars.prevTouch=true}if(u.vars.active_sl.index()!==0){u.vars.touchTarget=u.vars.active_sl.prev()}else{u.vars.touchTarget=u.vars.last_sl}u.vars.touchTarget.css({left:0})}}},mouseUp:function(){if(!u.vars.mouseClicked){return}u.vars.mouseClicked=false;if(u.vars.xIndex<0){if(u.vars.xIndex<-75){u.beforeSlideChange();if(u.options.slidesNavigation){u.navActiveSl(u.vars.active_sl,u.vars.next_sl)}if(u.vars.autoHeight){u.setSlideHeight(u.vars.next_sl,true)}if(u.options.animationEffect==="slide"){if(u.vars.sl_count>2){u.vars.prev_sl.css({left:u.vars.sliderPxWidth+"px",zIndex:1})}u.vars.active_sl.removeClass("active").animate({left:"-"+u.vars.sliderPxWidth+"px"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({left:u.vars.sliderPxWidth+"px",zIndex:1})});u.vars.next_sl.addClass("active").animate({left:0},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:2});u.vars.inAnimation=false;u.setTimer();u.afterSlideChange()})}else if(u.options.animationEffect==="fade"){if(u.vars.sl_count>2){u.vars.prev_sl.css({left:u.vars.sliderPxWidth+"px",opacity:1,zIndex:1})}u.vars.active_sl.removeClass("active").animate({left:"-"+u.vars.sliderPxWidth+"px"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({left:u.vars.sliderPxWidth+"px",opacity:1,zIndex:1});u.vars.next_sl.addClass("active").css({zIndex:2});u.vars.inAnimation=false;u.setTimer();u.afterSlideChange()})}}else{if(u.options.animationEffect==="slide"){if(u.vars.sl_count>2){u.vars.prev_sl.css({left:u.vars.sliderPxWidth+"px",zIndex:1})}u.vars.active_sl.animate({left:0},u.options.animationSpeed,u.options.animationEasing);u.vars.next_sl.animate({left:u.vars.sliderPxWidth+"px"},u.options.animationSpeed,u.options.animationEasing,function(){u.vars.inAnimation=false;u.vars.inPause=false})}else if(u.options.animationEffect==="fade"){if(u.vars.sl_count>2){u.vars.prev_sl.css({left:u.vars.sliderPxWidth+"px",opacity:1,zIndex:1})}u.vars.active_sl.animate({left:0,opacity:1},u.options.animationSpeed,u.options.animationEasing,function(){u.vars.next_sl.css({left:u.vars.sliderPxWidth+"px"});u.vars.inAnimation=false;u.vars.inPause=false})}}}else if(u.vars.xIndex>=0){if(u.vars.xIndex>75){u.beforeSlideChange();if(u.options.slidesNavigation){u.navActiveSl(u.vars.active_sl,u.vars.prev_sl)}if(u.vars.autoHeight){u.setSlideHeight(u.vars.prev_sl,true)}if(u.options.animationEffect==="slide"){if(u.vars.sl_count>2){u.vars.next_sl.css({left:u.vars.sliderPxWidth+"px",zIndex:1})}u.vars.active_sl.removeClass("active").animate({left:u.vars.sliderPxWidth+"px"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:1})});u.vars.prev_sl.addClass("active").animate({left:0},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({zIndex:2});u.vars.inAnimation=false;u.setTimer();u.afterSlideChange()})}else if(u.options.animationEffect==="fade"){if(u.vars.sl_count>2){u.vars.next_sl.css({left:u.vars.sliderPxWidth+"px",opacity:1,zIndex:1})}u.vars.active_sl.removeClass("active").animate({left:u.vars.sliderPxWidth+"px"},u.options.animationSpeed,u.options.animationEasing,function(){e(this).css({opacity:1,zIndex:1});u.vars.prev_sl.addClass("active").css({zIndex:2});u.vars.inAnimation=false;u.setTimer();u.afterSlideChange()})}}else{if(u.options.animationEffect==="slide"){if(u.vars.sl_count>2){u.vars.next_sl.css({left:u.vars.sliderPxWidth+"px",zIndex:1})}if(u.vars.xIndex!==0){u.vars.active_sl.animate({left:0},u.options.animationSpeed,u.options.animationEasing);u.vars.prev_sl.animate({left:"-"+u.vars.sliderPxWidth+"px"},u.options.animationSpeed,u.options.animationEasing,function(){u.vars.inAnimation=false;u.vars.inPause=false})}else{u.vars.inAnimation=false;u.vars.inPause=false}}else if(u.options.animationEffect==="fade"){if(u.vars.sl_count>2){u.vars.next_sl.css({left:u.vars.sliderPxWidth+"px",opacity:1,zIndex:1})}if(u.vars.xIndex!==0){u.vars.active_sl.animate({left:0,opacity:1},u.options.animationSpeed,u.options.animationEasing,function(){u.vars.prev_sl.css({left:u.vars.sliderPxWidth+"px"});u.vars.inAnimation=false;u.vars.inPause=false})}else{u.vars.inAnimation=false;u.vars.inPause=false}}}}},timerController:function(){if(u.vars.inPause||u.vars.countdown<0){return}if(u.vars.countdown===0){u.nextSlide()}u.vars.countdown-=1},afterSliderLoad:function(){u.options.afterSliderLoad()},beforeSlideChange:function(){u.options.beforeSlideChange()},afterSlideChange:function(){u.options.afterSlideChange()}};u.init()}})(jQuery);



/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);

jQuery(document).ready(function() {
	/* Scroll to top */
	jQuery().UItoTop({ 
		containerID: 'slide_top',
		containerHoverID : 'slide_top_hover', 
		easingType: 'easeOutQuart' 
	});					
});



/* Social Icons Script */
(function($){$.fn.socicons=function(c){var d={icons:'digg,stumbleupon,delicious,facebook,yahoo',imagesurl:'images/',imageformat:'png',light:true,targetblank:true,shorturl:''};var e=$.extend({},d,c);var f=this;var g=e.targetblank?'target="_blank"':'';var h=e.icons.split(',');for(key in h){var j=h[key];var k=socformat[h[key]];if(k!=undefined){k=k.replace('{TITLE}',urlencode(socicons_title()));k=k.replace('{URL}',urlencode(socicons_url()));k=k.replace('{SHORTURL}',urlencode(socicons_shorturl()));k=k.replace('{KEYWORDS}',urlencode(socicons_metawords()));k=k.replace('{DESCRIPTION}',urlencode(socicons_metadescript()));var l='<a '+g+' href="'+k+'" class="socicons_icon" title="'+j+'"><img src="'+e.imagesurl+j+'.'+e.imageformat+'" alt="'+j+'" /></a>';this.append(l)}}if(e.light){this.find('.socicons_icon').bind('mouseover',function(){$(this).siblings().stop().animate({'opacity':0.3},500)});this.find('.socicons_icon').bind('mouseout',function(){$(this).siblings().stop().animate({'opacity':1},500)})}var m;function socicons_metawords(){if(n==undefined){metaCollection=document.getElementsByTagName('meta');for(i=0;i<metaCollection.length;i++){nameAttribute=metaCollection[i].name.search(/keywords/);if(nameAttribute!=-1){m=metaCollection[i].content;return m}}}else{return m}}var n;function socicons_metadescript(){if(n==undefined){metaCollection=document.getElementsByTagName('meta');for(i=0;i<metaCollection.length;i++){nameAttribute=metaCollection[i].name.search(/description/);if(nameAttribute!=-1){n=metaCollection[i].content;return n}}}else{return n}}function socicons_title(){return document.title}function socicons_url(){var a=document.location.href;return a}function socicons_shorturl(){if(e.shorturl==''){return socicons_url()}else{return e.shorturl}}function urlencode(a){if(a==undefined){return''}return a.replace(/\s/g,'%20').replace('+','%2B').replace('/%20/g','+').replace('*','%2A').replace('/','%2F').replace('@','%40')}function light(a,b){if(b){a.style.opacity=1;a.childNodes[0].style.filter='progid:DXImageTransform.Microsoft.Alpha(opacity=100);'}else{a.style.opacity=light_opacity/100;a.style.filter='alpha(opacity=20)';a.childNodes[0].style.filter='progid:DXImageTransform.Microsoft.Alpha(opacity='+light_opacity+');'}}return this}})(jQuery);

var socformat = Array();

socformat['nujij'] = 'http://nujij.nl/jij.lynkx?t={TITLE}&u={URL}&b={DESCRIPTION}'
socformat['ekudos'] = 'http://www.ekudos.nl/artikel/nieuw?url={URL}&title={TITLE}&desc={DESCRIPTION}';
socformat['digg'] = 'http://digg.com/submit?phase=2&url={URL}&title={TITLE}';
socformat['linkedin'] = 'http://www.linkedin.com/shareArticle?mini=true&url={URL}&title={TITLE}&summary={DESCRIPTION}&source=';
socformat['sphere'] = 'http://www.sphere.com/search?q=sphereit:{URL}';
socformat['technorati'] = 'http://www.technorati.com/faves?add={URL}';
socformat['delicious'] = 'http://del.icio.us/post?url={URL}&title={TITLE}';
socformat['furl'] = 'http://furl.net/storeIt.jsp?u={URL}&t={TITLE}';
socformat['netscape'] = 'http://www.netscape.com/submit/?U={URL}&T={TITLE}';
socformat['yahoo'] = 'http://myweb2.search.yahoo.com/myresults/bookmarklet?u={URL}&t={TITLE}';
socformat['google'] = 'http://www.google.com/bookmarks/mark?op=edit&bkmk={URL}&title={TITLE}';
socformat['newsvine'] = 'http://www.newsvine.com/_wine/save?u={URL}&h={TITLE}';
socformat['reddit'] = 'http://reddit.com/submit?url={URL}&title={TITLE}';
socformat['blogmarks'] = 'http://blogmarks.net/my/new.php?mini=1&url={URL}&title={TITLE}';
socformat['magnolia'] = 'http://ma.gnolia.com/bookmarklet/add?url={URL}&title={TITLE}';
socformat['live'] = 'https://favorites.live.com/quickadd.aspx?marklet=1&mkt=en-us&url={URL}&title={TITLE}&top=1';
socformat['tailrank'] = 'http://tailrank.com/share/?link_href={URL}&title={TITLE}';
socformat['facebook'] = 'http://www.facebook.com/share.php?u={URL}';
socformat['twitter'] = 'http://twitter.com/?status={TITLE}%20-%20{SHORTURL}';
socformat['stumbleupon'] = 'http://www.stumbleupon.com/submit?url={URL}&title={TITLE}';
socformat['bligg'] = 'http://www.bligg.nl/submit.php?url={URL}';
socformat['symbaloo'] = 'http://www.symbaloo.com/en/add/url={URL}&title={TITLE}';
socformat['misterwong'] = 'http://www.mister-wong.com/add_url/?bm_url={URL}&bm_title={TITLE}&bm_comment=&bm_tags={KEYWORDS}';
socformat['buzz']	= 'http://www.google.com/reader/link?url={URL}&title={TITLE}&snippet={DESCRIPTION}&srcURL={URL}&srcTitle={TITLE}';
socformat['myspace'] = 'http://www.myspace.com/Modules/PostTo/Pages/?u={URL}';
socformat['mail']	= 'mailto:to@email.com?SUBJECT={TITLE}&BODY={DESCRIPTION}-{URL}';
socformat['googleplus']	= 'https://m.google.com/app/plus/x/?v=compose&content={TITLE}-{URL}';


jQuery(window).load(function() { 
	jQuery('.project_preloader_line').hide();
	setTimeout(function () { 
		jQuery('.project_preloader_top').animate( { 
			height : 0
		}, 300);
		jQuery('.project_preloader_bottom').animate( { 
			height : 0
		}, 300,function () { 
			jQuery('.project_preloader').hide();
			jQuery('body').removeClass('cmsms_project');
		} );
	}, 700);
} );


jQuery(document).ready(function() { 
	/* Sharing Icons Run */
	(function ($) { 
		$('.cmsms_social').socicons( { 
			icons : 'nujij,linkedin,ekudos,digg,sphere,technorati,delicious,furl,netscape,yahoo,google,newsvine,reddit,blogmarks,magnolia,live,tailrank,facebook,twitter,stumbleupon,bligg,symbaloo,misterwong,mail,googleplus', 
			imagesurl : 'images/share_icons/' 
		} );
	} )(jQuery);
	
	
	/* Sharing Icons Toggle */
	(function ($) { 
		$('a.cmsms_share').toggle(function () { 
			$(this).parent().find('.cmsms_social').show('slow');
			$(this).addClass('active');
			
			return false;
		} , function () { 
			$(this).parent().find('.cmsms_social').hide('slow');
			$(this).removeClass('active');
			
			return false;
		} );
	} )(jQuery);
	
	
	/* Header Social Icons Toggle */
	(function ($) { 
		$('a.social_button').toggle(function () { 
			$(this).addClass('active');
			setTimeout(function () { 
				$('.social_list').animate({opacity: 1}, 500);
			}, 200);
			$('.social_list').slideDown();
			
			return false;
		} , function () { 
			$(this).removeClass('active'); 
			$('.social_list').animate({opacity: 0}, 500);
			setTimeout(function () { 
				$('.social_list').slideUp('slow');
			}, 300);
			
			return false;
		} );
	} )(jQuery);
	
	
	/* Open Reply Toggle */
	(function ($) { 
		$('a.button_reply').click(function () { 
			$(this).addClass('active');
			$(this).parent().parent().find('#commentform').slideDown('slow');
			$('.comment_navi a.button_close').slideDown('slow', function() {
				$(this).animate({opacity: 1}, 500);
			});
			
			return false;
		} );
	} )(jQuery);
	
	
	/* Close Reply Toggle */
	(function ($) { 
		$('.comment_navi a.button_close').click(function () { 
			$(this).addClass('active');
			$(this).parent().parent().find('#commentform').slideUp('slow');
			$(this).animate({opacity: 0}, 500, function() {
				$(this).css({display: 'none'});
			});
			
			
			return false;
		} );
	} )(jQuery);
	
	
	/* JackBox Lighbox */
	jQuery('a.jackbox[data-group]').jackBox('init', { 
		deepLinking : false, 
		preloadGraphics : false, 
		autoPlayVideo : false, 
		defaultVideoWidth : 1280, 
		defaultVideoHeight : 720, 
		thumbsStartHidden : true, 
		thumbnailWidth : 70, 
		thumbnailHeight : 40 
	} );
	
	
	/* DebouncedResize Function */
	(function ($) { 
		var $event = $.event, 
			$special, 
			resizeTimeout;
		
		
		$special = $event.special.debouncedresize = { 
			setup : function () { 
				$(this).on('resize', $special.handler);
			}, 
			teardown : function () { 
				$(this).off('resize', $special.handler);
			}, 
			handler : function (event, execAsap) { 
				var context = this, 
					args = arguments, 
					dispatch = function () { 
						event.type = 'debouncedresize';
						
						$event.dispatch.apply(context, args);
					};
				
				
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}
				
				
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			}, 
			threshold : 150 
		};
	} )(jQuery);
	
	
	/* Bottom Sidebar Show/Hide */
	(function ($) { 
		$('#bottom a.sidebar_button').click(function () { 
			if ($(this).hasClass('active')) {
				$('#bottom').css( { 
					height : $('#bottom > .bottom_outer').height() 
				} );
				
				setTimeout(function () { 
					$('#bottom').css( { 
						height : 0 
					} );
					
					$('#bottom a.sidebar_button').removeClass('active');
					
					setTimeout(function () { 
						$('#bottom a.sidebar_button').removeAttr('style');
					}, 500);
				}, 50);
			} else {
				$(this).addClass('active');
				
				if ($('#bottom > .bottom_outer').height() >= $(window).height()) {
					$(this).css( { 
						marginBottom : 0, 
						position : 'absolute', 
						top : 'auto', 
						bottom : 0 
					} );
				}
				
				$('#bottom').css( { 
					height : $('#bottom > .bottom_outer').height() 
				} );
				
				if ( 
					!checker.ua.chrome && 
					!checker.ua.safari 
				) {
					setTimeout(function () { 
						$('#bottom').css( { 
							height : 'auto' 
						} );
					}, 500);
				}
			}
		} );
		
		var interval = false;
		
		$(window).resize(function () { 
			if (interval) {
				clearTimeout(interval);
			}
			
			interval = setTimeout(function () { 
				if ( 
					$('#bottom a.sidebar_button').hasClass('active') && 
					$('#bottom').height() !== 0 && 
					$('#bottom > .bottom_outer').height() >= $(window).height() 
				) {
					$('#bottom a.sidebar_button').css( { 
						marginBottom : 0, 
						position : 'absolute', 
						top : 'auto', 
						bottom : 0 
					} );
				} else if ( 
					$('#bottom a.sidebar_button').hasClass('active') && 
					$('#bottom').height() !== 0 && 
					$('#bottom > .bottom_outer').height() < $(window).height() 
				) {
					$('#bottom a.sidebar_button').removeAttr('style');
				}
			}, 300);
		} );
	} )(jQuery);
	
	
	/* Mobile Devices Navigation Script */
	(function ($) { 
		$('a.resp_navigation').bind('click', function () { 
			if ($(this).hasClass('active')) {
				$('#navigation').slideUp('fast');
				
				$('#navigation ul').css( { display : 'none' } );
				$(this).removeClass('active');
			} else {
				$('#navigation').slideDown('fast');
				
				$(this).addClass('active');
			}
			
			return false;
		} );
		
		$('#navigation li a').bind('click', function () {
            if ($('a.resp_navigation').is(':visible')) {
                if ($(this).next().is('ul')) {
                    if ($(this).next().is(':visible')) {
                        $(this).removeClass('drop_active');
                        $(this).next().slideUp('fast');
                       
                        $(this).next().find('ul').css( {
                            display : 'none'
                        } );
                    } else {
                        $(this).parent().parent().find('a').removeClass('drop_active');
                        $(this).parent().parent().find('ul').slideUp('fast');
                       
                        $(this).addClass('drop_active');
                        $(this).next().slideDown('fast');
                    }
                   
                    return false;
                }
            }
        } );
		
		$(window).bind('resize', function () { 
			if ($(this).width() > 540) {
				$('a.resp_navigation').removeClass('active');
				
				$('#navigation').removeAttr('style');
				$('#navigation ul').removeAttr('style');
			}
		} );
	} )(jQuery);
	
	
	/* Popular, Latest and Related Posts */
	(function ($) { 
		$('.related_posts ul li a').click(function (e) { 
			var rposts = $(this).parent().parent().parent(), 
				index = $(this).parent().index();
			
			rposts.find('ul').find('a').removeClass('current');
			$(this).addClass('current');
			
			rposts.find('div.related_posts_content').not('div.related_posts_content:eq(' + index + ')').slideUp();
			rposts.find('div.related_posts_content:eq(' + index + ')').slideDown();
			
			e.preventDefault();
		} );
	} )(jQuery);
	
	
	
	/* Toggle */
	(function ($) { 
		$('.togg a.tog').click(function (i) { 
			var dropDown = $(this).parent().find('.tab_content');
			
			$(this).parent().find('.tab_content').not(dropDown).slideUp();
			
			if ($(this).hasClass('current')) { 
				$(this).removeClass('current');
			} else { 
				$(this).addClass('current');
			}
			
			dropDown.stop(false, true).slideToggle().css( { display : 'block' } );
			
			i.preventDefault();
		} );
	} )(jQuery);
	
	
	
	/* Accordion */
	(function ($) { 
		$('.accordion a.tog').click(function (j) { 
			var dropDown = $(this).parent().find('.tab_content');
			
			$(this).parent().parent().find('.tab_content').not(dropDown).slideUp();
			
			if ($(this).hasClass('current')) { 
				$(this).removeClass('current');
			} else { 
				$(this).parent().parent().find('.tog').removeClass('current');
				$(this).addClass('current');
			}
			
			dropDown.stop(false, true).slideToggle().css( { display : 'block' } );
			
			j.preventDefault();
		} );
	} )(jQuery);
	
	
	
	/* Tabs */
	(function ($) { 
		$('.tab ul.tabs li:first-child').addClass('current');
		$('.tab .tab_content div.tabs_tab:first-child').show();
		
		$('.tab ul.tabs li').click(function (g) { 
			var tab = $(this).parent().parent(), 
				index = $(this).index();
			
			tab.find('ul.tabs').find('li').removeClass('current');
			$(this).addClass('current');
			
			tab.find('.tab_content').find('div.tabs_tab').not('div.tabs_tab:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_tab:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	} )(jQuery);
	
	
	
	/* Tour */
	(function ($) { 
		$('.tour_content ul.tour li:first-child').addClass('current').parent().removeClass('tour_load');
		
		$('.tour_content ul.tour li a').click(function (f) { 
			var tour = $(this).parent().parent().parent().parent(), 
				index = $('ul.tour li').index($(this).parent());
			
			tour.find('ul.tour').find('li').removeClass('current');
			$(this).parent().addClass('current');
			
			tour.find('div.tour_box').not('div.tour_box:eq(' + index + ')').css( { 
				display : 'none' 
			} ).animate( { 
				opacity : 0 
			}, 500);
			
			tour.find('div.tour_box:eq(' + index + ')').css( { 
				display : 'table-cell' 
			} ).animate( { 
				opacity : 1 
			}, 500);
			
			f.preventDefault();
		} );
	} )(jQuery);
	
	
	
	/* Image Preloader */
	(function ($) { 
		var images = jQuery('.preloader img'), 
			max = images.length, 
			img = new Image(), 
			curr = 1;
		
		jQuery('.preloader').each(function () { 
			jQuery('<span class="image_container_img" />').prependTo(jQuery(this));
		} );
		
		images.remove();
		
		if (max > 0) { 
			loadImage(0, max);
		} else if ($('#header .pj_sort').find('.p_options_block').html() !== null) { 
			loadSorting();
		}
		
		function loadImage(index, max) { 
			if (index < max) { 
				$('<span id="img' + (index + 1) + '" class="p_img_container" />').each(function () { 
					$(this).prependTo($('.preloader .image_container_img').eq(index));
				} );
				
				var img = new Image(), 
					curr = $('#img' + (index + 1));
				
				$(img).load(function () { 
					$(curr).append(this).append('<span class="image_rollover" />');
					
					$(this).parent().parent().parent().css( { backgroundImage : 'none' } );
					
					$(this).animate( { opacity : 1 }, 500, 'easeInOutExpo', function () { 
						if ($(this).parent().parent().parent().hasClass('inBlog')) { 
							$(this).parent().parent().parent().css( { 
								height : 'auto', 
								padding : 0 
							} );
						}
					} );
					
					if (index !== (max - 1)) { 
						loadImage(index + 1, max);
					}
				} ).error(function () { 
					$(curr).remove();
					
					loadImage((index + 1), max);
				} ).attr( { 
					src : $(images[index]).attr('src'), 
					title : $(images[index]).attr('title'), 
					alt : $(images[index]).attr('alt') 
				} ).addClass($(images[index]).attr('class'));
				
				if (index === (max - 1) && $('#header .pj_sort').find('.p_options_block').html() !== null) {
					loadSorting();
				}
			}
		}
		
		function loadSorting() { 
			if ($.browser.msie && $.browser.version < 9) { 
				$('.p_options_loader').css( { display : 'none' } );
				$('.p_options_block').css( { display : 'block' } );
			} else { 
				$('.p_options_loader').fadeOut(200, function () { 
					$(this).css( { display : 'none' } );
				} );
				
				$('.p_options_block').fadeIn(200);
			}
		}
	} )(jQuery);
} );



/* Correct OS & Browser Check */
var ua = navigator.userAgent, 
	checker = { 
		os : { 
			iphone : ua.match(/iPhone/), 
			ipod : ua.match(/iPod/), 
			ipad : ua.match(/iPad/), 
			blackberry : ua.match(/BlackBerry/), 
			android : ua.match(/(Android|Linux armv6l|Linux armv7l)/), 
			linux : ua.match(/Linux/), 
			win : ua.match(/Windows/), 
			mac : ua.match(/Macintosh/) 
		}, 
		ua : { 
			ie : ua.match(/MSIE/), 
			ie6 : ua.match(/MSIE 6.0/), 
			ie7 : ua.match(/MSIE 7.0/), 
			ie8 : ua.match(/MSIE 8.0/), 
			ie9 : ua.match(/MSIE 9.0/), 
			ie10 : ua.match(/MSIE 10.0/), 
			opera : ua.match(/Opera/), 
			firefox : ua.match(/Firefox/), 
			chrome : ua.match(/Chrome/), 
			safari : ua.match(/(Safari|BlackBerry)/) 
		} 
	};



/* Correct Image Load Check */
function isImageOk(img) { 
	if (!img.complete) { 
		return false;
	}
	
	if (typeof img.naturalWidth !== undefined && img.naturalWidth === 0) { 
		return 'stop';
	}
	
	return true;
}



/* Convert Touch Events to Mouse Events Function */
function touchHandler(e) { 
    var first = e.changedTouches[0], 
        type = '', 
		simulatedEvent = undefined;
	
	switch (e.type) { 
        case 'touchstart': 
			type = 'mousedown';
			
			break;
        case 'touchmove': 
			type = 'mousemove';
			
			break;
        case 'touchend': 
			type = 'mouseup';
			
			break;
        case 'touchcancel': 
			type = 'mouseleave';
			
			break;
        default: 
			return;
    }
	
    simulatedEvent = document.createEvent('MouseEvent');
    simulatedEvent.initMouseEvent( 
		type, 
		true, 
		true, 
		window, 
		1, 
		first.screenX, 
		first.screenY, 
		first.clientX, 
		first.clientY, 
		false, 
		false, 
		false, 
		false, 
		0, 
		null 
	);
	
	first.target.dispatchEvent(simulatedEvent);
	
	e.preventDefault();
}


/* Sliders Touch Events Convert Run */
(function ($) { 
	if (!checker.ua.ie6 && !checker.ua.ie7 && !checker.ua.ie8) { 
		document.addEventListener('touchstart', function (e) { 
			if (  
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) 
			) { 
				touchHandler(e);
			}
		}, true);
		
		document.addEventListener('touchmove', function (e) { 
			if ( 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) 
			) { 
				touchHandler(e);
			}
		}, true);
		
		document.addEventListener('touchend', function (e) { 
			if ( 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) 
			) { 
				touchHandler(e);
			}
		}, true);
		
		document.addEventListener('touchcancel', function (e) { 
			if ( 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) || 
				($(e.changedTouches[0].target).is(':not(a)') && $(e.changedTouches[0].target).parent().parent().parent().parent().parent().is('li.cmsmsContentSlide.active')) 
			) { 
				touchHandler(e);
			}
		}, true);
	}
} )(jQuery);

