<template>
  <div id="app">
    <Header />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/general/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
