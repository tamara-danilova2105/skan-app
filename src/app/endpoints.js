const baseUrl = 'https://gateway.scan-interfax.ru/api/v1';

const formatRequest = (group, request, adress = baseUrl) => {
    return `${adress}/${group}/${request}`;
};

const formatAccount = request => formatRequest('account', request);
const formatDocuments = request => formatRequest('documents', request);
const formatObjectsearch = request => formatRequest('objectsearch', request);

export const requests = {
    account: {
        post: {
            login: formatAccount('login'),
        },
        get: {
            info: formatAccount('info'),
        },
    },
    documents: {
        post: {
            documents: formatDocuments(''),
        },
    },
    objectsearch: {
        post: {
            objectsearch: formatObjectsearch(''),
            histograms: formatObjectsearch('histograms'),
        },
    },
};
