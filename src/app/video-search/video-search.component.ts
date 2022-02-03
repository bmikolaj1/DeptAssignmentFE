import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/movie.interface';
import { VideoSearchService } from './video-search.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent implements OnInit {
  public movies: IMovie[]= [];

  constructor(private _videoSearchSvc: VideoSearchService) { }

  ngOnInit(): void {
  }

  public onSearch(input: string): void{
    this._videoSearchSvc.searchMovie(input).subscribe((result)=> {
      if(result && !result.errorMessage){
        this.movies = result.results;
      }
    })
  
  }

}
