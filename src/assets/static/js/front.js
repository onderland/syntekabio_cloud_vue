if (window.console == undefined) { console = { log: () => { } } }

/* device */
(function (window, undefined) {
	"use strict";
	/**
	 * @description device 분기
	 * @modify
	*/
	var device = {
		/** 플러그인명 */
		bind: device,
		initialize: function () {
			const me = this;

			me._resize();
		},
		_resize: () => {
			const body = document.querySelector('body');

			const deviceCall = () => {
				window.innerWidth < 1024 ? ( // mobile
					body.classList.remove('pc'),
					body.classList.add('mobile')
				) : ( // pc
					body.classList.remove('mobile'),
					body.classList.add('pc')
				)
			}

			deviceCall();

			window.addEventListener('resize', () => {
				deviceCall();
			})
		}
	};

	window.device = device;
}(window));

/* header */
(function (window, undefined) {
	"use strict";
	/**
	 * @description header
	 * @modify
	*/
	var header = {
		/** 플러그인명 */
		bind: header,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			// 비동기 selector 사용 금지
		},
		initialize: function () {
			const me = this;

			me._scroll();
			me._hover();
			me._click();
		},
		_hover: () => {
			const headerGnb = '.box-header';
		},
		_scroll: () => {
			const boxHeader = document.querySelector('.box-header');
		},
		_click: () => {
			const me = this,
				tg = '.hamburger';
		}
	};

	window.header = header;
}(window));

// Footer
(function (window, undefined) {
	"use strict";
	/**
	 * @description Footer
	 * @modify
	*/
	var footer = {
		/** 플러그인명 */
		bind: footer,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			// 비동기 selector 사용 금지
		},
		initialize: function () {
			const me = this;

			me._click(); // family
		},
		_click: () => {
			const tg = '[data-event="selectBox"]',
				selectBoxs = document.querySelectorAll(tg);
		}
	};

	window.footer = footer;
}(window));

/* selectBox */
(function (window, undefined) {
	"use strict";
	/**
	 * @description selectBox
	 * @modify
	*/
	var selectBox = {
		/** 플러그인명 */
		bind: selectBox,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			tg: '[data-event="commonSelectBox"]'
		},
		initialize: function () {
			const me = this;

			me._click();
		},
		_click: function () {
			const me = this,
				tg = me.selectors.tg;

			const selectBoxs = document.querySelectorAll(tg);

			for (const selectBox of selectBoxs) {
				selectBox.querySelector(tg + ' > .button').addEventListener('click', (e) => {
					let parent = e.target.parentElement;
					e.preventDefault()

					if (!parent.classList.contains('is-active')) {

						selectBoxs.forEach(e => {
							if (e.classList.contains('is-active')) {
								e.classList.remove('is-active');
							}
						});

						if (!parent.classList.contains('disabled')) {
							parent.classList.add('is-active');
						}
					} else {
						parent.classList.remove('is-active');
					}
				})
			}

			document.querySelectorAll(tg + ' > ul > li button').forEach(e => {
				e.onclick = () => {

					e.parentNode.parentNode.parentNode.querySelector(tg + ' > .button').innerText = e.innerText;
					e.parentNode.parentNode.parentNode.classList.add('is-selected');

					document.querySelectorAll(tg + ' > ul > li').forEach((e) => {
						e.classList.remove('is-active');
					});
					e.parentNode.classList.add('is-active');
				}
			});

			window.addEventListener('click', (e) => {
				if (!e.target.classList.contains('button')) {
					selectBoxs.forEach(e => {
						e.classList.remove('is-active');
					});
				}
			})
		}
	};

	window.selectBox = selectBox;
}(window));

/* checkboxAll */
(function (window, undefined) {
	"use strict";
	/**
	 * @description checkboxAll
	 * @modify
	*/
	var checkboxAll = {
		/** 플러그인명 */
		bind: checkboxAll,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			tg: '[data-event="checkboxAll"]',
			tg2: '[data-event="checkbox"]'
		},
		initialize: function () {
			const me = this;

			me._click();
		},
		_click: function () {
			const me = this,
				tg = me.selectors.tg,
				tg2 = me.selectors.tg2;

			let ck = (st, item) => {
				st == "on" ? item.checked = true : item.checked = false;
			}

			document.querySelectorAll(tg + ' input').forEach(e => {
				e.onclick = (e) => {
					document.querySelectorAll('input[name="' + e.target.name + '"]').forEach(item => {
						e.target.checked ? ck('on', item) : ck('off', item);
					});
				}
			});

			document.querySelectorAll(tg2 + ' input').forEach(e => {
				e.onclick = (e) => {
					if (document.querySelectorAll('[data-event="checkbox"] input[name="' + e.target.name + '"]').length == document.querySelectorAll('[data-event="checkbox"] input[name="' + e.target.name + '"]:checked').length) {
						ck('on', document.querySelector('[data-event="checkboxAll"] input[name="' + e.target.name + '"]'));
					} else {
						ck('off', document.querySelector('[data-event="checkboxAll"] input[name="' + e.target.name + '"]'));
					}
				}
			});
		}
	};

	window.checkboxAll = checkboxAll;
}(window));

/* Layer popup */
(function (window, undefined) {
	"use strict";
	/**
	 * @description Layer popup
	 * @modify
	*/
	var layerPopup = {
		/** 플러그인명 */
		bind: layerPopup,
		/** 기본 옵션값 선언부 */
		defaults: {
		},
		/** selector 선언부 */
		selectors: {
			openBtn: '[data-event="layerOpen"]',
			closeBtn: '[data-event="layerClose"]'
		},
		initialize: function () {
			let me = this;

			me._click();
		},
		_click: function () {
			const me = this,
				openBtn = me.selectors.openBtn,
				closeBtn = me.selectors.closeBtn;

			const openBtns = document.querySelectorAll(openBtn),
				closeBtns = document.querySelectorAll(closeBtn);

			for (const tg of openBtns) {
				tg.onclick = e => {
					let currentTarget = e.currentTarget.getAttribute('data-layerId');

					//document.querySelector('#' + currentTarget).style.display = 'block';
					document.querySelector('#' + currentTarget).classList.add('show');
					document.querySelector('#' + currentTarget).scrollTo(0, 0);
					document.body.classList.add('on');
				}
			};

			for (const tg of closeBtns) {
				tg.onclick = e => {
					layerClose();
				}
			};

			document.querySelectorAll('.box-layer').forEach(e => {
				e.onclick = e => {
					if (e.target.classList.contains('box-layer')) {
						layerClose();
					}
				}
			});

			const layerClose = function () {
				document.querySelectorAll('.box-layer').forEach(e => {
					e.classList.remove('show');
				});

				document.body.classList.remove('on');
			}
		}
	};

	window.layerPopup = layerPopup;
}(window));

/**
 * front.js 하단에 위치
 */
//  XMLHttpRequest js 에서 가져오는 DOM 관련 이벤트는 onload에 넣기.
window.addEventListener('load', () => {
	setTimeout(() => {
		header.initialize();
		footer.initialize();

	}, 300)

})

// 공통 js 호출
device.initialize();