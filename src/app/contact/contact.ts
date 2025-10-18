import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MailService } from '../../services/mail-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private mailService = inject(MailService);
  private fb = inject(FormBuilder);


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
