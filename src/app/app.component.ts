import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  public response: any;

  allComp() {
    this.router.navigateByUrl("/all");
  }

}
