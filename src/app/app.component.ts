import { Component } from '@angular/core';
import { MenuItem } from './core/models/manu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso Paulo 2';
  menuItems: MenuItem[] = [
    { icon: 'dashboard', routerLink: '/dashboard', toolTipText: 'Dashboard'},
    { icon: 'settings_accessibility', routerLink: '/heroes', toolTipText: 'Heroes'}
  ]
}
