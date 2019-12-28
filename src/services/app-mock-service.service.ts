import { Injectable } from "@angular/core";
import { Note } from "../app/app.module.td";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AppMockServiceService {
  noteitem_data = [
    { title: "微信作品", createTime: "2019-10-18" },
    { title: "我的作品", createTime: "2019-10-17" },
    { title: "你的作品", createTime: "2019-10-14" },
    { title: "Tom作品", createTime: "2019-10-17" },
    { title: "Jerry作品", createTime: "2019-10-12" },
    { title: "Alice作品", createTime: "2019-10-11" },
    { title: "Bob作品", createTime: "2019-10-11" },
    { title: "Hanlei作品", createTime: "2019-10-11" }
  ];
  noteicon_data = [
    { icon: "note-preview", text: "预览" },
    { icon: "note-edit", text: "编辑", route: "/newnote/create" },
    { icon: "note-delete", text: "删除" },
    { icon: "note-share", text: "分享" },
    { icon: "note-data", text: "数据" }
  ];
  constructor() {}

  getNoteList(): Observable<Note[]> {
    return of(this.noteitem_data);
  }
  getIconList() {
    return this.noteicon_data;
  }
}
