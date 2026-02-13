import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-terms-of-service',
  imports: [CommonModule],
  templateUrl: './terms-of-service.html',
  styleUrl: './terms-of-service.css',
})
export class TermsOfService {
 openSection: string | null = null;

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

}
