<template>
  <div class="app-home">
    <h1>Posts</h1>
    <PostList
      :posts="posts"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import postsApi from '@/api/postsApi/api';
import { DataPostsList } from '@/store/models.d';
import PostList from '@/components/Posts/PostList.vue';
import { AxiosResponse } from 'axios';

@Component({
  components: {
    PostList,
  },
})
export default class Home extends Vue {
  posts: DataPostsList[] = [];

  async created() {
    try {
      const response: AxiosResponse = await postsApi.getPostsList(0, 10);
      const { data } = response;
      this.posts = data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
