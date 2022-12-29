import { Api } from './../../services/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.page.html',
  styleUrls: ['./add-usuarios.page.scss'],
})
export class AddUsuariosPage implements OnInit {

  nome: string = "";
  cpf: string = "";
  email: string = "";
  senha: string = "";
  nivel: string = "";
  id: string = "";

  constructor(
    private router: Router,
    private provider: Api) { }

  ngOnInit() {
  }

  voltarUsuarios(){
    this.router.navigate(['usuarios']);
  }

  cadastrar(){

  }

  editar(){

  }

}
