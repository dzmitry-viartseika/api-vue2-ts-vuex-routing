<template>
  <label>
    {{ labelText }}
    <input
      class="form-control"
      :type="type"
      v-model="model"
      :placeholder="placeholder">
  </label>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit, PropSync,
} from 'vue-property-decorator';

@Component
export default class InputTemplate extends Vue {
  @Prop({ required: true })
  labelText: string;

  @Prop({ default: 'text', type: String })
  type: string;

  @PropSync('value', { type: String }) model!: string

  @Prop({ required: true })
  placeholder: string;

  @Emit('clickHandler')
  buttonHandler(): void {
    console.log('123');
  }
}

</script>
