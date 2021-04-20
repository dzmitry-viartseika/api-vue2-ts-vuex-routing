<template>
  <div class="app-home">
    test2={{ test2 }}
    <hr>
    <input type="text" v-model="test">
    <test :test2="test2"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import test from '@/components/test.vue';

@Component({
  components: {
    test,
  },
})
export default class Home extends Vue {
  test = '';

  get test2(): number {
    return +this.test + 10;
  }
}
</script>
