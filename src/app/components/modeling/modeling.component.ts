import { Component } from '@angular/core';

@Component({
  selector: 'app-modeling',
  standalone: true,
  imports: [],
  templateUrl: './modeling.component.html',
  styleUrl: './modeling.component.scss'
})
export class ModelingComponent {
   selectedType:string=''
ngOnInit() {
  this.selectedType=localStorage.getItem('userType')

}
}
