import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { CounterappComponent } from "./counterapp/counterapp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, NavbarComponent, CounterappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angDemoTut';
}
