import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{

  protected usage: string | undefined;
  protected klass: number | undefined;
  protected message: string | undefined;

  constructor(private AR: ActivatedRoute){
    this.usage = this.AR.snapshot.params['status']
  }

  ngOnInit(): void {

    if(this.usage === 'success'){
      this.klass = 0;
      this.message = 'Tu orden fue creada con éxito! Puedes cerrar la ventana.';
    }
    else if(this.usage === 'failed'){
      this.klass = 1;
      this.message = 'Al parecer hubo un error, contacta con soporte. Puedes cerrar la ventana.';
    }
    else if(this.usage === 'cancel'){
      this.klass = 2;
      this.message = 'Tu orden fue cancelada.';
    }
    else{
      this.klass = 3;
      this.message = 'Callback del servidor fallido. Puedes cerrar la ventana.';
    }
  }

  close(){
    window.close();
  }
}
