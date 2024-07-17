<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">
    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv neo">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">Neoantigen Automatic Report System <br>(NEO-ARS®)
              </h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                NEO-ARS® is a comprehensive service that identifies tumor neoantigens and covers the whole process
                from NGS data analysis to 3D structure-based prediction of peptide-MHC (pMHC) binding using multiple
                AI algorithms. <br>Top 20 immunogenic neoantigen candidates are ranked as promising targets for cancer
                immunotherapy.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop title="Neoantigen Automatic Report System <br>(NEO-ARS®)" :titleDelay="200"
            text="NEO-ARS® is a comprehensive service that identifies tumor neoantigens and covers the whole process from NGS data analysis to 3D structure-based prediction of peptide-MHC (pMHC) binding using multiple AI algorithms. <br>Top 20 immunogenic neoantigen candidates are ranked as promising targets for cancer immunotherapy."
            :textDelay="400" additionalClass="neo"></AppSubTop>
        </div>

        <div class="inner-gap-2">
          <div class="neo-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Cancer vaccine developers want to obtain 3D structural information about how genetic
                  mutations occurring in self-peptides yield immunogenic peptides that stably bind to MHC molecules.
                </p>
                <p class="txt">NEOscan™ predicts both pMHC binding energy and T cell reactivity based on known crystal
                  structures</p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Many clinicians and biotech companies interested in personalized cancer immunotherapy
                  hope to discover neoantigen candidates as promising targets for cancer vaccines and T cell
                  therapies.</p>
                <p class="txt">NEO-ARS® i) determines the patient's HLA type, ii) prioritizes genetic mutations
                  considering several parameters (e.g., sequencing depth, VAF(%), RNA expression level), and iii)
                  identifies neoantigen candidates. It covers everything from genome profiling to in silico analysis
                  of the 3D binding structure of pMHC complex.</p>
              </div>
            </div>
            <!-- //border-grid -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up" style="max-width:100%;">NEO-ARS® : Tumor-specific neoantigen
                prediction pipeline</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- neo-workflow -->
            <div class="neo-workflow">
              <div class="bgTit-grid" data-aos="fade-up" data-aos-offset="200">
                <div class="box full">
                  <p class="tit">A. Workflow</p>
                  <div class="img-flex">
                    <div class="img-holder no-dim no1">
                      <span>
                        <img src="/src/assets/static/images/img/neo_work_1.png" alt="A. Workflow" class="pc-show">
                        <img src="/src/assets/static/images/img/neo_work_1_mo.png" alt="A. Workflow" class="mo-show">
                      </span>
                    </div>
                    <div class="img-holder no-dim no2">
                      <span>
                        <img src="/src/assets/static/images/img/neo_work_2.png" alt="A. NEO-ARS consists of three steps"
                          class="pc-show">
                        <img src="/src/assets/static/images/img/neo_work_2_mo.png" alt="A. NEO-ARS consists of three steps"
                          class="mo-show">
                      </span>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <p class="tit">B. Selection of best binding pose</p>
                  <div class="img-holder no-dim no3">
                    <span>
                      <img src="/src/assets/static/images/img/neo_work_3.png" alt="B. Selection of best binding pose"
                        class="pc-show">
                      <img src="/src/assets/static/images/img/neo_work_3_mo.png" alt="B. Selection of best binding pose"
                        class="mo-show">
                    </span>
                  </div>
                </div>
                <div class="box">
                  <p class="tit">C. External validation</p>
                  <div class="img-holder no-dim no4">
                    <span>
                      <img src="/src/assets/static/images/img/neo_work_4.png" alt="C. External validation" class="pc-show">
                      <img src="/src/assets/static/images/img/neo_work_4_mo.png" alt="C. External validation" class="mo-show">
                    </span>
                  </div>
                </div>
              </div>
              <ul class="dot-list">
                <li>(A) NEO-ARS® consists of three steps.<br />
                  Step1: NGS data analysis at both DNA and RNA level for detection of somatic mutations.
                  Tumor-specific antigen (TSA) score is calculated.<br />
                  Step2: The 3D docking structures of pMHC complex are investigated and the binding energies are
                  calculated.<br />
                  Step3: T cell reactivity score is calculated by analyzing changes in intermolecular binding
                  patterns.</li>
                <li>(B) 5,000 conformers are generated for each peptide. The best binding pose of pMHC complex is
                  selected using 3D-CNN and analyzed via MD simulation.</li>
                <li>(C) NEOscan™ outperforms other tools. The ROC AUC evaluated using immunogenic peptides and
                  non-immunogenic peptides in external datasets indicates reliable prediction model performance.</li>
              </ul>
            </div>
            <!-- //neo-workflow -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>Development of personalized cancer vaccine targeting patient-specific neoantigens</li>
                <li>Development of off-the-shelf cancer vaccine or TCR-T cell therapy targeting shared neoantigens
                  (custom service)</li>
                <li>Analysis of neoantigen burden as a predictive biomarker for response to cancer treatment (custom
                  service)</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Cho et al. “Development of the variant calling algorithm, ADIScan, and its use to estimate
                    discordant sequences between monozygotic twins” Nucleic Acids Research. 2018 Sep 6;46(15):e92.
                  </li>
                  <li>Systems and methods that provide information for personal neoantigen-targeted immunotherapy
                    using big data of molecular dynamics based on AI model. Korea Patent No. 10-2406699. 2022.</li>
                  <li>Ka et al. “HLAscan: genotyping of the HLA region using next-generation sequencing data” BMC
                    Bioinformatics. 2017 May 12;18(1):258.</li>
                </ul>
              </div>
            </div>
            <!-- //notice-list -->
          </div>
          <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
        </div>
      </div>
      <!-- //inner-wrap -->
    </div>
    <!-- //box-wrap -->
  </div>
  <!-- //common-contentTapGap -->
</template>

<script setup>
import AppSubTop from '@/components/AppSubTop.vue';
</script>