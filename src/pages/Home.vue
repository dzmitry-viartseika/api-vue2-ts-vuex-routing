<template>
    <div class="app-home">
      <h1>Posts</h1>
      <div class="app-home__create">
        <ButtonTemplate
          :buttonText="'Add Post'"
          :btnClass="'warning'"
          @clickHandler="addPost"
        />
      </div>
      <PostList
        :posts="posts"
      />
      <ModalTemplate
        v-if="isVisibleModal"
        :title="'Add Post'"
        :buttonText="'Add'"
        @buttonEvent="buttonEvent"
        @closeModal="closeModal"
        :closeIcon="true"
      />
      <Loader
        v-if="isLoader"
      />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import postsApi from '@/api/postsApi/api';
import { Post } from '@/store/models.d';
import PostList from '@/components/Posts/PostList.vue';
import { AxiosResponse } from 'axios';
import storePosts from '@/store/modules/posts';
import ButtonTemplate from '@/components/Elements/ButtonTemplate.vue';
import ModalTemplate from '@/components/Modal/ModalTemplate.vue';
import Loader from '@/components/Loader/Loader.vue';

@Component({
  components: {
    PostList,
    ButtonTemplate,
    ModalTemplate,
    Loader,
  },
})

export default class Home extends Vue {
  get posts(): Post[] {
    return storePosts.postsList || [];
  }

  isVisibleModal = false;

  isLoader = false;

  addPost() {
    this.isVisibleModal = true;
  }

  async buttonEvent(newPost) {
    try {
      this.isLoader = true;
      const { data } = await postsApi.addNewPost(newPost);
      this.posts.unshift(data);
      this.isLoader = false;
    } catch (e) {
      this.isLoader = false;
      console.error(e);
    }
  }

  closeModal(): void {
    this.isVisibleModal = false;
  }

  async created() {
    try {
      this.isLoader = true;
      const response: AxiosResponse = await postsApi.getPostsList(0, 5);
      await storePosts.setPosts(response.data);
      this.isLoader = false;
    } catch (e) {
      this.isLoader = false;
      console.error(e);
    }
  }
}
</script>

<style lang="scss">
  .app-home {

    &__create {
      margin-bottom: 15px;
    }
  }
</style>
