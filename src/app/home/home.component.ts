import {Component, OnInit} from '@angular/core';
import {PostData} from '../shared/models';
import {PostService} from '../shared/post.service';
import {NotificationService} from '../shared/notification.service';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../shared/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private posts: PostData[];

  constructor(
    private postService: PostService,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    console.log(this.posts);
  }

  getPosts() {
    return this.posts;
  }

  async onSubmit(form: NgForm) {
    const title = form.value.title;
    const content = form.value.content;

    // Código original para agregar post síncrono
    /*
    this.postService.addNewPost(title, content, 'test123');

    // Refrescar la lista de posts
    this.posts = this.postService.getAllPosts();

    */

    // Código para agregar post asíncrono
    this.spinnerService.showMainSpinner();

    try {
      const result = await this.postService.addNewPostAsync(title, content, 'test123');
      console.log('resultado', result);
      this.notificationService.showSuccessMessage('Todo bien!', result.toString());
      this.posts = this.postService.getAllPosts();
    } catch (error) {
      console.log('error', error);
      this.notificationService.showErrorMessage('Error!', 'Error al crear la publicación');
    } finally {
      this.spinnerService.hideMainSpinner();
    }
  }
}
