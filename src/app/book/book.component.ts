import { Component, OnInit } from '@angular/core';
import { WashService } from '../wash.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  name;
  last;
  address;
  mobile; 
  email;
  city;

  constructor(private us: WashService) { }

  ngOnInit() {
  }

  addData(){
this.us.addData(this.name,this.last,this.address,this.mobile,this.email,this.city)


  }

}
