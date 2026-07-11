import { Component, computed, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MailService } from '../../services/mail-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language-service';

const TEXT = {
  pt: {
    kicker: '// vamos trabalhar juntos',
    title: 'Tem um projeto backend em mente?',
    intro: 'Sinta-se livre para entrar em contato comigo!',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'Seu Email',
    titlePlaceholder: 'Título',
    messagePlaceholder: 'Mensagem',
    nameRequired: 'Nome é obrigatório.',
    emailRequired: 'Email é obrigatório.',
    titleRequired: 'Título é obrigatório.',
    messageRequired: 'Mensagem é obrigatório.',
    submit: 'Enviar Mensagem',
    direct: 'Ou me contate diretamente em:',
  },
  en: {
    kicker: "// let's work together",
    title: 'Have a backend project in mind?',
    intro: 'Feel free to reach out to me!',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    titlePlaceholder: 'Title',
    messagePlaceholder: 'Message',
    nameRequired: 'Name is required.',
    emailRequired: 'Email is required.',
    titleRequired: 'Title is required.',
    messageRequired: 'Message is required.',
    submit: 'Send Message',
    direct: 'Or reach me directly at:',
  },
};

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private mailService = inject(MailService);
  private fb = inject(FormBuilder);
  private languageService = inject(LanguageService);

  public t = computed(() => TEXT[this.languageService.lang()]);

  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public contactForm: FormGroup;

  constructor() { 
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  get email() { return this.contactForm.get('email'); }
  get name() { return this.contactForm.get('name'); }
  get title() { return this.contactForm.get('title'); }
  get message() { return this.contactForm.get('message'); }

  

  public onSubmit(){
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value)

    this.mailService.sendMail(this.contactForm.value).subscribe({
      next: () => {
        console.log('Enviou')
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
