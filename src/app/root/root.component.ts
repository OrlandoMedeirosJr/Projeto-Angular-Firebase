import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

interface Animal {
  nome: string;
  tipo: string;
  foto: string;
  selecionado: boolean;
}

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
}

interface AdocaoData {
  animal: Animal;
  adotante: FormData;
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {
  email = '';
  password = '';

  animals: Animal[] = [
    { nome: 'Jack Sparrow', tipo: 'Gato', foto: 'https://www.petz.com.br/blog/wp-content/uploads/2022/02/gato-e-carnivoro2.jpg', selecionado: false },
    { nome: 'Harry Potter', tipo: 'Gato', foto: 'https://www.manzoni.com.br/wp-content/uploads/2023/01/topo-blog2.jpg', selecionado: false },
    { nome: 'Voldemort', tipo: 'Cachorro', foto: 'https://razoesparaacreditar.com/wp-content/uploads/2015/02/DARLA.jpg', selecionado: false },
    { nome: 'Pikachu', tipo: 'Cachorro', foto: 'https://sonhoastral.com/uploads/article/image/2947/1111.png', selecionado: false },
    { nome: 'Kakaroto', tipo: 'Cachorro', foto: 'https://blog.polipet.com.br/wp-content/uploads/2022/07/pitbull.jpg', selecionado: false }
  ];

  formData: FormData = {
    nome: '',
    cpf: '',
    telefone: ''
  };

  adocaoConfirmada = false;

  nomeAdotante: string = '';

  adocoes: AdocaoData[] = [];

  exit() {
    // Limpa os dados do usuário e os animais adotados
    this.auth.user = null;
    this.adocoes = [];
    this.nomeAdotante = '';

    // Redefine o estado da aplicação
    this.adocaoConfirmada = false;
  }

  constructor(public auth: AuthService) {}

  ngOnInit() {}

  submitForm() {
    // Valida os campos do formulário
    if (!this.formData.nome || !this.formData.cpf || !this.formData.telefone) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    // Remove animais selecionados da lista de adoção
    const selectedAnimals = this.animals.filter(animal => animal.selecionado);
    selectedAnimals.forEach(animal => {
      const index = this.animals.findIndex(a => a === animal);
      if (index !== -1) {
        this.animals.splice(index, 1);
      }
      this.adocoes.push({
        animal: animal,
        adotante: { ...this.formData }
      });
    });

    // Atribui o nome do adotante à variável nomeAdotante
    this.nomeAdotante = this.formData.nome;

    // Limpa os campos do formulário após o envio
    this.formData = {
      nome: '',
      cpf: '',
      telefone: ''
    };

    this.adocaoConfirmada = true;
  }
}
