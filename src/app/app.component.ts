import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  menuItem: MainMenu[];
  // public menu: {}[] = [];
  constructor() {
    this.menuItem = menu;
    console.log(this.menuItem);
  }
}
interface MainMenu {
  id: number;
  parentId: number;
  name: string;
  cssClass: string;
  imageUrl: string;
  designation: number;
  subMenus: SubMenu[];
}
interface SubMenu {
  id: number;
  parentId: number;
  name: string;
  cssClass: string;
  imageUrl: string;
  designation: number;
}
const menu: MainMenu[] = [
  {
    id: 1,
    cssClass: "foo",
    designation: 3,
    imageUrl: "",
    name: "John",
    parentId: 1,
    subMenus: [
      {
        id: 2,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 1",
        parentId: 1,
      },
      {
        id: 3,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 2",
        parentId: 1,
      },
      {
        id: 4,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 3 ",
        parentId: 1,
      },
      {
        id: 5,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 4",
        parentId: 1,
      },
    ],
  },
  {
    id: 6,
    cssClass: "foo",
    designation: 3,
    imageUrl: "",
    name: "Andy",
    parentId: 1,
    subMenus: [
      {
        id: 7,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 5",
        parentId: 1,
      },
      {
        id: 8,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 6",
        parentId: 1,
      },
      {
        id: 9,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 7",
        parentId: 1,
      },
      {
        id: 10,
        cssClass: "foo",
        designation: 3,
        imageUrl: "",
        name: "Loream Ipsum 8",
        parentId: 1,
      },
    ],
  },
];
