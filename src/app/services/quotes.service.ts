import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class QuotesService {

  subject = new Subject();

  constructor(private afDb: AngularFireDatabase) { }

  getQuotes() {
    // return this.afDb.list('quotes').valueChanges();
    return this.afDb.list('quotes').snapshotChanges().map(quotes => quotes.map(quote =>({ key:quote.key, ...quote.payload.val() })));
  }

  createQuote(quote) {
    return this.afDb.list('quotes').push(quote);
  }

  deleteQuoteById(id: string) {
    return this.afDb.list('quotes').remove(id);
  }

  editMode(quote) {
    this.subject.next(quote);
  }

  updateQuote(quote) {
    return this.afDb.object(`quotes/${quote.key}`).update(quote);
  }

}
