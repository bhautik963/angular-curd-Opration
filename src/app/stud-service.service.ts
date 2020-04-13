import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { stud } from './Shared/stud';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

  
@Injectable({
  providedIn: 'root'
})
export class StudServiceService {

  public url: string = "https://bnode123.herokuapp.com/addstud";
  public one: string = "https://bnode123.herokuapp.com/getuser";
  public two: string = "https://bnode123.herokuapp.com";

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  savestud(stude: stud) {
    return this._http.post<any>(this.url, stude);
  }

  GetUser(){
    return this._http.get(this.one);
  }


  getEmployee(id): Observable<any> {
    let url2 = `${this.two}/read/${id}`;
    return this._http.get(url2, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)

    )
  }
    
   // Update employee
   updateEmployee(id, data): Observable<any> {
    let url3 = `${this.two}/update/${id}`;
    return this._http.put<any>(url3, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt) 
    )
  }

 // Delete employee
 deleteEmployee(id): Observable<any> {
  let url = `${this.two}/delete/${id}`;
  return this._http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}


  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  

  
}

