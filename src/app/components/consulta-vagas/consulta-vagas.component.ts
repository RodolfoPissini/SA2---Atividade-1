import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-vagas',
  templateUrl: './consulta-vagas.component.html',
  styleUrls: ['./consulta-vagas.component.css']
})
export class ConsultaVagasComponent implements OnInit {

  public consultaVaga: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getconsultaVaga();
  }

  public getconsultaVaga(): any {
    this.http.get('https://run.mocky.io/v3/e9cd4f3e-7eb3-4601-ae84-d6ac314aaadc').subscribe(
      response => this.consultaVaga = response,
      error => console.log(error)
    )

}

}
