import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [
    { usuario: 'avelazco', nombre: 'Addiel', apellido: 'Velazco ', sexo: 'M' },
    { usuario: 'maiyarag', nombre: 'Maiyara', apellido: 'Guerra ', sexo: 'F' },
    { usuario: 'randyg', nombre: 'Randy', apellido: 'Guerra ', sexo: 'M' },
    { usuario: 'tomasda', nombre: 'Tomas', apellido: 'De Armas ', sexo: 'M' },
    { usuario: 'taniap', nombre: 'Tania', apellido: 'Padilla ', sexo: 'F' },
    { usuario: 'sandrada', nombre: 'Sandra', apellido: 'De Armas ', sexo: 'F' },
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
