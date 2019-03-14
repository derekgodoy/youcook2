import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { InfoUser } from '../../model/infouser';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};
  uid: string;
  informacoes: InfoUser;
  email : string;

  public event = {
    month: '2019-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseauth : AngularFireAuth,) {
    this.firestore.settings(this.settings);
    this.uid = this.firebaseauth.auth.currentUser.uid;
    this.email = this.firebaseauth.auth.currentUser.email;
  }

  ionViewDidLoad() {
    
    var postUserInfo = firebase.firestore().collection("infoUser").where('UID','==',this.uid);
    
    postUserInfo.get().then(query => {
      query.forEach(doc => {
        let i : InfoUser = new InfoUser(doc.data());
        
        this.informacoes = i;
      });
      console.log(this.informacoes)
    });
  }
  
  planos(){
    this.navCtrl.setRoot("PlanosPage");
  }
  editar(){
    this.navCtrl.push("EditarPage");
  }

}
