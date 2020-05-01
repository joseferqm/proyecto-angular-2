import {Component, OnInit} from '@angular/core';
import {PostData} from '../shared/models';
import {PostService} from '../shared/post.service';
import {NotificationService} from '../shared/notification.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private posts: PostData[];

  constructor(private postService: PostService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    console.log(this.posts);
  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    const content = form.value.content;

    // Código original para agregar post síncrono
    /*
    this.postService.addNewPost(title, content, 'test123');

    // Refrescar la lista de posts
    this.posts = this.postService.getAllPosts();

    */

    // Código para agregar post asíncrono
    this.postService
      .addNewPostAsync(title, content, 'test123')
      .then((result) => {
        this.notificationService.showSuccessMessage('Todo bien!', 'Publicación creada');
        this.posts = this.postService.getAllPosts();
      })
      .catch((error) => {
        this.notificationService.showErrorMessage('Error!', 'Error al crear la publicación');
      });
  }
}
