import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.users={id:this.router.snapshot.params['id'],
    name:this.router.snapshot.params['name']}
    this.router.params.subscribe((params:Params)=>{
      this.users.id=params['id'];
      this.users.name=params['name'];
    })
  }


}

