<template>
  <div class="app-home">
    <h1>Posts</h1>
    isVisibleModal={{ isVisibleModal }}
    <ButtonTemplate
      :buttonText="'Add Post'"
      :btnClass="'warning'"
      @clickHandler="addPost"
    />
    <PostList
      :posts="posts"
    />
    <ModalTemplate
      v-if="isVisibleModal"
      :title="'Add Post'"
      :buttonText="'Add'"
      @buttonEvent="buttonEvent"
      @closeModal="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import postsApi from '@/api/postsApi/api';
import { DataPostsList, Post } from '@/store/models.d';
import PostList from '@/components/Posts/PostList.vue';
import { AxiosResponse } from 'axios';
import storePosts from '@/store/modules/posts';
import ButtonTemplate from '@/components/Elements/ButtonTemplate.vue';
import ModalTemplate from '@/components/Modal/ModalTemplate.vue';

@Component({
  components: {
    PostList,
    ButtonTemplate,
    ModalTemplate,
  },
})

export default class Home extends Vue {
  get posts(): DataPostsList[] {
    return storePosts.postsList || [];
  }

  isVisibleModal = false;

  async addPost() {
    this.isVisibleModal = true;
  }

  async buttonEvent(newPost): void {
    try {
      const { data }: Post = await postsApi.addNewPost(newPost);
      this.posts.unshift(data);
    } catch (e) {
      console.error(e);
    }
  }

  closeModal(): void {
    this.isVisibleModal = false;
  }

  async created() {
    try {
      const response: AxiosResponse = await postsApi.getPostsList(0, 5);
      await storePosts.setPosts(response.data);
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
