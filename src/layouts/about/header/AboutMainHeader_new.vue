<template>
  <div class="box-header">
  <!-- inner-gap-1 -->
  <div class="inner-gap-1">
    <div class="left">
      <div class="logo"><a href="#"><h1></h1></a></div>
      <!-- btn-prev -->
      <div class="btn-prev">
        <a href="#none" class="btn"></a>
        <span class="gnb-title">HLA genotype decision tool for personalized medicine (HLAtyping)</span>
      </div>
      <!-- //btn-prev -->
      <!-- header-gnb -->
      <div class="header-gnb">
        <ul>
          <li>
            <a href="#none" class="common-hover">About Us</a>
            <ul class="submenu">
              <li><a href="#none">Vision & Mission</a></li>
              <li><a href="#none">Business Area</a></li>
              <li><a href="#none">Team</a></li>
              <li><a href="#none">History</a></li>
              <li><a href="#none">Location</a></li>
            </ul>
          </li>
          <li>
            <a href="#none" class="common-hover">Technology</a>
            <ul class="submenu">
              <li><a href="#none">Platform Technology</a></li>
              <li><a href="#none">LaunchPad Library</a></li>
              <li><a href="#none">AI Bio-Supercom Center</a></li> 
            </ul>
          </li>
          <li>
            <a href="#none" class="common-hover">Service</a><!-- 뎁스 활성화 class="is-active-1d" -->
            <ul class="submenu">
              <li><a href="#none">LaunchPad</a></li> <!-- 뎁스 활성화 class="is-active" -->
              <li><a href="#none">Discovery & Development</a></li>
              <li><a href="#none">SaaS</a></li>
            </ul>
          </li>
          <li>
            <a href="#none" class="common-hover">Newsroom</a>
            <ul class="submenu">
              <li><a href="#none">Notice</a></li>
              <li><a href="#none">News & Event</a></li>
              <li><a href="#none">Patent & Publication</a></li>
            </ul>
          </li>
          <li>
            <a href="#none" class="common-hover">Career</a>
            <ul class="submenu">
              <li><a href="#none">Recruitment</a></li>
              <li><a href="#none">Information</a></li>
            </ul>
          </li>
          <li>
            <a href="#none" class="common-hover">Contact</a>
            <!-- <ul class="submenu" style="display: none;"></ul> -->
          </li>
        </ul>
        <div id="header-line"></div>
      </div>
      <!-- //header-gnb -->
    </div>
    <div class="right-etc">
      <a href="#none" class="button-wd"></a>
      <div class="gap-lang">
        <button class="button-lang"></button>
        <!-- layer-lang -->
        <div class="layer-lang">
          <a href="#none" class="is-active">EN</a>
          <a href="#none">KR</a>
        </div>
        <!-- //layer-lang -->
      </div>
      <button class="button-menu"></button>
      <a href="#none" class="button-search" data-event="layerOpen" data-layerid="ly-search"></a>
    </div>
  </div>
  <!-- //inner-gap-1 -->
</div>
<div class="box-header-dim"></div>
<!-- GNB -->
<!-- **
  메뉴 수정시 아래 파일 2곳 수정 해야 함.
  * MO > 메뉴 gnb.html > class="menu-gap"
  * PC > 메뉴 header.html > class="header-gnb"
  * -->
<!-- **
  * 20240408 이후 UI 변경으로 사용 안함.
  * Scroll Top Down
    - Gnb Logo show
      > class="box-gnb scroll-top-down"

  * Gnb swiper
    - Gnb 앵커 연결
      > id="swiper-gnb-anchor"
    - 앵커 연결 되면
      > class="box-gnb anchor"

  * footer scroll 도착
    - Footer hide
      > class="box-gnb hide"

