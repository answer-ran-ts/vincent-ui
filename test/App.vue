<template>
  <div id="app">
    <v-button type="primary" class="cus-btn" ripple>水波纹按钮</v-button>
    <v-button type="primary" class="cus-btn" round>round按钮</v-button>
    <v-button type="primary" class="cus-btn" buttonSize="mini">mini按钮</v-button>
    <v-button type="primary" class="cus-btn" buttonSize="small">small按钮</v-button>
    <v-button type="primary" class="cus-btn" buttonSize="big">small按钮</v-button>
    <v-button type="primary" class="cus-btn" icon="icon-test10" buttonSize="big">图标</v-button>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cus-btn {
  margin-right: 10px !important;
}
</style>
