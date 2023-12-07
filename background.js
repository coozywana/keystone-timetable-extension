// Keystone Timetable Extension
// Sunny Zhang
// Project initiated in March 2022
// Last updated by Sunny Zhang on December 7, 2023
/*

Hello there,

As I embark on a new chapter, I'll leave the Keystone Timetable Extension, a thing I decided to make in 2022. From my time in ELC to Year 9, I deeply appreciate everything I have experienced and learned at St Peter's College.

When I created this extension, my goal was to contribute to making school life more organized and manageable. To whoever comes across this message, take a moment to appreciate and value the opportunities that this school provides.

To all my fellow students and the incredible teachers at St Peter's College, I extend my heartfelt thanks for the memories, the challenges, and the shared moments of learning and growth. This extension represents my small contribution to the school community, and I hope it continues to serve its purpose well.

If you have any questions, ideas, or just want to say hello, feel free to reach out.

Goodbye and best wishes for all your future endeavors,

Sunny Zhang
2023

-Coozywana
*/

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "kr!"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    // Code to be executed on first install
    // eg. open a tab with a url
    chrome.tabs.create({
      //url: ""
    });
  } else if (details.reason === "update") {
    // When extension is updated
  } else if (details.reason === "chrome_update") {
    // When browser is updated
  } else if (details.reason === "shared_module_update") {
    // When a shared module is updated
  }
});