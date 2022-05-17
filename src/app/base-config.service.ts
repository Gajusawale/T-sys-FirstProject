import { Injectable } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {
mydata:any;
  constructor(private req:HttpClient) { 
  
    req.get("https://reqres.in/api/users?page=2").
    subscribe((data)=>{console.log(data)});
    
  }
  

}
