import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  item: string = '';
  list: string[] = ['吃飯', '喝水']

  add() {
    if (this.item.length > 0) {
      this.list.push(this.item)
    }
    console.log(this.list)
  }
}
