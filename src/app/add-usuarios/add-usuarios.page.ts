import { Api } from './../../services/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
    private provider: Api,
    private actRouter: ActivatedRoute,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    //ACT ROUTER SERVE PARA RECEBER E PASSAR PARAMETROS ENTRE AS PAGINAS
    this.actRouter.params.subscribe((data: any)=>{

    })
  }

  async mensagemSucesso(mensagem: any){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      color: "success"
    })
    await toast.present();
  }

  async mensagemErro(){
    const toast = await this.toastController.create({
      message: 'Erro',
      duration: 1500,
      color: "danger"
    })
    await toast.present();
  }

  voltarUsuarios(){
    this.router.navigate(['usuarios']);
  }

  cadastrar(){
    return new Promise(resolve =>{
      let dados = {
        nome: this.nome,
        cpf: this.cpf,
        email: this.email,
        senha: this.senha,
        nivel: this.nivel
      }
      this.provider.dadosApi(dados, 'usuarios/inserir.php').subscribe(
        data=>{

          this.mensagemSucesso(data)
          console.log(data)
          this.router.navigate(['usuarios'])

          // this.mensagemSucesso();

        }
      )
    });
  }

  editar(){

  }

}
