<template>
  <div id="app" class="container flex flex-col mx-auto my-16">
    <div v-if="$route.name !== 'Home'" id="nav" class="w-full flex justify-center text-2xl font-semibold">
      <button class="w-auto lg:hover:underline" @click="main_page_redirect = true">Главная страница</button>
    </div>
    <router-view/>
    <goto-mainpage-modal v-if="main_page_redirect" @close="main_page_redirect = false"
                         class="z-70 flex" key="goto-mainpage-modal"></goto-mainpage-modal>
    <portal-target name="modals" class="relative z-60"></portal-target>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import GotoMainpageModal from './components/goto-mainpage-modal.vue';

export default {
  components: { GotoMainpageModal },
  data() {
    return {
      main_page_redirect: false,
    };
  },
};
</script>
<style scoped>
@import "styles/less/app.less";

</style>
