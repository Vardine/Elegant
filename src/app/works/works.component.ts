import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
 work_photos=["../assets/img/work1.png","../assets/img/work2.png","../assets/img/work3.png","../assets/img/work4.png","../assets/img/work5.png","../assets/img/work6.png"]
  constructor() { }

  ngOnInit() {
  }

}
