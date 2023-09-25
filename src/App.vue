<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue';
import ButtonPrimary from './components/buttons/ButtonPrimary.vue';
import Buttonsecondary from './components/buttons/buttonsecondary.vue';

const showModal = ref(false)

function toggleModal() {
  showModal.value = !showModal.value
}

onMounted(() => {
  toggleModal()
})

</script>

<template>
  <section class="py-10 px-5 text-center">
    <HelloWorld msg="Vite + Vue" />
    <Teleport to="#modal" v-if="showModal">
      <Modal @close="toggleModal" title="Info">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
          companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that could personally affect them.
        </p>
        <template v-slot:modalButton>
          <ButtonPrimary @click="toggleModal">I accept</ButtonPrimary>
          <Buttonsecondary>Decline</ButtonSecondary>
        </template>
      </Modal>
    </Teleport>

  </section>
</template>