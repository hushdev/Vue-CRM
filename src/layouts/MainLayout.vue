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
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AddBtn from "@/components/AddBtn";

export default {
  name: "main-layout",
  components: { Navbar, Sidebar, AddBtn },
  data() {
    return {
      isSidebarOpen: true,
    };
  },
};
</script>