import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  
  listUrl = "http://localhost:8081/api/v1/customerlist";
  idUrl = "http://localhost:8081/api/v1/customer";
  saveUrl = "http://localhost:8081/api/v1/newcustomer";
  editUrl = "http://localhost:8081/api/v1/updatecustomer";
  deleteUrl = "http://localhost:8081/api/v1/deletecustomer";
  
  httpOptions = {
  	headers: new HttpHeaders({
  		'Content-Type': 'application/json'
  	})
  };
  
  private extractData(res: Response){
  	let body = res;
  	return body || { };
  }
  
  getCustomers(): Observable<any> {
  	return this.http.get(this.listUrl).pipe(
  		map(this.extractData));
  } 
  
  getCustomerById(id: number): Observable<any>{
  	return this.http.get(this.idUrl+"/"+id).pipe(
  		map(this.extractData));
  }
  
  addCustomer(customer): Observable<any>{
  	console.log(customer);
  	return this.http.post<any>(this.saveUrl, JSON.stringify(customer), this.httpOptions)
  		.pipe(tap((customer) => console.log('added customer with id=${customer.id}')),
  		catchError(this.handleError<any>('addCustomer'))
  	);
  }
  
  updateCustomer (id, customer): Observable<any> {
  	return this.http.put(this.editUrl+"/"+id, JSON.stringify(customer), this.httpOptions).pipe(
    	tap(_ => console.log(`updated customer id=${id}`)),
    	catchError(this.handleError<any>('updateCustomer'))
  	);
  }
  
  deleteCustomer(id): Observable<any>{
  	return this.http.delete<any>(this.deleteUrl+"/"+id, this.httpOptions)
  		.pipe(tap(_ => console.log('deleted customer id=${id}')),
  		catchError(this.handleError<any>('deleteCustomer'))
  		);
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  
}
