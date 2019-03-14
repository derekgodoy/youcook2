import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoUser } from '../../model/infouser';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};
  uid: string;
  informacoes: InfoUser;
  email : string;
  docID : string;
  formGroup: FormGroup;
  
  
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public firebaseauth : AngularFireAuth,) {
    this.firestore.settings(this.settings);
    this.uid = this.firebaseauth.auth.currentUser.uid;
    this.email = this.firebaseauth.auth.currentUser.email;

    this.formGroup = this.formBuilder.group({
     
      cartaovenc : ['', [Validators.required]],
      cep : ['', [Validators.required]],
      cpf : ['', [Validators.required]],
      cvv : ['', [Validators.required]],
      endereco : ['', [Validators.required]],
      nasc : ['', [Validators.required]],
      ncartao : ['', [Validators.required]],
      nome : ['', [Validators.required]],
      telefone : ['', [Validators.required]],
      tipoPlano : ['', [Validators.required]],
      UID : [this.uid]
    }); 
  }

  ionViewDidLoad() {
    
    var postUserInfo = firebase.firestore().collection("infoUser").where('UID','==',this.uid);
    
    postUserInfo.get().then(query => {
      query.forEach(doc => {
        let i : InfoUser = new InfoUser(doc.data());
        this.informacoes = i;
        this.docID = doc.id;
        console.log(this.docID)
      });
      console.log(this.informacoes)
    });
  }

  editar(){

    try{

    this.firestore.collection("infoUser").doc(this.docID).set(
      this.formGroup.value
      ).then(() =>{
        this.navCtrl.setRoot("PerfilPage");
    });

    }catch(e){

      this.firestore.collection("infoUser").add(
        this.formGroup.value
        ).then(() =>{
          this.navCtrl.setRoot("PerfilPage");
      });     
    }
  }
  
}
