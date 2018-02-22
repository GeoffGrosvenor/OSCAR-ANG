import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocManComponent } from './docman.component';
import { DocManRouter } from './docman.router';


@NgModule({
  declarations: [ DocManComponent ],
  imports: [ CommonModule, DocManRouter  ],
  providers: [],
  exports: [ DocManComponent ]
})
export class DocManModule { }
