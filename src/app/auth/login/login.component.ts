import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authservice: AuthService, private userService: UserService) {

  }
  register() {
    this.router.navigate(['register']);
  }
  login() {

    let credentials = {
      email: this.email,
      password: this.password
    }
    console.log(credentials);
    this.authservice.login(credentials).subscribe((data) => {
      this.userService.findByemail(credentials.email).subscribe((data) => {
        console.log(data)
        const userdata = JSON.stringify(data);
        console.log(userdata);
        sessionStorage.setItem('userdata',userdata);
    
        
      });
      console.log(data);
      this
      this.router.navigate(['/home']);
      
    })
  }

}
