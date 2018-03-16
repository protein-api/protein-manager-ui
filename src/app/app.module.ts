import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";

// import {
//   MdButtonModule, MdCardModule, MdExpansionModule, MdIconModule, MdIconRegistry, MdInputModule, MdListModule,
//   MdTableModule,
//   MdTabsModule,
//   MdToolbarModule, MdTooltipModule
// } from "@angular/material";
import {AppRoutingModule} from "./app.routing";
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {ProteinListComponent} from "./components/protein-list/protein.list.component";
import {ProteinDataService} from "./service/protein.data.srv";
import {Http, XHRBackend, RequestOptions, HttpModule} from "@angular/http";
import {CustomHttp} from "./service/custom-http";
import {ErrorNotifierService} from "./service/error-notifier.service";
import {Configuration} from "./configuration/configuration";
import {EnvironmentService} from "./service/environment.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProteinFormComponent} from "./components/protein-form/protein.form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactionListComponent } from './components/reaction-list/reaction-list.component';
import { StructrueListComponent } from './components/structrue-list/structrue-list.component';
import { SequenceFormComponent } from './components/sequence-form/sequence-form.component';
import { LinListComponent } from './components/lin-list/lin-list.component';
import {HeaderComponent} from "./components/header/header.component";
import { Home2Component } from './components/home2/home2.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { ProteinCardComponent } from './components/protein-card/protein-card.component';
import { ProteinFullViewComponent } from './components/protein-full-view/protein-full-view.component';
import { ReactionCardComponent } from './components/reaction-card/reaction-card.component';


export function useFactory(backend: XHRBackend, defaultOptions: RequestOptions, errorNotifier: ErrorNotifierService)
{
  return new CustomHttp(backend, defaultOptions, errorNotifier);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ProteinListComponent,
    ProteinFormComponent,
    ReactionListComponent,
    StructrueListComponent,
    SequenceFormComponent,
    LinListComponent,
    Home2Component,
    Footer2Component,
    ProteinCardComponent,
    ProteinFullViewComponent,
    ReactionCardComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
      ErrorNotifierService,
      ProteinDataService,
      EnvironmentService,
    {provide: RequestOptions, useClass: Configuration},
    {
      provide: Http,
      useFactory: useFactory,
      deps: [XHRBackend, RequestOptions, ErrorNotifierService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
