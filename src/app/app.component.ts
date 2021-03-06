import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: "Here is the body of the tweet",
    isLiked: false,
    likesCount: 0,
  }

  onFavoriteChange(eventArgs: { newValue: FavoriteChangedEventArgs }) {
    console.log("Favorite changed", eventArgs);
  }
}

