import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    emailOffers: null,
    interfaceStyle: null,
    name: null,
    notes: null,
    subscriptionType: null
  }
  userSettings!: UserSettings ;
  constructor() { }

  ngOnInit(): void {
    this.userSettings = { ...this.originalUserSettings };
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
