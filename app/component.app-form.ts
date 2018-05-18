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
			(resQuestionsData) => {
				/*let objArr = [];
				objArr = Object.keys(resQuestionsData).map((key) => {return resQuestionsData[key]});
				let currArrObj = objArr[0];
				let objOfArr = 
				
				
				Object.keys(currArrObj).map((key) =>{
																		currArrObj[key].input_id = key
																		return currArrObj[key]
																	}
															);  este era meu código para arranjar tudo*/
				/*
					Produz:
					[
						{	"label":"Você curte hamburguer?",
							"hidden":false,
							"options":{
								"yes":{"label":"Sim!","value":"1","show":"meat_spot"},
								"no":{"label":"Não","value":"0","hide":"meat_spot"}
							},
							"input_id":"likes_hamburger"
						},
						{	"label":"Qual o ponto da carne que você prefere?",
							"hidden":true,
							"options":{
								"rare":{"label":"Mal passada!","value":"rare"},
								"medium":{"label":"Ao ponto","value":"medium"},
								"well":{"label":"Bem passada","value":"well"}
							},
							"input_id":"meat_spot"
						}
					]
				*/
				this.questions = 	Object.keys(resQuestionsData.questions).map(key => {
														let value = resQuestionsData.questions[key];
														value.options = Object.keys(value.options).map(_key => value.options[_key]);
														return Object.assign({ name: key }, value);
													});
				//this.questions = 
			}, 
			error => alert(error), 
			() => console.log(JSON.stringify(this.questions))
		)
	}

}