import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


import WaveSurfer from 'wavesurfer.js';//importacion de la libreria
@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string; // audioUrl: string = ''
  @ViewChild('wave') container!: ElementRef;
  private ws!:WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.ws = WaveSurfer.create({
      url:this.audioUrl,
      container: this.container.nativeElement//document.getElementById 'en js', nosotros lo hicimos modo angular
    })
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }

  playPause(){
    this.ws.playPause();
  }
}
