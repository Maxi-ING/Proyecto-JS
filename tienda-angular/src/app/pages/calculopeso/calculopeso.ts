import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculopeso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculopeso.html',
  styleUrl: './calculopeso.css'
})
export class CalculopesoPage {
  nombre = '';
  correo = '';
  peso: number | null = null;
  altura: number | null = null; // En centímetros

  imc: number | null = null;
  resultadoImc = '';
  errorCorreo = false;
  errorPeso = false;
  errorAltura = false;
  errorMensaje = '';

  validarEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }

  calcularIMC() {
    this.errorCorreo = false;
    this.errorPeso = false;
    this.errorAltura = false;
    this.errorMensaje = '';
    this.imc = null;

    if (!this.validarEmail(this.correo)) {
      this.errorCorreo = true;
      return;
    }

    const peso = Number(this.peso);
    const altura = Number(this.altura);

    if (!Number.isFinite(peso) || !Number.isFinite(altura)) {
      this.errorMensaje = 'Por favor, ingresa peso y altura válidos.';
      return;
    }

    if (peso < 10 || peso > 300) {
      this.errorPeso = true;
      this.errorMensaje = 'El peso debe estar entre 10 y 300 kg.';
      return;
    }

    if (altura < 50 || altura > 250) {
      this.errorAltura = true;
      this.errorMensaje = 'La altura debe estar entre 50 y 250 cm.';
      return;
    }

    const alturaMetros = altura / 100;
    this.imc = peso / (alturaMetros * alturaMetros);

    if (this.imc < 18.5) {
      this.resultadoImc = 'Bajo peso';
    } else if (this.imc < 25) {
      this.resultadoImc = 'Peso saludable';
    } else if (this.imc < 30) {
      this.resultadoImc = 'Sobrepeso';
    } else {
      this.resultadoImc = 'Obesidad';
    }
  }
}