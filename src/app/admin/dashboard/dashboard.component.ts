import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    Designation:string="";
    Username:string="";
    NoOfTeamMembers:number=0;
    TotalCostOfAllProjects:number=0;
    PendingTasks:number=0;
    UpComingProjects:number=0;
    ProjectCost:number=0;
    CurrentExpenditure:number=0;
    AvailableFunds:number=0;
    
    Clients:string[]=[];
    Projects:string[]=[];
    Years:number[]=[];
    TeamMembersSummary:any=[];
    TeamMembers:any=[];
    Today:Date[]=[];

    constructor(private dashboardService: DashboardService)
    {

    }


  ngOnInit(){ 
    this.Designation = "Team Leader";
    this.Username = "Dileep Kumar";
    this.NoOfTeamMembers = 6;
    this.TotalCostOfAllProjects = 250;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Today.push(new Date());
    this.Clients = [
      "People Tech Group","Advertising Market PLace","FyrSoft"
    ];
    this.Projects = [
      "Project A","Project B","Project C","Project D"
    ];
    for(var i=2019; i>=2010; i--)
    {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = [
      {
        Region:"East", Members:[
          {ID: 1, Name: "Sandhya", Status:"Available"},
          {ID: 2, Name: "Deekshitha", Status:"Available"},
          {ID: 3, Name: "Pavani", Status:"Busy"},
          {ID: 4, Name: "Durga", Status:"Busy"},
        ]
      },
      {
        Region:"West", Members:[
          {ID: 1, Name: "Durg", Status:"Available"},
          {ID: 2, Name: "Pavi", Status:"Available"},
          {ID: 3, Name: "Deeksha", Status:"Busy"},
          {ID: 4, Name: "Sandy", Status:"Busy"},
        ]
      },
      {
        Region:"South", Members:[
          {ID: 1, Name: "Surya", Status:"Available"},
          {ID: 2, Name: "Deekshi", Status:"Available"},
          {ID: 3, Name: "Rao", Status:"Busy"},
          {ID: 4, Name: "Prasad", Status:"Busy"},
        ]
      },
      {
        Region:"North", Members:[
          {ID: 1, Name: "Manelli", Status:"Available"},
          {ID: 2, Name: "Bhupathi", Status:"Available"},
          {ID: 3, Name: "Gadhiraju", Status:"Busy"},
          {ID: 4, Name: "Korada", Status:"Busy"},
        ]
      },
    ];
  }

  onProjectChange($event: any)
  {
    if($event.target.innerHTML == "Project A")
    {
      this.ProjectCost = 11111;
      this.CurrentExpenditure = 22222;
      this.AvailableFunds = 33333;
    }
    else if($event.target.innerHTML == "Project B")
    {
      this.ProjectCost = 44444;
      this.CurrentExpenditure = 55555;
      this.AvailableFunds = 66666;
    }
    else if($event.target.innerHTML == "Project C")
    {
      this.ProjectCost = 77777;
      this.CurrentExpenditure = 88888;
      this.AvailableFunds = 99999;
    }
    else if($event.target.innerHTML == "Project D")
    {
      this.ProjectCost = 10101;
      this.CurrentExpenditure = 11011;
      this.AvailableFunds = 22022;
    }
  }
}
