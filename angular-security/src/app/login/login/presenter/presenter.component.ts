import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { InputTextComponent } from '../../../shared/input-text/input-text.component';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrl: './presenter.component.css'
})
export class PresenterLoginComponent {

  @ViewChild('usernameInput') usernameField!: InputTextComponent;
  @ViewChild('passwordInput') passwordField!: InputTextComponent;

  @Output() clickEvent = new EventEmitter();

  click(): void{
    this.clickEvent.emit();
  }

}
