import { Component, ChangeDetectionStrategy } from "@angular/core";


interface AcademicEntry {
  year: string;
  degree: string;
  institution: string;
  description: string;
  current?: boolean;
}

@Component({
  selector: 'app-academia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="max-w-4xl mx-auto animate-fade-in-up">
      
      <!-- 1. Encabezado de la sección -->
      <div class="mb-12 border-b border-emerald-400/20 pb-4 pt-8">
        <h2 class="text-3xl font-bold text-emerald-400 flex items-center gap-3">
          <span class="text-xl opacity-70">./</span>academia_log
          <span class="animate-pulse text-emerald-400">_</span>
        </h2>
        <p class="text-sm text-gray-400 mt-2 font-mono">
          [INFO] Recorrido educacional
        </p>
      </div>

      <!-- 2. Contenedor de la Línea de Tiempo -->
      <div class="relative ml-4 md:ml-6 space-y-12">
        
        <!-- LA LÍNEA VERTICAL (Background) -->
        <div class="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-emerald-400/50 via-emerald-400/20 to-transparent"></div>

        @for (item of education; track item.degree) {
          
          <div class="relative pl-8 md:pl-12 group">
            
            <div class="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full bg-base border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.6)] transition-all duration-300 z-10"></div>
            
      
            @if (item.current) {
              <span class="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full bg-emerald-400 animate-ping opacity-75"></span>
            }

            <!-- CONTENIDO -->
            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <!-- Título del Grado -->
              <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                {{ item.degree }}
              </h3>
              <!-- Año (Monospace para destacar) -->
              <span class="font-mono text-sm text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 shrink-0 mt-2 sm:mt-0">
                {{ item.year }}
              </span>
            </div>

            <!-- Institución -->
            <div class="text-base text-yellow-400 font-medium mb-3 flex items-center gap-2">
              <span class="text-emerald-400">@</span> {{ item.institution }}
            </div>

            <!-- Descripción -->
            <p class="text-sm text-gray-100 leading-relaxed max-w-2xl border-l-2 border-white/5 pl-4 hover:border-emerald-400/30 transition-colors">
              {{ item.description }}
            </p>

          </div>
        }

      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `]
})
export class AcademiaComponent {
  
  // Aquí pones tus datos reales
  education: AcademicEntry[] = [
    {
      year: '2024',
      degree: 'Diplomado de Diseño UX/UI/Agile ',
      institution: 'Universidad de Santiago de Chile',
      description: 'Diplomado de cuatro meses sobre los procesos de diseño UX para aplicaciones digitales. Analizamos y mejoramos la app móvil de Cencosud.',
      current: false
    },
    {
      year: '2023',
      degree: 'Ingeniero Civil Informático',
      institution: 'Universidad Austral de Chile',
      description: 'Titulado de Ingeniería Civil en Informática, tesis sobre una app para las sesiones de musicoterapeutas',
      current: false
    }
  ];
}
