import { Component, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.models';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  kittenForm = this.formBuilder.group({
    kittenName: ['', Validators.required],
    race: ['', Validators.required],
    birthdate: ['22/10/2022', Validators.required],
    imgLink: ['', Validators.required],
  });

  @Output() public sendKitten: EventEmitter<Kitten> =
    new EventEmitter<Kitten>();

  constructor(private formBuilder: FormBuilder) {}

  //creation d'un nouveau chat
  //formulaire vidé après validation avec message d'ajout d'un chat
  createKitten(): void {
    this.sendKitten.emit(
      new Kitten(
        this.kittenForm.controls.kittenName.value || '{}',
        this.kittenForm.controls.race.value || '{}',
        this.kittenForm.controls.birthdate.value || '{}',
        this.kittenForm.controls.imgLink.value || '{}'
      )
    );
    alert('votre chat est ajouté');
    this.kittenForm.reset();
  }
}