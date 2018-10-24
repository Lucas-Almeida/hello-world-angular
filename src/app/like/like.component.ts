import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isActive: boolean;
  @Input() likesCount: number;

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount++ : this.likesCount--;
  }
}
