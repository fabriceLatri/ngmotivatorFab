import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';



@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
  quotes$

  constructor(private quotesService: QuotesService, private router: Router) { }

  ngOnInit() {
    this.quotes$ = this.quotesService.getQuotes();
  }
  
  deleteQuote(quote) {
    console.log("quote deleted ", quote);
    this.quotesService.deleteQuoteById(quote.key)
  }

  showQuoteDetails(quote) {

  }

  toggleToEditMode(quote) {
    this.quotesService.editMode(quote);
  }

}
