import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
	selector: 'app-form',
	//pipes: [objNgFor],
	templateUrl: 'partials/app-form.html',
	providers: [QuestionsService]
})

export class AppFormComponent implements OnInit {
	questions = [];

	constructor(private _questionsService: QuestionsService){}
	ngOnInit(){
		this._questionsService.getQuestions()
		.subscribe(
			(resQuestionsData) => this.questions = resQuestionsData, 
			error => alert(error), 
			() => console.log(JSON.stringify(this.questions))
		)
	}

}