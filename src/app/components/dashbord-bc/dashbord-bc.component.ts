import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord-bc',
  standalone: true,
  imports: [],
  templateUrl: './dashbord-bc.component.html',
  styleUrl: './dashbord-bc.component.scss'
})
export class DashbordBcComponent {
   selectedType:string=''
ngOnInit() {
  this.selectedType=localStorage.getItem('userType')
  console.log(this.selectedType)
}
}
