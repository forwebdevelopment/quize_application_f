import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Shared } from '../shared';
import { Cookie } from '../../core/cookie';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

   menuOpen = false;
   shared = inject(Shared)
   cookie = inject(Cookie)
   route = inject(Router)
   
  toggleMenu() {
    this.menuOpen = !this.menuOpen;

  }


  Loginout(){
      this.shared.isLogin.set(false)
      this.cookie.logout()
      this.route.navigate(['/home'])
  }
}
