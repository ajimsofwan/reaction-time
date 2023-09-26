<script setup>

defineProps({
  title: String,
  message: String,
})

const emit = defineEmits(['modal'])

function closeModal() {
  emit('modal')
}

</script>

<template>
  <div
    class="fixed inset-0 top-20 z-50 flex justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ title }}
          </h3>
          <button @click="closeModal" type="button"
            class="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-6 space-y-6 text-left">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
  <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
</template>