
export interface Article {
    id: number;
    title: string;
    descsription: string;
}


export interface ArticlesState {
    list: Article[];
    error: string;
    isSuccess: boolean;
    isLoading: boolean;

}