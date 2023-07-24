import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() name: string[] = [];
  @Input() Job: string[] = [];
  @Input() Manufacturer: string[] = [];
  @Input() Aircraft: string[] = [];
  shouldRun: boolean  = true;
  isSidenavOpened: boolean = true;
  toggleSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
