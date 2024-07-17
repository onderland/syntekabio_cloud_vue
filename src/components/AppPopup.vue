<template>
  <div
    class="popup-main"
    ref="popupContainer"
    id="popup-container"
    v-if="aboutStore.state.data.popupActive"
  >
    <!-- popup-header -->
    <div class="popup-header" @mousedown="onDragMouseDown">
      <div class="popup-title">DeepMatcher®-Hit</div>
      <div class="popup-text">
        <div>Beyond Undruggable</div>
        <div>AI Drug Discovery at your fingertips</div>
      </div>
    </div>

    <!-- popup-body -->
    <div class="popup-body">
      <!-- Promotional Service -->
      <section>
        <div class="popup-title">Promotion (till Jun 2023)</div>
        <div class="popup-text">
          We invite you to Syntekabio's AI drug cloud platform service (STB
          CLOUD) enabling access on any device, anywhere, anytime in one click.
          We find active substances through a search of over 1 billion compound
          library within 14 weeks with
          <i>in vitro</i> assay validation.<br /><br />
          During this service promotion period, we will give you a refund if we
          do not find an effective substance. Also, success fee is waived during
          this period.
        </div>
      </section>

      <!-- 1) Promotional Service Price -->
      <section>
        <div class="popup-sub-title">1) Promotional Service Price</div>
        <div class="popup-sub-body">
          <div class="popup-table-body">
            <table>
              <colgroup>
                <col width="200px" />
                <col width="120px" />
              </colgroup>
              <thead>
                <tr>
                  <th>Service Category</th>
                  <th>Price (without tax)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. DeepMatcher®-Hit</td>
                  <td class="text-center">$100,000</td>
                </tr>
                <tr>
                  <td>
                    2. DeepMatcher®-Hit<br />
                    <i :style="{ 'padding-left': '12px' }">in vitro</i>
                    biochemical assay by STB
                  </td>
                  <td class="text-center">$150,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 2) Guaranty -->
      <section>
        <div class="popup-sub-title">2) Guarantee</div>
        <div class="popup-sub-body">
          <div class="popup-text">
            At least two AI-Hits with more than 50% inhibition at 10 uM based on
            <i>in vitro</i> biochemical assay test results. Differs from target
            to target. Refer to the contract form.<br /><br />
            <i>in vitro</i> biochemical assays are determined by mutual consent
            based on objective validations agreed upon in advance with both the
            company and the customer. In addition, validation results should be
            shared with both the company and the customer.
          </div>
        </div>
      </section>

      <!-- 3) Refund Policy -->
      <section class="refund-policy">
        <div class="popup-sub-title">3) Refund Policy</div>
        <div class="popup-sub-body">
          <div class="popup-text">
            If we don’t meet above guaranteed condition, we will refund
            according to the following table.
          </div>
          <div class="popup-table-body">
            <table>
              <colgroup>
                <col width="120px" />
                <col width="200px" />
              </colgroup>
              <thead>
                <tr>
                  <th>AI-Hit*</th>
                  <th>Refund Amout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td class="text-center">$50,000</td>
                </tr>
                <tr>
                  <td class="text-center">0</td>
                  <td class="text-center">$100,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="popup-text">
            * Number of AI-Hit with more than 50% inhibition at 10 uM mutually
            agreed <i>in vitro</i> assay
          </div>
        </div>
      </section>
    </div>

    <!-- popup-footer -->
    <div class="popup-footer" @mousedown="onDragMouseDown">
      <div class="popup-text">
        Contact:
        <a href="mailto:admin.usa@syntekabio.com">admin.usa@syntekabio.com</a> |
        <a href="mailto:bd@syntekabio.com">bd@syntekabio.com</a>
      </div>
      <a
        class="popup-text popup-close"
        @click.prevent="aboutStore.setPopupActive({ status: false })"
        >X CLOSE</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();

const popupContainer = ref(null);

const pos = reactive({
  clientX: undefined,
  clientY: undefined,
  movementX: 0,
  movementY: 0
});

const onDragMouseDown = (event) => {
  event.preventDefault();

  pos.clientX = event.clientX;

  pos.clientY = event.clientY;

  document.onmousemove = onElementDrag;

  document.onmouseup = onCloseDragElement;
};

const onElementDrag = (event) => {
  event.preventDefault();

  pos.movementX = pos.clientX - event.clientX;

  pos.movementY = pos.clientY - event.clientY;

  pos.clientX = event.clientX;

  pos.clientY = event.clientY;

  popupContainer.value.style.top =
    popupContainer.value.offsetTop - pos.movementY + 'px';

  popupContainer.value.style.left =
    popupContainer.value.offsetLeft - pos.movementX + 'px';
};

const onCloseDragElement = () => {
  document.onmouseup = null;

  document.onmousemove = null;
};
</script>
