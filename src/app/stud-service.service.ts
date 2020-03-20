import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { stud } from './Shared/stud';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudServiceService {

  public url: string = "http://localhost:5000/addstud";
  public one: string = "http://localhost:5000/getuser";
  public two: string = "http://localhost:5000";
  constructor(private _http: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  savestud(stude: stud) {
    return this._http.post<any>(this.url, stude);
  }

  GetUser(){
    return this._http.get(this.one);
  }


  getEmployee(id): Observable<any> {
    let url = `${this.two}/read/${id}`;
    return this._http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      })

    )
  }
    
   // Update employee
   updateEmployee(id, data): Observable<any> {
    let url = `${this.two}/update/${id}`;
    return this._http.put(url, data, { headers: this.headers }).pipe(
      
    )
  }

 
  

  
}

