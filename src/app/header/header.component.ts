import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public chevron_Click() {
    const chevron = document.getElementById("chevron");
    const dropcontent = document.getElementById("dropdown-content");         
    if (dropcontent) {
      const isHidden = dropcontent.classList.toggle('show');
      if (isHidden) {
        chevron?.classList.add('chevron-animation');
        chevron?.classList.remove('chevron-ReverseAnimation');
      } else {
        chevron?.classList.remove('chevron-animation');
        chevron?.classList.add('chevron-ReverseAnimation');
      }
    }
  }
  public chevron_Leave() {
    const chevron = document.getElementById("chevron");
    const dropcontent = document.getElementById("dropdown-content");
    
    if (dropcontent) {
      dropcontent.classList.remove('show');
    }
    if (chevron) {
      chevron.classList.add('chevron-ReverseAnimation');
    }
  }
}
