import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { 
    console.log('i am in service')
  }
  getAddress()
  {
    let addr={
      area:'baner',
      pincode:3132,
      location:'pune'
    };
    return addr;
  }
  getCompanyName()
  {
    return 'Tsys';
  }
}
