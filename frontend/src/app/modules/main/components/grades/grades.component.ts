import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { GradesService } from 'src/app/services/grades.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  grades: any[] = [];
  date = new Date();

  constructor(
    private gradesService: GradesService
  ) { }

  ngOnInit(): void {
    this.getGrades();
  }

  getGrades(): void {
    this.gradesService.getGrades(this.date.toLocaleDateString())
    .pipe(tap((res) => this.grades = res))
    .subscribe(() => console.log(this.grades));
  }

  onDateChanged(e: any): void {
    console.log(e);
    this.date = new Date(e.value);
    console.log(this.date.toLocaleDateString());
    
    this.getGrades();
  }

}
