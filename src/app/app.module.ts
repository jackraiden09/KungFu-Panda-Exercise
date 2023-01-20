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
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './components/index/index.component';
import { FilterDataComponent } from './filter-data/filter-data.component';

import { OutputShowComponentComponent } from './output-show-component/output-show-component.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'filter', component: FilterDataComponent},
  {path: 'output-show/:id', component: OutputShowComponentComponent}
]


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
    IndexComponent,
    FilterDataComponent,
    OutputShowComponentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
