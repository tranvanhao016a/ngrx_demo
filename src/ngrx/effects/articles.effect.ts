import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ArtclesActions from "../actions/articles.action";
import { catchError, map, of, switchMap } from "rxjs";
import { Article } from "src/states/articles.state";

@Injectable()
export class ArticlesEffects {
    constructor(private actions$: Actions, private http: HttpClient) { }

    getArticles$ = createEffect(() => this.actions$.pipe(
        ofType(ArtclesActions.getPaginate),
        switchMap((action) => {
            console.log(action);
            return this.http.get(
                `https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.perPage}`
            );
        }),
        map((response) => {
            return ArtclesActions.getPaginateSuccess({
                list: <Array<Article>><unknown>response,

            });
        }),

        catchError((error) => {
            return of(ArtclesActions.getPaginateFailure({ error: error.message }));
        }
        )
    ));
}

