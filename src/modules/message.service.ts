import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [
    'Hello, adventurer!',
    'Your journey begins now!',
    'Beware of the dragons!',
    'A treasure awaits you!',
    'Be brave and bold!',
    'Fortune favors the brave!',
    'The path is treacherous, tread carefully.',
    'You have found a hidden gem!',
    'An ally joins your quest!',
    'Your courage is inspiring!'
  ];

  constructor() { }

  getRandomMessage(): string {
    const index = Math.floor(Math.random() * this.messages.length);
    return this.messages[index];
  }
}
