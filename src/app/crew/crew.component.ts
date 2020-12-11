import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  mateBeingEdited: object = null;
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(mateName: string, isFirst: boolean) {
    this.crew.push({name: mateName, firstMission: isFirst});
  }

  remove(mate: object) {
    let index = this.crew.indexOf(mate);
    this.crew.splice(index, 1);
  }

  edit(mate: object) {
    this.mateBeingEdited = mate;
  }

  save(name: string, mate: object) {
    mate['name'] = name;
    this.mateBeingEdited = null;
  }
}
