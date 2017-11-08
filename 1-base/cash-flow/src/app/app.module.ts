import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./lib/components/components.module";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}