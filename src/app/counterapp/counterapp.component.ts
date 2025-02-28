import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-counterapp',
  imports: [MatButtonModule,NgFor],
  templateUrl: './counterapp.component.html',
  styleUrl: './counterapp.component.css',
})
export class CounterappComponent {
  // count: number = 0;
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  // modifyCounter(mode: string) {
  //   if (mode == 'increment') {
  //     this.count++;
  //   } else if (mode == 'decrement') {
  //     this.count--;
  //   } else {
  //     this.count = 0;
  //   }
  // }

  modifycounter() {
    this.count++;
    this.countChange.emit(this.count);
  }

  customers = [
    { rollNo: 1, name: "John", salary: 50000, type: "Premium" },
    { rollNo: 2, name: "Emily", salary: 60000, type: "Regular" },
    { rollNo: 3, name: "Alice", salary: 45000, type: "Premium" },
  ];
  
}
