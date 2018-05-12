import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {ProteinListComponent} from "./components/protein-list/protein.list.component";
import {ProteinFormComponent} from "./components/protein-form/protein.form.component";
import {ProteinFullViewComponent} from "./components/protein-full-view/protein-full-view.component";
import {StatsComponent} from "./components/stats/stats.component";
import {TutorialComponent} from "./components/tutorial/tutorial.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {FactsComponent} from "./components/facts/facts.component";


// Routing
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'protein/:idProtein', component: ProteinFullViewComponent },
    { path: 'proteins/:search', component: ProteinListComponent },
    { path: 'proteins', component: ProteinListComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'facts', component: FactsComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
