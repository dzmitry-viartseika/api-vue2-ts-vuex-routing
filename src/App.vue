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
    const token: string | null = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/');
    } else {
      this.$router.push('/posts');
    }
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

</style>
