import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  gradesUrl: string = `${environment.backUrl}/api/grade/`;

  constructor(
    private http: HttpClient,
  ) { }


  getGrades(date: string): Observable<any> {
    return this.http.get(`${this.gradesUrl}?date=${date}`);
  }
}
