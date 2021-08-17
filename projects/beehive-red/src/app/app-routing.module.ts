import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages/bee-red-happy',
    loadChildren: () =>
      import('./pages/bee-red-happy/bee-red-happy.module').then(
        (mod) => mod.BeeRedHappyModule
      ),
  },
  {
    path: 'pages/beehive-red-angry',
    loadChildren: () =>
      import('./pages/bee-red-angry/bee-red-angry.module').then(
        (mod) => mod.BeeRedAngryModule
      ),
  },
  { path: '', redirectTo: 'pages/bee-red-happy', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/bee-red-happy', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
