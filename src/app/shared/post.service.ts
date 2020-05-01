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

  addNewPost(title: string, content: string, author: string) {
    const newKey = this.posts.length + 1;

    const newPost: PostData = {
      key: newKey.toString(10),
      creationDate: new Date().toString(),
      title: title,
      content: content,
      author: author,
      img: 'https://placeimg.com/320/240/any/sepia',
      created: Date.now()
    };

    this.posts.push(newPost);
  }

  addNewPostAsync(title: string, content: string, author: string) {
    const prom = new Promise((resolve, reject) => {
      const randomNumber = Math.random();

      if (randomNumber > 0.5) {
        setTimeout(() => {
          this.addNewPost(title, content, author);
          resolve('Publicación creada');
        }, 2000);
      } else {
        setTimeout(() => {
          reject('Error en el servidor');
        }, 3000);
      }
    });

    return prom;
  }
}
