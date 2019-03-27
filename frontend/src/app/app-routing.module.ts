import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { TicketAdminComponent } from "./components/ticket-admin/ticket-admin.component";
import { TicketAddComponent } from "./components/ticket-add/ticket-add.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },



  
  {
    path: "ticket-admin",
    component: TicketAdminComponent 
  },
  {
    path: "ticket-add",
    component: TicketAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
