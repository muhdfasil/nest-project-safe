import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-user-details',
  imports: [],
  templateUrl: './single-user-details.component.html',
  styleUrl: './single-user-details.component.css'
})
export class SingleUserDetailsComponent {
  details:any;
  constructor(private api:ApiService,private url:ActivatedRoute){}
  ngOnInit(){
    let id=this.url.snapshot.params['id'];
      this.api.getDetailsById(id).subscribe((data)=>{
        this.details=data;
      })
  }

  
}


