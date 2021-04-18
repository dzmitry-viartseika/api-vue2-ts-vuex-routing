<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {
  created() {
    const user = localStorage.getItem('user');
    if (user) {
      this.$router.push('/posts');
    } else {
      this.$router.push('/login');
    }
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

</style>
