import { Component, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  imports: [TranslateDirective, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
currentYear = (new Date()).getFullYear();
email = environment.email;
private translate = inject(TranslateService);

}