* -->
<div class="box-gnb" style="display: none;">
  <div class="inner">
    <div class="flex">
      <div class="logo"><a href="#">
          <h1></h1>
        </a></div>
      <!-- btn-prev -->
      <div class="btn-prev">
        <a href="#none" class="btn"></a>
        <span class="gnb-title">HLA genotype decision tool for personalized medicine (HLAtyping)</span>
      </div>
      <!-- //btn-prev -->
      <!-- box-menu -->
      <div class="box-menu">
        <a href="#none" class="button-menu"></a>
      </div>
      <!-- //box-menu -->
      <!-- box-etc -->
      <div class="box-etc">
        <a href="#none" class="button-global"></a>
        <!-- 언어 선택 -->
        <div class="box-layer-global">
          <ul>
            <li><a href="#EN" class="is-active">EN</a></li>
            <li><a href="#KR">KR</a></li>
          </ul>
        </div>
        <!-- //언어 선택 -->
        <a href="#none" class="button-search" data-event="layerOpen" data-layerId="ly-search"></a>
        <a href="#none" class="button-wd"></a>
        <!-- scroll down show -->
        <a href="#none" class="button-logo">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="url(#paint0_linear_3803_64887)" />
            <path
              d="M24.0448 8.83325C24.0448 8.83325 24.7917 9.74474 24.7162 11.6052C24.671 12.738 23.9317 16.3427 18.5568 17.3067C15.0452 17.9369 12.4426 19.1897 10.666 24.111C10.666 24.111 11.0696 20.7464 12.7179 19.0359C16.6784 14.9249 21.0726 17.4943 23.4828 12.9106C24.422 11.1214 24.0411 8.83325 24.0411 8.83325"
              fill="black" />
            <mask id="mask0_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="21" y="12" width="4"
              height="5">
              <path
                d="M23.1336 12.9067C22.7415 12.922 22.3608 13.0785 22.0677 13.3725C21.9078 13.529 21.7898 13.716 21.7137 13.9145C21.5766 14.2658 21.5652 14.6551 21.6794 15.0102C21.7556 15.2468 21.885 15.4683 22.0677 15.6515C22.3608 15.9416 22.7415 16.0981 23.1336 16.1134C23.5714 16.1325 24.013 15.9798 24.3442 15.6515C24.5307 15.4644 24.6564 15.243 24.7325 15.0102C24.8467 14.6551 24.8353 14.2658 24.6982 13.9145C24.6221 13.716 24.5041 13.529 24.3442 13.3725C24.0358 13.0633 23.6209 12.9067 23.206 12.9067C23.1831 12.9067 23.1565 12.9067 23.1336 12.9067Z"
                fill="white" />
            </mask>
            <g mask="url(#mask0_3803_64887)">
              <mask id="mask1_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="21" y="12" width="4"
                height="5">
                <path d="M24.8421 12.9028H21.5645V16.1324H24.8421V12.9028Z" fill="white" />
              </mask>
              <g mask="url(#mask1_3803_64887)">
                <mask id="mask2_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="21" y="12"
                  width="4" height="5">
                  <path d="M24.8421 12.8989H21.5645V16.1285H24.8421V12.8989Z" fill="white" />
                </mask>
                <g mask="url(#mask2_3803_64887)">
                  <rect x="21.543" y="12.8069" width="3.47181" height="3.48152" fill="black" />
                </g>
              </g>
            </g>
            <mask id="mask3_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="16" width="5"
              height="5">
              <path
                d="M14.2171 16.231C13.7564 16.25 13.3034 16.4333 12.9608 16.7807C12.7743 16.9677 12.6334 17.1891 12.5421 17.422C12.3822 17.8343 12.3669 18.2962 12.5002 18.7161C12.5877 18.9948 12.74 19.2582 12.957 19.4758C13.2996 19.8232 13.7564 20.0026 14.2132 20.0217C14.731 20.0446 15.2563 19.8614 15.6408 19.4758C15.8578 19.2582 16.0101 18.9948 16.0976 18.7161C16.2309 18.2962 16.2156 17.8343 16.0557 17.422C15.9644 17.1853 15.8235 16.9677 15.637 16.7807C15.2715 16.4142 14.7843 16.231 14.2932 16.231C14.2627 16.231 14.2361 16.231 14.2094 16.231"
                fill="white" />
            </mask>
            <g mask="url(#mask3_3803_64887)">
              <mask id="mask4_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="16" width="5"
                height="5">
                <path d="M16.2349 16.2271H12.3672V20.0407H16.2349V16.2271Z" fill="white" />
              </mask>
              <g mask="url(#mask4_3803_64887)">
                <mask id="mask5_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="16"
                  width="5" height="5">
                  <path d="M16.2349 16.2261H12.3672V20.0397H16.2349V16.2261Z" fill="white" />
                </mask>
                <g mask="url(#mask5_3803_64887)">
                  <rect x="12.2227" y="16.1033" width="4.01999" height="4.03124" fill="black" />
                </g>
              </g>
            </g>
            <mask id="mask6_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="20" width="4"
              height="3">
              <path
                d="M11.7814 20.0247C11.4806 20.0399 11.1837 20.1583 10.9591 20.3835C10.8373 20.5057 10.7459 20.6507 10.685 20.8034C10.5822 21.0706 10.5708 21.3722 10.6584 21.6471C10.7155 21.8303 10.8183 22.0021 10.9591 22.1433C11.1837 22.3686 11.4806 22.4869 11.7814 22.5022C12.1164 22.5175 12.4628 22.3991 12.7141 22.1433C12.8549 22.0021 12.9577 21.8303 13.0148 21.6471C13.1023 21.3722 13.0909 21.0706 12.9881 20.8034C12.9272 20.6507 12.8397 20.5057 12.7141 20.3835C12.4742 20.143 12.1545 20.0247 11.8347 20.0247C11.8156 20.0247 11.7966 20.0247 11.7814 20.0247Z"
                fill="white" />
            </mask>
            <g mask="url(#mask6_3803_64887)">
              <mask id="mask7_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="20" width="4"
                height="3">
                <path d="M13.098 20.0249H10.5703V22.5177H13.098V20.0249Z" fill="white" />
              </mask>
              <g mask="url(#mask7_3803_64887)">
                <mask id="mask8_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="20"
                  width="4" height="3">
                  <path d="M13.098 20.0254H10.5703V22.5182H13.098V20.0254Z" fill="white" />
                </mask>
                <g mask="url(#mask8_3803_64887)">
                  <rect x="10.3945" y="19.9592" width="2.7409" height="2.56533" fill="black" />
                </g>
              </g>
            </g>
            <mask id="mask9_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="19" y="8" width="9"
              height="3">
              <path
                d="M26.3808 8.67065C26.4226 8.67447 26.4455 8.67829 26.4455 8.67829C25.5699 8.64393 24.2756 8.55613 22.9052 8.75464C21.0018 9.03331 20.3165 9.81207 19.9473 10.1213C20.5297 9.63647 21.9801 9.47614 23.2325 9.73954C24.2984 9.96477 25.6651 10.3274 26.5597 9.68228C27.2525 9.18219 27.7779 8.37671 27.7779 8.37671C27.2259 8.60576 26.7843 8.67065 26.3808 8.66302"
                fill="white" />
            </mask>
            <g mask="url(#mask9_3803_64887)">
              <path d="M27.7778 8.38745H19.9434V10.3382H27.7778V8.38745Z" fill="black" />
            </g>
            <mask id="mask10_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="7" width="12"
              height="10">
              <path
                d="M19.3527 7.70286C17.8604 7.92427 16.3377 8.98934 16.0027 10.5698C15.9836 10.6614 15.9684 10.753 15.957 10.8446C15.8276 11.8104 16.1283 12.6121 16.844 13.4443C16.8478 13.4481 16.8516 13.4558 16.8592 13.4596C16.8668 13.471 16.8744 13.4787 16.8859 13.4901C16.9125 13.5207 16.9392 13.5512 16.9658 13.5817C17.6739 14.3643 18.7398 15.1851 20.1483 16.2082C20.1102 16.17 17.1181 13.1198 18.0317 11.8792C18.0317 11.8792 18.0355 11.8753 18.0393 11.8715C18.0469 11.8601 18.0584 11.8486 18.066 11.841C18.2106 11.6806 18.4466 11.6806 18.6294 11.7952C18.8273 11.9211 20.1673 12.887 20.9553 13.3718C21.4236 13.6619 21.8994 13.0358 21.6368 12.6045C21.4236 12.2609 20.6394 11.6654 20.0874 11.1729C19.5354 10.6767 19.6953 10.3293 19.9465 10.1269C20.3158 9.81773 21.001 9.03897 22.9044 8.76029C24.2749 8.56179 25.573 8.64577 26.4448 8.68394C26.4448 8.68394 26.4219 8.68394 26.38 8.67631C26.0222 8.61905 24.2292 8.33656 23.7115 8.21058C22.775 7.98153 21.4807 7.64941 20.2282 7.64941C19.9313 7.64941 19.6382 7.6685 19.3527 7.71049"
                fill="white" />
            </mask>
            <g mask="url(#mask10_3803_64887)">
              <path d="M22.0242 2.39752L11.6191 11.2119L20.2493 21.4565L30.6543 12.6421L22.0242 2.39752Z"
                fill="black" />
            </g>
            <mask id="mask11_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="8" y="24" width="12"
              height="4">
              <path
                d="M9.05926 25.8825C8.77756 26.291 8.30551 27.1614 8.1875 27.9325C8.19892 27.8981 8.57199 26.7987 10.3231 26.3826C10.9703 26.2299 11.6631 26.2528 12.2989 26.333C12.592 26.333 15.3786 26.5887 16.1475 26.4857C16.985 26.3712 17.853 26.2375 18.4545 25.9092C18.5687 25.852 18.6638 25.7909 18.7514 25.7413C18.8808 25.6649 18.9798 25.5962 19.0559 25.5313C18.3174 25.9741 16.7071 25.8672 14.05 24.7793C13.4828 24.5464 12.8585 24.4319 12.2456 24.4319C10.9627 24.4319 9.71403 24.932 9.05926 25.8825Z"
                fill="white" />
            </mask>
            <g mask="url(#mask11_3803_64887)">
              <path d="M18.6163 22.2848L7.5 24.573L8.62676 30.0775L19.7431 27.7893L18.6163 22.2848Z" fill="black" />
            </g>
            <mask id="mask12_3803_64887" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="10" width="13"
              height="18">
              <path
                d="M16.376 14.7529C17.1031 16.2951 18.0739 17.2762 18.4888 17.8298C18.9037 18.3833 19.9811 19.769 19.9354 20.0134C19.8859 20.2538 18.4012 19.5476 17.5752 19.3377C16.8823 19.1621 16.4065 19.1162 16.2466 19.5133C16.0524 19.979 16.3113 20.2768 17.0879 20.5822C17.8645 20.8914 20.16 21.777 20.3846 21.9183C20.6092 22.0595 20.7691 22.4909 20.6891 23.0024C20.6092 23.5178 20.3275 23.5483 19.4291 23.3689C18.9037 23.262 15.2188 22.0213 14.149 21.6816C13.2278 21.3876 12.9118 22.4947 13.4257 22.8192C13.9892 23.1742 16.4636 24.0828 16.8899 24.2087C18.0396 24.5561 19.155 24.873 19.2578 25.0677C19.3263 25.1936 19.3111 25.3273 19.0598 25.5296C18.9799 25.5907 18.8809 25.6594 18.7553 25.7395C18.6677 25.793 18.5726 25.8502 18.4583 25.9075C17.8531 26.2358 16.9889 26.3732 16.1514 26.4839C15.3824 26.587 12.5959 26.3351 12.3027 26.3312C12.3027 26.3312 16.2237 27.2512 18.6258 27.152C19.9735 27.0947 22.5354 26.7321 23.529 24.4989C24.6025 22.0939 24.0277 19.6049 21.6142 17.4404C21.1307 17.009 20.6358 16.5967 20.1524 16.2035C18.7439 15.1804 17.6779 14.3597 16.9699 13.5771C16.9432 13.5466 16.9166 13.516 16.8899 13.4855C16.8823 13.4779 16.8747 13.4664 16.8633 13.455C16.8595 13.4473 16.8557 13.4435 16.8481 13.4397C16.1324 12.6037 15.8316 11.8058 15.9611 10.84C15.9687 10.756 15.9763 10.672 15.9953 10.5842C15.8202 11.2828 15.5499 12.9816 16.3798 14.7491"
                fill="white" />
            </mask>
            <g mask="url(#mask12_3803_64887)">
              <path d="M24.1634 8.30933L9.22656 11.1775L12.7318 29.5343L27.6686 26.6661L24.1634 8.30933Z"
                fill="black" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_3803_64887" x1="36" y1="37.5" x2="-1.5" y2="3.29999"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#003249" />
                <stop offset="0.14" stop-color="#073B54" />
                <stop offset="0.39" stop-color="#1C5372" />
                <stop offset="0.72" stop-color="#3D7BA2" />
                <stop offset="1" stop-color="#5EA2D2" />
                <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5"
                  dur="1.5s" repeatCount="indefinite"></animateTransform>
              </linearGradient>
            </defs>
          </svg>
        </a>
        <!-- //scroll down show -->
      </div>
      <!-- //box-etc -->
      <!-- box-anchor -->
      <div class="box-anchor">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!-- Swiper Tab 내용은 Html 페이지 마다 배열로 있음. -->
          </div>
        </div>
      </div>
      <!-- //box-anchor -->
      <a href="#none" class="btn-gnb-close"></a>
    </div>
  </div>
