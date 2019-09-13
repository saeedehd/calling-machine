import { Component , OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost (postData: { title:string; content:string }) {
    console.log(postData);
  }

}
