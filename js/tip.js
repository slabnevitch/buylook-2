// Tippy
		var tippy = new tippy(document.querySelector('#methods-tooltip'), {  //туллтип с опциями
		  html:'#methods-tooltip-content',
		  arrow: true,
		  animation: 'fade',
		  trigger: 'manual',
		  hideOnClick: 'persistent',
		  //interactive: true,

		  onShown: function() {


		  		var tool = document.querySelector('.ico-close');
				tool.addEventListener('click', function(e) {
					//alert(e.target.className);
					console.log(e.currentTarget);
					if(e.target.className == 'ico-close'){
						tippy.hide(popper);
					}

				});

				}
			});

		 const el = document.querySelector('#methods-tooltip');

		const popper = tippy.getPopperElement(el);

		var skot = document.querySelector('#methods-tooltip');
		alert(skot);
		document.querySelector('#methods-tooltip').onclick = function(e) {
			e.preventDefault();
			tippy.show(popper);
			
		}
	// end of Tippy