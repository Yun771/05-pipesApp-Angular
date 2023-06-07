import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // * i18n Select
  public name: string = 'Ever';
  public gender: 'male'|'female' = 'male';

  public invitationMap ={
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient():void  {
    if (this.name == 'Ever') {
      this.name = 'Alejandra';
      this.gender = 'female';
    } else {
      this.name = 'Ever';
      this.gender = 'male';
    }
  }


  // * i18nPlural

  public clients: string[] = ['Maria', 'Pedro', 'Ever',  'Juan', 'Alejandra'];

  public clientMap = {
    '=0': 'no tenemos ningún cliente esperado.',
    '=1': 'un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  };

  deleteClient():void {
    this.clients.shift();
  }


}
