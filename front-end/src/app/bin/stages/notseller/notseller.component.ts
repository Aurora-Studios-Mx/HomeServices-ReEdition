import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notseller',
  templateUrl: './notseller.component.html',
  styleUrl: './notseller.component.css'
})
export class NotsellerComponent {
  constructor(private _rt: Router, private Title: Title){
    this.Title.setTitle('Vendedor invalido | HomeServices®️')
  }

  back(){
    this._rt.navigateByUrl('/')
  }
}
