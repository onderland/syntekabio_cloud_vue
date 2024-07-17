<template>
  <div class="box-welcome">
    <div class="top-text">
      <h3><span>Welcome!</span></h3>
      <p class="text-1">UNLOCKING<br class="mo-show"> EFFICIENCY<br class="pc-show"> CLOUD <br class="mo-show">SAAS</p>
    </div>
    <div class="posi">
      <div class="box-img"></div>
      <!-- box-sass -->
      <div class="box-sass">
        <div class="top-text">
          <h3> Unlocking Efficiency<br> Cloud SaaS</h3>
          <p class="tt-1">
            STB CLOUD is at the forefront of innovation in AI-driven early-stage drug discovery, <span
              class="c-1">specializing in small
              molecule drug,</span> neoantigen prediction and antibody CDR generation.<br>
            SaaS has segmented the entire process of AI drug development and clinical genomics analysis into
            step-by-step
            modules applying CLOUD supercomputing automation processes.<br>
            Our solutions are meticulously tailored to enhance your computational biology and chemistry workflows,
            providing the precision and efficiency required in today's fast-paced research environments for academic
            institutions, biotechnology companies, and pharmaceutical firms, providing cutting-edge tools for
            computational biology and chemistry.
          </p>
        </div>
      </div>
      <!-- //box-sass -->
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ScrollMotionMain',
  setup() {
    let boxImgAnimation, boxSassAnimation;

    onMounted(() => {
      boxImgAnimation = gsap.fromTo('.box-welcome .box-img',
        { margin: '40px 82px 60px', borderRadius: '8px' },
        {
          scrollTrigger: {
            trigger: '.box-welcome',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            pin: true,
            markers: false, // 개발 중에 디버깅을 위해 추가할 수 있음, 배포 시 제거
            pinSpacing: true,
          },
          margin: '40px 0 60px',
          borderRadius: '0',
          duration: 1, // 애니메이션 지속 시간
        }
      );

      boxSassAnimation = gsap.fromTo('.box-sass',
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.box-welcome',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            markers: false, // 개발 중에 디버깅을 위해 추가할 수 있음, 배포 시 제거
          },
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
        }
      );
    });

    onUnmounted(() => {
      if (boxImgAnimation && boxImgAnimation.scrollTrigger) boxImgAnimation.scrollTrigger.kill();
      if (boxSassAnimation && boxSassAnimation.scrollTrigger) boxSassAnimation.scrollTrigger.kill();
    });
  },
};
</script>
