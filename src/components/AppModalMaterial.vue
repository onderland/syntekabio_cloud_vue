<template>
  <div class="material-modal active" :class="{ active: modalOn }" v-if="data">
    <div class="modal">
      <div class="modal-header">
        <h3 class="title text-center">{{ data.title }}</h3>
        <p class="text-center">{{ data.text }}</p>
      </div>
      <div class="modal-body gap-3">
        <div class="col-6">
          <div class="img">
            <div :class="data.img"></div>
          </div>
        </div>
        <div class="col-6">
          <div class="card-box">
            <div class="card-text center">
              <h4 class="title">{{ data.cardTitle }}</h4>
              <span class="caption">{{ data.cardCaption }}</span>
              <hr class="card-line" />
              <p class="text">
                {{ data.cardText }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer" @click="$emit('update', false)">
        <div class="button-group">
          <div class="btn">CLOSE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modalOn: Boolean,
  data: Object
});
</script>

<style scoped>
.material-modal.active {
  display: flex;
}

.material-modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10000;
  backdrop-filter: blur(8px);
  display: none;
  align-items: center;
  justify-content: center;
}
.material-modal .modal {
  width: 1120px;
  background-color: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
}
.material-modal .modal .modal-header {
  padding: 4rem 6rem 0;
  margin-bottom: 20px;
}
.material-modal .modal .modal-header h3 {
  font-weight: bold;
}
.material-modal .modal .modal-header .btn-close {
  float: right;
}
.material-modal .modal .modal-body {
  padding: 2rem 6rem 5rem;
  display: flex;
}

.material-modal .modal .modal-body .card-box {
  background-color: #f3f5f7;
  padding: 2rem 0;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
}
.material-modal .modal .modal-body .card-box .card-text {
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
}
.material-modal .modal .modal-body .card-box .card-text .card-line {
  border: 1px solid var(--color-main);
}
.material-modal .modal .modal-body .card-box .card-text .title {
  padding: 0 2rem;
}
.material-modal .modal .modal-body .card-box .card-text .caption {
  padding: 0 2rem;
  color: var(--color-main);
}
.material-modal .modal .modal-body .card-box .card-text .text {
  padding: 0 2rem;
}
.material-modal .modal .modal-footer {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: var(--color-default);
  color: #ffffff;
  cursor: pointer;
}

.material-modal .img {
  height: 300px;
  padding: 1rem 2rem;
}

@media (max-width: 1280px) {
  #stb-about-data .material-modal.active {
    display: flex;
    padding: 2rem;
  }
  #stb-about-data .material-modal .modal .modal-header {
    padding: 2rem 3rem 0;
    margin-bottom: 1rem;
  }
  #stb-about-data .material-modal .modal .modal-body {
    padding: 1rem 3rem 1.5rem;
    height: 100%;
  }
  #stb-about-data .material-modal .modal .modal-body .col-6 {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  #stb-about-data .material-modal .modal .modal-body {
    flex-flow: column wrap;
  }

  #stb-about-data .material-modal.active {
    padding: 0;
  }
  #stb-about-data .material-modal .modal {
    height: 100vh;
    overflow: auto;
    border-radius: 0;
  }
}

@media (max-width: 500px) {
  #stb-about-data .material-modal .modal .modal-header {
    padding: 2rem 1rem;
  }
  #stb-about-data .material-modal .modal .modal-body {
    padding: 1rem 1rem 1.5rem;
  }
  #stb-about-data .material-modal .modal.transparent {
    overflow: hidden;
  }
}
</style>
