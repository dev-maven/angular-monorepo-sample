import { NgModule } from '@angular/core';
import { IdentifierModule } from './features/identifier/identifier.module';
import { CommonModule } from '@angular/common';
import { MenuModule } from './features/menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, IdentifierModule, MenuModule, RouterModule],
  exports: [IdentifierModule, MenuModule],
})
export class LibBeehiveUISharedModule {}
