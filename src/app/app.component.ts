import { Component, HostBinding, OnInit } from "@angular/core";
import { VgAPI } from "videogular2/compiled/core";
import { NgForm } from "@angular/forms";
import { ChartType } from 'chart.js';
import {SingleDataSet, Label} from 'ng2-charts';

export interface IMedia {
  title: string;
  src: string;
  type: string;
  cue: string;
  poster: string;
}

declare var VTTCue;

export interface ICuePoint {
  id: string;
  title: string;
  description: string;
  src: string;
  href: string;
  botones: string[];
  acierto: string;
}

export interface IWikiCue {
  startTime: number;
  endTime: number;
  title: string;
  description: string;
  src: string;
  href: string;
  botones: string[];
  acierto: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @HostBinding("class")
  isStandalone = "";
  respuestas = 0;
  aciertos = 0;
  fallos = 0;
  respuestasGlobales = 0;
  aciertosGlobales = 0;
  fallosGlobales = 0;

  sources: Array<Object>;
  activeCuePoints: ICuePoint[] = [];
  api: VgAPI;
  track: TextTrack;
  showCuePointManager = false;


  public doughnutChartLabels: Label[] = ['Aciertos', 'Fallos'];
  public doughnutChartData: SingleDataSet = [0, 0];
  public doughnutChartType: ChartType = 'doughnut';

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#55e67b', '#e65555'],
      borderColor: ['#3b3b3b', '#3b3b3b']
    }
  ]

  newCue: IWikiCue = {
    startTime: 40,
    endTime: 50,
    title: "Preguntas",
    description: "No es bueno que los animales estén gordos",
    src:
      "https://image.freepik.com/vector-gratis/diseno-ciervo-dibujado-mano_1106-8.jpg",
    href: "https://www.google.com",
    botones: [""],
    acierto: "",
  };

  json: JSON = JSON;

  constructor() {    }

  playlist: Array<IMedia> = [
    {
      title: "Animales en la junga",
      src: "./assets/animales-gordos.mp4",
      type: "video/mp4",
      cue: "./assets/data/AnimalesEnLaJungla.vtt",
      poster: "./assets/animales-gordos.jpg",
    },
    {
      title: "Oso polar (online)",
      src: "./assets/panda.mp4",
      type: "video/mp4",
      cue: "./assets/data/BigBuck.vtt",
      poster: "./assets/Panda.png",
    },
    {
      title: "Heinz",
      src: "./assets/heinz.mp4",
      type: "video/mp4",
      cue: "./assets/data/heinz.vtt",
      poster: "./assets/Heinz.png",
    },
    {
      title: "Heinz",
      src: "./assets/heinz.mp4",
      type: "video/mp4",
      cue: "./assets/data/heinz.vtt",
      poster: "./assets/Heinz.png",
    },
  ];
  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];

  ngOnInit() {}

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.track = this.api.textTracks[0];

    this.api
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.pauseVideo.bind(this));
    this.api
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api
      .getDefaultMedia()
      .subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  onSubmit(form: NgForm, event: Event) {
    event.preventDefault();
    if (form.valid) {
      const jsonData = {
        title: form.value.title,
        description: form.value.description,
        src: form.value.src,
        href: form.value.href,
        botones: [],
        acierto: "",
      };

      const jsonText = JSON.stringify(jsonData);

      this.track.addCue(
        new VTTCue(form.value.startTime, form.value.endTime, jsonText)
      );
    }
  }

  onClickRemove(cue: TextTrackCue) {
    this.track.removeCue(cue);
  }

  onEnterCuePoint($event) {
    this.activeCuePoints.push({ id: $event.id, ...JSON.parse($event.text) });
  }

  onExitCuePoint($event) {
    this.activeCuePoints = this.activeCuePoints.filter(
      (c) => c.id !== $event.id
    );
  }
  nextVideo() {
    this.currentIndex++;
    this.aciertosGlobales = this.aciertosGlobales + this.aciertos;
    this.respuestasGlobales = this.respuestasGlobales + this.respuestas;
    this.fallosGlobales = this.fallosGlobales + this.fallos;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }
    this.currentItem = this.playlist[this.currentIndex];

    this.aciertos=0;
    this.fallos=0;
    this.respuestas=0;
    this.doughnutChartData = [this.aciertosGlobales, this.fallosGlobales];


  }

  playVideo() {
    this.api.play();

  }
  pauseVideo() {
    this.api.pause();
  }
  reanudarVideo() {
    this.api.currentTime = this.api.currentTime + 5;
    this.api.play();
  }

  ComprobarAcierto(cuePoint: ICuePoint, boton: string) {
    this.respuestas = this.respuestas + 1;
    if (boton === cuePoint.acierto) {
      this.aciertos = this.aciertos + 1;
      this.reanudarVideo();
    }
    this.fallos= this.respuestas - this.aciertos;
    console.log('Fallos');
  }

  onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
    this.aciertos=0;
    this.fallos=0;
    this.respuestas=0;

    this.aciertosGlobales = this.aciertosGlobales + this.aciertos;
    this.respuestasGlobales = this.respuestasGlobales + this.respuestas;
    this.fallosGlobales = this.fallosGlobales + this.fallos;
  }

}
