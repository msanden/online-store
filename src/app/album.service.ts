/* A service file with an injector responsible for delivering this service
wherever it's needed in the project.ie, getAlbums() {return ALBUMS;}*/

import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  constructor() { }

  getAlbums(){
    return ALBUMS;
  }

  getAlbumsById(albumId: number) {
    for (var i = 0; i <= ALBUMS.length -1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }
  
}
