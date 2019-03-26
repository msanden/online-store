import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Album } from '../album.model';
import { AlbumService } from '../album.service'; /*<-- import the service*/

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService] /*<-- the service provider */
})

export class MarketplaceComponent implements OnInit {
  albums: Album[]; /*<-- is declared but not defined. We inject our service in the
  constructor to access Album details*/

  constructor(private router: Router, private albumService: AlbumService){}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

//function creates a url for a dynamic route
  goToDetailPage(clickedAlbum: Album){
    this.router.navigate(['albums',clickedAlbum.id]);
  }
}

/*
goToDetailPage() method When triggered, this method will gather the router
instance provided in the constructor and call the built-in navigate() method on
it, providing an array as an argument. The array contains the string 'albums'
and clickedAlbum.id. These arguments are used to construct the URL to our route.
'albums' refers to the first portion of the route's path. clickedAlbum.id refers
to the dynamic segment of the path. If clickedAlbum.id is 37, this would
create a route path of albums/37.
*/
