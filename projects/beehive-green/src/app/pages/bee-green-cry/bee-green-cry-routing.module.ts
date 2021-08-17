import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeeGreenCryComponent } from './bee-green-cry.component';

const routes: Routes = [{ path: '', component: BeeGreenCryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeeGreenCryRoutingModule {}
