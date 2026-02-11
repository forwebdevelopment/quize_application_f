import { inject, Injectable } from "@angular/core";
import {enviroment} from '../../envinroments/environment'
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { TenantDataResponse } from "../models/models";
@Injectable(
    {
        providedIn:'root'
    }
)

export class Api{

     private apiUrl = enviroment.api;
     private http = inject(HttpClient)
    loginApi(email:string , password:string){
        const url = `${this.apiUrl}Auth/login`
         const cred = 
            {
             email: email,
             password: password
         }


      return this.http.post(url , cred)
         
    }


    TenantApi(){
        const url  =`${this.apiUrl}Tenant`

        return this.http.get<TenantDataResponse>(url)
    }
}