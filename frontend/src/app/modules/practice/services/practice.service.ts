import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { map, catchError, throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  practThreeUrl = `${environment.backUrl}/api/practice-three/`

  constructor(
    private http: HttpClient
  ) {}

  getTask18Result(): Observable<string[]> {
    return this.http.get<string[]>(`${this.practThreeUrl}task18/`)
    .pipe(
      catchError((err) => {
        if (err.status !== 409) {
          this.onCatchError(err, err.error.message ? err.error.message: "Can't get the result!")
        } 
        return throwError(err);
      })
    )
  }

  getTask21Result(number: number): Observable<number> {
    return this.http.get<number>(`${this.practThreeUrl}task21/`, {params: {number}})
    .pipe(
      catchError((err) => {
        if (err.status !== 409) {
          this.onCatchError(err, err.error.message ? err.error.message: "Can't get the result!")
        } 
        return throwError(err);
      })
    )
  }

  getTask24Result(number: number): Observable<number> {
    return this.http.get<number>(`${this.practThreeUrl}task24/`, {params: {number}})
    .pipe(
      catchError((err) => {
        if (err.status !== 409) {
          this.onCatchError(err, err.error.message ? err.error.message: "Can't get the result!")
        } 
        return throwError(err);
      })
    )
  }

  getTask27Result(number: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.practThreeUrl}task27/`, {params: {number}})
    .pipe(
      catchError((err) => {
        if (err.status !== 409) {
          this.onCatchError(err, err.error.message ? err.error.message: "Can't get the result!")
        } 
        return throwError(err);
      })
    )
  }

  getTask30Result(): Observable<number> {
    return this.http.get<number>(`${this.practThreeUrl}task30/`)
    .pipe(
      catchError((err) => {
        if (err.status !== 409) {
          this.onCatchError(err, err.error.message ? err.error.message: "Can't get the result!")
        } 
        return throwError(err);
      })
    )
  }

  onCatchError(err: HttpErrorResponse, message: string): Observable<never> {
    if (err.status !== 403 && err.status !== 401) {
      notify({ message, type: "error", width: "auto"});
    }
    return throwError(err);
  }
}
