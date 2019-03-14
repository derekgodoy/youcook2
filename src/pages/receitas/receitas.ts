import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Receita } from '../../model/receitas';
import { stringify } from '@angular/compiler/src/util';

@IonicPage()
@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html',
})
export class ReceitasPage {

  receitas: string = "basico";

  listaReceitaBasico: Receita[] = [];
  listaReceitaPremium: Receita[] = [];
  
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    var postRefBasico = firebase.firestore().collection("receitas").where('plano','==',1);
    var postRefPremium = firebase.firestore().collection("receitas").where('plano','==',2);

    postRefBasico.get().then(query => {
      query.forEach(doc => {
        let r : Receita = new Receita(doc.data());
        r.uid = doc.id;
        this.listaReceitaBasico.push(r);
      });
      console.log(this.listaReceitaBasico)
    });

    postRefPremium.get().then(query => {
      query.forEach(doc => {
        let r : Receita = new Receita(doc.data());
        r.uid = doc.id;
        this.listaReceitaPremium.push(r);
      });
      console.log(this.listaReceitaPremium)
    });


  }

  prato(uid: string){
    this.navCtrl.push("PratoPage", {"uid": uid});
  }

}
