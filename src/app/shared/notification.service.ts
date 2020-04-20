import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  private toastrSettings = {
    closeButton: true,
    progressBar: true
  };

  showErrorMessage(title: string, message: string) {
    this.toastr.error(message, '💣 ' + title, this.toastrSettings);
  }
}
