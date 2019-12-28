import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class IconServiceService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    let sideicon = [
      "rounroun",
      "edit",
      "file",
      "tag",
      "search",
      "edit-active",
      "file-active",
      "tag-active",
      "search-active",
      "add"
    ];
    let noteicon = [
      "note-share",
      "note-qrcode",
      "note-preview",
      "note-edit",
      "note-delete",
      "note-data"
    ];
    let iconassets = "../assets/images/";
    let icon = [...sideicon, ...noteicon];
    icon.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${iconassets}/${icon}.svg`
        )
      );
    });
  }
}
