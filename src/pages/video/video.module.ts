import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideoPage } from './video';

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    IonicPageModule.forChild(VideoPage),
  ],
})
export class VideoPageModule {}
