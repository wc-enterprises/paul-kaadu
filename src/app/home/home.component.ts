import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  daysTime = '08.00-20.00';
  daysClosed = 'Closed';
  closedDays = 'Sat - Sun';
  openDays = 'Mon - Fri';
  cards =[
    {
      id: 1,
      image:"assets/images/image1.jpg",
      spices: 'Cardamom',
      button:'Shop now' ,
    },
    {
      id: 2,
      image:"assets/images/tea.jpeg",
      spices: 'Tea',
      button:'Shop now' ,
    },
    {
      id: 3,
      image:"assets/images/coffee.webp",
      spices: 'Coffee',
      button:'Shop now' ,
    },
    {
      id: 4,
      image:"assets/images/betel nuts.jpg",
      spices: 'Betel nuts',
      button:'Shop now' ,
    },
    {
      id: 5,
      image:"assets/images/pepper.jpg",
      spices: 'Pepper',
      button:'Shop now' ,
    },
  ];
  currentCardIndex = 0;

  onSwipeRight() {
    if (this.currentCardIndex < this.cards.length - 2) {
      this.currentCardIndex += 2;
    }
  }

  onSwipeLeft() {
    if (this.currentCardIndex > 1) {
      this.currentCardIndex -= 2;
    }
  }

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
      grade:'B Grade' ,
      price:'900' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
    {
      id: 3,
      image:"assets/images/image1.jpg",
      name: 'Cardamom',
      grade:'C Grade' ,
      price:'750' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
  ];
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
