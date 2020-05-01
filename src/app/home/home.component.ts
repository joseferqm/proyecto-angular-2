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

    this.postService.addNewPost(title, content, 'test123');

    // Refrescar la lista de posts
    this.posts = this.postService.getAllPosts();
  }
}
