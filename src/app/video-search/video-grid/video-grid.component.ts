import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.interface';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoSearchService } from '../video-search.service';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent implements OnInit {
  @Input() movies: IMovie[] = [];


  constructor(public dialog: MatDialog, private _videoSearchSvc: VideoSearchService) { }

  ngOnInit(): void {
  }

  public openDialog(movie: IMovie): void{
    this._videoSearchSvc.getTrailer(movie.title).subscribe((result) => { 
       if(result){
         movie.videoId = result;
         const dialogRef = this.dialog.open(VideoDialogComponent, {
           width: '1200px',
          data: movie
        });
       }
    })   
  }


}
