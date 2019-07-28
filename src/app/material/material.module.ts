import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

const modules = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
