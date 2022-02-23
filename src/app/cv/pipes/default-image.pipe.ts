import { Pipe, PipeTransform } from '@angular/core';
import {CONSTANTES} from "../../config/constantes";

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    return path.trim()? path : CONSTANTES.defaultImage;
  }
}
