<template>
  <AppSubTop additionalClass="bg-1" title="Service" :titleDelay="200" :textDelay="400"
    text="AI Drug discovery<br class='mo-show'> at your fingertips" />
  <SwiperComponent :items="swiperItems" ref="swiperRef" @swiper="onSwiper" @updateActive="updateActive" />
  <div class="gap-ser">
    <div class="top-Text">
      <h3 data-aos="fade-up">Overview</h3>
      <p class="text-1" data-aos="fade-up">Our company has functionally segmented the entire process of AI drug
        development and clinical
        genomics analysis into step-by-step modules and created the "CLOUD-SaaS” service applying CLOUD supercomputing
        automation processes. Each service is readily accessible on our STB CLOUD website.</p>
    </div>
    <div class="list-icon">
      <div class="flex">
        <img src="@/assets/static/images/new/icon_ser_1.svg" alt="" data-aos="fade-up">
        <p class="text-1" data-aos="fade-up">Customized <br>Services</p>
        <p class="text-2" data-aos="fade-up">We provide customized services according to the purpose or needs of the
          study. Users can request additional computing resources or specific analytical tools as needed, which are
          supported by experts at Cintecabio.</p>
      </div>
      <div class="flex">
        <img src="@/assets/static/images/new/icon_ser_2.svg" alt="" data-aos="fade-up">
        <p class="text-1" data-aos="fade-up">Various Analysis<br> Tools</p>
        <p class="text-2" data-aos="fade-up">Integrating and providing analysis tools that are widely used in various
          biotechnology research fields, including genome analysis, transcriptome analysis, and protein body analysis.
          This allows users to perform in-depth analysis of various biological data.</p>
      </div>
      <div class="flex">
        <img src="@/assets/static/images/new/icon_ser_3.svg" alt="" data-aos="fade-up" class="icon-3">
        <p class="text-1" data-aos="fade-up">Security and data<br> management</p>
        <p class="text-2" data-aos="fade-up">Data security is one of the key elements of the Syntekar cloud. Your data
          is securely encrypted and stored, and access control and audit logs ensure transparency in data management.
        </p>
      </div>
    </div>
    <!-- box-card-link -->
    <div class="box-card-link" id="best-pose">
      <h3 data-aos="fade-up">Best-pose/HIT-SCR</h3>
      <div class="flex">
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_1.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">Auto-BP (Binding Pose)</p>
            <p class="text-2" data-aos="fade-up">A promising tool for expediting drug discovery</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_2.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">3bm GPT</p>
            <p class="text-2" data-aos="fade-up">AI-powered interpretation and analysis of protein-ligand binding
              interactions</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_3.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">LFS HIT-SCR</p>
            <p class="text-2" data-aos="fade-up">A novel, quickly, and reliable discovery solution for HIT screening</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_4.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">Zinc HIT-SCR</p>
            <p class="text-2" data-aos="fade-up">Easy, fast, and extensive discovery solution for HIT screening</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_5.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">DR HIT-SCR</p>
            <p class="text-2" data-aos="fade-up">AI-enabled Drug Discovery Solution for Drug Repurposing</p>
          </a>
        </div>
      </div>
    </div>
    <!-- //box-card-link -->
    <!-- box-card-link -->
    <div class="box-card-link" id="neoantigen">
      <h3 data-aos="fade-up">Neoantigen prediction</h3>
      <div class="flex">
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_6.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">NEO-ARS</p>
            <p class="text-2" data-aos="fade-up">Neoantigen Automatic Report System</p>
          </a>
        </div>
      </div>
    </div>
    <!-- //box-card-link -->
    <!-- box-card-link -->
    <div class="box-card-link" id="moa-tox">
      <h3 data-aos="fade-up">MoA & Tox</h3>
      <div class="flex">
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_7.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">MOA-ALL</p>
            <p class="text-2" data-aos="fade-up">Target profiling service, Find “Why” in your Science with Syntekabio
            </p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_8.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">MOA-TOX</p>
            <p class="text-2" data-aos="fade-up">In silico Toxicity profiling service</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_9.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">MOA-Kinase</p>
            <p class="text-2" data-aos="fade-up">In silico kinase profiling service</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_10.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">MOA-GPCR</p>
            <p class="text-2" data-aos="fade-up">In silico GPCR profiling service</p>
          </a>
        </div>
      </div>
    </div>
    <!-- //box-card-link -->
    <!-- box-card-link -->
    <div class="box-card-link" id="biomarker">
      <h3 data-aos="fade-up">Biomarker</h3>
      <div class="flex">
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_11.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">Gene-phasing</p>
            <p class="text-2" data-aos="fade-up">Haplotype phasing and genotype imputation</p>
          </a>
        </div>
      </div>
    </div>
    <!-- //box-card-link -->
    <!-- box-card-link -->
    <div class="box-card-link" id="pgx-haplotyping">
      <h3 data-aos="fade-up">PGx haplotyping</h3>
      <div class="flex">
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_12.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">CYP</p>
            <p class="text-2" data-aos="fade-up">CYP genotype decision tool for personalized medicine</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_13.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">HLA</p>
            <p class="text-2" data-aos="fade-up">HLA genotype decision tool for personalized medicine</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_14.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">KIR</p>
            <p class="text-2" data-aos="fade-up">High resolution human KIR genotyping</p>
          </a>
        </div>
        <div class="item">
          <a href="#none">
            <div class="img-holder">
              <span data-aos="fade-up">
                <img src="@/assets/static/images/new/img_15.jpg" alt="">
              </span>
            </div>
            <p class="text-1" data-aos="fade-up">ABO</p>
            <p class="text-2" data-aos="fade-up">High resolution Blood group typing</p>
          </a>
        </div>
      </div>
    </div>
    <!-- //box-card-link -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AppSubTop from '@/components/AppSubTopService.vue';
