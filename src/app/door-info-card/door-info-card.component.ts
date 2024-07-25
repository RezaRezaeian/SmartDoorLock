import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-door-info-card',
  standalone: true,
  imports: [FontAwesomeModule, HeaderComponent],
  templateUrl: './door-info-card.component.html',
  styleUrl: './door-info-card.component.css',
})
export class DoorInfoCardComponent {
  faCoffee = faCoffee;
}
