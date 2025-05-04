import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
   selectedType:string=''
ngOnInit() {
  this.selectedType=localStorage.getItem('userType')

}
}
