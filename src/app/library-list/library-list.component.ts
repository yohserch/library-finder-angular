import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})

export class LibraryListComponent implements OnInit {

	libraries = []

	constructor(
		private route: ActivatedRoute,
		private libraryService: LibraryService
		) { }

  	ngOnInit() {
  		this.getLibrary();
  	}

  	getLibrary(): void {
  		const library: string = this.route.snapshot.paramMap.get('search');
  		this.libraryService.searchLibraries(library)
  			.then((data: any) => {
  				data.results.forEach(function (result) {
  					this.libraries.push({'name': result.name, 'version': result.version, 'description': result.description});
  				}, this);
  			});
  	}

}
