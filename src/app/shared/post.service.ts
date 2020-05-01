import {Injectable} from '@angular/core';
import { PostData } from './models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: PostData[] = [
    {
      key: '1',
      creationDate: new Date().toString(),
      title: 'Primer Post',
      content: 'Lorem ipsum',
      author: 'test1',
      img: 'https://placeimg.com/320/240/any/sepia',
      created: Date.now()
    },
    {
      key: '2',
      creationDate: new Date().toString(),
      title: 'Segundo Post',
      content: 'Lorem ipsum',
      author: 'test1',
      img: 'https://placeimg.com/320/240/any/sepia',
      created: Date.now()
    },
    {
      key: '3',
      creationDate: new Date().toString(),
      title: 'Tercer Post',
      content: 'Lorem ipsum',
      author: 'test2',
      img: 'https://placeimg.com/320/240/any/sepia',
      created: Date.now()
    },
    {
      key: '4',
      creationDate: new Date().toString(),
      title: 'Cuarto Post',
      content: 'Lorem ipsum',
      author: 'test2',
      img: 'https://placeimg.com/320/240/any/sepia',
      created: Date.now()
    }
  ];

  constructor() {}

  getAllPosts() {
    return JSON.parse(JSON.stringify(this.posts)); // Deep copy
  }
}
