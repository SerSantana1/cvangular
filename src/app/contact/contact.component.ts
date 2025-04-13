import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { environment } from '../../environments/environment.development';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mail = environment.email
  formData = {
    email: '',
    ragione: '',
    messaggio: '',
  }


  messageText = '';
  messageType: 'success' | 'error' | '' = '';
  showMessage = false;
  @ViewChild('contactForm') contactForm!: NgForm;

  async onSubmit (){
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
      this.messageText = 'Messaggio inviato con successo!';
      this.showMessage = true;

      this.contactForm.reset();

      setTimeout(() => this.showMessage = false, 5000);
    } catch (error) {
      this.messageType = 'error';
      this.messageText = 'Si è verificato un errore durante l\'invio del messaggio';
      this.showMessage = true;
    }
  }

}
