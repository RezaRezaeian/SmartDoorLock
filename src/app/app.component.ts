import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DoorInfoCardComponent } from './door-info-card/door-info-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { DoorsListComponent } from './doors-list/doors-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        DoorInfoCardComponent,
        FontAwesomeModule,
        FooterComponent,
        HeaderComponent,
        LoginFormComponent,
        DoorsListComponent
    ]
})
export class AppComponent {
  title = 'SmartDoorLock';
  faCoffee = faCoffee;
}
