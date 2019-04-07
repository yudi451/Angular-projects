import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  user: Employee = new Employee("","","");

  constructor(private httpClient: HttpClientService,
    private router: Router) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClient.createEmployee(this.user)
      .subscribe(data => {
      });
      this.router.navigate(['/']);
  };

}
