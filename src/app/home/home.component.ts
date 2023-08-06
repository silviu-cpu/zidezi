import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, private http: HttpClient ) {

  }

  ngOnInit():void {

  }

  logout():void {
    this.afAuth.signOut();
  }

  onCheckout():void {
    //call stripe service
    this.http.post('http://localhost:4242/checkout', {
      //items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51Nc6sEArMML4vzqfC2eBG4jCVWOpjs2Gub9QUV6XEM90DmLnAgZU8WCrdt6TPHrrYzBfzjnpDbeJsZ4lnItweppt003Cck5UN6');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
