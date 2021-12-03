<template>
  <div id="app" class="container">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import UserLayout from "@/layouts/UserLayout";
import ErrorLayout from "./layouts/ErrorLayout";
import AdminLayout from "./layouts/AdminLayout";
import EmptyLayout from "./layouts/EmptyLayout";
export default {
  name: "App",
  components: {
    UserLayout,
    ErrorLayout,
    AdminLayout,
    EmptyLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
