import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface Dog{

}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  records = {}

  constructor(private http: HttpClient) {

   }

   getData(){
     return this.http.get('https://share-a-dog.herokuapp.com/dog/111')
   }

  ngOnInit() {
     this.getData().subscribe(data =>{
      this.records = data
     });
  }

}
