import axios from 'axios';
import { CURRENT_SERVER } from '@/api/domain';
import { UserSubmit } from '@/store/models.d';

export default {
  loginUser(user: UserSubmit) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.post('users/login', user);
  },
};
