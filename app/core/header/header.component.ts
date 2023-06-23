import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'CarsLine';
constructor (private root: Router){

}
  onLogin(){
    this.root.navigateByUrl('authentification/login');
  }
}
