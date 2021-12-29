import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {
  value: boolean = true;
  user: any = {
    id: 1,
    name: "stud1",
    sub: "HTML",
    date: 7 - 21 - 2021
  };

 

  constructor(private router: Router) { 
    
  }
  date$ = interval(1000).pipe(map(() => new Date()))

  ngOnInit(): void {
  }

  mypage() {
    this.router.navigate(['/courses'])
  }
  nopage() {
    alert("The value is false please recheck");
  }
}
