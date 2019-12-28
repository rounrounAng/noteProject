import { NewnoteComponent } from "./newnote.component";
import { NoteCreateComponent } from "./note-create/note-create.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Router } from "@angular/router";
const noteRoutes: Routes = [
  {
    path: "",
    component: NewnoteComponent
  },
  { path: "create", component: NoteCreateComponent }
];
@NgModule({
  imports: [RouterModule.forChild(noteRoutes)],
  exports: [RouterModule]
})
export class NewnoteRoutingModule {}
