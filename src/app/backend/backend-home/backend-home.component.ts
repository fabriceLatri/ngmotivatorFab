import { QuotesService } from './../../services/quotes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {
  
  toggleRegisterLogin: boolean = false;

  constructor(private quoteService: QuotesService) { }

  onQuoteCreated(quote) {
    console.log('quote retrived ', quote);
    let addedQuote = this.quoteService.createQuote({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      text: quote.value.quote
    });

    console.log('addedQuote: ', addedQuote);
  }

  onQuoteUpdated(quote) {
    console.log(quote);

    let updatedQuote = this.quoteService.updateQuote({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      text: quote.value.quote,
      key: quote.value.key,
    });
  }
  ngOnInit() {
  }

  toggleEditRegisterLogin(): void {
    console.log('je rentre dans toggleEditRegisterLogin')
    this.toggleRegisterLogin = !this.toggleRegisterLogin;
    console.log(this.toggleRegisterLogin);
  }

}
