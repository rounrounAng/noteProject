import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TagComponent } from "./pages/tag/tag.component";
import { FileComponent } from "./pages/file/file.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HeaderComponent } from "./components/header/header.component";
import {
  MatIconModule,
  MatButtonModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { from } from "rxjs";
import { Router } from "@angular/router";
import { TagDialogComponent } from "./pages/tag/tag-dialog/tag-dialog.component";
@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    FileComponent,
    SidenavComponent,
    HeaderComponent,
    TagDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TagDialogComponent]
})
export class AppModule {}
