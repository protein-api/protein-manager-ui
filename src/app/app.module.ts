import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";

import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule} from "./app.routing";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ProteinListComponent } from "./components/protein-list/protein.list.component";
import { ProteinDataService } from "./service/protein.data.srv";
import { Http, XHRBackend, RequestOptions, HttpModule } from "@angular/http";
import { CustomHttp } from "./service/custom-http";
import { ErrorNotifierService } from "./service/error-notifier.service";
import { Configuration } from "./configuration/configuration";
import { EnvironmentService} from "./service/environment.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProteinFormComponent } from "./components/protein-form/protein.form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReactionListComponent } from './components/reaction-list/reaction-list.component';
import { SequenceFormComponent } from './components/sequence-form/sequence-form.component';
import { LinksComponent } from './components/links/links.component';
import { LinksTableComponent } from './components/links-table/links-table.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { ProteinCardComponent } from './components/protein-card/protein-card.component';
import { ProteinFullViewComponent } from './components/protein-full-view/protein-full-view.component';
import { ReactionCardComponent } from './components/reaction-card/reaction-card.component';
import { StructureCardComponent } from './components/structure-card/structure-card.component';
import { StatsComponent } from './components/stats/stats.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SequenceViewComponent } from './components/sequence-view/sequence-view.component';
import { ProVizViewComponent } from './components/proviz-view/proviz-view.component';
import { FactsComponent } from "./components/facts/facts.component";
import { MoleculesTableComponent } from "./components/molecules-table/molecules-table.component";

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { Web3DMolViewComponent } from "./components/web3dmol-view/web3dmol-view.component";

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);


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
    SequenceFormComponent,
    LinksComponent,
    LinksTableComponent,
    FooterComponent,
    ProteinCardComponent,
    ProteinFullViewComponent,
    ReactionCardComponent,
    StructureCardComponent,
    StatsComponent,
    TutorialComponent,
    ContactComponent,
    AboutComponent,
    SequenceViewComponent,
    ProVizViewComponent,
    FactsComponent,
    MoleculesTableComponent,
    Web3DMolViewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MaterializeModule,
    FusionChartsModule
  ],
  providers: [
    ErrorNotifierService,
    ProteinDataService,
    EnvironmentService,
    {
      provide: RequestOptions, useClass: Configuration
    },
    {
      provide: Http,
      useFactory: useFactory,
      deps: [XHRBackend, RequestOptions, ErrorNotifierService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
