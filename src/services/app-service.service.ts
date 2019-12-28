import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppServiceService {
  menus = [
    { icon: "edit", title: "新建笔记", route: "/newnote" },
    { icon: "tag", title: "标签", route: "/tag" },
    { icon: "file", title: "归档", route: "/file" },
    { icon: "search", title: "搜索", route: "/search" }
  ];
  constructor() {}
}
