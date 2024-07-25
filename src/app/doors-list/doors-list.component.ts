import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-doors-list',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './doors-list.component.html',
  styleUrl: './doors-list.component.css',
})
export class DoorsListComponent {}
