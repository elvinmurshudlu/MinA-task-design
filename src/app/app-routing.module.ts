import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  children:[{
    path:'',
    loadChildren:()=>import("./pages/main/main.module").then(m=>m.MainModule)
  },
    {
      path:'new-card',
      loadChildren:()=>import("./pages/new-card/new-card.module").then(m=>m.NewCardModule)
    },
    {
      path:':id',
      loadChildren:()=>import('./pages/stats/stats.module').then(m=>m.StatsModule)
    }
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
