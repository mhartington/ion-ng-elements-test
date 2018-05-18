import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  ngOnInit(){
    console.log('hello from Angula')
  }
}
