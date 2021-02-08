<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WelcomeMsg />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMsg from "@/components/WelcomeMsg.vue";

export default {
  name: "about",
  components: {
    WelcomeMsg,
  },
};
</script>

<style lang="scss" scoped>
$fontSize: 50px;
h1 {
  font-size: $fontSize;
}
</style>