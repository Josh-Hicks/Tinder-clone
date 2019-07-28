import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatChipsModule
} from '@angular/material';

const modules = [MatCardModule, MatButtonModule, MatChipsModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
