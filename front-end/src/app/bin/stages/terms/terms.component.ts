import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit{

  @Input() public isModule: boolean = false;
  protected moduleClass: string = ''

  constructor(private _location: Location, private title: Title){
    this.title.setTitle('Términos y condiciones | HomeServices®️')
  }

  ngOnInit(): void {
    if(this.isModule == false){
      this.moduleClass = 'container mt-5 w-75 user-select-none'
    }
    else{
      this.moduleClass = 'user-select-none'
    }
  }

  returnHome(){
    this._location.back();
  }
}
