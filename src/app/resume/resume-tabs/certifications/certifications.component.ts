import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CERTIFICATIONS, CERT_STATUS_META, CertStatus } from '../../../data/certifications';

@Component({
  selector: 'app-certifications',
  imports: [TranslatePipe],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  readonly certifications = CERTIFICATIONS;
  readonly statusMeta = CERT_STATUS_META;

  statusClass(status: CertStatus): string {
    return `cert-status cert-status--${status}`;
  }
}
