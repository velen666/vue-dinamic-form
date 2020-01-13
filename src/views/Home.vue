<template>
  <div class="home">
    <div class="toolbar">
      <Sidebar />
    </div>
    <div class="content">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from "@/section/Header.vue";
import Sidebar from "@/section/Sidebar.vue";
import Content from "@/section/Content.vue";

export default {
  name: "home",
  components: {
    Header,
    Sidebar,
    Content
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  min-height: 100vh;
}

.toolbar {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 200px;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
