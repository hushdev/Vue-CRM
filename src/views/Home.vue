<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <Preloader v-if="!bill" />
      <template v-else-if="bill">
        <home-bill :bill="bill" />
        <home-rate />
      </template>
    </div>
  </div>
</template>

<script>
import HomeBill from "@/components/HomeBill";
import HomeRate from "@/components/HomeRate";

export default {
  components: { HomeBill, HomeRate },
  computed: {
    bill() {
      return this.$store.getters.info.bill;
    },
  },
};
</script>
