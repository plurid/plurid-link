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



export type NewOptions =
    | NewHTTPLinkOptions
    | NewServiceLinkOptions;

export interface NewHTTPLinkOptions {
    type?: 'http';
    target: string;
    value?: string;
    namespace?: string;
    expiration?: '24_HOURS' | '30_DAYS';
}

export interface NewServiceLinkOptions {
    type: 'service';
    service: string;
    action: string;
    data?: Record<string, any>;
}
// #endregion module
