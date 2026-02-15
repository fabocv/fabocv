#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from __future__ import annotations

from pathlib import Path
from dataclasses import dataclass
import sys


APP_DIR = Path("src") / "app"
ROUTES_FILE = APP_DIR / "app.routes.ts"


@dataclass(frozen=True)
class Options:
    has_login: bool
    atomic_design: bool


def prompt_yes_no(question: str, default: bool | None = None) -> bool:
    suffix = " [y/n]: "
    if default is True:
        suffix = " [Y/n]: "
    elif default is False:
        suffix = " [y/N]: "

    while True:
        raw = input(question + suffix).strip().lower()
        if not raw and default is not None:
            return default
        if raw in ("y", "yes", "s", "si"):
            return True
        if raw in ("n", "no"):
            return False
        print("Respuesta inválida. Escribe y/n.")


def ensure_dir(path: Path) -> None:
    """Ensure the directory exists; create if it does not."""
    path.mkdir(parents=True, exist_ok=True)


def write_file(path: Path, content: str, overwrite: bool = False) -> None:
    """Write content to a file, creating the directory structure."""
    ensure_dir(path.parent)
    if path.exists() and not overwrite:
        return
    path.write_text(content, encoding="utf-8")


def append_once(path: Path, marker: str, block: str) -> None:
    """
    Append a block only once to a file. If the file does not exist, it is created.
    Uses 'marker' as an identifier to avoid duplicates.
    """
    ensure_dir(path.parent)
    if not path.exists():
        path.write_text("", encoding="utf-8")

    existing = path.read_text(encoding="utf-8")
    if marker in existing:
        return

    new_content = existing.rstrip() + "\n\n" + block.rstrip() + "\n"
    path.write_text(new_content, encoding="utf-8")


def create_base_structure() -> None:
    """Create the basic directory structure for the application."""
    dirs = [
        APP_DIR / "core",
        APP_DIR / "core" / "services",
        APP_DIR / "core" / "guards",
        APP_DIR / "core" / "layout",
        APP_DIR / "core" / "config",
        APP_DIR / "shared",
        APP_DIR / "shared" / "utils",
        APP_DIR / "shared" / "ui",
        APP_DIR / "features",
        APP_DIR / "interceptors",
        APP_DIR / "types",
    ]
    for d in dirs:
        ensure_dir(d)

    # Placeholders to avoid empty directories in git tracking
    for directory in dirs:
        write_file(directory / ".gitkeep", "", overwrite=False)


def create_atomic_design_structure() -> None:
    """Create structure for Atomic Design within shared/ui."""
    atomic_dirs = [
        APP_DIR / "shared" / "ui" / "atoms",
        APP_DIR / "shared" / "ui" / "molecules",
        APP_DIR / "shared" / "ui" / "organisms",
        APP_DIR / "shared" / "ui" / "templates",
    ]
    for d in atomic_dirs:
        ensure_dir(d)

    # Example atom (just a TS example, not a real Angular component)
    write_file(
        APP_DIR / "shared" / "ui" / "atoms" / "example-atom.ts",
        """// Example Atom (not an Angular component, just TS example)
export const EXAMPLE_ATOM = {
  name: 'ExampleAtom',
  version: 1,
};
""",
        overwrite=False,
    )


def create_hello_world_example() -> None:
    """Create a reusable 'Hello World' utility and corresponding service."""
    write_file(
        APP_DIR / "shared" / "utils" / "hola-mundo.ts",
        """export function holaMundo(nombre: string = 'mundo'): string {
  return `Hola ${nombre}!`;
}
""",
        overwrite=False,
    )

    write_file(
        APP_DIR / "core" / "services" / "hello-world.service.ts",
        """import { Injectable } from '@angular/core';
import { holaMundo } from '../../shared/utils/hola-mundo';

@Injectable({ providedIn: 'root' })
export class HelloWorldService {
  greet(nombre: string = 'mundo'): string {
    return holaMundo(nombre);
  }
}
""",
        overwrite=False,
    )

    # Optional barrel
    write_file(
        APP_DIR / "core" / "services" / "index.ts",
        """export * from './hello-world.service';
""",
        overwrite=False,
    )


