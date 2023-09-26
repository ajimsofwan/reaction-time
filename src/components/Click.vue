<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['end'])

const timer = ref(null)
const reactionTime = ref(0)

function startTimer() {
  timer.value = setInterval(() => {
    reactionTime.value += 5
  }, 5)
}

function stopTimer() {
  clearInterval(timer.value)
  emit('end', reactionTime)
}

onMounted(() => {
  startTimer()
})
</script>
<template>
  <section @click="stopTimer" class="text-center bg-green-500">
    <div class="py-32 xxl:py-60">
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-36 text-slate-100" viewBox="0 0 512 512">
          <circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
          <circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
          <circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
        </svg>
      </div>
      <h1 class="pb-24 text-6xl font-semibold md:text-8xl text-slate-100">Click!</h1>
    </div>
  </section>
</template>