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
      @clickHandler="editPost"
    />
    <ButtonTemplate
      :buttonText="'Delete'"
      :btnClass="'warning'"
      @clickHandler="deletePost"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { DataPostsList, Post } from '@/store/models.d';
import ButtonTemplate from '@/components/Elements/ButtonTemplate.vue';
import postsApi from '@/api/postsApi/api';
import storePosts from '@/store/modules/posts';

@Component({
  components: {
    ButtonTemplate,
  },
})
export default class PostItem extends Vue {
  @Prop({})
  item: Post

  get posts(): DataPostsList[] {
    return storePosts.postsList || [];
  }

  editPost(): void {
    console.log('editPost');
  }

  async deletePost(): void {
    console.log('deletePost');
    try {
      const { id } = this.item;
      await postsApi.deletePost(id);
      const filteredPosts: Post[] = this.posts.filter((post) => post.id !== id);
      await storePosts.setPosts(filteredPosts);
    } catch (e) {
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
