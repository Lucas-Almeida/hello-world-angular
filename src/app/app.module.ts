import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
