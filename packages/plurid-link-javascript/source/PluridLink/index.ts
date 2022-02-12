// #region imports
    // #region external
    import {
        NewOptions,
        NewHTTPLinkOptions,
        NewServiceLinkOptions,
        Response,
    } from '~data/interfaces';

    import {
        pluridLinkAPI,
    } from '~data/constants';

    import {
        client,
        NEW_LINK,
        REMOVE_LINK,
    } from '~services/graphql';
    // #endregion external
// #endregion imports



// #region module
class PluridLink {
    private api;


    constructor(
        token: string,
    ) {
        this.api = client(
            pluridLinkAPI,
            token,
        );
    }


    public async new(
        options: string | NewOptions,
    ): Promise<Response> {
        try {
            const type = typeof options === 'string'
                ? 'http'
                : options.type || 'http';

            let resolvedOptions: NewOptions | {} = {};
            switch (type) {
                case 'http': {
                    const target = typeof options === 'string'
                        ? options
                        : (options as NewHTTPLinkOptions).target;
                    const restOptions = typeof options === 'string' ? {} : options;
                    resolvedOptions = {
                        type,
                        target,
                        ...restOptions,
                    };
                    break;
                }
                case 'service': {
                    resolvedOptions = {
                        ...options as NewServiceLinkOptions,
                    };
                    break;
                }
            }


            const input = JSON.stringify({
                ...resolvedOptions,
            });

            const request = await this.api.mutate({
                mutation: NEW_LINK,
                variables: {
                    input,
                },
            });

            const response = request.data.pluridLinkClientNewLink;
            if (!response.status) {
                return {
                    status: false,
                };
            }

            return {
                status: true,
                data: response.data,
            };
        } catch (error) {
            return {
                status: false,
            };
        }
    }


    public async remove(
        id: string,
    ) {
        try {
            const input = {
                id,
            };

            const request = await this.api.mutate({
                mutation: REMOVE_LINK,
                variables: {
                    input,
                },
            });

            const response = request.data.pluridLinkClientRemoveLink;
            if (!response.status) {
                return {
                    status: false,
                };
            }

            return {
                status: true,
                data: id,
            };
        } catch (error) {
            return {
                status: false,
            };
        }
    }
}
// #endregion module



// #region exports
export default PluridLink;
// #endregion exports
