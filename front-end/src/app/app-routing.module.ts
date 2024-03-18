import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './bin/stages/home/home.component';
import { InsideHomeComponent } from './bin/stages/inside-home/inside-home.component';
import { TermsComponent } from './bin/stages/terms/terms.component';
import { LoginComponent } from './bin/stages/login/login.component';
import { ProfileComponent } from './bin/stages/profile/profile.component';
import { Homestep3Component } from './bin/stages/homestep3/homestep3.component';
import { Homestep4Component } from './bin/stages/homestep4/homestep4.component';
import { ServicesViewComponent } from './bin/stages/services-view/services-view.component';
import { ShopsComponent } from './bin/stages/shops/shops.component';
import { NotifysComponent } from './bin/stages/notifys/notifys.component';
import { PrivacyComponent } from './bin/stages/privacy/privacy.component';
import { PaymentComponent } from './bin/stages/payment/payment.component';
import { NotaccountComponent } from './bin/stages/notaccount/notaccount.component';
import { NotfoundComponent } from './bin/stages/notfound/notfound.component';
import { StripeComponent } from './bin/redirects/stripe/stripe.component';
import { ProductViewComponent } from './bin/stages/product-view/product-view.component';
import { CategoriesComponent } from './bin/stages/categories/categories.component';
import { WelcomeComponent } from './bin/stages/welcome/welcome.component';
import { SellersPortalComponent } from './bin/stages/sellers-portal/sellers-portal.component';
import { SearchComponent } from './bin/stages/search/search.component';
import { MobileUsageComponent } from './bin/stages/mobile-usage/mobile-usage.component';
import { NotsellerComponent } from './bin/stages/notseller/notseller.component';

//Guards
import { guard, guard_alreadylogged, guard_mobiles, guard_seller, guard_verification, guard_welcome } from './bin/guards/routes.guard';
import { AboutComponent } from './bin/stages/about/about.component';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', component: InsideHomeComponent, canActivate: [guard_mobiles]},
  {path: 'start', component: HomeComponent, canActivate: [guard_alreadylogged, guard_mobiles]},
  // {path: 'myservices/publish', component: Homestep2Component},
  {path: 'sellers', component: Homestep3Component, canActivate: [guard, guard_mobiles]},
  {path: 'sellers/register', component: Homestep4Component, canActivate: [guard, guard_mobiles]},
  {path: 'terms', component: TermsComponent, canActivate: [guard_mobiles]},
  {path: 'privacy', component: PrivacyComponent, canActivate: [guard_mobiles]},
  {path: 'login', component: LoginComponent, canActivate: [guard_mobiles, guard_alreadylogged]},
  {path: 'profile/:uuid', component: ProfileComponent, canActivate: [guard_mobiles]},
  {path: 'payment/:status', component: ProductViewComponent, canActivate: [guard_mobiles]},
  {path: 'services/:uuid', component: ServicesViewComponent, canActivate: [guard_mobiles]},
  // {path: 'myaccount/configuration', component: ConfigComponent},
  {path: 'myaccount/s/owned', component: ShopsComponent, canActivate: [guard_mobiles]},
  // {path: 'myaccount/notifications', component: NotifysComponent, canActivate: [guard_mobiles]},
  {path: 'services/buy/payment/:id', component: PaymentComponent, canActivate: [guard_mobiles, guard]},
  {path: 'notaccount', component: NotaccountComponent, canActivate: [guard_mobiles]},
  {path: 'notseller', component: NotsellerComponent, canActivate: [guard_mobiles]},
  // {path: 'categories', component: CategoriesComponent, canActivate: [guard_mobiles]},
  {path: 'welcome', component: WelcomeComponent, canActivate: [guard_welcome, guard_mobiles] },
  {path: 'myaccount/seller/dashboard', component: SellersPortalComponent, canActivate: [guard_seller, guard_mobiles]},
  {path: 'search', component: SearchComponent, canActivate: [guard_mobiles]},
  {path: 'verification', component: NotifysComponent, canActivate: [guard_mobiles, guard_alreadylogged, guard_verification]},
  {path: 'about-homeservices', component: AboutComponent, canActivate: [guard_mobiles]},

  //Redirects for payments
  {path: 'api/v2/payments/stripe/:activity', component: StripeComponent},
  // {path: 'api/v1/payments/mercadopago/:activity', component: MercadopagoComponent},

  {path: 'mobile', component: MobileUsageComponent},
  {path: 'tests', component: TermsComponent},

  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
