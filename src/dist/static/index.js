'use strict';

allure.api.addTranslation('en', {
    tab: {
        owners: {
            name: 'Owners'
        }
    },
    widget: {
        owners: {
            name: 'Failed or Broken tests by Owners',
            showAll: 'show all'
        }
    }
});

allure.api.addTab('owners', {
    title: 'tab.owners.name', icon: 'fa fa-list',
    route: 'owners(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'tab.owners.name',
            baseUrl: 'owners',
            url: 'data/owners.json'
        });
    })
});

allure.api.addWidget('widgets', 'behaviors', allure.components.WidgetStatusView.extend({
    rowTag: 'a',
    title: 'widget.owners.name',
    baseUrl: 'owners',
    showLinks: true
}));