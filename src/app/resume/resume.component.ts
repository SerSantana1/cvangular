import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment.development';
import { ScrollAnimationDirective } from '../scroll-animation.directive';


@Component({
  selector: 'app-resume',
  imports: [NgbModule,ScrollAnimationDirective],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  email = environment.email;

}
