import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: Observable<any>;
  @ViewChild('lista', {static: false}) lista: IonList;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  favorite(user: any) {
    // console.log('favorite: ', user);
    this.presentToast('Guardo en favoritos');
    this.lista.closeSlidingItems();
  }

  share(user: any) {
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();
  }

  borrar(user: any) {
    this.presentToast('Eliminado!');
    this.lista.closeSlidingItems();
  }

}
