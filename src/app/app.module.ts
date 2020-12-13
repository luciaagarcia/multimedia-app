import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { FormsModule } from '@angular/forms';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

@NgModule({
    declarations: [
        AppComponent,
    ],


    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule,
        BrowserModule,
        VgOverlayPlayModule,
        VgControlsModule,
        BrowserAnimationsModule,
        ChartsModule,

    ],
    providers: [ThemeService],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
