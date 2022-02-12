// #region imports
    // #region external
    import PluridLink from '../index';
    // #endregion external
// #endregion imports



// #region module
describe('Analysis:', () => {
    it(`doesn't look like anything to me.`, () => {
        const pluridLink = new PluridLink('token');

        pluridLink.new('https://link');

        pluridLink.new({
            target: 'https://link',
        });

        pluridLink.new({
            type: 'service',
            service: 'someApp',
            action: 'someAction',
            data: {
                some: 'data',
            },
        });
    });
});
// #endregion module
