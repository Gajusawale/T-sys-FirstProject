import { Injectable } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  constructor(private userserv:UserProfileService) { 
  let user=  this.userserv.getAddress();
  console.log(user);
  }
   url="www.somthing";

}
