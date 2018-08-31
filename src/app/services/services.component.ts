import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
content=`Lorem ipsum dolor sit amet, consectetur adipisic
ing elit, sed do eiusmod tempor
ilabore et dolore.`
  constructor() { }
  service_info=[
    {
      qty:13,
      info:"Designers"
    },
    {
      qty:2580,
      info:"Hours Worked"
    },
    {
      qty:485,
      info:"Projects"
    },
    {
      qty:750,
      info:"Tweets"
    },
    {
      qty:380,
      info:"Coffee Cups"
    }
  ];

  service_gallery=[
    {
      imgUrl:"../assets/img/icon1.png",
      title:"App Design",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporilabore et dolore."
    },
    {
      imgUrl:"../assets/img/icon2.png",
      title:"Responsive Layout",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporilabore et dolore."
    },
    {
      imgUrl:"../assets/img/icon3.png",
      title:"Pixel Perfect Design",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporilabore et dolore."
    },
  ]
  ngOnInit() {
  }

}
