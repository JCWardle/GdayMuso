import { Component, OnInit } from '@angular/core';
import { SongService} from '../song.service'
import {Song } from '../song'

@Component({
  selector: 'muso-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: Song[] = []

  constructor(private songService: SongService) {   
    
  }

  getSongs(): void { 
    this.songService.getSongs().subscribe(songs => this.songs = songs);
  }

  ngOnInit(): void {
    this.getSongs();
  }

}
