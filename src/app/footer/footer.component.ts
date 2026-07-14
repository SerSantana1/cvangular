import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../../environments/environment';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
currentYear = (new Date()).getFullYear();
email = environment.email;
private translate = inject(TranslateService);

}
