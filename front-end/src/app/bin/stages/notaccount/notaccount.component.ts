import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notaccount',
  templateUrl: './notaccount.component.html',
  styleUrls: ['./notaccount.component.css']
})
export class NotaccountComponent implements OnInit{
  constructor(protected _back: Location, private title: Title){}

  ngOnInit(): void {
    this.title.setTitle('Acciones requeridas | HomeServices®️');
  }
}
