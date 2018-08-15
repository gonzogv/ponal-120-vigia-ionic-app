import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { NoticiaPage } from '../pages/noticia/noticia';
import { CuentaPage } from '../pages/cuenta/cuenta';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{titulo: string, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
  this.rootPage = TabsPage;
  this.pages = [
    {titulo: 'Inicio',             component: HomePage, icon: 'home'},
    {titulo: 'Registre Conducta',  component: RegistroPage, icon: 'create'},
    {titulo: 'Noticias',           component: NoticiaPage, icon: 'paper-plane'},
    {titulo: 'Mi cuenta',          component: LoginPage, icon: 'person'},
    {titulo: 'Ayuda y comentario', component: AyudaPage, icon: 'help-circle'}
  ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}
