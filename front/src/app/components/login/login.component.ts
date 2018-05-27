import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      response => console.log(response),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.errors = error.error.error;
  }
}
