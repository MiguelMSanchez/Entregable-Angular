import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})

export class ArticulosComponent implements OnInit {
  public todosLosArticulos:Array<Articulo>;

  constructor() {
    this.todosLosArticulos = [
      new Articulo('El anuncio de la victoria de Biden llegó este sábado. El escrutinio continúa, pero el candidato demócrata ya ha alcanzado el umbral para ser presidente. Pensilvania, su estado natal, fue el que le empujó por encima de los 270 votos electorales necesarios, los que otorgan los estados al candidato que haya ganado la mayoría de papeletas en su territorio. Pensilvania también fue el estado que llevó a Trump a la presidencia. El martes de las elecciones, Biden visitó su casa de la infancia en Scranton y escribió en una pared: "De esta casa a la Casa Blanca con la gracia de Dios". Biden da la victoria a los democratas', 'Cuando llegamos a la Casa Blanca, el presidente ingresó por una puerta lateral, una entrada que ha utilizado poco durante sus cuatro años de mandato. Sus hombros estaban hundidos y la cabeza, gacha.', 'Francisco Robles', '09 de Noviembre de 2020'),
      new Articulo('Trump luchará por impugnar su derrota en los tribunales', 'Han pasado solo dos días desde que los medios de comunicación dieran por cerrada la victoria de Joe Biden sobre Donald Trump en las elecciones de Estados Unidos, pero han sido suficientes para poner de manifiesto las enormes diferencias entre el actual presidente y su sucesor a la hora de afrontar los problemas más imperiosos del país. Mientras el demócrata anunciaba un plan propio de los tiempos de guerra para movilizar todos los recursos necesarios contra la crisis del coronavirus desde su primer día como presidente electo, el republicano sigue ignorando una pandemia que está totalmente fuera de control para concentrar sus esfuerzos en litigar el resultado de los comicios.', 'David Olmedo', '09 de Noviembre de 2020'),
      new Articulo('España al borde del confinamiento', 'España ha registrado el fin de semana 52.386 nuevos casos de covid, una cifra ligeramente inferior a la del fin de semana anterior, mientras que las muertes ascienden a 512, marcando un récord de la segunda ola de coronavirus. La noticia esperanzadora de este lunes es que la vacuna contra la covid parece cada vez más cercana. La farmacéutica Pfizer ha comunicado que su vacuna es "eficaz en un 90%", según los primeros resultados de la fase 3, aunque los científicos piden prudencia hasta que finalicen los ensayos.', 'Almudena Sanders', '08 de Nomviembre de 2020'),
      new Articulo('Juan Gomez Jurado estrena "Rey Blanco"', 'Al otro lado de la pantalla, confiesa que ha pasado la noche en vela, pero es que además de ser el autor español que más vende en digital y de los más leídos en papel, también participa en los podcasts Todopoderosos y Aquí hay dragones junto a Rodrigo Cortés, Arturo González Campos y Javier Cansado, aparece constantemente en medios, mantiene una intensa actividad en Twitter (recibe una media de 25.000 menciones al mes, que llegarán hasta las 100.000 con el lanzamiento de su nueva novela), padece un hambre infinita por consumir productos culturales, tiene sus ocupaciones familiares y realiza sus rutinas diarias de ejercicio.', 'Lara Compostela', '08 de Noviembre de 2020'),
    ]
  }

  ngOnInit(): void {
    console.log(this.todosLosArticulos);
  }

}
