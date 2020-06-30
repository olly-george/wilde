import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  get Program() {
    return this._Program;
  }

  set Program(value) {
    this._Program = value;
  }
  private _Program: string;

  RunProgram() {
    this._Program = 'YOU WANT TO RUN THIS????!';
  }
}
