import { Component } from "@angular/core";
import { IconServiceService } from "../services/icon-service.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  headerTitle = "笔记本";
  headerIcon = "edit-active";
  constructor(
    private iconService: IconServiceService,
    private httpclient: HttpClient
  ) {}
  title = "ngProject";
  changeMenu(menu) {
    this.headerTitle = menu.title;
    this.headerIcon = menu.icon + "-active";
  }
}
