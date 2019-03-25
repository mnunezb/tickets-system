import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { TicketAdminComponent } from "./components/ticket-admin/ticket-admin.component";
import { HeaderComponent } from "./components/header/header.component";
import { TicketAddComponent } from "./components/ticket-add/ticket-add.component";
import { TicketDetailComponent } from "./components/ticket-detail/ticket-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketAdminComponent,
    HeaderComponent,
    TicketAddComponent,
    TicketDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
