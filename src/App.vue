<script setup>
import { ref } from 'vue';
import Navbar from './components/template/Navbar.vue';
import Play from './components/Play.vue';
import Block from './components/Block.vue';
import Click from './components/Click.vue';
import Modal from './components/Modal.vue';

const isPlay = ref(false)
const showClick = ref(false)
const score = ref(null)
const showModal = ref(false)

function playGame() {
  const delay = 2000 + Math.random() * 5000
  isPlay.value = true
  setTimeout(() => {
    showClick.value = true;
  }, delay)
}

function endGame(reactionTime) {
  isPlay.value = false
  showClick.value = false
  score.value = reactionTime
}

function toggleModal() {
  showModal.value = !showModal.value
}
</script>

<template>
  <Navbar @modal="toggleModal" />
  <Block v-if="!isPlay" @click="playGame" :score="score" />
  <Play v-if="isPlay && !showClick" />
  <Click v-if="showClick" @end="endGame" />
  <Modal v-if="showModal" title="Game Info" @modal="toggleModal">
    <p class="mb-3 font-normal text-slate-700 dark:text-slate-400">This is a simple tool to measure your reaction time.
    </p>
    <p class="mb-3 font-normal text-slate-700 dark:text-slate-400">In addition to measuring your reaction time, this test
      is affected by the latency of your computer and monitor.
      Using a fast computer and low latency / high framerate monitor will improve your score.</p>
    <p class="mb-3 font-normal text-slate-700 dark:text-slate-400">Scores in this test are faster than the aim trainer
      test, because you can react instantly without moving the cursor.</p>
  </Modal>
</template>