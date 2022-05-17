import { Component, OnInit } from '@angular/core';
//import { profile } from 'console';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private usercon: UserProfileService) {

    let myadd = this.usercon.getAddress();
    let mycom = this.usercon.getCompanyName();
    console.log(myadd);
    console.log(mycom);
  }
  ngOnInit(): void {

  }

}
