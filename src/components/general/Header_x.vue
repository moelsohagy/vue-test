<template>
  <div class="header">
    <div class="logo">
      <h3>Logo</h3>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  background-color: #35434a;
	display: grid;
}
.logo {
  display: inline-block;
  color: #f2f9ff;
}
#nav {
  display: inline-block;
  padding: 30px;

  a {
    font-weight: bold;
    color: #f2f9ff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
