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

  advert = {}
  dog = {}

  constructor(private http: HttpClient) {

   }

   getDog(){
     return this.http.get('https://share-a-dog.herokuapp.com/dog/111')
   }

   getAdvert(){
    return this.http.get('https://share-a-dog.herokuapp.com/advert/Pasirūpinkite mano angelėliu')
   }

   borrow(){
    console.log("CLICKEDDD");
    window.location.reload();
    return this.http.get('https://share-a-dog.herokuapp.com/advert/borrow/Pasirūpinkite mano angelėliu')
    .subscribe( data =>{
      this.advert = data;
     }
     )
   }

  ngOnInit() {
     this.getDog().subscribe(data =>{
      this.dog = data
     });

     this.getAdvert().subscribe( data =>{
      this.advert = data;
     }
     );
  }

}
