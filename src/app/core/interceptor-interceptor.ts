import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import {LoaderService} from '../core/loader'
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
export const interceptorInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>>=> {
  const loaderService = inject(LoaderService); 
  const toastr:any = inject(ToastrService);
    let errorMsg = "";
    loaderService.show()
 
  return next(req).pipe(catchError((error:HttpErrorResponse)=>{
     
   // servics.hide()

    if(error.error instanceof ErrorEvent){

      errorMsg = `Client Error : ${error.error.message}`
    }else{
      errorMsg  = `${error.status} - ${error.message}`
    }

    console.error('HTTP Errorddddd : ', errorMsg)
  
   if(error.status==400){
     
          loaderService.hide()
          toastr.error('Bad Request', 'Error');
      }


   


    return throwError(()=>errorMsg)
  })
,finalize(()=>{
    loaderService.hide()
})

);
};
