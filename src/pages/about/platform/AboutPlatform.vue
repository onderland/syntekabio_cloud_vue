<template>
  <main class="stb-about-sub" id="stb-about-platform">
    <AppSubTop additionalClass="bg-2" additionalClass2="gap" title="<span class='mo-show'>Deep-<br>Matcher®</span> <span class='pc-show'>DeepMatcher®</span>" :titleDelay="200" :textDelay="400"
    text="Accelerate Small Molecule Hit<br class='mo-show'> Discovery and Lead Optimization<br> Based on Physics and Deep<br class='mo-show'> Learning" />

    <div class="main-contents fixedShow">
      <div class="main-container page-component">
        <section class="about-section">
          <!-- DeepMatcher® 헤더 -->

          <!-- DeepMatcher® 컨텐츠 -->
          <article class="section-body" id="platform_1">
            <div class="img bg about-dmc-01">
              <div class="img">
                <img
                  src="@/assets/stb/images/sub01_platform/md_simulation.webp"
                  alt=""
                />
              </div>
            </div>

            <p class="text">
              Understanding interactions between small molecules and their
              target proteins is crucial for drug discovery. DeepMatcher® is a
              compound-protein interaction (CPI) prediction platform that offers
              a unique opportunity to accelerate hit discovery, hit-to-lead, and
              lead optimization processes. DeepMatcher® offers CPI prediction
              based on our proprietary biophysics-informed deep learning and
              large chemical spaces, thereby enabling more accurate discovery of
              compounds with novel structures. <br /><br />

              DeepMatcher® has been successfully applied across protein families
              such as kinases, G protein coupled receptors (GPCR), and nuclear
              receptors.<br /><br />

              Modularity of the DeepMatcher® platform offers a broad scope of
              services such as DeepMatcher®-Hit and DeepMatcher®-Lead.
              DeepMatcher®-Hit conducts a comprehensive screening to discover
              hit compounds using up to 1 billion compound library.
              DeepMatcher®-Lead performs hit-to-lead and lead optimization
              process by in silico design using a given scaffold generating 100K
              derivatives to improve binding affinity.
            </p>

            <div class="button-group">
              <!-- FAQ 보기 이동 -->

              <AppPlatformButton type="faq" />

              <!-- DeepMatcher® 소개 동영상 재생 -->
              <AppPlatformButton type="intro" />

              <!-- DeepMatcher® 사용자 가이드 동영상 재생 -->
              <AppPlatformButton type="guide" />
            </div>
          </article>
        </section>
      </div>
    </div>

    <div class="main-contents p-0">
      <div class="main-container page-component board">
        <!-- DeepMatcher®-Hit 섹션 -->
        <section class="about-section">
          <!-- DeepMatcher®-Hit 헤더 -->
          <article class="section-header">
            <h3 class="text-left platform-sub-title">DeepMatcher®-Hit</h3>
            <p class="text">
              DeepMatcher®-Hit conducts a comprehensive screening to discover
              hit compounds using up to 1 billion compound library.
            </p>
          </article>

          <!-- DeepMatcher®-Hit 컨텐츠 -->
          <article class="section-body">
            <div class="img">
              <img
                src="@/assets/stb/images/sub01_platform/hit-main.webp"
                alt=""
              />
            </div>

            <ul class="list dotted">
              <li>
                Sequential application of DMC-PRE, DMC-SCR, and DMC-MD modules.
              </li>
              <li>
                Improve hit discover rate with a wide rage of compounds and
                precise prediction of 3D protein-ligand complex structure.
              </li>
              <li>
                Provide AI predicted 3D structure of protein-ligand complex as a
                core for follow-up research and development stages.
              </li>
            </ul>

            <ul class="card-deck">
              <!-- PRE-Screening -->
              <li class="card-divide">
                <div class="img">
                  <img
                    src="@/assets/stb/images/sub01_platform/hit-pre-screening.webp"
                    alt=""
                  />
                </div>
                <div class="card-exp">
                  <dl class="contents">
                    <dt>PRE-Screening</dt>
                    <dd>
                      Classification based on chemical properties of compounds
                      Comparing physico-chemical properties of target protein
                      and compounds CNN based approach for brief 3D docking and
                      screening
                    </dd>
                  </dl>
                  <dl class="sub-contents">
                    <dt>Input</dt>
                    <dd>
                      A billion small molecule compound list and target protein
                      3D structure
                    </dd>
                    <dt>Output</dt>
                    <dd>Top ranked 1,000 compounds</dd>
                  </dl>
                </div>
              </li>

              <!-- Screening -->
              <li class="card-divide">
                <div class="img">
                  <img
                    src="@/assets/stb/images/sub01_platform/hit-screening.webp"
                    alt=""
                  />
                </div>
                <div class="card-exp">
                  <dl class="contents">
                    <dt>Screening</dt>
                    <dd>
                      Computation of 3D target-compound binding structure
                      Generating more than 24,000 conformers for each compounds
                      AI based best pose selection and evaluation of binding
                      mode
                    </dd>
                  </dl>
                  <dl class="sub-contents">
                    <dt>Input</dt>
                    <dd>Pre-screened 1,000 compounds</dd>
                    <dt>Output</dt>
                    <dd>
                      Top ranked compounds and best binding pose information
                    </dd>
                  </dl>
                </div>
              </li>

              <!-- MD simulation -->
              <li class="card-divide">
                <div class="img">
                  <img
                    src="@/assets/stb/images/sub01_platform/hit-simulation.webp"
                    alt=""
                  />
                </div>
                <div class="card-exp">
                  <dl class="contents">
                    <dt>MD simulation</dt>
                    <dd>
                      Perform molecular dynamics simulations based on selected
                      best conformers Filter false positive compounds based on
                      binding pose and force field.
                    </dd>
                  </dl>
                  <dl class="sub-contents">
                    <dt>Input</dt>
                    <dd>Screened ~200 compounds resulted from 3D screening</dd>
                    <dt>Output</dt>
                    <dd>Grade1, 2 compound list with various scores</dd>
                  </dl>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>

    <div class="main-contents">
      <div class="main-container page-component board">
        <!-- DeepMatcher®-Lead 섹션 -->
        <section class="about-section">
          <!-- DeepMatcher®-Lead 헤더 -->
          <article class="section-header">
            <h3 class="text-left platform-sub-title">DeepMatcher®-Lead</h3>
            <p class="text">
              DeepMatcher®-Lead performs hit-to-lead and lead optimization
              process by in silico design using a given scaffold generating 100K
              derivatives to improve binding affinity.
            </p>
          </article>

          <!-- DeepMatcher®-Lead 컨텐츠 -->
          <article class="section-body">
            <div class="img">
              <img
                src="@/assets/stb/images/sub01_platform/lead_main.webp"
                alt=""
              />
            </div>

            <ul class="list dotted">
              <li>
                Sequential application of DMC-CDD, DMC-GAP, DMC-SCR, and DMC-MD
                modules.
              </li>
              <li>More than 50,000 substitutable R-group database</li>
              <li>
                Provide new derivatives expected to increase binding affinity
                with minimum of human bias.
              </li>
            </ul>

            <ul class="card-deck">
              <!-- Chemical Derivative Design -->
              <li class="card-divide">
                <div class="img">
                  <img
                    src="@/assets/stb/images/sub01_platform/lead-chemical_derivative_design.webp"
                    alt=""
                  />
                </div>
                <div class="card-exp">
                  <dl class="contents">
                    <dt>Chemical Derivative Design</dt>
                    <dd>
                      Specify the site of R-group substitution on customer’s
                      given scaffold Generate up to 100K derivatives with self
                      established R-group database Confirm the synthesizability
                      of generated derivatives
                    </dd>
                  </dl>
                  <dl class="sub-contents">
                    <dt>Input</dt>
                    <dd>
                      Identified scaffold with preferred substitution site and
                      target protein
                    </dd>
                    <dt>Output</dt>
                    <dd>Synthesizable derivatives up to 100K</dd>
                  </dl>
                </div>
              </li>

              <!-- GAP analysis -->
              <li class="card-divide">
                <div class="img">
                  <img
                    src="@/assets/stb/images/sub01_platform/lead-gap_analysis.webp"
                    alt=""
                  />
                </div>
                <div class="card-exp">
                  <dl class="contents">
                    <dt>GAP analysis</dt>
                    <dd>
                      Predict 3D protein-derivative binding structure based on
                      scaffold AI based evaluation of binding affinity
                    </dd>
                  </dl>
                  <dl class="sub-contents">
                    <dt>Input</dt>
                    <dd>Synthesizable derivatives up to 100K</dd>
                    <dt>Output</dt>
                    <dd>
                      100 derivatives resulted from derivative specific 3D
                      screening
                    </dd>
                  </dl>
                </div>
              </li>

              <!-- Lead Screening -->
              <li class="card-divide">
                <div class="img">
                  <img
                    src="@/assets/stb/images/sub01_platform/lead-lead_screening.webp"
                    alt=""
                  />
                </div>
                <div class="card-exp">
                  <dl class="contents">
                    <dt>Lead Screening</dt>
                    <dd>
                      Predict 3D protein-compound binding structure Generate
                      more than 24,000 conformers for each compound AI based
                      best pose selection and evaluation of binding mode
                    </dd>
                  </dl>
                  <dl class="sub-contents">
                    <dt>Input</dt>
                    <dd>
                      100 derivatives resulted from derivative specific 3D
                      screening
                    </dd>
                    <dt>Output</dt>
                    <dd>Best binding poses for 100 derivatives</dd>
                  </dl>
                </div>
              </li>

              <!-- MD simulation -->
              <li class="card-divide">
                <div class="img">
                  <img
                    src="@/assets/stb/images/sub01_platform/lead-md_simulation.webp"
                    alt=""
                  />
                </div>
                <div class="card-exp">
                  <dl class="contents">
                    <dt>MD simulation</dt>
                    <dd>
                      Perform a molecular dynamic simulation based on selected
                      best conformer Filter false positive compounds based on
                      binding pose and force field
                    </dd>
                  </dl>
                  <dl class="sub-contents">
                    <dt>Input</dt>
                    <dd>100 derivatives resulted from 3D screening</dd>
                    <dt>Output</dt>
                    <dd>
                      Fully evaluated 100 derivative list with various scores
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import AppSubPageHeader from '@/components/AppSubPageHeader.vue';
import AppPlatformButton from '@/components/AppPlatformButton.vue';
import AppSubTop from '@/components/AppSubTopService.vue';
</script>
