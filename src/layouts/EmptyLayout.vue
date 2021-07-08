<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>


<script>
import messages from "@/utils/messages";

export default {
  name: "emptyLayout",
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      if (this.error) {
        this.$error(messages[fbError] || "Что-то пошло не так");
      }
    },
  },
};
</script>