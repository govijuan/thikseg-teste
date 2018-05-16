import { Component } from '@angular/core';
import { AppFormComponent } from './component.app-form';
import { QuestionsService } from './questions.service';

@Component({
	selector: 'app',
	templateUrl: './partials/app.html',
	providers: [QuestionsService]
})

export class AppComponent {}