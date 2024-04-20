import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisciplinaComponent } from "./components/disciplina/disciplina.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DisciplinaComponent]
})
export class AppComponent {
  title = 'projetointegrador-app';
}
