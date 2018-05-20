import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class QuestionsService{
	private _url: string = "https://thinkseg-javascript-test.herokuapp.com/config"
	private _post_url: string = "https://thinkseg-javascript-test.herokuapp.com/quotations"
	constructor(private _http: Http){}
	getQuestions(){
		let jsonData = this._http.get(this._url)
		.map((response: Response) => response.json());
		return jsonData;
		
	}
	postAnswers(obj): any{
		let postResponse =	this._http.post(this._post_url,obj)
		.map((postResponse: Response) => postResponse.json());
		return postResponse
	}
}