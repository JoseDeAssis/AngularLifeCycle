import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemParaSerEditado!: Item
  valorItem!: string
  editando: boolean = false
  textoBtn = "Salvar item"

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemParaSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemParaSerEditado?.nome;
    }
  }

  adicionarItem() {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem)
    this.limparCampo()
  }

  limparCampo() {
    this.valorItem = ''
  }

  editarItem(){
    this.listaDeCompraService.editarItemDaLista(this.itemParaSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = "Salvar item"
  }

}
