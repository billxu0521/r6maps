'use strict';

$( document ).ready(function() {
  var langMessages = [],
    lastChosenLanguage = localStorage.getItem('language'),
    userLang = (navigator.language || navigator.userLanguage).split('-')[0];

  //langMessages.en = 'Sorry, this page is only available in English.';
  langMessages.zh_cn = '很抱歉，此网页仅提供英文版。';
  langMessages.zh_cn = '很抱歉，此網頁只提供英文版。';

  if (langMessages[lastChosenLanguage]) {
    showLangMessage(langMessages[lastChosenLanguage]);
  } else if (langMessages[userLang]) {
    showLangMessage(langMessages[userLang]);
  }
});

var showLangMessage = function showLangMessage(msg) {
  var $msgDisplay = $('#lang-message');

  $msgDisplay.text(msg);
  $msgDisplay.show();
};
