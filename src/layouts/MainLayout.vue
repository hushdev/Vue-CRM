<template>
  <div>
    <div class="app-main-layout">
      <Navbar @toggleSidebar="isSidebarOpen = !isSidebarOpen" />
      <Sidebar v-model="isSidebarOpen" />
      <main :class="{ full: !isSidebarOpen }" class="app-content">
        <div class="app-page">
          <router-view />
        </div>
      </main>
      <add-btn />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import AddBtn from "@/components/app/AddBtn";

export default {
  name: "main-layout",
  components: { Navbar, Sidebar, AddBtn },
  data() {
    return {
      isSidebarOpen: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("getInfo");
    }
  },
};
</script>