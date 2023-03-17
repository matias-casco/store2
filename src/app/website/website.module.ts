import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

import { WebsiteRoutingModule } from './website-routing.module';4
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    WebsiteRoutingModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
