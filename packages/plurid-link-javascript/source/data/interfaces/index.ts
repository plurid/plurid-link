// #region module
export type Response =
    | ResponsError
    | ResponseSuccess;

export interface ResponsError {
    status: false;
    error?: string;
};

export interface ResponseSuccess {
    status: true;
    data: string;
};


export interface NewOptions {

}
// #endregion module
