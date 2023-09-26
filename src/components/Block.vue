<script setup>
defineProps(['score'])

</script>
<template>
  <section class="text-center bg-emerald-500">
    <div v-if="score" class="py-32 xxl:py-60">
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-36 text-slate-100" viewBox="0 0 512 512">
          <path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none"
            stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
            d="M256 128v144h96" />
        </svg>
      </div>
      <h1 class="pb-16 text-6xl font-semibold md:text-8xl text-slate-100">{{ score }} ms</h1>
      <p class="text-2xl font-semibold text-white">Click to keep going.</p>
    </div>
    <div v-else class="py-32 xxl:py-60">
      <div class="flex justify-center animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-36 fill-slate-100" viewBox="0 0 512 512">
          <path
            d="M315.27,33,96,304H224L192.49,477.23a2.36,2.36,0,0,0,2.33,2.77h0a2.36,2.36,0,0,0,1.89-.95L416,208H288L319.66,34.75A2.45,2.45,0,0,0,317.22,32h0A2.42,2.42,0,0,0,315.27,33Z" />
        </svg>
      </div>
      <h1 class="pb-8 text-6xl font-semibold md:text-8xl text-slate-100">Reaction Time Test</h1>
      <p class="text-2xl font-semibold text-white">When the red box trun green, click as quicly as you can.</p>
      <p class="text-2xl font-semibold text-white">Click anywhere to start.</p>
    </div>
  </section>
</template>