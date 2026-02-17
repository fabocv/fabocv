import { ChangeDetectionStrategy, Component } from '@angular/core';

interface WorkEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  stack: string[]; // Array para las tecnologías
  current?: boolean;
}

@Component({
  selector: 'app-work',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="max-w-6xl mx-auto animate-fade-in-up pb-12">
      
      <!-- 1. ENCABEZADO (Igual que Academia) -->
      <div class="mb-12 border-b border-emerald-400/20 pb-4">
        <h2 class="text-3xl font-bold text-emerald-400 flex items-center gap-3">
          <span class="text-xl opacity-70"><</span>laboral
          <span class="animate-pulse text-emerald-400">></span>
        </h2>
        <p class="text-sm text-gray-400 mt-2 font-mono">
          [INFO] Historial de experiencia laboral y habilidades
        </p>
      </div>

      <!-- 2. CONTENEDOR PRINCIPAL -->
      <!-- 'md:flex-row' activa el modo horizontal en escritorio -->
      <div class="relative">
        
        <!-- BARRA DE FONDO (Solo visible en Desktop) -->
        <!-- Cruza toda la pantalla horizontalmente -->
        <div class="hidden md:block absolute top-[18px] left-0 w-full h-px bg-gradient-to-r from-emerald-400/50 via-emerald-400/20 to-transparent z-0"></div>

        <!-- LISTA SCROLLEABLE -->
        <div class="flex flex-col md:flex-row md:overflow-x-auto md:pb-12 gap-8 md:gap-0 custom-scrollbar">
          
          @for (job of workHistory; track job.company) {
            
            <!-- ITEM INDIVIDUAL -->
            <!-- 'min-w-[350px]' asegura que cada tarjeta tenga buen ancho en horizontal -->
            <div class="relative pl-8 md:pl-0 md:pt-12 md:min-w-[380px] group">
              
              <!-- LÍNEA VERTICAL (Solo Móvil) -->
              <div class="md:hidden absolute top-0 bottom-0 left-[11px] w-px bg-emerald-400/20"></div>

              <!-- EL PUNTO (Nodo) -->
              <!-- En móvil: a la izquierda. En Desktop: arriba centrado con la línea -->
              <div class="absolute left-0 top-2 md:top-0 md:left-0 w-[22px] h-[22px] md:w-[12px] md:h-[12px] md:translate-y-[13px] rounded-full bg-base border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.8)] transition-all duration-300 z-10 flex items-center justify-center">
                 @if(job.current) {
                   <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
                 }
              </div>

              <!-- TARJETA DE CONTENIDO -->
              <!-- 'md:mr-8' da espacio entre items horizontales -->
              <div class="md:mr-8 p-5 rounded border border-white/5 bg-white/5 hover:border-emerald-400/30 transition-colors backdrop-blur-sm">
                
                <!-- Periodo -->
                <div class="font-mono text-xs text-emerald-400 mb-2">
                  [{{ job.period }}]
                </div>

                <!-- Título y Empresa -->
                <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {{ job.role }}
                </h3>
                <div class="text-gray-300 text-sm font-medium mb-4 flex items-center gap-2">
                  <span class="text-emerald-500">at</span> {{ job.company }}
                </div>

                <!-- Descripción -->
                <p class="text-gray-400 text-sm leading-relaxed mb-4">
                  {{ job.description }}
                </p>

                <!-- Tech Stack (Tags) -->
                <div class="flex flex-wrap gap-2 mt-auto">
                  @for (tech of job.stack; track tech) {
                    <span class="px-2 py-1 text-[10px] font-mono border border-emerald-400/20 text-emerald-400/80 rounded bg-emerald-400/5">
                      {{ tech }}
                    </span>
                  }
                </div>

              </div>
            </div>
          }
          
          <!-- MARCADOR FINAL (Para que el scroll no corte abruptamente) -->
          <div class="hidden md:block min-w-[50px] relative">
             <span class="absolute top-[5px] text-xs font-mono text-emerald-600">HEAD -></span>
          </div>

        </div>
      </div>

    </section>
  `,
  styles: [`
    /* Estilos para la barra de scroll personalizada (Webkit) */
    .custom-scrollbar::-webkit-scrollbar {
      height: 8px; /* Altura de la barra horizontal */
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(16, 185, 129, 0.05); /* Fondo muy sutil */
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(52, 211, 153, 0.2); /* Color esmeralda suave */
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(52, 211, 153, 0.5); /* Más brillante al hover */
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `]
})
export class WorkComponent {
  
  workHistory: WorkEntry[] = [
    {
      period: 'Junio 2022 - Mayo 2025',
      role: 'Full Stack Developer',
      company: 'Instituto de Informática Educativa - UFRO (remoto)',
      description: 'Desarrollo y mantención de plataforma backoffice de una web educacional.',
      stack: ['Angular 15-16', 'Tailwind', 'Typescript','Java', 'MongoDB', 'Docker', 'PostgreSQL', 'AWS', 'Kubernetes', 'Maven', 'Springboot', 'Python', 'Jenkins'],
      current: false
    },
    {
      period: '2019 - 2020',
      role: 'Práctica profesional',
      company: 'Intus SPA (Valdivia)',
      description: 'Mantenimiento de aplicaciones legacy y creación de nuevas features para la misma app móvil.',
      stack: ['Reactjs', 'ReactNative', 'MongoDB', 'Javascript', 'GatsbyJS'],
      current: false
    }
  ];
}
