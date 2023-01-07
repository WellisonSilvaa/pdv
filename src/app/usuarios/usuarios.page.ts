import { Api } from './../../services/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  itens: any = [];
  limit: number =  10;
  start: number = 0;
  nome: string = "";

  constructor(
    private router: Router,
    private provider: Api,
    private actRouter: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  addUsuarios(){
    this.router.navigate(['add-usuarios']);
  }

  ionViewWillEnter(){
    this.itens = [];
    this.start = 0;
    this.limit = 10;
    this.carregar();
  }


    carregar(){
      return new Promise(resolve => {
        this.itens = [];
        let dados = {
          nome : this.nome,
          limit : this.limit,
          start : this.start
          };

          this.provider.dadosApi(dados, 'usuarios/listar.php').subscribe(
            (data: any) => {

          if(data['itens'] == '0') {
            this.ionViewWillEnter();
          }else{
            this.itens = [];
            for(let item of data['itens']){
              this.itens.push(item);

            }
          }

           resolve(true);

          });
      });

    }

    //atualizar o list view

 doRefresh(event: any) {

  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);
};


//barra de rolagem
loadData(event: any) {

  // this.start += this.limit;
  this.limit += 10;

  setTimeout(() => {
    this.carregar().then(()=>{
      event.target.complete();
     });

  }, 1000);


}


}




