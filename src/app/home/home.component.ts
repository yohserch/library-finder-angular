import { Component } from '@angular/core';

import { LibraryService } from '../library.service';

@Component({
  	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']
})


export class HomeComponent {

	searchTerm = '';
	libraryName = '';

  	constructor(private libraryService: LibraryService) { }

  	updateTerm(event: any): void {
  		this.searchTerm = event.target.value;
  	}

  	updateName(event:any):void {
  		this.libraryName = event.target.value;
  	}
}
