import { User } from './../../model/user.model';
import { CakesService } from 'src/app/service/cakes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  profileFormGroup: FormGroup;

  user: User = new User();

  constructor(
    private builder: FormBuilder,
    private service: CakesService,
    private router: Router
  ) {
    this.profileFormGroup = this.builder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.user.firstName = this.profileFormGroup.value.firstName;
    this.user.lastName = this.profileFormGroup.value.email;
    this.user.email = this.profileFormGroup.value.message;
    this.service.post(this.user).subscribe((data) => {
      this.router.navigate(['/home']);
    });
    this.profileFormGroup.reset();
  }
}
