(function() {
    'use strict';
    var wmApp = angular.module('wmApp');
    angular.module('wmApp').service('utilService', function() {
        this.formatFormData = (details) => {
            var formBody = [];
            for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            return formBody;
        };

        // extract specific language from NRC string
        // 0 = english, 1 = zawgyi, 2 = unicode
        this.extractLanguage = (string, lang) => {
            var langArray = string.split('-');
            return langArray[lang];
        };

    });
})();