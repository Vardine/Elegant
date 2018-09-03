import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  newMessage;
  items: Observable<any[]>;
  constructor(private auth: AuthService, public db: AngularFireDatabase) {
  this.items = db.list('items').valueChanges();
}

  ngOnInit() {

  }

  loginUser(e) {
    var loggedName = e.target.elements[0].value;
    var loggedEmail = e.target.elements[1].value;
    var loggedMessage = e.target.elements[2].value;
    console.log(loggedName);
    this.newMessage = {
      "name": loggedName,
      "email": loggedEmail,
      "message": loggedMessage
    };
    this.db.list('/').push(this.newMessage);
}
}
