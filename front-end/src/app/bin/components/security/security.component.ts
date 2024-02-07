import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TfaManagerService } from '../../services/api/tfa-manager.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css',
  providers: [MessageService]
})
export class SecurityComponent implements OnInit{

  protected statement: number = 0;

  constructor(private TFA_SETUP: TfaManagerService){}

  ngOnInit(): void {
    
  }

  whatUUID(): string {
    if(localStorage.getItem('uu0x0')){
      return localStorage.getItem('uu0x0')!;
    }
    else if(sessionStorage.getItem('uu0x0')){
      return sessionStorage.getItem('uu0x0')!; 
    }
    else{
      return 'undefined';
    }
  }

  createSecretKey(): void{
    let current = this.whatUUID();

    if(current === 'undefined'){
      Notiflix.Notify.failure('[ERROR 0x10] No UUID saved.', {
        position: 'center-bottom'
      });
      return;
    }

    const packet = {
      u0x: current
    }

    this.TFA_SETUP.create(packet).subscribe((data) => {
      if(data.taskCompleted === false){
        Notiflix.Notify.failure('[ERROR 0x11] Failed to create secret key.', {
          position: 'center-bottom'
        });

        return;
      }
      else{
        Notiflix.Notify.success('Secret key created.', {
          position: 'center-bottom'
        });
      }
    }, (error) => {
      Notiflix.Notify.failure('[ERROR 0x12] Failed to create secret key.', {
        position: 'center-bottom'
      });
    })
  }
}
