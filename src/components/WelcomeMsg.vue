<template>
  <div class="welcome-msg">
    <h1>Welcome to vue.js</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum,
      nesciunt cupiditate doloremque nisi repellat odio tempore totam officia
      dolorem deleniti porro perferendis earum alias unde impedit voluptate.
      Atque, sit.
    </p>
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </b-button>
  </div>
</template>

<script>
export default {
  name: "WelcomeMsg",
};
</script>

<style lang="scss">
$fontOfP: 24px;

.welcome-msg {
  margin: 5px 10px 0px;
}
p {
  font-size: $fontOfP;
}
</style>
