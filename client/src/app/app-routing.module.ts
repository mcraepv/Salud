import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';

const routes: Routes = [{ path: 'api/login', component: SignInModalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
