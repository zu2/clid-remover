chrome.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
	const q=[
			'(g|i|fb|n_)clid',
			'(utm|stm)_[a-z]+',
			'bdad',
			'bdactcd',
			'bdl',
			'bdmlc',
			'btag',
			'CMP',
			'cx_artPos',
			'cx_testId',
			'cx_testVariant',
			'dicbo',
			'fm',
			'igshid',
			'internal',
			'i_cid',
			'i_cidinternal',
			'mc_(cid|eid)',
			'mkt_tok',
			'_hs(enc|mi)',
			'mc_[ce]id',
			'n_cid',
			'otc',
			'oly_(anon|enc)_id',
			'rb_clickid',
			'rct',
			'soc_(src|trk)',
			'ST',
			'td',
			'wickedid',
			'xadid',
			'yclid',
			'_openstat',
			'__scale',
			'_sh'
			];
	const s= '(' + q.join('\|') + ')=(.*?&|.*)';
	console.log(q);
	console.log(s);
    if (tab.url.match(new RegExp('[?&#]'+s, 'g'))){
        chrome.tabs.update(tab.id,
            { url: tab.url.replace(new RegExp(s, 'g'), '') });
        if (tab.url.match(new RegExp('[?&#]$','g'))){
            chrome.tabs.update(tab.id,
                { url: tab.url.replace(new RegExp('[\?\&#]$','g'),'') });
	    }
	}
});
