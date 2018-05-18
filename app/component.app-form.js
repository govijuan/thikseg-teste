System.register(['@angular/core', './questions.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, questions_service_1;
    var AppFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (questions_service_1_1) {
                questions_service_1 = questions_service_1_1;
            }],
        execute: function() {
            AppFormComponent = class AppFormComponent {
                constructor(_questionsService) {
                    this._questionsService = _questionsService;
                    this.questions = [];
                }
                ngOnInit() {
                    this._questionsService.getQuestions()
                        .subscribe((resQuestionsData) => {
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
                        this.questions = Object.keys(resQuestionsData.questions).map(key => {
                            let value = resQuestionsData.questions[key];
                            value.options = Object.keys(value.options).map(_key => value.options[_key]);
                            return Object.assign({ name: key }, value);
                        });
                        //this.questions = 
                    }, error => alert(error), () => console.log(JSON.stringify(this.questions)));
                }
            };
            AppFormComponent = __decorate([
                core_1.Component({
                    selector: 'app-form',
                    //pipes: [objNgFor],
                    templateUrl: 'partials/app-form.html',
                    providers: [questions_service_1.QuestionsService]
                }), 
                __metadata('design:paramtypes', [questions_service_1.QuestionsService])
            ], AppFormComponent);
            exports_1("AppFormComponent", AppFormComponent);
        }
    }
});
//# sourceMappingURL=component.app-form.js.map