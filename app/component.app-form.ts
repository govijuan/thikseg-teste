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
	answers = {};
	
	constructor(private _questionsService: QuestionsService){}
	ngOnInit(){
		this._questionsService.getQuestions()
		.subscribe(
			(resQuestionsData) => {
				this.questions = 	Object.keys(resQuestionsData.questions).map(key => {
														let value = resQuestionsData.questions[key];
														value.options = Object.keys(value.options).map(_key => value.options[_key]);
														return Object.assign({ name: key }, value);
													});
			}, 
			error => alert(error), 
			() => console.log(JSON.stringify(this.questions))
		)
	}
	addAnswer(event:any){
		//console.log(event.target.value);
		//console.log(event.target.id);
		this.answers[event.target.id] = event.target.value;
		console.log(JSON.stringify(this.answers));
	}
}