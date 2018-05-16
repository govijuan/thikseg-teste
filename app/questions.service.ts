import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class QuestionsService{
	private _url: string = "https://thinkseg-javascript-test.herokuapp.com/config"
	constructor(private _http: Http){}
	getQuestions(){
		let jsonData = this._http.get(this._url)
		.map((response: Response) => response.json());
		return jsonData;
		
	}
}