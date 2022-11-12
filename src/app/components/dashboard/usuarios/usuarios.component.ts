import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [
    { usuario: 'avelazco', nombre: 'Addiel', apellido: 'Velazco', sexo: 'M' },
    { usuario: 'maiyarag', nombre: 'Maiyara', apellido: 'Guerra', sexo: 'F' },
    { usuario: 'randyg', nombre: 'Randy', apellido: 'Guerra', sexo: 'M' },
    { usuario: 'tomasda', nombre: 'Tomas', apellido: 'De Armas', sexo: 'M' },
    { usuario: 'taniap', nombre: 'Tania', apellido: 'Padilla', sexo: 'F' },
    { usuario: 'sandrada', nombre: 'Sandra', apellido: 'De Armas', sexo: 'F' },
    { usuario: 'fernandov', nombre: 'Fernando', apellido: 'Velazco', sexo: 'F' },
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
