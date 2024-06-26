//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

//Paypal
import { NgxPayPalModule } from 'ngx-paypal';

//Image Editor
import { NgxPhotoEditorModule } from "ngx-photo-editor";
import { ImageCropperModule } from 'ngx-image-cropper';

//Social Lib imports
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

//Azure Lib imports
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser'

//PrimeNG imports
import { ContextMenuModule } from 'primeng/contextmenu';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar'
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { RatingModule } from 'primeng/rating';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { GalleriaModule } from 'primeng/galleria'
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipModule } from 'primeng/chip';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { RippleModule } from 'primeng/ripple'
import { ToastModule } from 'primeng/toast';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { KeyFilterModule } from 'primeng/keyfilter';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { SliderModule } from 'primeng/slider';
import { TimelineModule } from 'primeng/timeline';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

//Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './bin/stages/home/home.component';
import { NavbarComponent } from './bin/components/navbar/navbar.component';
import { LoginComponent } from './bin/stages/login/login.component';
import { TermsComponent } from './bin/stages/terms/terms.component';
import { InsideHomeComponent } from './bin/stages/inside-home/inside-home.component';
import { FooterComponent } from './bin/components/footer/footer.component';
import { NavbarTinyComponent } from './bin/components/navbar-tiny/navbar-tiny.component';
import { Homestep2Component } from './bin/stages/homestep2/homestep2.component';
import { Homestep3Component } from './bin/stages/homestep3/homestep3.component';
import { ProfileComponent } from './bin/stages/profile/profile.component';
import { ProductViewComponent } from './bin/stages/product-view/product-view.component';
import { UppercaseDirective } from './bin/directives/customization/uppercase.directive';
import { CommentaryandwriteComponent } from './bin/components/commentaryandwrite/commentaryandwrite.component';
import { ResponseCommentarysComponent } from './bin/components/response-commentarys/response-commentarys.component';
import { Homestep4Component } from './bin/stages/homestep4/homestep4.component';
import { ServicesViewComponent } from './bin/stages/services-view/services-view.component';
import { ConfigComponent } from './bin/stages/config/config.component';
import { ConfigTabsComponent } from './bin/components/config-tabs/config-tabs.component';
import { ShopsComponent } from './bin/stages/shops/shops.component';
import { OnlyimgsDirective } from './bin/directives/uploads/onlyimgs.directive';
import { LowercaseDirective } from './bin/directives/customization/lowercase.directive';
import { NotifysComponent } from './bin/stages/notifys/notifys.component';
import { PrivacyComponent } from './bin/stages/privacy/privacy.component';
import { PaymentComponent } from './bin/stages/payment/payment.component';
import { NotaccountComponent } from './bin/stages/notaccount/notaccount.component';
import { NotfoundComponent } from './bin/stages/notfound/notfound.component';
import { VerificationBadgeComponent } from './bin/components/verification-badge/verification-badge.component';
import { StripeComponent } from './bin/redirects/stripe/stripe.component';
import { MercadopagoComponent } from './bin/redirects/mercadopago/mercadopago.component';
import { CategoriesComponent } from './bin/stages/categories/categories.component';
import { ExplicitModuleComponent } from './bin/components/explicit-module/explicit-module.component';
import { WelcomeComponent } from './bin/stages/welcome/welcome.component';
import { NotificationsComponent } from './bin/components/notifications/notifications.component';
import { MessagesComponent } from './bin/components/messages/messages.component';
import { PaymentstepsComponent } from './bin/components/paymentsteps/paymentsteps.component';
import { DeletePopupComponent } from './bin/components/sellersportal/delete-popup/delete-popup.component';
import { DetailsPopupComponent } from './bin/components/sellersportal/details-popup/details-popup.component';
import { DetailsOwnComponent } from './bin/components/details-own/details-own.component';
import { DetailsPointsComponent } from './bin/components/details-points/details-points.component';
import { DetailsCancelComponent } from './bin/components/details-cancel/details-cancel.component';
import { SearchComponent } from './bin/stages/search/search.component';
import { SellersPortalComponent } from './bin/stages/sellers-portal/sellers-portal.component';
import { MobileUsageComponent } from './bin/stages/mobile-usage/mobile-usage.component';
import { UpperinputsDirective } from './bin/directives/customization/upperinputs.directive';
import { SecurityComponent } from './bin/components/security/security.component';
import { NotsellerComponent } from './bin/stages/notseller/notseller.component';

