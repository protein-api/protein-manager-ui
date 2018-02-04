import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {ProteinListComponent} from "./components/protein-list/protein.list.component";
import {ProteinFormComponent} from "./components/protein-form/protein.form.component";
import {ProteinFullViewComponent} from "./components/protein-full-view/protein-full-view.component";


// Routing
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'protein/:idProtein', component: ProteinFullViewComponent },
    { path: 'proteins/:search', component: ProteinListComponent },
    { path: 'proteins', component: ProteinListComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
