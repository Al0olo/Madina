<template>
  <ion-nav :root="component"></ion-nav>
</template>

<script lang="ts">
  import { IonNav } from '@ionic/vue';
  import IntroPage from './LoginPage.vue';

  export default {
    components: { IonNav },
    data() {
      return {
        component: IntroPage,
      };
    },
  };
</script>