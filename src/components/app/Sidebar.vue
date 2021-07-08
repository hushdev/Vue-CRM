<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="(link, idx) in links"
      :key="idx"
      :to="link.path"
      :exact="link.exact"
      tag="li"
      active-class="active"
    >
      <a class="waves-effect waves-orange pointer">{{ link.text }}</a>
    </router-link>
  </ul>
</template>


<script>
export default {
  name: "sidebar",
  props: ["value"],
  data() {
    return {
      links: [
        { text: "Счет", path: "/", exact: true },
        { text: "История", path: "/history" },
        { text: "Планирование", path: "/planning" },
        { text: "Новая запись", path: "/record" },
        { text: "Категории", path: "/categories" },
      ],
    };
  },
};
</script>