'use strict'

chrome.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
	const s='(gclid|fbclid|fm|n_cid|utm_[a-z]+)=(.*?&|.*)';
    if (tab.url.match(new RegExp('[?&#]'+s, 'g')))
        chrome.tabs.update(tab.id,
            { url: tab.url.replace(new RegExp(s, 'g'), '')
						  .replace(new RegExp('[\?\&]$','g'),'') })
})
