import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
	selector: 'app-form',
	templateUrl: 'partials/app-form.html',
	providers: [QuestionsService]
})

export class AppFormComponent implements OnInit {
	questions = [];
	answers:any = {};
	postObj:any ={};
	coolLevelObj:any;
	answersSent:boolean = false;
	
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
		this.answers[event.target.id] = event.target.value;
		console.log(JSON.stringify(this.answers));
	}
	sendAnswers(){
		this.postObj.answers = this.answers;
		let returnPostanswer = this._questionsService.postAnswers(this.postObj)
		.subscribe( 
			(ResPostAnswresData) => {
				console.log(JSON.stringify(ResPostAnswresData));
				this.coolLevelObj = ResPostAnswresData;
				this.answersSent = true;
				//this.doAnimation();
			}
			
		)
		console.log(JSON.stringify(this.postObj));
		return returnPostanswer;
	
	}

	appRefresh(){
		this.answersSent = false;
		this.answers = {};
		this.postObj = {};
	}
}