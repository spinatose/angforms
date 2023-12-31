import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../data/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  isReadonly: boolean = false;
  maxRating: number = 10;
  originalUserSettings: UserSettings = {
    emailOffers: null,
    interfaceStyle: null,
    name: null,
    notes: null,
    subscriptionType: null
  }
  postError = false;
  postErrorMessage = "";
  singleModel = "On";
  startDate!: Date;
  startTime!: Date;
  subscriptionTypes!: Observable<string[]>;
  userRating: number = 1;
  userSettings!: UserSettings;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.userService.getSubscriptionTypes();
    this.userSettings = { ...this.originalUserSettings };
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid)
    {
      this.userService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = "Please enter correct form data before submitting!!!!";
    }

  }

  onHttpError(err: any): void {
    console.log('error: ', err);
    this.postError = true;
    this.postErrorMessage = err.error.errorMessage;
    }
}



