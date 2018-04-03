import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService, RequestService } from '../_services/index';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Enevo - Customer Portal';
  constructor(
    private authService: AuthenticationService,
    private requestService: RequestService,
    private alertService: AlertService


  ) {}
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
      this.requestService.setSideBar(this.status);       
  }
  ngOnInit() {
    // this.requestService.locations()
    //   .subscribe(
    //     data => {
    //     },
    //     error => {
    //       this.alertService.error(error);
    //     });
    // this.requestService.container()
    //   .subscribe(
    //     data => {
    //     },
    //     error => {
    //       this.alertService.error(error);
    //     });
    // this.requestService.diversionRate()
    //   .subscribe(
    //     data => {
    //     },
    //     error => {
    //       this.alertService.error(error);
    //     });
  }
  
  onLogout(){
    this.authService.logout();                      
  }
}
