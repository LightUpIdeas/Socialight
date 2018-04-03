import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './_services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Enevo - Customer Portal';

  constructor(public authService: AuthenticationService) {}
  ngOnInit() {
  }
}
