import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService, ConstantsServiceToken } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { FontDirective } from './directives/font.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FontDirective],
  exports: [FontDirective],
  providers: [
    ConfigOptionsService,
    LocalStorageService,
    { provide: GeneratorService, useFactory: () => new GeneratorService(5) },
    { provide: ConstantsServiceToken, useValue: new ConstantsService() }
  ]
})
export class SharedModule { }
