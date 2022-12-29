import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addUsuarios(){
    this.router.navigate(['add-usuarios']);
  }

}
