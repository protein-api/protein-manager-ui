import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {
  MdButtonModule, MdCardModule, MdExpansionModule, MdIconModule, MdIconRegistry, MdInputModule, MdListModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule, MdTooltipModule
} from "@angular/material";
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
import { FooterComponent } from './components/footer/footer.component';


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
    FooterComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdTableModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
    MdExpansionModule,
    MdInputModule,
    HttpModule,
      MdListModule,
      MdTooltipModule
  ],
  providers: [
      ErrorNotifierService,
      ProteinDataService,
      EnvironmentService,
      MdIconRegistry,
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
