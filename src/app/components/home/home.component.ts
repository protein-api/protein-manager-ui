import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  titleCard: string = 'Angular';
  numberCard: number = 4;
  subTitleCard: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  contentCard: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  angularImage: string;

}
