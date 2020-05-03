import {Injectable} from '@angular/core';
import {PostData} from './models';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() {}

  getAllPosts() {
    /*
    return JSON.parse(JSON.stringify(this.posts)); // Deep copy
    */
  }

  /*
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
  */

  addNewPostAsync(title: string, content: string, author: string) {
    /*
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
    */

    const firebaseUserId = firebase.auth().currentUser.uid;
    const newPostKey = firebase.database().ref().child(`posts/${firebaseUserId}`).push().key;
    const newPostEntry = {
      title: title,
      content: content,
      author: author,
      created: new Date().getTime(),
      creationDate: new Date().toString(),
      img: 'https://placeimg.com/320/240/any/sepia'
    };

    // Objeto con todos los cambios por aplicar en la base de datos de Firebase
    // esto permite mandar varios cambios a la vez
    const updates = {};
    updates[`posts/${firebaseUserId}/${newPostKey}`] = newPostEntry;
    return firebase.database().ref().update(updates);
  }

  getPostsByAuthor(author: string) {
    /*
    return this.posts.filter(post => {
      return post.author === author;
    });
    */
  }
}
