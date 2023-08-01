import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/states/counter.state';
import * as CounterActions from '../../src/ngrx/actions/counter.action';
import { CalculatorState } from 'src/states/calculator.state';
import * as CalculatorActions from 'src/ngrx/actions/calculator.action';
import { state } from '@angular/animations';
import { Article, ArticlesState } from 'src/states/articles.state';
import * as ArticlesActions from 'src/ngrx/actions/articles.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux_test';

  currentNumber$: Observable<string>;
  articles$: Observable<Article[]>;


  constructor(private store: Store<{
    calculator: CalculatorState,
    articles: ArticlesState
  }>
  ) {
    this.currentNumber$ = this.store.select(
      state => state.calculator.currentNumber);
    this.articles$ = this.store.select((state) => state.articles.list);
  }

  enterNumber(number: string) {
    this.store.dispatch(CalculatorActions.enterNumber({ number: number }));

  }
  enterOperator(operator: string) {
    this.store.dispatch(CalculatorActions.enterOperator({ operator: operator }));

  }

  loadArticles() {
    this.store.dispatch(
      ArticlesActions.getPaginate({
        page: 1,
        perPage: 10
      }));

  }
}