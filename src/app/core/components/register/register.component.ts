import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

import { AlertService } from '../../shared/alert/alert.service';
import { UserService } from '../../shared/user/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    firstName = new FormControl('', [
        Validators.required
       ]);
       lastName = new FormControl('', [
        Validators.required
       ]);
       username = new FormControl('', [
        Validators.required
       ]);
       password = new FormControl('', [
        Validators.required
       ]);
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
