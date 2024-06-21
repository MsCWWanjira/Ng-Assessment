import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel.component.html',
  styleUrls: ['./spinning-wheel.component.css']
})
export class SpinningWheelComponent {
  result: string = '';

  constructor(private messageService: MessageService) {}

  spin(): void {
    this.result = this.messageService.spinWheel();
  }
}