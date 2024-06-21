// ... existing imports and service code ...

@Injectable({
    providedIn: 'root'
  })
  export class MessageService {
    // ... existing message code ...
  
    private wheelOptions: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];
  
    spinWheel(): string {
      const index = Math.floor(Math.random() * this.wheelOptions.length);
      return this.wheelOptions[index];
    }
  }  