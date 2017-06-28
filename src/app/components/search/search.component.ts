import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

import { Artist } from './../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchStr:string;
  searchRes: Artist[];

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }

}
