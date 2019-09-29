import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashabaord',
  templateUrl: './dashabaord.component.html',
  styleUrls: ['./dashabaord.component.scss']
})
export class DashabaordComponent implements OnInit {



  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
