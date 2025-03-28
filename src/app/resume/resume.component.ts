import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  email = environment.email;

}
