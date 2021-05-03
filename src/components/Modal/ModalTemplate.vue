<template>
  <div class="app-modal-form">
    <div class="app-modal-form-wrap">
      <div class="app-modal-form-wrap-header">
        <div class="app-modal-form-wrap-header__title" v-if="title">
          {{ title }}
        </div>
        <div
          v-if="closeIcon"
          class="app-modal-form-wrap-header__close"
          @click="closeModal"
        >
          <svg-icon
            class="icon-on-left no-resize"
            :name="'Close'"
          />
        </div>
      </div>
      <div class="app-modal-form-wrap-content">
        <div class="form-group">
          <InputTemplate
            :labelText="'Title'"
            :placeholder="'Enter your title post'"
            :type="'text'"
            :value.sync="post.title"
          />
        </div>
        <div class="form-group">
          <InputTemplate
            :labelText="'Description'"
            :placeholder="'Enter your description'"
            :type="'text'"
            :value.sync="post.body"
          />
        </div>
        <div class="form-group">
          <ButtonTemplate
            :buttonText="buttonText"
            :btnClass="'warning'"
            :disabled="!post.body || !post.title"
            @clickHandler="clickHandler"
          />
        </div>
      </div>
    </div>
    <div
      class="app-modal-form__overlay"
        @click="closeModal"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Post } from '@/store/models.d';
import InputTemplate from '@/components/Elements/InputTemplate.vue';
import ButtonTemplate from '@/components/Elements/ButtonTemplate.vue';
import SvgIcon from '@/components/Icon/SvgIcon.vue';

@Component({
  components: {
    InputTemplate,
    ButtonTemplate,
    SvgIcon,
  },
})
export default class ModalTemplate extends Vue {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  buttonText: string;

  @Prop({})
  item: Post | null;

  @Prop({ type: Boolean })
  closeIcon: boolean;

  post: Post = {
    title: '',
    body: '',
  };

  created() {
    if (this.item) {
      this.post = {
        ...this.item,
      };
    }
  }

  closeModal() {
    this.$emit('closeModal');
  }

  clickHandler(): void {
    this.$emit('buttonEvent', this.post);
    this.$emit('closeModal');
  }
}
</script>

<style scoped>
.app-modal-form {
  width: 100%;
}
</style>
