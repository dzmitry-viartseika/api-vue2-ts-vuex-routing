<template>
  <button
    class="btn btn-primary"
    :class="`btn-${btnClass}`"
    @click="buttonHandler">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit,
} from 'vue-property-decorator';

@Component
export default class ButtonTemplate extends Vue {
  @Prop({ required: true })
  buttonText: string;

  @Prop({ default: 'primary', type: String })
  btnClass: string;

  text: string;

  created() {
    console.log('btnClass', this.btnClass);
  }

  @Emit('clickHandler')
  buttonHandler(): void {
    console.log('123');
  }
}

</script>

<style scoped>

</style>
