import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submit() {
    console.log('Contact form submitted:', this.contact);
    alert('Thanks for reaching out!');
  }
}