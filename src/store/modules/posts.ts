import {
  VuexModule, Module, getModule, MutationAction,
} from 'vuex-module-decorators';
import store from '@/store/store';
import { Post } from '@/store/models.d';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'wertey',
  store,
})

class PostsModule extends VuexModule {
  postsList = [];

  @MutationAction
  async setPosts(data) {
    return {
      postsList: data,
    };
  }

  async deletePost(data) {
    console.log('data', data);
  }
}

export default getModule(PostsModule);
