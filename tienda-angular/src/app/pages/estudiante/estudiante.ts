import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante.html',
  styleUrl: './estudiante.css'
})
export class Estudiante {

  nombre = '';
  nota1 = 0;
  nota2 = 0;
  nota3 = 0;
  nota4 = 0;

  suma = 0;
  promedio = 0;
  estado = '';
  estadoAcademico = '';
  errorNota = false;

  calcularPromedio() {
    const notas = [Number(this.nota1), Number(this.nota2), Number(this.nota3), Number(this.nota4)];
    this.errorNota = notas.some((nota) => nota < 0 || nota > 20 || Number.isNaN(nota));

    if (this.errorNota) {
      this.promedio = 0;
      this.suma = 0;
      this.estado = '';
      this.estadoAcademico = '';
      return;
    }

    this.suma = notas.reduce((total, nota) => total + nota, 0);
    this.promedio = this.suma / 4;

    if (this.promedio >= 17) {
      this.estado = 'Excelente';
    } else if (this.promedio >= 13) {
      this.estado = 'Regular';
    } else {
      this.estado = 'En riesgo';
    }

    this.estadoAcademico = this.promedio > 12 ? 'Aprobado' : 'Desaprobado';
  }
}