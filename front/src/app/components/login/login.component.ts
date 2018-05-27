import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  public errors = null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.Jarwis.login(this.form).subscribe(
      response => console.log(response),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.errors = error.error.error;
  }
}