//Charts
import { NgChartsModule } from 'ng2-charts';

//Adsense
import { AdsenseModule } from 'ng2-adsense';
import { AboutComponent } from './bin/stages/about/about.component';
import { ForgetComponent } from './bin/stages/forget/forget.component';
import { WalletComponent } from './bin/components/sellersportal/wallet/wallet.component';

//Azure Method - Microsoft Token Gen
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.Azure.clientIDAzure,
      redirectUri: environment.Azure.redirectUrlAzure
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    TermsComponent,
    InsideHomeComponent,
    FooterComponent,
    NavbarTinyComponent,
    Homestep2Component,
    Homestep3Component,
    ProfileComponent,
    TermsComponent,
    ProductViewComponent,
    UppercaseDirective,
    CommentaryandwriteComponent,
    ResponseCommentarysComponent,
    Homestep4Component,
    ServicesViewComponent,
    ConfigComponent,
    ConfigTabsComponent,
    ShopsComponent,
    OnlyimgsDirective,
    LowercaseDirective,
    NotifysComponent,
    PrivacyComponent,
    PaymentComponent,
    NotaccountComponent,
    NotfoundComponent,
    VerificationBadgeComponent,
    StripeComponent,
    MercadopagoComponent,
    CategoriesComponent,
    ExplicitModuleComponent,
    WelcomeComponent,
    NotificationsComponent,
    MessagesComponent,
    PaymentstepsComponent,
    SellersPortalComponent,
    DeletePopupComponent,
    DetailsPopupComponent,
    DetailsOwnComponent,
    DetailsPointsComponent,
    DetailsCancelComponent,
    SearchComponent,
    MobileUsageComponent,
    SecurityComponent,
    NotsellerComponent,
    UpperinputsDirective,
    AboutComponent,
    ForgetComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RippleModule,
    MsalModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ContextMenuModule,
    GoogleSigninButtonModule,
    BadgeModule,
    TooltipModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    HttpClientModule,
    MultiSelectModule,
    AvatarModule,
    RatingModule,
    BreadcrumbModule,
    GalleriaModule,
    InputSwitchModule,
    ChipModule,
    BlockUIModule,
    PanelModule,
    NgxPayPalModule,
    AccordionModule,
    ToastModule,
    TypeaheadModule,
    ScrollTopModule,
    SkeletonModule,
    KeyFilterModule,
    RadioButtonModule,
    FileUploadModule,
    ImageModule,
    DynamicDialogModule,
    CardModule,
    NgChartsModule,
    ChartModule,
    InputTextareaModule,
    SidebarModule,
    MenubarModule,
    InputMaskModule,
    TableModule,
    AdsenseModule.forRoot({
      adClient: environment.GoogleAdSense.adClient,
      adSlot: environment.GoogleAdSense.adSlot,
      display: 'block',
      fullWidthResponsive: true,
      adFormat: 'auto',
    }),
    SliderModule,
    CommonModule,
    TimelineModule,
    TabViewModule,
    ImageCropperModule,
    NgxPhotoEditorModule,
    ConfirmPopupModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    { 
      provide: 'APP_ENVIRONMENT',
      useValue: environment
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GoogleOauth.clientIDGoogle
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.reCaptcha.siteKeyCaptcha,
        badge: 'bottomright'
      } as RecaptchaSettings
    },
    {provide: 'window', useValue: window},
    {provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory},
    MsalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
