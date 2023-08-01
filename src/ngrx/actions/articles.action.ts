import { createAction, props } from "@ngrx/store";
import { Article } from "src/states/articles.state";

export const getPaginate = createAction(
    '[Articles] Get Paginate',
    props<{ page: number, perPage: number }>()
);

export const getPaginateSuccess = createAction(
    '[Articles] Get Paginate Success',
    props<{ list: Article[] }>()
);

export const getPaginateFailure = createAction(
    '[Articles] Get Paginate Failure',
    props<{ error: string }>()
);
