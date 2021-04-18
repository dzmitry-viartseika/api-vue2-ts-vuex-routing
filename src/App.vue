<template>
  <div id="app">
    <ButtonTemplate
      :buttonText="'wertey'"
      :btnClass="'warning'"
      @clickHandler="clickHandler"
    />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ButtonTemplate from '@/components/Elements/ButtonTemplate.vue';

@Component({
  components: {
    ButtonTemplate,
  },
})

export default class App extends Vue {
  clickHandler(): void {
    console.log('text');
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/style.scss';

</style>
