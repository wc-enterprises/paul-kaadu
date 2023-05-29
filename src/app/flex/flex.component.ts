
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  // cards = [
  //   { id: 1, title: 'Card 1', description: 'Description of card 1' },
  //   { id: 2, title: 'Card 2', description: 'Description of card 2' },
  //   { id: 3, title: 'Card 3', description: 'Description of card 3' },
  //   { id: 4, title: 'Card 4', description: 'Description of card 4' },
  //   { id: 5, title: 'Card 5', description: 'Description of card 5' },
  //   { id: 6, title: 'Card 5', description: 'Description of card 5' },
  // ];
   public cards =[
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
  constructor() {}

  ngOnInit(): void {

  }

}
