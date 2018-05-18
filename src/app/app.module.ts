import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { createCustomElement } from '@angular/elements';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  entryComponents: [UserDetailComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(UserDetailComponent, { injector: this.injector });
    customElements.define('user-detail', el);
   }
}
