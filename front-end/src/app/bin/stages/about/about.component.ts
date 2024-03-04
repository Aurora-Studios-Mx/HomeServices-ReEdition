import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  events: any[];

  constructor(private title: Title){
    this.events = [
      { status: 'Compradores', icon: 'bi bi-arrow-down-short', color: '#1f1f1f', image: 'hs_model_1.svg', description: 'Los compradores acceden a una amplia cantidad de servicios que los presta-servicios ofrecen, facilitando la vida sobre los compradores y manteniendo la confianza y seguridad basado en un sistema de opiniones.' },
      { status: 'Emprendedores', icon: 'bi bi-arrow-down-short', color: '#1f1f1f', image: 'hs_model_2.svg', description: 'Ayudamos a los emprendedores a conectar con los compradores demostrando la seguridad de HomeServices® actuando como intermediarios y presentando herramientas que facilitan el estado de las compras.' },
      { status: 'Compras completas', icon: 'bi bi-arrow-90deg-up', color: '#1f1f1f', image: 'hs_model_3.svg', description: 'Los compradores reciben al presta-servicios y valida que todo vaya de maravilla, una vez finalizado, ambos finalizan el pedido.' },
    ];
  }
  
  ngOnInit(): void {
    this.title.setTitle('Acerca de nosotros | HomeServices®')
  }
}
