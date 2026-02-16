import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <!-- 1. El título Glitch (Efecto visual) -->
      <h1
        class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 animate-pulse select-none"
      >
        404
      </h1>

      <p class="text-xl text-white mb-8 font-bold tracking-widest uppercase">
        <span class="text-accent">Error:</span> Page_Not_Found_Exception
      </p>

      <!-- 2. La Terminal del Error (Contenedor) -->
      <div
        class="w-full max-w-lg bg-surface border border-white/10 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm relative group"
      >
        <!-- Barra superior de la ventana -->
        <div class="bg-base/50 px-4 py-2 border-b border-white/5 flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span class="ml-2 text-[10px] text-secondary">bash — 80x24</span>
        </div>

        <!-- Contenido del código -->
        <div class="p-6 font-mono text-sm leading-relaxed text-secondary/80">
          <p class="mb-2">
            <span class="text-primary">user@portfolio</span>:<span class="text-accent">~</span>
            $ navigate --to "{{ currentUrl }}"    
          </p>
          <p class="text-red-400 mb-4">
            > FATAL ERROR: Coordenadas de destino no se encuentran compiladas en este universo.
          </p>

          <!-- Mock Stack Trace divertido -->
          <div class="pl-4 border-l-2 border-white/5 space-y-1 text-xs opacity-70 mb-6">
            <p>at <span class="text-primary">Router.navigate()</span> (logic.js:404)</p>
            <p>at <span class="text-primary">User.caffeineLevel()</span> (nivel: 12%)</p>
            <p>
              at <span class="text-primary">Developer.excuse()</span> ("Trabajando desde localhost")
            </p>
          </div>

          <p class="animate-bounce mt-2 text-primary">> _</p>
        </div>

        <!-- Efecto de escaneo (Overlay animado) -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none"
        ></div>
      </div>

      <!-- 3. Botón de regreso -->
      <a
        routerLink="/"
        class="mt-10 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-base transition-all duration-300 font-bold rounded group"
      >
        <span class="mr-2 group-hover:-translate-x-1 inline-block transition-transform">&lt;</span>
        cd /home
      </a>
    </div>
  `,
  styles: [
    `
      /* Animación simple de línea de escaneo estilo CRT */
      @keyframes scan {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(500px);
        }
      }
    `,
  ],
})
export class NotFound404 {
  // Capturamos la URL actual para mostrarla en la terminal falsa (opcional)
  private router = inject(Router);

  get currentUrl(): string {
    return this.router.url;
  }
}
