import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment.development';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import { PortfolioComponent } from './resume-tabs/portfolio/portfolio.component';
import { SkillsComponent } from './resume-tabs/skills/skills.component';
import { CertificationsComponent } from './resume-tabs/certifications/certifications.component';


@Component({
  selector: 'app-resume',
  imports: [PortfolioComponent,SkillsComponent,CertificationsComponent,NgbModule,ScrollAnimationDirective,TranslatePipe],
  templateUrl: './resume.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  email = environment.email;

}
