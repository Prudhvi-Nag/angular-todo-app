import { Component , OnInit} from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { MenuItems } from './MenuItems';
import { InteractionService } from 'src/app/shared/interaction.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private is:InteractionService){
    
  }
  // menuItems: any = MenuItems;
  menuItems: MenuItem[] = MenuItems;

  count : any = 0;

  ngOnInit():void{
    this.is.todoAnnounced$.subscribe((value) =>{
      this.count = value;
    })
  }
}

// [{
//   "title": "Home",
//   "link": "/",
//   "className": "home-link"
// },
// {
//   "title": "Todo",
//   "link": "/todo",
//   "className": "todo-link"
// }  
// ]