import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TfaManagerService } from '../../services/api/tfa-manager.service';
import * as Notiflix from 'notiflix';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css',
  providers: [MessageService, DynamicDialogRef]
})
export class SecurityComponent implements OnInit{

  protected statement: number = 0;
  protected QR_SCAN: string = '';
  protected TFA_FORM: FormGroup;
  protected TFA_STATE: any;
  private tempSecret: string | undefined;

  constructor(private TFA_SETUP: TfaManagerService, private _builder: FormBuilder, private ref: DynamicDialogRef){
    this.TFA_FORM = this._builder.group({
      token: ['', Validators.required]
    })
  }

  async get2FA(): Promise<void>{
    const ID = await this.whatUUID();

    if(ID === 'undefined'){
      return;
    }

    const packet = {
      u0x: ID
    }

    this.TFA_SETUP.active(packet).subscribe((result: any) => {
      if(result.completed === true){
        this.TFA_STATE = 1;
      }
      else{
        this.TFA_STATE = 0;
      }
    }, (error: any) => {
      this.TFA_STATE = 2;
      console.error(error)
    })
  }

  async ngOnInit(): Promise<void> {
    await this.get2FA();

    // if(ACTIVE_2FA === 'error'){
    //   this.TFA_STATE = 2;
    // }
    // else if(ACTIVE_2FA === true){
    //   this.TFA_STATE = 1;
    // }
    // else{
    //   this.TFA_STATE = 0;
    // }
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

  verifyToken(): void{
    this.statement = 2;

    let current = this.whatUUID();

    if(current === 'undefined'){
      Notiflix.Notify.failure('[ERROR 0x10] No UUID saved.', {
        position: 'center-bottom'
      });
      return;
    }

    if(this.TFA_FORM.get('token')?.value.length < 6){
      Notiflix.Notify.failure('[ERROR 0x13] Invalid token.', {
        position: 'center-bottom'
      });
      return;
    }

    const packet = {
      u0x: current,
      t0x: this.TFA_FORM.get('token')?.value,
      s0x: this.tempSecret
    }

    this.TFA_SETUP.verify(packet).subscribe((data) => {
      if(data.taskCompleted === false){
        Notiflix.Notify.failure('[ERROR 0x11] Failed to verify token.', {
          position: 'center-bottom'
        });

        return;
      }
      else{
        this.statement = 1;

        Notiflix.Notify.success(data.message, {
          position: 'center-bottom'
        });
      }
    }, (error) => {
      Notiflix.Notify.failure('[ERROR 0x14] Failed to verify token.', {
        position: 'center-bottom'
      });
      console.error(error);
    });
  }

  createSecretKey(): void{
    this.statement = 2;

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

        this.statement = 1;

        Notiflix.Notify.success(data.message, {
          position: 'center-bottom'
        });

        this.QR_SCAN = data.qrURL;
        this.tempSecret = data.tempSecret;
      }
    }, (error) => {
      Notiflix.Notify.failure('[ERROR 0x12] Failed to create secret key.', {
        position: 'center-bottom'
      });
      console.error(error);
    })
  }

  disable2FA(): void{
    this.statement = 2;

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

    this.TFA_SETUP.delete(packet).subscribe((data) => {
      if(data.taskCompleted === false){
        Notiflix.Notify.failure('[ERROR 0x11] Failed to disable 2FA.', {
          position: 'center-bottom'
        });

        return;
      }
      else{

        this.statement = 1;

        Notiflix.Notify.success('Desvinculado con éxito.', {
          position: 'center-bottom'
        });

        this.ref.close();
      }
    }, (error) => {
      Notiflix.Notify.failure('[ERROR 0x12] Failed to create secret key.', {
        position: 'center-bottom'
      });
      console.error(error);
    })
  }
}
