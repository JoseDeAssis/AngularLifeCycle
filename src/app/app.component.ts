import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>
  itemParaSerEditado!: Item

  constructor(private listaDeComprasService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaDeComprasService.getListaDeCompra()
  }

  ngDoCheck(): void {
    this.listaDeComprasService.atualizarLocalStorage()
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item
  }

  deletarItem(itemId: number) {
    const index = this.listaDeCompras.findIndex((item) => item.id === itemId)
    this.listaDeCompras.splice(index, 1)
  }

  limparLista() {
    this.listaDeCompras = []
  }

}
