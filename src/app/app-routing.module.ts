import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewnoteComponent } from "./pages/newnote/newnote.component";
import { FullscreenOverlayContainer } from "@angular/cdk/overlay";
import { NewnoteRoutingModule } from "./pages/newnote/newnote-routing.module";
import { TagComponent } from "./pages/tag/tag.component";
import { FileComponent } from "./pages/file/file.component";
const routes: Routes = [
  {
    path: "newnote",
    loadChildren: () =>
      import("./pages/newnote/newnote.module").then(mod => mod.NewnoteModule)
  },
  { path: "tag", component: TagComponent },
  { path: "file", component: FileComponent },
  { path: "search", component: FileComponent },
  {
    path: "",
    redirectTo: "/newnote",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
