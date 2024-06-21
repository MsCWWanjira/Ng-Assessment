import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessageService } from './message.service';
import { TalkativeDirective } from './talkative.directive';

@NgModule({
  declarations: [
    TalkativeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
})
export class appModule { }



import { SpinningWheelComponent } from './spinning-wheel.component';

@NgModule({
  declarations: [
    appcomponent,
    TalkativeDirective,
    SpinningWheelComponent
  ],

})
export class appmodule { }


import { PlaceholderPipe } from './Placeholder.pipe';

@NgModule({
  declarations: [
    appcomponent,
    TalkativeDirective,
    SpinningWheelComponent,
    PlaceholderPipe
  ],
 
})
export class AppModule { }