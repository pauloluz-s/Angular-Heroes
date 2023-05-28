import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';



const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent
]

const MODULES = [
  FlexLayoutModule,
  MaterialModule,
  RouterModule
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES]
})
export class CoreModule {
  // EVITA QUE O COREMODULE SEJA IMPORTADO EM MAIS 1 LOCAL
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error("Core Module has already been loaded. Import this module in the AppModule")
    }
  }
}
