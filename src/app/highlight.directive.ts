import { Directive } from '@angular/core';
import { BaseConfigService } from './base-config.service';
import { UserProfileService } from './user-profile.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private base:BaseConfigService) { 
   console.log( this.base.url);
  }

}
