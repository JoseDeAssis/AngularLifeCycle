import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoItemParaDeletar = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log("OnInit")
  }

  ngOnChanges(): void {
    console.log("OnChanges")
  }

  ngOnDestroy(): void {
    console.log("item deledo")
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  deletarItem() {
    console.log("deletando Item")
    this.emitindoItemParaDeletar.emit(this.item.id)
  }

  checkItem() {
    if(this.item.comprado) {
      this.item.comprado = false
    } else {
      this.item.comprado = true
    }
  }

}
