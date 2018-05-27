import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public errors = [];

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('http://localhost:8000/api/signup', this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.errors = error.error.errors;
  }
}
