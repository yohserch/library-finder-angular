import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibraryService {

  constructor(private http: HttpClient) { }

  showLibrary(libraryName) {
  	const url = 'https://api.cdnjs.com/libraries/' + encodeURI(libraryName);
  	return this.http.get(url).toPromise();
  }

  searchLibraries(searchTerm) {
  	const url = 'https://api.cdnjs.com/libraries?search=' + encodeURI(searchTerm) + '&fields=version,description';
  	return this.http.get(url).toPromise();
  }

}
