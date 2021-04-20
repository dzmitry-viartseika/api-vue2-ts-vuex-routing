<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import '@/shared/icons';

@Component
export default class App extends Vue {
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      this.$router.push('/posts');
    } else {
      this.$router.push('/');
    }
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

</style>