</div>
<!-- //GNB -->

<!-- navigation -->
<div id="navigation" class="no-data">
  <div class="box-nav">
    <!-- navigation_link_wrapper -->
    <div class="navigation_link_wrapper">
      <div class="swiper-wrapper">
        <!-- Swiper Tab 내용은 Html 페이지 마다 배열로 있음. -->
      </div>
      <div id="line"></div>
    </div>
    <!-- //navigation_link_wrapper -->
  </div>
</div>
<!-- navigation -->

<!-- MO 전체 메뉴 -->
<div class="all-menu-box">
  <!-- inner -->
  <div class="inner">
    <!-- top-info -->
    <div class="top-info">
      <div class="left">
        <a href="#none"><img src="@/assets/static/images/logo/logo_all_logo.png" alt=""></a>
      </div>
      <div class="right">
        <div class="gap-lang">
          <a href="#none" class="btn-cloud">
            <img src="@/assets/static/images/btn/btn_language.svg" alt="">
          </a>
          <div class="layer-lang">
            <a href="#none" class="is-active">EN</a>
            <a href="#none">KR</a>
          </div>
        </div>
        <div>
          <a href="#none" class="btn-write" data-event="layerOpen" data-layerid="ly-search">
            <img src="@/assets/static/images/btn/btn_serach.svg" alt="">
          </a>
        </div>
        <div>
          <a href="#none" class="btn-menu-close">
            <img src="@/assets/static/images/btn/btn_all_close.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- //top-info -->
    <!-- menu-list -->
    <div class="menu-gap">
      <div class="menu-list">
        <ul>
          <li>
            <a href="#none">About Us</a>
            <ul>
              <li><a href="#none">Vision & Mission</a></li>
              <li><a href="#none">Business Area</a></li>
              <li><a href="#none">Team</a></li>
              <li><a href="#none">History</a></li>
              <li><a href="#none">Location</a></li>
            </ul>
          </li>
          <li>
            <a href="#none">Technology</a>
            <ul>
              <li><a href="#none">Platform Technology</a></li>
              <li><a href="#none">LaunchPad Liobrary</a></li>
              <li><a href="#none">AI Bio-Supercom Center</a></li>
            </ul>
          </li>
          <li class="bottom-line"><!-- 1뎁스 해당 페이지에 들어왔을 때 select class="pc-is-active show-pc show" -->
            <a href="#none">Service</a>
            <ul>
              <li><a href="#none" class="is-active">LaunchPad</a></li>
              <!-- 2뎁스 해당 페이지에 들어왔을 때 select class="is-active" -->
              <li><a href="#none" class="">Discovery & Development</a></li>
              <li><a href="#none">SaaS</a></li>
            </ul>
          </li>
          <li>
            <a href="#none" class="font-size16">Newsroom</a>
            <ul>
              <li><a href="#none">Notice</a></li>
              <!-- <li><a href="#none">Disclosure Information</a></li> -->
              <li><a href="#none">News & Event</a></li>
              <li><a href="#none">Patent & Publication</a></li>
            </ul>
          </li>
          <li>
            <a href="#none" class="font-size16">Careers</a>
            <ul>
              <li><a href="#none">Recruitment</a></li>
              <li><a href="#none">Information</a></li>
            </ul>
          </li>
          <li>
            <a href="#none" class="no-link-icon font-size16">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- //menu-list -->
  </div>
  <!-- //inner -->
  <div class="link-f">
    <a href="#Linkedin">Linkedin</a>
    <a href="#Facebook">Facebook</a>
  </div>
  <div class="dim"></div>
