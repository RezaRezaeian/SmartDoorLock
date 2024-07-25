import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-door-info-card',
  standalone: true,
  imports: [FontAwesomeModule, HeaderComponent, FooterComponent],
  templateUrl: './door-info-card.component.html',
  styleUrl: './door-info-card.component.css',
})
export class DoorInfoCardComponent {
  faCoffee = faCoffee;
  doorState: boolean = false;
  public openDoor() {
    if (!this.doorState) {
      this.doorState = true;
    }
  }
  public closeDoor() {
    if (this.doorState) {
      this.doorState = false;
    }
  }
}
