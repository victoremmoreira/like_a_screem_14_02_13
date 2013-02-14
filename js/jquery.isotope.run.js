jQuery(document).ready(function () { 
	(function ($) { 
		var container = $('section.portfolio_container'), 
			blogContainer = $('.blog .entry-summary');
		
		
		function getNumbColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 1582) {
				columnNumb = 6;
			} else if (winWidth > 1262) {
				columnNumb = 5;
			} else if (winWidth > 1006) {
				columnNumb = 4;
			} else if (winWidth > 750) {
				columnNumb = 3;
			} else if (winWidth > 383) {
				columnNumb = 2;
			}
			
			
			return columnNumb;
		}
		
		
		function setColumnWidth() { 
			var winWidth = $(window).width(), 
				columnNumb = getNumbColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			
			container.find('.portfolio').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				} );
			} );
		}
		
		
		
		function reArrangeProjects() { 
			setColumnWidth();
			
			
			container.isotope('reLayout');
		}
		
		
		
		container.imagesLoaded(function () { 
			setColumnWidth();
			
			
			container.isotope( { 
				itemSelector : 'article.portfolio', 
				layoutMode : 'fitRows', 
				resizable : false 
			} );
		} );
		
		
		
		$('.pj_sort .p_filter a').click(function () { 
			var selector = $(this).attr('data-filter');
			
			
			$(this).parent().parent().find('> li.current').removeClass('current');
			
			
			$(this).parent().addClass('current');
			
			
			container.isotope( { 
				filter : selector 
			} );
			
			
			setTimeout(function () { 
				reArrangeProjects();
			}, 300);
			
			
			return false;
		} );
		
		
		
		function reArrangePosts() { 
			blogContainer.isotope('reLayout');
		}
		
		
		
		blogContainer.isotope( { 
			itemSelector : 'article.post', 
			layoutMode : 'masonry', 
			resizable : false 
		} );
		
		
		
		$(window).on('debouncedresize', function () { 
			reArrangeProjects();
			
			
			reArrangePosts();
		} );
	} )(jQuery);
} );

