import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  titulo: string = 'Contador';
  valor: number = 0;

  increment() {
    this.valor++;
  }
}