</div>
<!-- //MO 전체 메뉴 -->

<!-- 검색 레이어 팝업 -->
<!-- 일반 팝업 -->
<div class="box-layer layer-search" id="ly-search">
  <div class="inner-layer" tabindex="0">
    <div class="gap">
      <div class="box">
        <!-- 팝업 내용 -->
        <div class="pop-innerGap">
          <div class="input-search-q">
            <input type="text" placeholder="Search">
            <a href="#none"></a>
            <button class="btn-search-close"></button>
          </div>
          <!-- ct-search -->
          <div class="ct-search">
            <h5>Quickly experience the service</h5>
            <ul>
              <li><a href="#none1">LaunchPad service</a></li>
              <li><a href="#none1">Discovery & Development</a></li>
              <li><a href="#none1">SaaS</a></li>
            </ul>
          </div>
          <!-- //ct-search -->
        </div>
        <!-- //팝업 내용 -->
      </div>
    </div>
  </div>
  <div class="verticalAlign"></div>
  <button data-event="layerClose">닫기</button>
</div>
<!-- //일반 팝업 -->
<!-- //검색 레이어 팝업 -->
</template>

<script setup>
import { reactive } from 'vue';
import AboutRightMenu from '@/layouts/about/header/AboutRightMenu.vue';
import { useAboutStore } from '@/stores/about';
import { useAbout } from '@/compositions/useAbout';
import { ABOUT_ROUTES } from '@/constants/route';

const { onScrollTop } = useAbout();

/* 
  aboutStore 사용
  1.네비게이션 정보를 가져온다.
  2.현재페이지의 정보와 일치하면 is-active 클래스를 부여한다.
*/
const aboutStore = useAboutStore();

// 모바일 버전 네비게이션 상태
const nav = reactive({
  open: false
});

// 모바일 버전 네비게이션 open
const onOpenNav = () => {
  nav.open = true;
};

// 모바일 버전 네비게이션 close
const onCloseNav = () => {
  nav.open = false;
};
</script>