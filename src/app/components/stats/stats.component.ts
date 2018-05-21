import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  
  dataSourceColumnChart
  dataSourcePie1
  dataSourcePie2
  title = 'Angular4 FusionCharts Sample'

  constructor() { 
    this.dataSourceColumnChart = {
      "id": 'chart1',
      "width": '100%',
      "height": 400,
      "type": 'column2d',
      "dataFormat": 'json',
      "dataSource": {
        "chart": {
          "caption": "Harry's SuperMart",
          "subCaption": "Top 5 stores in last month by revenue",
          "numberprefix": "$",
          "theme": "fint"
        },
        "data": [
            {
                "label": "Bakersfield Central",
                "value": "880000"
            },
            {
                "label": "Garden Groove harbour",
                "value": "730000"
            },
            {
                "label": "Los Angeles Topanga",
                "value": "590000"
            },
            {
                "label": "Compton-Rancho Dom",
                "value": "520000"
            },
            {
                "label": "Daly City Serramonte",
                "value": "330000"
            }
        ]
      }
    }

    this.dataSourcePie1 = {
      "width": "100%",
      "height": 400,
      "type": 'pie3d',
      "dataFormat": 'json',
      "dataSource": {
        "chart": {
            "caption": "Age profile of website visitors",
            "subcaption": "Last Year",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Age group : $label Total visit : $datavalue",
            "theme": "ocean"
        },
        "data": [
            {
                "label": "1 reaction",
                "value": "1250400"
            },
            {
                "label": "2 reactions",
                "value": "1463300"
            },
            {
                "label": "3 reactions",
                "value": "1050700"
            },
            {
                "label": "4 reactions",
                "value": "491000"
            }
        ]
      }
    }

    this.dataSourcePie2 = {
      "width": "100%",
      "height": 400,
      "type": 'pie3d',
      "dataFormat": 'json',
      "dataSource": {
        "chart": {
            "caption": "Age profile of website visitors",
            "subcaption": "Last Year",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Age group : $label Total visit : $datavalue",
            "theme": "ocean"
        },
        "data": [
            {
                "label": "1 reaction",
                "value": "1250400"
            },
            {
                "label": "2 reactions",
                "value": "1463300"
            },
            {
                "label": "3 reactions",
                "value": "1050700"
            },
            {
                "label": "4 reactions",
                "value": "491000"
            }
        ]
      }
    }

  }

  ngOnInit() {
  }

}
