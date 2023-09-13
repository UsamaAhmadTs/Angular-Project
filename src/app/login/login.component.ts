import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../task.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private route: Router, private taskService: TaskService) {
    }

    Login() {
        if (this.taskService.Login(this.email, this.password)) {
            this.route.navigate(['/tasks'])
        }
    }
}
