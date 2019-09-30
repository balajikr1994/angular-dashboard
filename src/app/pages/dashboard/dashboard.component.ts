import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  page = 1;

  pageSize = 2;

  someList = [
    {
      prod_id: "1",
      prod_name: "Cadbury",
      category_1d: "1",
      category_name: "chocalate"
    },
    {
      prod_id: "2",
      prod_name: "Cadbury",
      category_1d: "1",
      category_name: "chocalate"
    },
    {
      prod_id: "3",
      prod_name: "Cadbury",
      category_1d: "1",
      category_name: "chocalate"
    },
    {
      prod_id: "4",
      prod_name: "Cadbury",
      category_1d: "1",
      category_name: "chocalate"
    },
    {
      prod_id: "5",
      prod_name: "Cadbury",
      category_1d: "1",
      category_name: "chocalate"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
