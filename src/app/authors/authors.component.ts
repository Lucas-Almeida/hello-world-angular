import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors', // css selector #courses .courses
  template: `
      <h2>{{authors.length}} Authors</h2>
      <ul>
          <li *ngFor="let author of authors">
              {{author}}
          </li>
      </ul>
       `
})

export class AuthorsComponent implements OnInit {

  authors;

  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
