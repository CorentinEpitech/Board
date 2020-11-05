import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog} from "@angular/material/dialog";
import { CourseDialogComponent } from "../course-dialog-component/course-dialog-component.component"




export interface ad_temp {
  advertisement: string;
  ID: number;
  description: string;
  short_desc: string;
  money: number;
}

export interface user_data {
  name: string;
  family_name: string;
  email: string;
  age: number;
  ad_id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
@Injectable()
export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['advertisement', 'ID', 'button'];
  data: any;
  dataSource: MatTableDataSource<ad_temp>;
  allezwoulah: ad_temp = {
    advertisement: "OUI",
    ID: 13,
    description: "Desc",
    short_desc: "SH",
    money: 13
  };
  user_need_job: user_data = {
    name: "",
    family_name: "",
    email: "",
    age: null,
    ad_id: null
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http : HttpClient,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/v1/advertisements').subscribe(ad_temp => {
      this.data = ad_temp;
      setTimeout(() => this.dataSource = new MatTableDataSource<ad_temp>(this.data));
      setTimeout(() => this.dataSource.sort = this.sort);
      setTimeout(() => this.dataSource.paginator = this.paginator);
    });
  }

  set_ad(ad: string, id: number, description: string, short_desc: string, money: number) {
    this.allezwoulah.advertisement = ad;
    this.allezwoulah.ID = id;
    this.allezwoulah.description = description;
    this.allezwoulah.short_desc = short_desc;
    this.allezwoulah.money = money;
  }

  openDialog() {
    const dialog = this.dialog.open(CourseDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {
        dialog_ad_title: this.allezwoulah.advertisement,
        user_name: this.user_need_job.name,
        user_family_name: this.user_need_job.family_name,
        email: this.user_need_job.email,
        age: this.user_need_job.age,
        ad_id: this.allezwoulah.ID
      }
    });

    dialog.afterClosed().subscribe(result => {
      this.user_need_job.name = result.user_name;
      this.user_need_job.family_name = result.user_family_name;
      this.user_need_job.email = result.email;
      this.user_need_job.age = result.age;
      this.user_need_job.ad_id = result.ad_id;
      this.send_to_db();
    });
  }
  send_to_db() {
    this.http.post('http://localhost:5000/api/v1/apply', {
      "name": this.user_need_job.name,
      "family_name": this.user_need_job.family_name,
      "email": this.user_need_job.email,
      "age": this.user_need_job.age,
      "ad_id": this.user_need_job.ad_id
    }).subscribe(return_value => {
      return_value = return_value;
    })
  }
}