import SwiperComponent from '@/components/SwiperComponent.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

const swiperRef = ref(null);
const swiperInstance = ref(null);
const activeIndex = ref(0);
let scrollTriggerInstance = null;

const swiperItems = [
  { text: 'Best-pose/HIT-SCR', link: '#best-pose' },
  { text: 'Neoantigen prediction', link: '#neoantigen' },
  { text: 'MoA & Tox', link: '#moa-tox' },
  { text: 'Biomarker', link: '#biomarker' },
  { text: 'PGx haplotyping', link: '#pgx-haplotyping' },
];

const route = useRoute();

const scrollToElement = (id) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const handleScroll = () => {
  const sections = document.querySelectorAll('.box-card-link');
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section, index) => {
    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      updateActive(section.id, index);
    }
  });
};

const updateActive = (id, index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index);
  }
  activeIndex.value = index;

  const activeItem = swiperItems.find((item) => item.link === `#${id}`);
  if (activeItem) {
    document.querySelector(`[href='${activeItem.link}']`).classList.add('is-active');
  }
};

const handleScrollDirection = () => {
  let lastScrollTop = 0;
  const boxTabSwiper = document.querySelector('.box-tab-swiper');

  const updateTopPosition = () => {
    const topValue = window.innerWidth <= 1024 ? '60px' : '85px';
    gsap.to(boxTabSwiper, { top: topValue, duration: 0.3 });
  };

  window.addEventListener('resize', updateTopPosition);
  window.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (boxTabSwiper && boxTabSwiper.classList.contains('is-fixed')) {
      if (st > lastScrollTop) {
        // downscroll code
        gsap.to(boxTabSwiper, { top: '0px', duration: 0.3 });
      } else {
        // upscroll code
        updateTopPosition();
      }
    } else {
      gsap.to(boxTabSwiper, { top: '0px', duration: 0.3 });
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);
};

document.documentElement.scrollTop = 0;

const initializeScrollTrigger = () => {
  const boxTabSwiper = document.querySelector('.box-tab-swiper');
  if (boxTabSwiper) {
    window.addEventListener('scroll', handleScroll);
    handleScrollDirection();

    // ScrollTrigger for Swiper
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: '.box-tab-swiper',
      start: 'top top',
      endTrigger: '.gap-ser',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      markers: false,
      onEnter: () => {
        const boxTabSwiperElement = document.querySelector('.box-tab-swiper');
        if (boxTabSwiperElement) {
          boxTabSwiperElement.classList.add('is-fixed');
        }
      },
      onLeaveBack: () => {
        const boxTabSwiperElement = document.querySelector('.box-tab-swiper');
        if (boxTabSwiperElement) {
          boxTabSwiperElement.classList.remove('is-fixed');
        }
      }
    });
  }
};

onMounted(async () => {
  await nextTick();
  initializeScrollTrigger();
});


onBeforeUnmount(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
    scrollTriggerInstance = null;
  }
});

watch(route, async () => {
  await nextTick();
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
    scrollTriggerInstance = null;
  }
  initializeScrollTrigger();
});
</script>
