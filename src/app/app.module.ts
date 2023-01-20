import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { InputComponent } from './forms/input/input.component';
import { OutputComponent } from './forms/output/output.component';
import { OutputDataComponent } from './forms/output/output-data/output-data.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsComponent } from './forms/analytics/analytics.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OutputComponent,
    OutputDataComponent,
    InputComponent,
    AnalyticsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
