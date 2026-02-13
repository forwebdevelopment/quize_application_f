import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import {LoaderService} from '../core/loader'
import { inject } from '@angular/core';
export const interceptorInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>>=> {
 const servics = inject(LoaderService)
      servics.show()
 
  return next(req).pipe(catchError((error:HttpErrorResponse)=>{

    servics.hide()
    let errorMsg = "";
    if(error.error instanceof ErrorEvent){
      errorMsg = `Client Error : ${error.error.message}`
    }else{
      errorMsg  = `${error.status} - ${error.message}`
    }

    console.error('HTTP Error : ', errorMsg)
    return throwError(()=>errorMsg)
  }));
};
