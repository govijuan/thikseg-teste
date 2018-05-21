import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component.app';
import { AppFormComponent } from './component.app-form';

@NgModule({
	imports: [
		BrowserModule, FormsModule, HttpModule
	],
	declarations: [
		AppComponent, AppFormComponent
	],
	bootstrap: [
		AppComponent
	]

})

export class AppModule {}