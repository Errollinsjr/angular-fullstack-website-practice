import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }

  //observable is a task our app is executing in this case loading data from a server we suscribe too
  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  };

  //get Individual listing Data
  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  };

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}/add-view`,
    {},
    httpOptions);
  };
  
}
