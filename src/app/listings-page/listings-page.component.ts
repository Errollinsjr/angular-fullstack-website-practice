import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

///rxJS and HTTPClient for network requests

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) { }

  //calls and returns listings back from the endpoint we use suscribe callback on
  //next set up avoidance for CORs errors so backend does not deny our frontend request. So set up a proxy config in root
  ngOnInit(): void {
    this.listingsService.getListings()
      .subscribe(listings => this.listings = listings);
  }

}
