<template>
  <modal @close="$emit('close')">
    <p class="text-black text-2xl font-medium text-center" slot="header">Удаление заметки</p>
    <div class="flex flex-row justify-between py-6 px-6 lg:py-8 lg:px-12">
      <button class="hover:underline" @click="$emit('deleteTask')">Удалить</button>
      <button class="hover:underline" @click="$emit('close')">Отменить</button>
    </div>
  </modal>
</template>

<script>
import Modal from './base-modal.vue';

export default {
  name: 'confirm-modal',
  components: { Modal },
};
</script>

<style scoped>

</style>
