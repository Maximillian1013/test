<template>
  <modal :customWidth="'goto-mainpage-modal'" @close="$emit('close')">
    <div>
      <p class="text-black text-xl font-medium text-center mt-4" slot="header">При переходе на главную страницу, все не сохраненный изменения пропадут.</p>
      <div class="flex flex-row justify-between p-8">
        <button class="lg:hover:underline" @click="redirectToMainPage()">Перейти на главную страницу</button>
        <button class="hover:underline" @click="$emit('close')">Отменить</button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './base-modal.vue';

export default {
  name: 'goto-mainpage-modal',
  components: { Modal },
  methods: {
    redirectToMainPage() {
      this.$router.push('/');
      this.$emit('close');
    },
  },
};
</script>

<style scoped>

</style>
