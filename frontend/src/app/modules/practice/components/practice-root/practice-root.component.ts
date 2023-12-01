import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-root',
  templateUrl: './practice-root.component.html',
  styleUrls: ['./practice-root.component.scss']
})
export class PracticeRootComponent  {

  constructor(private router: Router,) { }

  toPracticeOne(): void {
    this.router.navigate(['./practice/one'])
  }

  toPracticeThree(): void {
    this.router.navigate(['./practice/three'])
  }

}
