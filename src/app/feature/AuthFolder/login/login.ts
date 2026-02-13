import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../../../core/api';
import { LoaderService } from '../../../core/loader';
import { Cookie } from '../../../core/cookie';
import { share } from 'rxjs';
import { Shared } from '../../../shared/shared';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private api = inject(Api)
  private loaderService = inject(LoaderService) ;
  private cookie = inject(Cookie);
  private _shared = inject(Shared)
  private router = inject(Router)
  private activeRoute = inject(ActivatedRoute)
  email:string = 'Enter Email'
  password:string = 'Enter Password'
 

  onLogin(){

  this.loaderService.show();
   this.api.loginApi(this.email , this.password).subscribe((val:any)=>{
   this.loaderService.hide();
         this._shared.isLogin.set(val.data)
        this.cookie.setCookie(val)
   const url = this.activeRoute.snapshot.queryParamMap.get('returnUrl')
   debugger
   console.log(url)
          url?this.router.navigate([url]):this.router.navigate(['/home'])
       
   })

  }
}
