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

  async mensagem(mensagem: any, cor: any){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor
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
        (data: any)=>{

          if(data['ok'] == true){
            this.router.navigate(['usuarios']);
            this.mensagem(data['mensagem'], 'success');
          }else{
            this.mensagem(data['mensagem'], 'danger');
          }

        }
      )
    });
  }

  editar(){

  }

}
