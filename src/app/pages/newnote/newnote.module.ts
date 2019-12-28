import { NewnoteRoutingModule } from "./newnote-routing.module";
import { NoteItemComponent } from "./note-item/note-item.component";
import { NgModule } from "@angular/core";
import { NewnoteComponent } from "./newnote.component";
import { NoteCreateComponent } from "./note-create/note-create.component";
import {
  MatIconModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatButtonModule
} from "@angular/material";
import { CommonModule } from "@angular/common";
import { PaginatorService } from "../../../services/paginator.service";

@NgModule({
  declarations: [NewnoteComponent, NoteItemComponent, NoteCreateComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatButtonModule,
    NewnoteRoutingModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorService }]
})
export class NewnoteModule {}
