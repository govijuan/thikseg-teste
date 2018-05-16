import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component.app';
import { AppFormComponent } from './component.app-form';
import { ObjNgFor } from './pipe.ObjNgFor';

@NgModule({
	imports: [
		BrowserModule, FormsModule, HttpModule
	],
	declarations: [
		AppComponent, AppFormComponent, ObjNgFor
	],
	bootstrap: [
		AppComponent
	]

})

export class AppModule {}