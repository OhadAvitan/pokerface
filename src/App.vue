<template>
  <div id="app">
    <div id="nav">
      <router-link to="/deck">Deck</router-link>
      <router-link to="/"><img :src="img" class="chipImg" /></router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/chip1.png"),
    };
  },
  computed: {},
};
</script>