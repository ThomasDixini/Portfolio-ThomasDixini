import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';



interface MailData {
  name: string;
  title: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private firebase_functions_url = 'https://sendmail-fifxw6j4vq-uc.a.run.app';
  private http: HttpClient = inject(HttpClient);
  
  constructor() {}

  public sendMail(data: MailData): Observable<any> {
    return this.http.post(`${this.firebase_functions_url}`, data)
  }
}
