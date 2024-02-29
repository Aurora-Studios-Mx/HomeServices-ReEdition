import { Component, OnInit } from '@angular/core';
import { StatesandcitysService } from '../../services/forms/data/statesandcitys.service';
import { MessageService } from 'primeng/api';
import { UsersgestorService } from '../../services/api/usersgestor.service';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxPhotoEditorService } from 'ngx-photo-editor';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MessageService]
})
export class WelcomeComponent implements OnInit{
  protected states: any[] = [];
  protected citys: any[] = [];
  
  protected name: string = "";

  protected sStates: any;
  protected sCity: any;

  protected interests: string = "1";

  //Avatar
  protected image: string | undefined;

  //Group
  protected formCurrentStage: FormGroup;
  
  constructor(private service: NgxPhotoEditorService, private _builder: FormBuilder, private casService: StatesandcitysService, private NG_MSG: MessageService, private readonly usrServices: UsersgestorService, private rt: Router, private title: Title){
    this.formCurrentStage = this._builder.group({
      file: ['', [Validators.required]]
    })
  }

  onFileChange($event: any) {
    try{
      this.service.open($event, {
        aspectRatio: 1 / 1,
        autoCropArea: 1
      }).subscribe(data => {
        this.image = data.base64;
      })
      // const file = event.target.files[0];

    }
    catch (err){
      this.NG_MSG.add({severity:'error', summary:'Oh oh', detail:'No es posible usar la vista previa.'});
      return;
    }
  }

  async ngOnInit(){
    this.title.setTitle('Bienvenida | HomeServices®️');

    this.states = this.casService.getStates();

    const json = {
      _uuid: await this.whatUUID()
    }

    this.usrServices.getName(json).subscribe(result => {
      if(result.exists === true){
        this.name = result.result;
      }
      else{
        this.NG_MSG.add({severity: 'error', summary: 'Error', detail: 'Ocurrio un error al intentar obtener tu nombre, intenta de nuevo más tarde', closable: true})
      }
    }, error => {
      console.error(error);
      this.NG_MSG.add({severity: 'error', summary: 'Error', detail: 'Ocurrio un error al intentar obtener tu nombre, intenta de nuevo más tarde', closable: true})
    })
  }

  getCitys(event: any){
    if(event.value[0]){
      this.citys = this.casService.getCitysWithoutState(event.value[0].code);
    }
    else{
      this.citys = []
    }
  }

  whatUUID(): string {
    if(localStorage.getItem('uu0x0')){
      return localStorage.getItem('uu0x0')!;
    }
    else{
      return sessionStorage.getItem('uu0x0')!; 
    }
  }

  onSubmit(){
    if(this.sStates === undefined){
      this.NG_MSG.add({severity:'error', summary: 'Espera, faltan campos...', detail: 'Necesitas seleccionar un estado.', closable: true});
      return;
    }

    if(this.sCity === undefined){
      this.NG_MSG.add({severity: 'error', summary: 'Espera, faltan campos...', detail: 'Necesitas seleccionar una ciudad.', closable: true});
      return;
    }

    if(this.image === undefined){
      this.NG_MSG.add({severity: 'error', summary: 'Espera, faltan campos...', detail: 'Necesitamos una foto de perfil.', closable: true});
      return;
    }

    Notiflix.Loading.dots('Actualizando información...', {
      clickToClose: false,
      svgColor: '#a95eff',
      className: 'font-b',
      backgroundColor: '#fff',
      messageColor: '#000'
    })

    const json = {
      s0x: this.sStates[0].name,
      c1x: this.sCity[0].name,
      u2x: this.interests,
      u3x: this.whatUUID()
    }

    this.usrServices.createSubCredentials(json).subscribe(result => {
      if(result.already === true){
        Notiflix.Loading.remove();
      
        localStorage.setItem('g0x', '0')

        if(this.interests === "2"){
          this.rt.navigateByUrl('/sellers');
        }
        else{
          this.rt.navigateByUrl('/');
        }
      }
      else{
        this.NG_MSG.add({severity: 'error', summary: 'Error', detail: 'Ocurrio un error al intentar crear tus credenciales secundarias, intenta de nuevo más tarde', closable: true})
      }
    },
    error => {
      Notiflix.Loading.remove();
      console.error(error);
      this.NG_MSG.add({severity: 'error', summary: 'Error', detail: 'Ocurrio un error al intentar crear tus credenciales secundarias, intenta de nuevo más tarde', closable: true})
    })

  }
}
