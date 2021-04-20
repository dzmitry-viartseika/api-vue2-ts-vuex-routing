<template>
  <div>
    test2={{ test2 }}
  </div>
</template>

<script lang="ts">
import {
  Vue, Prop, Component, Watch,
} from 'vue-property-decorator';

@Component({
  props: {
    test2: {
      type: Number,
    },
  },
})
export default class Test extends Vue {
  @Prop()
  test2: number;

  @Watch('test2')
  onChildChanged(oldVal: string) {
    console.log('old', oldVal);
  }

  created() {
    console.log('test2', this.$props.test2);
  }
}
</script>

<style scoped>

</style>
