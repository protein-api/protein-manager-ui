import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {


  dataSourceColumnChart
  dataSourceColumnChart2
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
          "baseFont": "Verdana",
          "baseFontSize": "14",
          "palettecolors":"#ff5252",
          "caption": "BarChart 1",
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
                "value": "730000",
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

    this.dataSourceColumnChart2 = {
      "id": 'chart2',
      "width": '100%',
      "height": 400,
      "type": 'column2d',
      "dataFormat": 'json',
      "dataSource": {
        "chart":
        {
          "baseFont": "Verdana",
          "baseFontSize": "14",
          "palettecolors":"#ff5252",
          "caption": "barchat2",
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
            "baseFont": "Verdana",
            "baseFontSize": "14",
            "palettecolors":"#bdbdbd,#212121,FF0000,#ff5252",
            "caption": "Percentage of proteins with n promiscuous reactions",
            "subcaption": "Number of promiscuos reactions per protein",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Number of promiscuos reactions: $label",
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
            "caption": "Taxonomy",
            "subcaption": "Percentage of promicuous proteins per kindom",
            "palettecolors":"FF0000,#212121,#bdbdbd",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Kindom: $label",
            "theme": "ocean"
        },
        "data": [
            {
                "label": "Eukarya",
                "value": "3750000"
            },
            {
                "label": "Bacteria",
                "value": "6042000"
            },
            {
                "label": "Archea",
                "value": "0208400"
            }
        ]
      }
    }

  }

  ngOnInit() {
  }

}
