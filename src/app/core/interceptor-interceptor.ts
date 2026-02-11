import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export const interceptorInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>>=> {
 
 
  return next(req).pipe(catchError((error:HttpErrorResponse)=>{

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
