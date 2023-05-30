import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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

  teacard =[
    {
      id: 1,
      image:"assets/images/image1.jpg",
      name: 'Tea',
      grade:'A Grade' ,
      price:'1400' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
    {
      id: 2,
      image:"assets/images/image1.jpg",
      name: 'Green tea',
      grade:'B Grade' ,
      price:'900' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
    {
      id: 3,
      image:"assets/images/image1.jpg",
      name: 'Silver white tea',
      grade:'C Grade' ,
      price:'750' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
  ];
  currentTeacardIndex = 0;

  onSwiperrLeft() {
    if (this.currentTeacardIndex > 0) {
      this.currentTeacardIndex--;
    }
  }
  
  onSwiperrRight() {
    if (this.currentTeacardIndex < this.teacard.length - 2) {
      this.currentTeacardIndex++;
    }
  }


  coffeecard =[
    {
      id: 1,
      image:"assets/images/image1.jpg",
      name: 'Coffee beans',
      grade:'A Grade' ,
      price:'1400' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
    {
      id: 2,
      image:"assets/images/image1.jpg",
      name: 'Split coffee beans',
      grade:'B Grade' ,
      price:'900' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
  ];

  betelnutscard =[
    {
      id: 1,
      image:"assets/images/image1.jpg",
      name: 'Coffee beans',
      grade:'A Grade' ,
      price:'1400' ,
      weight:'1 Kg' ,
      button:'Enquire' ,
    },
  ];
  // onSwiperRight() {
  //   if (this.currentCatagoriesIndex === 0) {
  //     this.currentCatagoriesIndex = 1;
  //   } else if (this.currentCatagoriesIndex === 1) {
  //     this.currentCatagoriesIndex = 2;
  //   }
  // }
  
  // onSwiperLeft() {
  //   if (this.currentCatagoriesIndex === 1) {
  //     this.currentCatagoriesIndex = 0;
  //   } else if (this.currentCatagoriesIndex === 2) {
  //     this.currentCatagoriesIndex = 1;
  //   }
  // }

  // onSwiperRight() {
  //   if (this.currentCatagoriesIndex === 0) {
  //     this.currentCatagoriesIndex = 1;
  //   } else if (this.currentCatagoriesIndex === 1) {
  //     this.currentCatagoriesIndex = 2;
  //   } else if (this.currentCatagoriesIndex < this.cards.length - 2) {
  //     this.currentCatagoriesIndex += 2;
  //   }
  // }
  
  // onSwiperLeft() {
  //   if (this.currentCatagoriesIndex === 2) {
  //     this.currentCatagoriesIndex = 1;
  //   } else if (this.currentCatagoriesIndex === 1) {
  //     this.currentCatagoriesIndex = 0;
  //   } else if (this.currentCatagoriesIndex > 1) {
  //     this.currentCatagoriesIndex -= 2;
  //   }
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

}
