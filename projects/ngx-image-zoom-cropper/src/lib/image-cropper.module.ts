import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { ImageCropperComponent } from './component/image-cropper.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [
    ImageCropperComponent
  ],
  exports: [
    ImageCropperComponent
  ]
})
export class ImageCropperModule {
}
