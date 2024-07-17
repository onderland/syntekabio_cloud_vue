<template>
  <!-- <footer class="stb-about-footer" id="stb-about-footer">
    <div class="footer-component">
      <div class="footer-row">
        <div class="footer-mail">
          <p class="footer-text stb-cursor-point">
            <i class="icon-mail"></i>bd@syntekabio.com
          </p>
          <p class="footer-text stb-cursor-point">
            <i class="icon-mail"></i>admin.usa@syntekabio.com
          </p>
        </div>

        <div class="footer-phone">
          <p class="footer-text"><i class="icon-call"></i>+82-70-7683-1458</p>
          <p class="footer-text"><i class="icon-call"></i>+1-212-371-2544</p>
        </div>

        <div class="footer-address">
          <p class="footer-text">
            {{ t('footer.address.list[0]') }}
          </p>
          <p class="footer-text">
            {{ t('footer.address.list[1]') }}
          </p>
        </div>
      </div>

      <hr class="line" />

      <div class="footer-row">
        <router-link
          class="footer-terms"
          :to="{ name: 'terms' }"
          @click="onScrollTop()"
        >
          {{ t('footer.terms.list[0]') }}
        </router-link>
        <span class="footer-terms">|</span>
        <router-link
          class="footer-terms"
          :to="{ name: 'privacy' }"
          @click="onScrollTop()"
        >
          {{ t('footer.terms.list[1]') }}
        </router-link>
      </div>

      <div class="footer-row">
        <p class="footer-text">
          Copyright 2022 by Syntekabio, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer> -->
  <div class="box-footer">
    <div class="inner">
      <div class="inner-gap-1">
        <ul>
          <li data-aos="fade-up" data-aos-offset="200">
            <div class="box">
              <p class="text-1">Expo-ro 1, Expo Tower #1903, Yuseong-gu, Daejeon, Republic of Korea</p>
              <p class="text-2"><a href="tel:+82-70-7663-0958;">+82-70-7663-0958</a></p>
              <p class="text-2"><a href="mailto:bd@syntekabio.com">bd@syntekabio.com</a></p>
              <p class="text-3">Business Center</p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-offset="200">
            <div class="box">
              <p class="text-1">425 Fifth Avenue Suite 505 New York, <br class="mo-show">NY, USA #10016</p>
              <p class="text-2"><a href="tel:+1-212-371-2544;">+1-212-371-2544</a></p>
              <p class="text-2"><a href="mailto:admin.usa@syntekabio.com">admin.usa@syntekabio.com</a></p>
              <p class="text-3">Syntekabio USA Inc.</p>
            </div>
          </li>
        </ul>
        <ul data-aos="fade-down" data-aos-offset="-100">
          <li class="last">
            <div class="box">
              <div class="box-link">
                <div class="link">
                  <router-link :to="{ name: 'privacy' }" @click="onScrollTop()">
                    {{ t('footer.terms.list[0]') }}
                  </router-link>
                  <router-link :to="{ name: 'terms' }" @click="onScrollTop()">
                    {{ t('footer.terms.list[1]') }}
                  </router-link>
                  <a href="https://www.syntekabio.com/en" target="_blank" class="last">
                    {{ t('footer.terms.list[2]') }}
                  </a>
                </div>
              </div>
              <div class="flex">
                <p class="text-2 logo">
                  <img src="@/assets/static/images/logo/footer_logo.svg" alt="" class="logo">
                </p>
                <p class="text-3">© 2024 Syntekabio, Inc. All rights reserved.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 마우스 커서 -->
  <div class="window-cursor" style="display: none;">
    <img src="@/assets/static/images/btn/arrow-right.png" alt="" class="swiper-button-cion">
  </div>
  <!-- //마우스 커서 -->

  <!-- footer E-mail layerpopup -->
  <div class="box-layer footer-email" id="email-layer">
    <div class="inner-layer" tabindex="0">
      <div class="gap">
        <div class="box">
          <!-- 팝업 내용 -->
          <div class="box-inner-email">
            <p class="text-1">Refusal of unauthorized <br class="mo-show">e-mail collection</p>
            <p class="text-2">Syntekabio Co., Ltd. refuses unauthorized collection of email addresses posted on this
              website in accordance with Article 50 of the Act on Promotion of Information and Communications Network
              Utilization and Information Protection, etc. Please note that violation of this may result in criminal
              punishment.</p>
          </div>
          <!-- //팝업 내용 -->
        </div>
      </div>
    </div>
    <div class="verticalAlign"></div>
    <button data-event="layerClose">닫기</button>
  </div>
  <!-- //footer E-mail layerpopup -->
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useAbout } from '@/compositions/useAbout';

const { t } = useI18n();

const { onScrollTop } = useAbout();
</script>

<style scoped>
#stb-about-footer {
  width: 100%;
  z-index: 1;
  background-color: var(--color-gray-8);
}

#stb-about-footer.admin {
  background-color: transparent;
}

#stb-about-footer .footer-component {
  padding: 0;
  margin-top: auto;
}

#stb-about-footer .footer-component .footer-column {
  display: flex;
  flex-flow: column wrap;
  gap: 8px;
}

#stb-about-footer .footer-component.footer-copy {
  justify-content: center;
  padding-top: 32px;
  border-top: 1px solid var(--color-gray-3);
}

#stb-about-footer .footer-component {
  flex-flow: column wrap;
  font-size: 13px;
  color: var(--stb-footer-color);
  padding: 24px 0 32px;
}

#stb-about-footer p {
  font-size: 13px;
}

#stb-about-footer .footer-component,
#stb-about-footer .footer-component .footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#stb-about-footer .footer-component .line {
  display: block;
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid var(--color-gray-6);
  padding: 0;
  margin: 0;
  margin-bottom: 32px;
}

#stb-about-footer .footer-component .footer-row .footer-mail {
  display: flex;
  flex-flow: column wrap;
  flex: 1 0 auto;
  margin-right: 24px;
  padding-bottom: 8px;
}

#stb-about-footer .footer-component .footer-row .footer-mail p {
  margin-bottom: 8px;
}

#stb-about-footer .footer-component .footer-row .footer-phone {
  display: flex;
  flex-flow: column wrap;
  flex: 1 0 auto;
  margin-right: 24px;
  padding-bottom: 8px;
}

#stb-about-footer .footer-component .footer-row .footer-phone p {
  margin-bottom: 8px;
}

#stb-about-footer .footer-component .footer-row .footer-address {
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
  padding-bottom: 8px;
}

#stb-about-footer .footer-component .footer-row .footer-address p {
  margin-bottom: 8px;
}

#stb-about-footer .footer-component .footer-terms {
  margin-bottom: 8px;
  padding: 0 2px;
}

#stb-about-footer .footer-address .icon-call {
  background-image: url(../../../assets/stb/images/common/icon/ic_phone_gray.svg);
}

#stb-about-footer .footer-address .icon-mail {
  background-image: url(../../../assets/stb/images/common/icon/ic_mail_gray.svg);
}

#stb-about-footer .footer-address {
  display: flex;
}

#stb-about-footer .footer-address .icon-call {
  width: 18px;
  height: 18px;
  background-image: var(--stb-footer-call);
  margin-right: 8px;
}

#stb-about-footer .footer-address .icon-mail {
  width: 18px;
  height: 18px;
  background-image: var(--stb-footer-mail);
  margin-right: 8px;
}

@media (max-width: 996px) {
  #stb-about-footer .footer-component .footer-row {
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  #stb-about-footer .footer-component .footer-row p {
    text-align: center;
  }
}
</style>
