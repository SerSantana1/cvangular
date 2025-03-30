import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-resume',
  imports: [NgbModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  email = environment.email;
  firstTabContent: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/tabs/about-me.html', { responseType: 'text' }).subscribe(data => {
      this.firstTabContent = data;
    });
  }
}
