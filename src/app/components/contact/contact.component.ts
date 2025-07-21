import { Component } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts: Contact[] = [
    { name: 'Anna', phone: '+1...', email: 'anna@email.com', tags: ['Family'] },
    { name: 'Billy Treutel', phone: '+1...', email: 'b.treutel@gmail.com', tags: ['Friends'] },
    { name: 'Brandon', phone: '+1...', email: 'bob@yahoo.com', tags: ['Job'] },
    // ... autres contacts
  ];

  groupedContacts: { [letter: string]: Contact[] } = {};

  ngOnInit() {
    this.sortAndGroupContacts();
  }

  sortAndGroupContacts() {
    const sorted = this.contacts.sort((a, b) =>
      a.name.localeCompare(b.name)

    );
    this.groupedContacts = {};

    sorted.forEach((contact) => {
      const letter = contact.name[0].toUpperCase();
      if (!this.groupedContacts[letter]) {
        this.groupedContacts[letter] = [];
      }
      this.groupedContacts[letter].push(contact);
    });
  }

  groupedContactKeys(): string[] {
    return Object.keys(this.groupedContacts).sort();
  }
}
