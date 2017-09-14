import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public gaming: any;
  constructor(public navCtrl: NavController) {

  }

  aparecer(){
    console.log(this.gaming);
    document.getElementById('oculto1').style.display = 'block';
    
  }
  ocultar(){
     document.getElementById('oculto1').style.display = 'none';
  }
}
 