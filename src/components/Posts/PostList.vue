<template>
  <div>
    <PostItem
      v-for="(item, index) in posts"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import PostItem from '@/components/Posts/PostItem.vue';
import { Post } from '@/store/models.d';

@Component({
  components: {
    PostItem,
  },
})
export default class PostList extends Vue {
  @Prop({})
  posts: Post[];
}
</script>

<style scoped>

</style>
