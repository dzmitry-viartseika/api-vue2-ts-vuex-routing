<template>
  <div class="app-post__item">
    <h2 class="app-post__item-title">
      {{ item.title }}
    </h2>
    <p class="app-post__item-body">
      {{ item.body }}
    </p>
    <ButtonTemplate
      :buttonText="'Edit'"
      :btnClass="'warning'"
      @clickHandler="editPost(item.id)"
    />
    <ButtonTemplate
      :buttonText="'Delete'"
      :btnClass="'warning'"
      @clickHandler="deletePost"
    />
    <ModalTemplate
      :title="modalType"
      :buttonText="'Edit'"
      v-if="isVisibleModal === item.id"
      :item="item"
      @closeModal="closeModal"
      @buttonEvent="buttonEvent"
      :closeIcon="true"
    />
    <Loader
      v-if="isLoader"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Post } from '@/store/models.d';
import ButtonTemplate from '@/components/Elements/ButtonTemplate.vue';
import ModalTemplate from '@/components/Modal/ModalTemplate.vue';
import postsApi from '@/api/postsApi/api';
import storePosts from '@/store/modules/posts';
import Loader from '@/components/Loader/Loader.vue';

@Component({
  components: {
    ButtonTemplate,
    ModalTemplate,
    Loader,
  },
})
export default class PostItem extends Vue {
  @Prop({})
  item: Post;

  modalType = '';

  isLoader = false;

  isVisibleModal = -1;

  get posts(): Post[] {
    return storePosts.postsList || [];
  }

  editPost(id: number): void {
    this.modalType = 'Edit Post';
    this.isVisibleModal = id;
  }

  async buttonEvent(post: Post): Promise<any> {
    try {
      this.isLoader = true;
      const { data } = await postsApi.editPost({ id: post.id, post });
      const currentPostIndex = this.posts.findIndex((item) => item.id === data.id);
      this.posts.splice(currentPostIndex, 1, data);
      this.isLoader = false;
    } catch (e) {
      this.isLoader = false;
      console.error(e);
    }
  }

  closeModal(): void {
    this.isVisibleModal = -1;
  }

  async deletePost(): Promise<any> {
    try {
      const { id } = this.item;
      this.isLoader = true;
      await postsApi.deletePost(id);
      const filteredPosts: Post[] = this.posts.filter((post) => post.id !== id);
      await storePosts.setPosts(filteredPosts);
      this.isLoader = false;
    } catch (e) {
      this.isLoader = false;
      console.error(e);
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

  .app-post__item {
    max-width: 400px;
    padding: 10px;
    border: 1px solid $color-gradient-end;

    &-title {
      font-size: 14px;
      font-weight: bold;
    }

    & + .app-post__item {
      margin-top: 15px;
    }
  }
</style>
