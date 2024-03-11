import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { TfaManagerService } from '../../services/api/tfa-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notifys',
  templateUrl: './notifys.component.html',
  styleUrls: ['./notifys.component.css']
})
export class NotifysComponent implements OnInit{
  
  protected TFA_FORM: FormGroup;
  private uuid: string = '';
  private token: string = '';
  private guard: any;
  protected guard2: any;
  
  constructor(private router: ActivatedRoute, private TFA_SETUP: TfaManagerService, private _builder: FormBuilder, private rt: Router, private Title: Title){
    this.TFA_FORM = this._builder.group({
      token: ['', Validators.required]
    })
  }

  verifyToken(): void{
    Notiflix.Loading.dots('Verificando...', {
      clickToClose: false,
      svgColor: '#a95eff',
      className: 'font-b',
      backgroundColor: '#fff',
      messageColor: '#000'
    })

    if(this.TFA_FORM.get('token')?.value.length < 6){
      Notiflix.Notify.failure('[ERROR 0x13] Código incompleto.', {
        position: 'center-bottom'
      });

      Notiflix.Loading.remove();

      return;
    }

    const packet = {
      u0x: this.uuid,
      t0x: this.TFA_FORM.get('token')?.value.trim(),
    }

    this.TFA_SETUP.verify_login(packet).subscribe((data) => {

      if(data.taskCompleted === false){
        Notiflix.Notify.failure('[ERROR 0x11] El código es invalido.', {
          position: 'center-bottom'
        });

        return;
      }
      else{
        Notiflix.Loading.remove();

        localStorage.setItem('uu0x0', this.uuid)
        localStorage.setItem('ac0x1', 'true')
        localStorage.setItem('_token', this.token)
        localStorage.setItem('g0x', this.guard2)
        localStorage.setItem('g1x', this.guard)

        this.rt.navigate(["/"]);
      }
    }, (error) => {
      Notiflix.Notify.failure('[ERROR 0x14] Hubo un problema mientras validábamos el código de verificación.', {
        position: 'center-bottom'
      });
      console.error(error);
    });
  }

  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {
      this.uuid = params['uuid'];
      this.token = params['token'];
      this.guard = params['guard'];
      this.guard2 = params['guard2']
    })
  }

}
