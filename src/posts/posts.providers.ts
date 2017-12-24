import { Posts } from './model/posts.model';
import { Constant } from '../config/constant';

export const PostsProviders = [
  {
    provide: Constant.postRepo,
    useValue: Posts,
  },
];