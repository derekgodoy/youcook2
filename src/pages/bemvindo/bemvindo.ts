import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { InfoUser } from '../../model/infouser';

/**
 * Generated class for the BemvindoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bemvindo',
  templateUrl: 'bemvindo.html',
})
export class BemvindoPage {
  firestore = firebase.firestore();
    settings = {timestampsInSnapshots: true};
    uid: string;
    informacoes: InfoUser;
    email : string;
  
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
    receitas(){
      this.navCtrl.setRoot("ReceitasPage");
    }

}
