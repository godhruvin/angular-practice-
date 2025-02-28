import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatButtonModule,
  MatIconAnchor,
  MatIconButton,
} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent {
  firstname: string = 'abc';
  color: string = 'red';
  changevar(): void {
    console.log(this.firstname);
    this.firstname = 'def';
    console.log(this.firstname);
  }
   margin:string = 'margin-top:5rem';
  // we need to update the component manuallt heree using event . 
  userName: string = '';
  clearName() {
    console.log('username : ' +this.userName);
    this.userName = '';
  }

  // updateUserName(event: Event) {
  //   this.userName = (event.target as HTMLInputElement).value;
  // }
}
