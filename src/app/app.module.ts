import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/ngrx/reducers/counter.reducer';
import { calculatorReducer } from 'src/ngrx/reducers/calculator.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesEffects } from 'src/ngrx/effects/articles.effect';
import { articlesReducer } from 'src/ngrx/reducers/articles.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer,
      calculator: calculatorReducer,
      articles: articlesReducer
    }, {}
    ),
    EffectsModule.forRoot([ArticlesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
