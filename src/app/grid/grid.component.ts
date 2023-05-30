import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  daysTime = 'Monday-Friday, 9am-5pm';
  daysClosed = 'Saturday & Sunday';

  cardamomcard =[
    {
      id: 1,
      image:"assets/images/image1.jpg",
      name: 'Cardamom',
      grade:'A Grade' ,
      price:'1400' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
    {
      id: 2,
      image:"assets/images/image1.jpg",
      name: 'Cardamom',
      grade:'A Grade' ,
      price:'1400' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
  ]
  currentCardamomcardIndex = 0;

  onSwiperLeft() {
    if (this.currentCardamomcardIndex > 0) {
      this.currentCardamomcardIndex--;
    }
  }
  
  onSwiperRight() {
    if (this.currentCardamomcardIndex < this.cardamomcard.length - 2) {
      this.currentCardamomcardIndex++;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }


}
