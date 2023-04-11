import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = []
  }
  
  

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Tabla',
        icon: 'pi pi-fw pi-table',
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
