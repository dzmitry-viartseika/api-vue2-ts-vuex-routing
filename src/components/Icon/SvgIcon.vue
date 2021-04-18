<template>
  <svg-icon-base
    :class="[$attrs.class, 'svg-icon']"
    :name="name"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import SvgIconBase from 'vue-svgicon';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  components: {
    SvgIconBase,
  },
})
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true })
  public name: string;
}
</script>
