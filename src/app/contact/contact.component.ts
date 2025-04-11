import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    email: '',
    ragione: '',
    messaggio: '',
  }

  messageText = '';

  onSubmit (){
    try {
      await emailjs.send(
        'service_o4b50l1',
        'template_3uzbd9n',
        {
          from_email: this.formData.email,
          to_email: 'info@vitolabate.it',
          RagioneSociale: this.formData.ragione || 'Non specificato',
          messaggio: this.formData.messaggio || '',
          date: new Date().toLocaleString()
        },
        '2pAPtMp27e-_tNgiF'
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
