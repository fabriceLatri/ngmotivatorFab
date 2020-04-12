import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuotesService } from './../../services/quotes.service';
import { Quote } from '../../../quote.interface';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  form: FormGroup;

  @Output()
  create = new EventEmitter();

  @Output()
  update = new EventEmitter();

  isInEditMode: boolean = false;
  verb: string = 'Ajouter';

  constructor(private formBuilder: FormBuilder, private quotesService: QuotesService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: ['', Validators.required],
      quote: ['', Validators.required],
      key: ['']
    });

    this.quotesService.subject.subscribe(data => {
      console.log(data);
      this.isInEditMode = true;
      this.verb = "Modifier";
      // Hydrater le formulaire à l'aide de l'objet data:
      
      this.form.get('firstname').patchValue((data as Quote).firstname);
      this.form.get('lastname').patchValue((data as Quote).lastname);
      this.form.get('quote').patchValue((data as Quote).text);
      this.form.get('key').patchValue((data as Quote).key);
    })
  }

  saveQuote() {
    if (!this.form.valid) {
      console.log("form NOT valid");
      return;
    }
    // Création d'un event custom.
    if (!this.isInEditMode) {
      this.verb = "Ajouter";
      this.create.emit(this.form);
    } else {
      this.update.emit(this.form);
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.isInEditMode = !this.isInEditMode;
    this.form.reset();
    this.verb = "Ajouter";
  }
}
