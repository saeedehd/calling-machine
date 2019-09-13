import { Component, OnInit } from '@angular/core';
import { LISTS } from '../shared/list-mock';
import { List } from '../list.model';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  showed:boolean = false;
  lists = LISTS;
  getList(userId:number):List[] {
    let myList: List[];
    let i: number;
    for (i=0;i<this.lists.length;i++){
      if (this.lists[i].userId == userId && this.lists[i].listStatus == "uncompleted") {
        myList.push(this.lists[i]);
      }
    }
    return myList;
  }
  constructor() { }

  ngOnInit() {
  }

}
