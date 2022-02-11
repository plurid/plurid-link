// #region imports
    // #region external
    import {
        NewOptions,
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
        options: NewOptions,
    ): Promise<Response> {
        try {
            const input = {
                ...options,
            };

            const request = await this.api.mutate({
                mutation: NEW_LINK,
                variables: {
                    input,
                },
            });

            const response = request.data.pluridLinkNewLink;
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

            const response = request.data.pluridLinkNewLink;
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
