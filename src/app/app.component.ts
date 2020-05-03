import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'el ejemplo de clase';

  // Para inicializar Firebase una única vez
  // Funciona como un singleton para toda la aplicación
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyBuI9n-Od-K6sQZZCq9ekRLyljdsp8YIJ0',
      authDomain: 'proyecto-2-angular-ci2400.firebaseapp.com',
      databaseURL: 'https://proyecto-2-angular-ci2400.firebaseio.com',
      projectId: 'proyecto-2-angular-ci2400',
      storageBucket: 'proyecto-2-angular-ci2400.appspot.com',
      messagingSenderId: '411773194587',
      appId: '1:411773194587:web:395644b1fa8bfee1fa4a7e',
      measurementId: 'G-9KXNRWEET2'
    };
  }
}
