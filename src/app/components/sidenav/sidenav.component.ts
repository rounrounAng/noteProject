import { AppServiceService } from "./../../../services/app-service.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  @Output() menutitle = new EventEmitter<string>();
  menus = [];

  constructor(private appservice: AppServiceService) {}

  ngOnInit() {
    this.menus = [...this.appservice.menus];
    this.changeMenu(this.menus[0]);
  }
  changeMenu(menu) {
    this.menutitle.emit(menu || this.menus[0]);
    this.menus.forEach(item => {
      if (item.icon == menu.icon) {
        item.icon = item.icon + "-active";
      } else if (item.icon.indexOf("-active") > 0) {
        item.icon = item.icon.slice(0, item.icon.length - 7);
      }
    });
  }
}
