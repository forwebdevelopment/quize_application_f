import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from "@angular/router";
import { Loader } from "../loader/loader";
import { LoaderService } from '../../core/loader';
import { Api } from '../../core/api';
import { Shared } from '../shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterOutlet,  Loader],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
 isLoading = false;
  toastr:any = inject(ToastrService);

  constructor(private loaderService: LoaderService , private cd:ChangeDetectorRef , private api:Api , private _shared:Shared) {}

  ngOnInit() {
//  this.toastr.success('Hello world!', 'Toastr fun!');
    this.loaderService.loading$.subscribe(state => {
    
      this.isLoading = state;
       this.cd.detectChanges();
    });
   this.TenantData()
  }


    TenantData(){
           this.loaderService.show();
      this.api.TenantApi().subscribe({next:(val:any)=>{
        debugger
      this.loaderService.hide()
        console.log(val)
     this._shared.TenantData.set(val.data)

     console.log(this._shared.TenantData())
     this.cd.detectChanges()

      },
      error:(err:any)=>{
        console.log(err)
      }
    }
     
    )

    }

}
