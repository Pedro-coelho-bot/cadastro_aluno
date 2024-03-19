import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  students: Student[] = [
  {id:1, name: "Glauco", course: "computação"},
  {id:1, name: "maria", course: "computação"},
  {id:1, name: "Glauco", course: "Matematica"},
  ];
}
