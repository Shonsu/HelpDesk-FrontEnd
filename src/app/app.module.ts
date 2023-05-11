import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpageModule } from './layouts/adminpage/adminpage.module';
import { AdminpageemptyModule } from './layouts/adminpageempty/adminpageempty.module';
import { DefaultModule } from './layouts/default/default.module';
import { JwtInterceptor } from './modules/common/interceptor/jwt.interceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DefaultModule,
        AdminpageModule,
        AdminpageemptyModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
