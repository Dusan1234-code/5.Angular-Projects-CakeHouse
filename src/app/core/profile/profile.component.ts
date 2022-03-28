import { Route, ActivatedRoute, Router } from '@angular/router';
import { User } from './../../model/user.model';
import { CakesService } from 'src/app/service/cakes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editDis: boolean = true;

  saveBtn: boolean = false;

  profileFormGroup: FormGroup;

  show: boolean = true;

  singleUser: User = new User();

  constructor(
    private service: CakesService,
    private builder: FormBuilder,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.profileFormGroup = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  editMe(): void {
    this.editDis = !this.editDis;
    this.show = !this.show;
    this.saveBtn = !this.saveBtn;
  }

  // ------ FINISH ----------------
  updateUser() {
    this.service.update(this.singleUser).subscribe((us: User) => {
      if (this.singleUser._id == us._id) {
        this.singleUser = us;
      }
    });
  }
}
