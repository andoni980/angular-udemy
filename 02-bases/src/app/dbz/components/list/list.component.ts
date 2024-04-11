import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  emittCharacterIndex(index: number): void {
    console.log({index});

    this.onDeleteCharacter.emit(index);
  }
}
