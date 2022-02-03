import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() outputSearch = new EventEmitter<string>();

  @ViewChild('searchBar') searchBar: ElementRef;
  public inputValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // server-side search
  fromEvent(this.searchBar.nativeElement,'keyup')
      .pipe(
          filter(Boolean),
          debounceTime(500),
          distinctUntilChanged(),
          tap((text) => {
            this.outputSearch.emit(this.inputValue);
          })
      )
      .subscribe();
  }

  public onClick(): void{
    this.inputValue = "";
  }

}
