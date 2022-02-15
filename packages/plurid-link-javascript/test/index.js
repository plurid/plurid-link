process.env.PLURID_LINK_API_ENDPOINT = 'http://localhost:33300/graphql';

const PluridLink = require('../distribution').default;



const token = '__TEST__';

const main = async () => {
    const pluridLink = new PluridLink(token);

    const response = await pluridLink.new({
        type: 'service',
        service: 'skype',
        action: 'chat',
    });
    if (!response.status) {
        return;
    }
    const link = response.data;

    await pluridLink.remove(link);
}

main();
