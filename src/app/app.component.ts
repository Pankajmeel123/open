import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monthlyinc:number = 0;
  monthlyexp:number = 0;
  haveLoan:boolean = true;
  isSticky:any;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 20;
  }
}
