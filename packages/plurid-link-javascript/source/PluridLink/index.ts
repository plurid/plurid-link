// #region imports
    // #region external
    import {
        NewOptions,
        NewHTTPLinkOptions,
        NewServiceLinkOptions,
        LinkType,
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


    /**
     * Generate a new `http` or `service` link.
     *
     * @param options
     * @returns
     */
    public async new(target: string): Promise<Response>;
    public async new(httpOptions: NewHTTPLinkOptions): Promise<Response>;
    public async new(serviceOptions: NewServiceLinkOptions): Promise<Response>;
    public async new(
        options: string | NewOptions,
    ): Promise<Response> {
        try {
            const type: LinkType = typeof options === 'string'
                ? 'http'
                : typeof (options as NewHTTPLinkOptions).target === 'string'
                    ? 'http'
                    : 'service';

            let resolvedOptions: NewOptions | {} = {};
            switch (type) {
                case 'http': {
                    const target = typeof options === 'string'
                        ? options
                        : (options as NewHTTPLinkOptions).target;
                    const restOptions = typeof options === 'string' ? {} : options;
                    resolvedOptions = {
                        ...restOptions,
                        type,
                        target,
                    };
                    break;
                }
                case 'service': {
                    resolvedOptions = {
                        ...options as NewServiceLinkOptions,
                        type: 'service',
                    };
                    break;
                }
            }


            const input = {
                value: JSON.stringify({
                    ...resolvedOptions,
                }),
            };

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

    /**
     * Remove a plurid.link by `id` or `path`.
     *
     * @param value
     * @returns
     */
    public async remove(
        value: string,
    ) {
        try {
            const input = {
                value,
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
                data: response.data,
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
