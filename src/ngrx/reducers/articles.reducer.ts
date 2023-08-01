import { createReducer, on } from "@ngrx/store";
import { ArticlesState } from "src/states/articles.state";
import * as ArticlesActions from '../actions/articles.action';
const initailState: ArticlesState = {
    list: [],
    error: '',
    isSuccess: true,
    isLoading: false,
};

export const articlesReducer = createReducer(initailState,
    on(ArticlesActions.getPaginate, (state) => {
        console.log(state);
        return ({
            ...state,
            isLoading: true,
        })
    }),
    on(ArticlesActions.getPaginateSuccess, (state, action) => ({
        ...state,
        list: action.list,
        isLoading: false,
        error: '',
        isSuccess: true,
    })),

    on(ArticlesActions.getPaginateFailure, (state, action) => ({
        ...state,
        list: [],
        error: action.error,
        isLoading: false,
        isSuccess: false,
    })),
)