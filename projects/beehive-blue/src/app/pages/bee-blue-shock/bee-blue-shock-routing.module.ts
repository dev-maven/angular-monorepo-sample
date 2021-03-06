import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeeBlueShockComponent } from './bee-blue-shock.component';

const routes: Routes = [{ path: '', component: BeeBlueShockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeeBlueShockRoutingModule {}
