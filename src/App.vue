<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import "@/assets/index.css";
import "materialize-css/dist/js/materialize";
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "app",
  components: { EmptyLayout, MainLayout },
  computed: {
    layout() {
      return this.$route.meta.layout
        ? this.$route.meta.layout + "-layout"
        : "main-layout";
    },
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.css";
@import "./assets/index.css";
</style>