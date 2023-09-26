<script setup>

defineProps({
  title: String,
  message: String,
})

const emit = defineEmits(['modal'])

function showModal() {
  emit('modal')
}

</script>

<template>
  <nav class="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
    <div class="p-4 mx-auto">
      <div class="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8" viewBox="0 0 512 512">
          <title>ionicons-v5-m</title>
          <path
            d="M315.27,33,96,304H224L192.49,477.23a2.36,2.36,0,0,0,2.33,2.77h0a2.36,2.36,0,0,0,1.89-.95L416,208H288L319.66,34.75A2.45,2.45,0,0,0,317.22,32h0A2.42,2.42,0,0,0,315.27,33Z"
            style="fill:none;stroke:#10b981;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
        </svg>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Reaction Time</span>
        <a href="#" @click="showModal" class="ml-2"><svg xmlns="http://www.w3.org/2000/svg"
            class="h-7 fill-slate-400 text-slate-400" viewBox="0 0 512 512">
            <path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none"
              stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
              d="M220 220h32v116" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
              d="M208 340h88" />
            <path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" />
          </svg></a>
      </div>
    </div>
  </nav>
</template>