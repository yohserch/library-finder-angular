import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.css']
})

export class LibraryDetailsComponent implements OnInit {

	name = 'Loading...';
	version = 'Loading...';
	description = 'Loading...';
	homepage = 'Loading...';
	repository = 'Loading...';
	license = 'Loading...';


  	constructor(
  		private route: ActivatedRoute,
  		private libraryService: LibraryService,
  		private location: Location
  		) { }

  	ngOnInit() {
  		this.getLibrary();
  	}

  	getLibrary(): void {
  		const library: string = this.route.snapshot.paramMap.get('library');
  		this.libraryService.showLibrary(library)
  			.then((res: any) => {
  				this.name = res.name;
  				this.version = res.version;
  				this.description = res.description;
  				this.homepage = res.homepage;
  				this.repository = res.repository.url;
  				this.license = res.license;
  			});
  	}

  	goBack(): void {
  		this.location.back();
  	}
}
