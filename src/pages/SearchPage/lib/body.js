export const body = {
    "issueDateInterval": {
        "startDate": "2019-01-01T00:00:00+03:00", //add
        "endDate": "2022-08-31T23:59:59+03:00" //add
    },
    "searchContext": {
        "targetSearchEntitiesContext": {
            "targetSearchEntities": [
                {
                    "type": "company",
                    "sparkId": null,
                    "entityId": null,
                    "inn": 7710137066, //add
                    "maxFullness": true,
                    "inBusinessNews": null
                }
            ],
            "onlyMainRole": true, //Главная роль в публикации
            "tonality": "any", //add
            "onlyWithRiskFactors": false, //Публикации только с риск-факторами
            "riskFactors": {
                "and": [],
                "or": [],
                "not": []
            },
            "themes": {
                "and": [],
                "or": [],
                "not": []
            }
        },
        "themesFilter": {
            "and": [],
            "or": [],
            "not": []
        }
    },
    "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": []
    },
    "attributeFilters": {
        "excludeTechNews": true, //Включать технические новости рынков
        "excludeAnnouncements": true, //Включать анонсы и календари
        "excludeDigests": true //Включать сводки новостей
    },
    "similarMode": "duplicates",
    "limit": 1000, //add
    "sortType": "sourceInfluence",
    "sortDirectionType": "desc",
    "intervalType": "month",
    "histogramTypes": [
        "totalDocuments",
        "riskFactors"
    ]
}