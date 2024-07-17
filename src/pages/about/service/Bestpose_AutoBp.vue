<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">
    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">
        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv">
            <div class="bg-img"
              style="background: url(/src/assets/static/images/@/autoBP_kv.png) no-repeat; background-position: 50%;">
            </div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">Auto-BP (Binding Pose)</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                We introduce an advanced approach (auto-Best pose) to predict the most likely binding poses of ligands
                within target proteins, which analyzes binding modes while accounting the integration of structural
                information, consideration of ligand and protein flexibility, and reliable scoring and evaluation
                metrics.
                A fully automated CLOUD SaaS process that can improve efficiency, consistency, scalability,
                accessibility, and integration with AI algorithms are significant contribution to modern drug
                discovery efforts. It plays a valuable role for researchers and pharmaceutical companies in
                identifying promising drug candidates effectively and swiftly.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <div>
          <AppSubTop bgImage="/src/assets/static/images/@/autoBP_kv.png" title="Auto-BP (Binding Pose)"
            :titleDelay="200"
            text="We introduce an advanced approach (auto-Best pose) to predict the most likely binding poses of ligands within target proteins, which analyzes binding modes while accounting the integration of structural information, consideration of ligand and protein flexibility, and reliable scoring and evaluation metrics. A fully automated CLOUD SaaS process that can improve efficiency, consistency, scalability, accessibility, and integration with AI algorithms are significant contribution to modern drug discovery efforts. It plays a valuable role for researchers and pharmaceutical companies in identifying promising drug candidates effectively and swiftly."
            :textDelay="400" />
        </div>
        <!-- sub-top -->
        <div class="inner-gap-2">
          <div class="autoBP-cnt">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Researchers found a hit and its binding protein through experiments including
                  cell-based
                  essays, and many other methods, but they cannot proceed its lead optimization because they do not
                  know
                  how it binds.</p>
                <p class="txt">Auto-BP service is appropriate. For Auto-BP, it is recommended to select low,
                  intermediate
                  or advanced levels depending on the importance of the customer’s lead compound.</p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">A molecular researchers found it certain that it plays a role in cell death, but it is
                  unknown which protein it binds to. What service is appropriate in this case?</p>
                <p class="txt">MOA (mode of action) service is appropriate. In this case, Auto-BP is set lightly,
                  and instead of performing Auto-BP one molecule against one target 2,000 panel targets are screened
                  simultaneously and a list of suitable candidates is givenas an output.
                  (https://cloud.syntekabio.com)
                </p>
              </div>
            </div>
            <!-- //border-grid -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up">Theory behind Binding <br>Pose Prediction Software
              </h3>
              <p class="txt-1 pt12" data-aos="fade-up" data-aos-offset="200">
                The AI algorithms of our precision in-house scoring system, are key components underling our screening
                protocol enabling accurate prediction of binding affinity and orientation. The platform has fully
                automated all processes from the maximum collection of molecular docking to 3D-CNN and MD simulation
                for
                enhanced accuracy and performance in scoring and ranking.
              </p>
            </div>
            <!-- //sub-moreGap -->
            <div class="software-item">
              <div class="img-wrap">
                <div class="item-box" data-aos="fade-up" data-aos-offset="200">
                  <div class="img">
                    <img src="/src/assets/static/images/img/autoBP_software_1.png" alt="Pocket model (~100 templates)">
                  </div>
                  <p class="name"><span>A</span>Pocket model (~100 templates)</p>
                </div>
                <div class="item-box" data-aos="fade-up" data-aos-offset="200">
                  <div class="img">
                    <img src="/src/assets/static/images/img/autoBP_software_2.png" alt="3D-CNN Model">
                  </div>
                  <p class="name"><span>B</span>3D-CNN Model</p>
                </div>
                <div class="item-box" data-aos="fade-up" data-aos-offset="200">
                  <div class="img">
                    <img src="/src/assets/static/images/img/autoBP_software_3.png"
                      alt="MD-simulation, Strain & Binding Free Energy">
                  </div>
                  <p class="name top"><span>C</span>MD-simulation, Strain & Binding <br class="pc-show">Free Energy
                  </p>
                </div>
                <div class="item-box" data-aos="fade-up" data-aos-offset="200">
                  <div class="img">
                    <img src="/src/assets/static/images/img/autoBP_software_4.png" alt="Auto-BP Accuracy">
                  </div>
                  <p class="name"><span>D</span>Auto-BP Accuracy</p>
                </div>
              </div>
              <ul class="dot-list" data-aos="fade-up" data-aos-offset="200">
                <li>Theoretically, if an infinite number of poses are created, and 3D-CNN consistently selects the
                  Best-pose
                  among them, and if their plots are thermodynamically meaningful like a sigmoid shape, it can be said
                  that the top pose is close to the best pose.</li>
                <li>(A) If about 100 template molds are created in a protein pocket and 1,000 poses are created
                  including
                  conformers for each docking template, 100,000 poses are generated as shown to be a sigmoid shape in
                  (B)
                  If we extract the top 100 and draw superimpose images, it looks like the following (C) And, this is
                  a
                  var graph that evaluates how many crystal structure-level pose appear when top 2 are selected
                  blindly
                  using about 200 crystal structures whose poses are known. When simple docking, Auto-BP, and
                  Auto-BP-MD
                  are used, it gives almost 94% performance. (D) The dark blue is the competitor’s data, but it is not
                  disclosed here.</li>
              </ul>
            </div>
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>
                  Best-pose screening is useful for structure-based drug discovery. This can be applied at various
                  stages
                  of the drug discovery and development process for HIT screening(1), enhancing efficacy from HIT to
                  Lead
                  generation and optimization by QSAR analysis utilizing binding mode prediction(2), and Off-Target
                  discovery and indication expansion such as all for 2000 panels, G for GPCR panels, K for Kinase
                  panels(3). STB software suites for SaaS can be utilized to (1) Auto-HIT, (2) ALGO, and (3) OFF-All,
                  G
                  and K in STB CLOUD
                </li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Ragoza, Matthew, etal. "Protein–ligand scoring with convolutional neural networks."Journal of
                    chemical information and modeling 57.4 (2017): 942-957</li>
                  <li>Syntekabio’s Hit to Preclinical Candidate on CLOUD Computing, Bio PharmaTrend, Vol4. 2023</li>
                  <li>How Syntekabio’s Supercomputing Enables AI-driven Drug Discovery, Bio PharmaTrend, Vol3. 2023
                  </li>
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