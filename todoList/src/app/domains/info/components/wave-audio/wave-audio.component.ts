import { Component, ElementRef, Input, ViewChild } from '@angular/core';


import WaveSurfer from 'wavesurfer.js';//importacion de la libreria
@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string; // audioUrl: string = ''
  @ViewChild('wave') container!: ElementRef;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    WaveSurfer.create({
      url:this.audioUrl,
      container: this.container.nativeElement//document.getElementById 'en js', nosotros lo hicimos modo angular
    })
  }
}
