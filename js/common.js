$(function() {

	$(window).scroll(function() {
		var $top = $('.header__top'),
				topHeight = $top.height(),
				$target = $('.header__bottom');

		if($(this).scrollTop() > topHeight){
				//$('body').css('position', 'relative');
				$target.addClass('header__bottom--abs');
		}else{
			$target.removeClass('header__bottom--abs');
		}
	});
		

	$(document).ready(function() {

		$('.shop-product__item').matchHeight();
		
		var $menu = $("#my-menu").mmenu({
			extensions: [ 'theme-dark', 'effect-menu-slide', 'pagedim-black'],
			navbar: {
				title: "Меню"
			},

			offCanvas: {
				position: "left"
			}
		});

		var $icon = $(".toggle-mnu"),
		api = $menu.data( "mmenu" );

		api.bind("open:start", function($panel){
			$icon.addClass('on');
			$('.header-menu--mobile').removeClass('hidden');
		});
		api.bind('close:finish', function() {
			$icon.removeClass('on');
			$('.header-menu--mobile').addClass('hidden');
		});

		$("#designer-products, #similar-products").owlCarousel({
			items: 6,
			loop: true,
			margin: 36,
			nav: true,
			navText: [],
			// autoplay: true,
			responsiveClass: true,
			responsive:{
				0:{
					items:1,
					nav:true,
					margin: 0
				},
				480:{
					items:1,
					nav:true
					
				},
				768:{
					items:3,
					nav:true
				},

				800:{
					items:4,
					nav:true
				},
				992:{
					items:5,
					nav:true,
					
				},
				1140:{
					items:6,
					nav:true,
					
				}
			}
		});

		$("#other-looks").owlCarousel({
			items: 3,
			loop: true,
			margin: 36,
			nav: true,
			// center: true,
			navText: [],
			onInitialized: callback,
		  onDragged: dragged,
		  onDrag: drag,
		  onTranslated: translated,
			autoplay: true,
			responsiveClass: true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				480:{
					items:1,
					nav:true
					

				},
				768:{
					items:3,
					nav:true,
					margin: 20
					
				},
				992:{
					items:3,
					nav:true,
					margin: 0
					
					
				},
				1140:{
					items:3,
					nav:true
					
				}
			}
		});

		function translated() {
		scaleItem();
		}
		function callback(){
			scaleItem();
		}
		function dragged(){
			scaleItem();
		}
		function drag(){
			scaleItem();
		}
		function scaleItem(){
			var items = $('#other-looks .owl-item.active'),
					width = document.body.clientWidth;
				
				
				$stageOuter = $('#objects-car .owl-stage-outer');
				
				if(width > 920){

							
					items.each(function(i, elem){
						var item = $(this);
						
						
							if(i == 1){
								item.addClass('owl-item-scalled');
								item.siblings().removeClass('owl-item-scalled');

								
							}
						
						
					});
				}else{
					
					items.each(function(i, elem){
						var item = $(this);
						item.removeClass('owl-item-scalled');
					
				});
			}
		}
	

	// Tooltipster
	var tooltipCart = $('.tooltip-cart').tooltipster({
		contentCloning: true,
		trigger: 'custom',
		// repositionOnScroll: true,
		functionPosition: function(instance, helper, position){
        position.side = 'bottom';

        var container = document.querySelector('.header__info-right'),
        	containerRight = container.getBoundingClientRect().right;
        var summ = position.coord.left + position.size.width,
        	difference = summ - containerRight;
      
        position.coord.top += 25,
        position.coord.left -= difference;
       // position.coord.top = helper.geo.window.size.height/2 - position.size.height/2;
       // console.log('origin-right ' + helper.geo.origin.offset.right);
       // console.log('tooltip-left ' + position.coord.left);
       // console.log('tooltip-width ' + position.size.width);
       // console.log('tooltip-width + tooltip-left' + summ);
       // console.log('origin-width ' + helper.geo.origin.size.width);
       
        


        return position;
    },
		functionReady: function() {
			setTimeout(function() {
				document.body.addEventListener('click', methodsTooltipListener);
				
					
			}, 300);

			if($('.tooltipster-base #tooltip-delivery_content').length !== 0 || $('.tooltipster-base .popup-sizes').length !== 0){
					$('.tooltipster-base').find('.tooltipster-arrow').css('display', 'none');
				}
			},
		
		functionAfter: function() {
			
		
				document.body.removeEventListener('click', methodsTooltipListener);

		}
		  // contentAsHTML: true
	});
	var tooltip = $('.tooltip').tooltipster({
		contentCloning: true,
		trigger: 'custom',
		// repositionOnScroll: true,
		 functionPosition: function(instance, helper, position){
        // position.coord.top += 25,
        
        
      
       if(position.coord.top < 0){
       	// position.coord.top == 0;
        // position.side = 'bottom';
       }else{
       	
       	// position.coord.top = helper.geo.origin.windowOffset.top - position.size.height;
       }
       console.log(position.coord.top);
       // console.log(document.querySelector('.tooltipster-base'));
       // console.log('offset top ' + $('.tooltipster-base').offset().top);
       // console.log('window scroll top ' +  $(window).scrollTop());
        


        return position;
    },
		functionReady: function() {
			setTimeout(function() {
				document.body.addEventListener('click', methodsTooltipListener);
				
			}, 300);

			if($('.tooltipster-base #tooltip-delivery_content').length !== 0 || $('.tooltipster-base .popup-sizes').length !== 0  ){
					
					$('.tooltipster-base').find('.tooltipster-arrow').css('display', 'none');
				}
			},
		
		functionAfter: function() {
			
		
				document.body.removeEventListener('click', methodsTooltipListener);

		}
		  // contentAsHTML: true
	});

	
	$('#tooltip-delivery').click(function(e) {
		$('#tooltip-delivery').tooltipster('open');
	});
	
	$('#tooltip-sizes').click(function(e) {
		$('#tooltip-sizes').tooltipster('open');
	});

	$('.header__cart').click(function(e) {
		$('#tooltip-cart').tooltipster('open');

	});

	function cartTooltip(elem){

	}
	function methodsTooltipListener(e){
		console.log(e.target.className);
			 if(e.target.className === 'ico-close'){
			 	tooltip.tooltipster('close');
			 }else{

			 if (($(e.target).closest(".popup").length)){
			 	return;
			 }
			}

		 	tooltip.tooltipster('close');
		 	tooltipCart.tooltipster('close');

		e.stopPropagation();
	}

	// end of Tooltipster

	});

	// ikSelect

	$('.select-quantity').ikSelect({
			autoWidth: true,
			
			onShow: function (inst) {
				
				$('.ik_select_link_focus .ik_select_link_text').addClass('lk-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_focus .ik_select_link_text').removeClass('lk-opened');
			}
		});
	
	$('.select-color').ikSelect({
			//autoWidth: true,
			dynamicWidth: true,
			customClass: 'color',
			ddCustomClass: 'color-dropdown',
			//linkCustomClass: 'color-item',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('lk-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('lk-opened');
			}
	});

	$('.select-size').ikSelect({
			//autoWidth: true,
			//dynamicWidth: true,
			customClass: 'size',
			ddCustomClass: 'size-dropdown',
			extraWidth: 30,
			//linkCustomClass: 'color-item',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('size-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('size-opened');
			}
	});

	$('.prod-select-quantity').ikSelect({
			//autoWidth: true,
			dynamicWidth: true,
			customClass: 'quantity',
			ddCustomClass: 'quantity-dropdown',
			extraWidth: 30,
			//linkCustomClass: 'color-item',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('quantity-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('quantity-opened');
			},
			// onShow: function (inst) {
			// 	$('.quantity-dropdown').width($('.product-card__top-quantity .gray').width()); 
			// }
	});

	$('.filter-select__color').ikSelect({
			// autoWidth: true,
			dynamicWidth: true,
			customClass: 'select-color',
			ddCustomClass: 'select-color-dropdown',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('select-color-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('select-color-opened');
			},
			// extraWidth: 30,
		});

	$('.filter-select__size').ikSelect({
			// autoWidth: true,
			dynamicWidth: true,
			customClass: 'select-size',
			ddCustomClass: 'select-size-dropdown',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('select-size-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('select-size-opened');
			},
			// extraWidth: 30,
		});

	$('.filter-select__range').ikSelect({
			// autoWidth: true,
			dynamicWidth: true,
			customClass: 'select-range',
			ddCustomClass: 'select-range-dropdown',
			onShow: function (inst) {
				
				$('.ik_select_link_text').addClass('select-range-opened');
			},
			onHide: function (inst) {
				$('.ik_select_link_text').removeClass('select-range-opened');
			},
			// extraWidth: 30,
		});
	
	$('.look-parameters__unit-select select').ikSelect({
			// autoWidth: true,
			dynamicWidth: true,
			customClass: 'look-parameters',
			ddCustomClass: 'look-parameters-dropdown',
			onShow: function (inst) {
				
				
			},
			onHide: function (inst) {
				
			},
			// extraWidth: 30,
		});
	
	// end of ikSelect

	$('.cart__tip-header').click(function(e) {
		e.preventDefault();
		var $parent = $(this).closest('.cart__tip'),
				$tipBody = $parent.find('.cart__tip-body'),
				$chevron = $parent.find('.cart__tip-chevron');
		$tipBody.stop(true, true).slideToggle(300);
		$parent.siblings().find('.cart__tip-body').slideUp(300);
		$parent.siblings()
					.find('.cart__tip-chevron')
					.removeClass('chevron-up');
		$chevron.toggleClass('chevron-up');
	});

	$('.socials-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('socials-toggle--open')
				.parent()
				.find('.socials-list')
				.fadeToggle();
	});

	var cartItemRender = (function() {

		return {
			init: function() {
				
				cartItemRender.regListeners();
			},

			regListeners: function() {
				$('.cart__item-close').on('click', cartItemRender.closeButtonListener);
				$('.add-to-cart').on('click', cartItemRender.addButtonListener);
				$('.look-parameters__unit-top .ico-close').on('click', cartItemRender.looKContentCloseHandler);
			},

			closeButtonListener: function(e) {
				e.preventDefault();
				var $parent = $(this).closest('.cart__list'),
						$currentItem = $(this).closest('.cart__item');
						

				if(cartItemRender.closeConfirm()){
					$currentItem.remove();
				}else{
					return;
				}
			},

			looKContentCloseHandler: function(e) {
					var $list = $(this).closest('.acordeon-subitem'),
							$unit = $(this).closest('.look-parameters__unit');

					if(cartItemRender.closeConfirm()){
						$unit.remove();
					}else{
						return;
					}
			},
		

			addButtonListener: function(e) {
				var $cartCounter = $('.header__cart .header__cart-count');
						// $cartTooltipCounter = $('.popup-cart .popup-cart__count');	
				$cartCounter.text(+$cartCounter.text() + 1);
				// $cartTooltipCounter.text(+$cartTooltipCounter.text() + 1);

				$('#tooltip-cart').tooltipster('open');
				
				setTimeout(function() {
						$('#tooltip-cart').tooltipster('close');
				}, 3000)
			},

			closeConfirm: function() {
				var flag = confirm('Действительно хотите удалить?');
				return flag;
			}
		}
	})();
	cartItemRender.init();

	// Tabs-----------------------------------
		// var $tabs = $('.tabs__link');

		// $tabs.on('click', function(e) {
		// 	e.preventDefault();
		// 	var $th = $(this),
		// 		$href = $th.attr('href'),
		// 		$parent = $th.parent();
		// 	$parent.addClass('tabs__item--active')
		// 			.siblings()
		// 			.removeClass('tabs__item--active');
							
		// 	$($href).removeClass('hidden')
		// 			.siblings()
		// 			.addClass('hidden');
			
		// });
	// end Tabs-----------------------------------

	// Accordeon-----------------------------------
		var $handlers = $('.acordeon-link');
		$handlers.click(function(e) {
			e.preventDefault();
			console.log(e.target.className);
			var $currentItem = $(this).closest('.acordeon-item');
			if($currentItem.hasClass('acordeon-item-with-sublist')){
			
			$currentItem.find('.acordeon-sublist')
					.stop(true, true)
					.slideToggle();
			$currentItem.toggleClass('sidebar-menu__item--active');
			$currentItem.siblings()
						.removeClass('sidebar-menu__item--active')
						.find('.acordeon-sublist')
						.stop(true, true)
						.slideUp();
				
			$currentItem.find('.filter-link-bottom')
						.toggleClass('filter-link-bottom--active');
			$currentItem.siblings().find('.filter-link-bottom').removeClass('filter-link-bottom--active');
			
			}else{
				return;
			}
		});
	// end Accordeon-----------------------------------

	// To top-----------------------------------
		$('.to-top').click(function(){
			$('html, body').animate({scrollTop: 0}, 800);
		});
	// end -----------------------------------
	
	// Fotorama-----------------------------------------
		var fotorama = $('.fotorama').fotorama({
			thumbborderwidth: 0
		}).data('fotorama');

		// $('.fa-chevron-left').click(function(){
		// 	fotorama.show('<');

		// });
		// $('.fa-chevron-right').click(function(){
		// 	fotorama.show('>');                        
		// });
	//end Fotorama-----------------------------------------

});

