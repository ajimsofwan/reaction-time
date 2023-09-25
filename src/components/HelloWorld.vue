<script setup>

defineProps({
  msg: String,
})
</script>

<template>
  <h1 class="text-6xl font-bold my-4">Hello From {{ msg }}</h1>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Lorem ipsum dolor sit amet
    consectetur
    adipisicing
    elit. Illo voluptatum, nostrum labore reiciendis ut possimus. Aut voluptates, fugiat laboriosam soluta unde quam quas
    est veniam quae, dicta nostrum eos repellendus natus ut! Dicta, harum odio, distinctio autem eaque saepe cupiditate
    eum unde quas culpa repellendus hic sit alias vitae fugiat.
  </p>
</template>
