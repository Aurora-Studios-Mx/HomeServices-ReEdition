import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css',
  providers: [MessageService]
})
export class SecurityComponent implements OnInit{

  protected statement: number = 0;

  constructor(){}

  ngOnInit(): void {
    
  }
}
