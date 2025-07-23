import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, MatListModule, MatCardModule, MatToolbarModule, FormsModule, MatProgressBarModule, CommonModule, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

    stats = {
    totalProvas: 127,
    alunosAtivos: 1234,
    mediaGeral: 8.7,
    taxaAprovacao: 94
  };

  status = [
      { label: 'Total de Provas', value: this.stats.totalProvas, change: '+12%' },
      { label: 'Alunos Ativos', value: this.stats.alunosAtivos, change: '+8%' },
      { label: 'Média Geral', value: this.stats.mediaGeral, change: '+0.3' },
      { label: 'Taxa de Aprovação', value: this.stats.taxaAprovacao + '%', change: '+2%' },
    ]

  provas = [
    { titulo: 'Prova de Matemática - Álgebra', turma: '9º Ano A', status: 'Concluída', alunos: '25/28 alunos', media: 8.2 },
    { titulo: 'Avaliação de História - Brasil Colonial', turma: '8º Ano B', status: 'Concluída', alunos: '30/32 alunos', media: 7.8 },
    { titulo: 'Prova de Ciências - Sistema Solar', turma: '7º Ano C', status: 'Ativa', alunos: '18/25 alunos', media: 8.5 },
    { titulo: 'Teste de Português - Interpretação', turma: '9º Ano A', status: 'Rascunho', alunos: '0/28 alunos', media: null },
  ];

  turmas = [
    { nome: '9º Ano A', disciplina: 'Matemática', alunos: 28, media: 8.2, cor: 'primary' },
    { nome: '8º Ano B', disciplina: 'História', alunos: 32, media: 7.8, cor: 'accent' },
    { nome: '7º Ano C', disciplina: 'Ciências', alunos: 25, media: 8.5, cor: 'warn' },
    { nome: '9º Ano B', disciplina: 'Português', alunos: 30, media: 7.9, cor: 'primary' },
  ];

}
