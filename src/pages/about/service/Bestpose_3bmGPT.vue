<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">
    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">
        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv gpt">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">3D Binding Mode Generative Pre-trained
                Transformer<br> (3bmGPT)</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                3bmGPT (3D Binding Mode Generative Pre-trained Transformer) is an AI model trained on text-converted
                binding interaction data.<br>
                Its purpose is to comprehend 3D interactions and transform them into analyzable features to find
                deeper
                insights into the complex nature of binding interactions.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <div>
          <AppSubTop title="3D Binding Mode Generative Pre-trained Transformer<br> (3bmGPT)" :titleDelay="200"
            text="3bmGPT (3D Binding Mode Generative Pre-trained Transformer) is an AI model trained on text-converted binding interaction data.<br> Its purpose is to comprehend 3D interactions and transform them into analyzable features to find deeper insights into the complex nature of binding interactions."
            :textDelay="400" additionalClass="gpt" />
        </div>
        <!-- sub-top -->
        <div class="inner-gap-2">
          <div class="gpt-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Researchers encountered challenges in identifying key binding structures to design
                  molecules that bind effectively to their interested targets.</p>
                <p class="txt">Through 3bmGPT, diverse binding interactions for the molecules of interest whether
                  protein or small molecule, are identified and summarized, enabling the discovery of key binding
                  structures.</p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Scholars immerse themselves in the study of molecules, continually seeking additional
                  binding details to further their academic pursuits.</p>
                <p class="txt">AI-trained data-based studies will provide objective insights into binding
                  interactions, broadening understanding and fostering innovative ideas.</p>
              </div>
            </div>
            <!-- //border-grid -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- 수급 필요 -->
            <div class="gpt-workflow" data-aos="fade-up" data-aos-offset="200">
              <div class="img-swiper imgSW-1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="tit">Training AI Model from Binding Interaction</div>
                    <div class="img">
                      <img src="/src/assets/static/images/img/gpt_work_1.png"
                        alt="Training AI Model from Binding Interaction">
                    </div>
                  </div>
                </div>
              </div>
              <div class="img-swiper imgSW-2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="tit">Utilizing the AI Model in Research</div>
                    <div class="img">
                      <img src="/src/assets/static/images/img/gpt_work_2.png" alt="Utilizing the AI Model in Research">
                    </div>
                  </div>
                </div>
              </div>
              <ul class="dot-list">
                <li>The AI model is trained using binding interaction data to predict 3D binding modes, categorized
                  into all bindings. The GPT model analyzes these categories, along with protein pockets and ligands,
                  to identify protein families and drug characteristics.</li>
                <li>3bmGPT can be used with complete binding data, protein-only data, or ligand-only data for diverse
                  research purposes. These include tracking molecules, analyzing similar bindings, conducting
                  phylogenetic research, and identifying key bindings linked to related drugs.</li>
              </ul>
            </div>
            <!-- //수급 필요 -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>3bmGPT is invaluable for studying binding dynamics and advancing drug development efforts. To
                  enhance its efficacy, Syntekabio offers the Auto-BP (Binding Pose) service, providing candidate
                  ligands. These ligands can then be seamlessly integrated into 3bmGPT, allowing for a comprehensive
                  analysis of the candidate molecules’ characteristics.</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>OpenAI. “GPT-4 Technical Report.” ArXiv 2303.08774 (2023)</li>
                  <li>Ashwin Dhakal, et. al. “Artificial intelligence in the prediction of protein-ligand
                    interactions: recent advances and future directions.” Briefings in Bioinformatics Vol23 (2022)
                  </li>
                </ul>
              </div>
            </div>
            <!-- //notice-list -->
          </div>
          <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
        </div>
      </div>
    </div>
    <!-- //inner-wrap -->
  </div>
  <!-- //common-contentTapGap -->
</template>

<script setup>
import AppSubTop from '@/components/AppSubTop.vue';
import { onMounted } from 'vue';

// Swiper 및 Swiper 스타일 임포트
import Swiper, { FreeMode, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// Swiper 모듈 사용 설정
Swiper.use([FreeMode, Navigation, Pagination]);

onMounted(() => {
  const imgSwiper1 = () => {
    var swiper = new Swiper(".imgSW-1", {
      slidesPerView: 'auto',
      freeMode: true,
      preventClicks: true,
      loop: false,
      preventClicksPropagation: false,
      observer: true,
      observeParents: true,
    });
  };

  const imgSwiper2 = () => {
    var swiper = new Swiper(".imgSW-2", {
      slidesPerView: 'auto',
      freeMode: true,
      preventClicks: true,
      loop: false,
      preventClicksPropagation: false,
      observer: true,
      observeParents: true,
    });
  };

  imgSwiper1();
  imgSwiper2();

  document.querySelectorAll('.pop-openBtn').forEach((e) => {
    e.addEventListener('click', () => {
      imgSwiper1();
      imgSwiper2();
    });
  });
});
</script>