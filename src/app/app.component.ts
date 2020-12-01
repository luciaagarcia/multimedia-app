import { Component, HostBinding, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';
import { NgForm } from '@angular/forms';

export interface IMedia {
  title: string;
  src: string;
  type: string;
  cue: string;
}

declare var VTTCue;

export interface ICuePoint {
  id: string;
  title: string;
  description: string;
  src: string;
  href: string;
}

export interface IWikiCue {
  startTime: number;
  endTime: number;
  title: string;
  description: string;
  src: string;
  href: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  @HostBinding('class')
  isStandalone = '';

  sources: Array<Object>;
  activeCuePoints: ICuePoint[] = [];
  api: VgAPI;
  track: TextTrack;
  showCuePointManager = false;

  newCue: IWikiCue = {
    startTime: 40,
    endTime: 50,
    title: 'Carl Sagan',
    description: 'Carl Edward Sagan (/ˈseɪɡən/; November 9, 1934 – December 20, 1996) was an American astronomer, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator in astronomy and other natural sciences.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.JPG',
    href: 'https://en.wikipedia.org/wiki/Carl_Sagan'
};

  json: JSON = JSON;

  constructor() {
  }

  playlist: Array<IMedia> = [
    {
      title: 'Animales en la junga',
      src: './assets/animales-gordos.mp4',
      type: 'video/mp4',
      cue: './assets/data/cue-points.vtt'
    },
    {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4',
      cue: './assets/data/BigBuck.vtt'
  },
  {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4',
      cue: './assets/data/cue-points.vtt'
  }
  ];
  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];

  ngOnInit() {}

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.track = this.api.textTracks[0];

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

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }
    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }

  onClickPlaylistItem(item: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = item;
  }
}
