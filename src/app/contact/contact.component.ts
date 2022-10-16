import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private api: ApiService) {
    this.fethData() 

  }
  
  fethData = () => {
    this.api.getAllDetails().subscribe((data) => {
      this.details = data
    })
    }

  details:any = []

  ngOnInit(): void {
  }

}
