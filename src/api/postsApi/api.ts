import axios from 'axios';
import { CURRENT_SERVER } from '@/api/domain';

export default {
  getPostsList(start: number | undefined = 0, limit: number | undefined = 20) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get(`/posts?start=${start}&_limit=${limit}`);
  },
  deletePost(id: number) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.delete(`/posts/${id}`);
  },
  addNewPost(post) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.post('/posts', post);
  },
};
