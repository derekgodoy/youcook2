import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Receita } from '../../model/receitas';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-prato',
  templateUrl: 'prato.html',
})
export class PratoPage {

  prato: Receita;

  uid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uid = this.navParams.get("uid");
  }

  ionViewDidLoad() {

    var postPrato = firebase.firestore().collection("receitas").doc(this.uid);
    
    postPrato.get().then(doc=> {
      if (doc.exists) {
        let r : Receita = new Receita(doc.data());
        this.prato = r;
        console.log(this.prato);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  }

}
