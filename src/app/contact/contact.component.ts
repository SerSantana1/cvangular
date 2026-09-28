import { Component, inject, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { environment } from '../../environments/environment.development';
import emailjs from '@emailjs/browser';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-contact',
  imports: [FormsModule, ScrollAnimationDirective,TranslatePipe],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mail = environment.email
  formData = {
    email: '',
    ragione: '',
    messaggio: '',
  }

  /** Honeypot: must stay empty. If a bot fills it, the submission is dropped. */
  honeypot = '';
  /** Timestamp of the last accepted submit, for basic client-side throttling. */
  private lastSubmit = 0;
  private static readonly MIN_SUBMIT_INTERVAL_MS = 5000;

    private translate = inject(TranslateService);

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }


  messageText = '';
  messageType: 'success' | 'error' | '' = '';
  showMessage = false;
  @ViewChild('contactForm') contactForm!: NgForm;

  async onSubmit (){
    // Silently drop bot submissions that tripped the honeypot.
    if (this.honeypot.trim() !== '') {
      this.contactForm.reset();
      return;
    }

    // Basic client-side throttle to blunt rapid automated resubmits.
    const now = Date.now();
    if (now - this.lastSubmit < ContactComponent.MIN_SUBMIT_INTERVAL_MS) {
      return;
    }
    this.lastSubmit = now;

    try {
      await emailjs.send(
        'service_d7dj3r5',
        'template_7t5ghi6',
        {
          from_email: this.formData.email,
          to_email: this.mail,
          RagioneSociale: this.formData.ragione || 'Non specificato',
          messaggio: this.formData.messaggio || 'messaggio vuoto',
          date: new Date().toLocaleString()
        },
        'fp7T88-4xgvbK_7AQ'
      );

      this.messageType = 'success';
      this.messageText = this.translate.instant('CONTACT.SUCCESS');
      this.showMessage = true;

      this.contactForm.reset();

      setTimeout(() => this.showMessage = false, 5000);
    } catch (error) {
      this.messageType = 'error';
      this.messageText = this.translate.instant('CONTACT.ERROR');;
      this.showMessage = true;
    }
  }

}
