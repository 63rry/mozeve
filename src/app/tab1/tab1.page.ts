import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IEvento } from '../models/IEvento.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  titulo ='Mozev';

  listaEvento: IEvento[]=[
    {
      nome: 'TomorrowLand Maputo',
      data: '31/12',
      genero: 'House',
      imagem: '../../assets/img/ztomorrowland-tml.jpg',
      local: ['Maputo', 'Campo de Maxaquene'],
      disponibilidade: '57%',
      page: '/tomorrowland'

    },

    {
      nome: 'Kings of House',
      data: '24/12',
      genero: 'House',
      imagem: '../../assets/img/unnamed.jpg',
      local: ['Maputo', 'Estadio da Machava'],
      disponibilidade: '14%',
      page: '/kings-of-house'
    },

    {
      nome: 'A Salvacao',
      data: '14/10',
      genero: 'Gospel',
      imagem: '../../assets/img/gospel-night-church-event-square-video-design-template-1db02f056777e2177ded64b1f3216544_screen.jpg',
      local: ['Maputo', 'S.C Joaquim Chissano'],
      disponibilidade: '0%',
      page: '/a-salvacao'
    },

    {
      nome: 'SmallPapo',
      data: '20/10',
      genero: 'All',
      imagem: '../../assets/img/artworks-000087594113-0dkd0j-t500x500.jpg',
      local: ['Matola', 'Discoteca Bate Papo'],
      disponibilidade: '20%',
      page: '/smallPapo'
    }
  ];

  constructor(public alertController: AlertController,
    public toastController: ToastController) { }

  async exibirEventoFavorito() {
    const alert = await this.alertController.create({
      header: 'Favorito!',
      message: 'Tornar seu evento favorito???',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM!!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }


  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Evento add aos favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }




}
