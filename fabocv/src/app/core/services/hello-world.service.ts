import { Injectable } from '@angular/core';
import { holaMundo } from '../../shared/utils/hola-mundo';

@Injectable({ providedIn: 'root' })
export class HelloWorldService {
  greet(nombre: string = 'mundo'): string {
    return holaMundo(nombre);
  }
}
