import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { PaymentsManagerService } from 'src/app/bin/services/api/payments-manager.service';
import * as Notiflix from 'notiflix';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
  providers: [ConfirmationService]
})
export class WalletComponent {
  protected formCurrent: FormGroup;

  constructor(private confirmationService: ConfirmationService, private _builder: FormBuilder, private _service: PaymentsManagerService, private _dialog: DynamicDialogRef){
    this.formCurrent = this._builder.group({
      name: ['', [Validators.required]],
      clabe: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18), Validators.pattern('^[0-9]*$')]],
    });
  }

  whatUUID(): string {
    if (localStorage.getItem('uu0x0')) {
      return localStorage.getItem('uu0x0')!;
    }
    else if (sessionStorage.getItem('uu0x0')) {
      return sessionStorage.getItem('uu0x0')!;
    }
    else {
      return 'undefined';
    }
  }

  submit(): void{
    if(this.formCurrent.valid){
      Notiflix.Loading.circle({
        clickToClose: false,
        svgColor: '#a95eff',
        className: 'font-b',
        backgroundColor: '#fff',
        messageColor: '#000'
      })

      const packet = {
        _owner: this.whatUUID(),
        _name: this.formCurrent.get('name')?.value,
        _c0x: this.formCurrent.get('clabe')?.value
      }

      this._service.generateAuroraPayment(packet).subscribe((data: any) => {
        if(data.success === true){
          Notiflix.Loading.remove();
          Notiflix.Report.success('¡Listo!', 'Se ha registrado correctamente la orden de pago.', 'Aceptar');
          this._dialog.close({success: true})
        }
      }, (error: any) => {
        Notiflix.Loading.remove();
        console.log(error);
      });
    }
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: '¿Toda la información es correcta? Aurora Studios no se hace responsable de datos incorrectos.',
      acceptButtonStyleClass: 'p-button-help rounded-0',
      rejectButtonStyleClass: 'p-button-help p-button-text rounded-0',
      icon: 'bi bi-exclamation-triangle',
      accept: () => {
        this.submit();
      }
    });
  }

}
