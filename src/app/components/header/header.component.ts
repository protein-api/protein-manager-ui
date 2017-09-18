import {Component} from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = '';
  isAuthenticated = false;



  user() {

  }

  profileUsername: string = '';



  public menuItems: Array<Object> = [
    {
      icon: 'photo_library',
      title: 'Portfolio',
      link: 'https://jerouw.nl'
    },
    {
      icon: 'link',
      title: 'Fork on Github',
      link: 'https://github.com/jeroenouw/Angular4MaterialDesign'
    },
  ];



}
