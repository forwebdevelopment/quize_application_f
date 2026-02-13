import { inject, Injectable } from "@angular/core";
import { Shared } from "../shared/shared";

@Injectable({
    providedIn:'root'
})


export class Cookie{
   _shared = inject(Shared)


    getCookie(){
     var data:any =    localStorage.getItem('loginItem');    
     data = JSON.parse(data);
    let  istrue = data? data.time > Date.now()?true:false:false ;

     if(istrue){
      this._shared.isLogin.set(true)
        return true
     }else{
        return false;
     }

    }

    setCookie(datas:any){
        let data:any = {
            data:datas,
            time:Date.now() + (2 * 60 * 60 * 1000)
        }
        localStorage.setItem('loginItem' , JSON.stringify(data))
    }


    logout(){
        let data:any = null
         localStorage.setItem('loginItem' , data)
    }
}