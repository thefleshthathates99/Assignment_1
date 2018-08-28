import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ChannelsComponent} from './channels/channels.component';
import {AccountComponent} from './account/account.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'channels', component: ChannelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
