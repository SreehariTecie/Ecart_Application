import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  //Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // updateSearchText(event: any) {
  //   this.searchText = event.target.value;
  // }

  @ViewChild('searchInput') searchInputEl: ElementRef;

  setSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged() {
    //this.searchTextChanged.emit(this.searchText);
  }
}
