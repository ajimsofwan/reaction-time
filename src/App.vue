<script setup>
import { ref } from 'vue';
import Navbar from './components/template/Navbar.vue';
import Play from './components/Play.vue';
import Block from './components/Block.vue';
import Click from './components/Click.vue';

const isPlay = ref(false)
const showClick = ref(false)

function play() {
  const delay = 2000 + Math.random() * 5000
  isPlay.value = true
  setTimeout(() => {
    showClick.value = true;
  }, delay)
}

</script>

<template>
  <Navbar />
  <Play v-if="isPlay && !showClick" />
  <Block v-if="!isPlay" @click="play" />
  <Click v-if="showClick" />
</template>