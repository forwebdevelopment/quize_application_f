import { CanActivateFn } from '@angular/router';
import { Shared } from './../shared/shared';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
 const shareService = inject(Shared)


 if(shareService.isQuizFiltered()){
  return true
 }else{
  return false
 }

};
