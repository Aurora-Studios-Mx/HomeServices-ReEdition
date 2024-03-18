import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-explicit-module',
  templateUrl: './explicit-module.component.html',
  styleUrls: ['./explicit-module.component.css']
})
export class ExplicitModuleComponent {
  constructor(public _dialog: DynamicDialogRef) { }
}
