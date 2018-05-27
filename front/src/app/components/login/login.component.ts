import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';


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

  constructor(private Jarwis: JarwisService) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.Jarwis.login(this.form).subscribe(
      response => console.log(response),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.errors = error.error.error;
  }
}