def create_login_feature_structure() -> None:
    """Create structures for the login feature."""
    base = APP_DIR / "features" / "auth"
    dirs = [
        base,
        base / "pages",
        base / "pages" / "login",
        base / "ui",
        base / "ui" / "login-form",
        base / "data-access",
        base / "guards",
        base / "models",
    ]
    for d in dirs:
        ensure_dir(d)

    write_file(
        base / "pages" / "login" / "login.page.ts",
        """import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  template: `
    <h1>Login</h1>
    <p>Implementa tu formulario aquí.</p>
  `,
})
export class LoginPage {}
""",
        overwrite=False,
    )

    write_file(
        base / "data-access" / "auth.service.ts",
        """import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated(): boolean {
    return false; // Replace with real call
  }
}
""",
        overwrite=False,
    )

    write_file(
        base / "guards" / "auth.guard.ts",
        """import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../data-access/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.isAuthenticated();
};
""",
        overwrite=False,
    )


def ensure_routes_file_base() -> None:
    """Ensure the base routes file exists."""
    if ROUTES_FILE.exists():
        return

    write_file(
        ROUTES_FILE,
        """import { Routes } from '@angular/router';""",
        overwrite=False,
    )


def create_app_html() -> None:
    """Create the main application HTML file with <router-outlet />."""
    write_file(APP_DIR / "app.html", "<router-outlet></router-outlet>\n", overwrite=False)


def add_landing_routes() -> None:
    """Add landing routes to the main routes file."""
    ensure_routes_file_base()
    marker = "// [scaffold] landing"
    block = f"""{marker}
export const routes: Routes = [
  {{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',  // Redirección corregida a '/home'
  }},
  {{
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  }},
];
"""
    # Create home page for landing
    ensure_dir(APP_DIR / "features" / "home")
    write_file(
        APP_DIR / "features" / "home" / "home.page.ts",
        """import { Component } from '@angular/core';
import { HelloWorldService } from '../../core/services/hello-world.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <h1>Home</h1>
    <p>{{ message }}</p>
  `,
})
export class HomePage {
  message = '';

  constructor(private hello: HelloWorldService) {
    this.message = this.hello.greet('Angular');
  }
}
""",
        overwrite=False,
    )
    append_once(ROUTES_FILE, marker, block)

    # Insert landing routes into the main routes array
    marker3 = "// [scaffold] landing entries"
    block3 = f"""{marker3}
// Add these entries into 'routes' array for simple landing setup:
// {{ path: '', pathMatch: 'full', redirectTo: 'home' }},
// {{ path: 'home', loadComponent: () => import('./features/home/home.page').then(m => m.HomePage) }},
"""
    append_once(ROUTES_FILE, marker3, block3)


def main() -> int:
    """Main entry point of the script."""
    if not APP_DIR.exists():
        print(f"No existe {APP_DIR}. Ejecuta esto en la raíz de tu proyecto Angular.")
        return 1

    has_login = prompt_yes_no("¿La web tendrá login?", default=True)
    atomic = prompt_yes_no("¿Crear estructura de componentes reutilizables (Atomic Design)?", default=True)

    opts = Options(has_login=has_login, atomic_design=atomic)

    create_base_structure()
    create_hello_world_example()
    create_app_html()  # Crear el app.html con <router-outlet />

    if opts.atomic_design:
        create_atomic_design_structure()

    if opts.has_login:
        create_login_feature_structure()
        add_login_routes()
    else:
        add_landing_routes()

    print("\nScaffold completado.")
    print(f"- Estructura creada en: {APP_DIR}")
    print(f"- Rutas: {ROUTES_FILE}")
    print("- Ejemplo: shared/utils/hola-mundo.ts y core/services/hello-world.service.ts")
    print("- HTML de inicio creado en: app/app.html")
    return 0


def add_login_routes() -> None:
    """Add login routes to the main routes file."""
    ensure_routes_file_base()

    # Suggested routes for login feature
    marker = "// [scaffold] login entries"
    block = f"""{marker}
// Suggested routes for auth/login (copy into 'routes' array):
// {{
//   path: 'login',
//   loadComponent: () =>
//     import('./features/auth/pages/login/login.page').then((m) => m.LoginPage),
// }},
//
// Example protected area (create your feature and enable guard):
// {{
//   path: 'app',
//   canActivate: [authGuard],
//   loadChildren: () =>
//     import('./features/shell/shell.routes').then((m) => m.SHELL_ROUTES),
// }},
//
// Remember to import authGuard if you use it:
// import {{ authGuard }} from './features/auth/guards/auth.guard';
"""
    append_once(ROUTES_FILE, marker, block)




if __name__ == "__main__":
    raise SystemExit(main())
