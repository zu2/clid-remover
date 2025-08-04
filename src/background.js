chrome.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
	const q=[
			'(g|i|fb|n_)clid',
			'(utm|stm)_[a-z]+',
			'bdad',
			'bdactcd',
			'bdl',
			'bdmlc',
			'bdmlrec',
			'bflink_id',
			'btag',
			'campaign_id',
			'CMP',
			'courrier_mail_session_id',
			'cue',
			'cx_artPos',
			'cx_testId',
			'cx_testVariant',
			'deep_link',
			'dicbo',
			'emc',
			'fm',
			'igshid',
			'instance_id',
			'internal',
			'iref',
			'isFreemail',
			'i_cid',
			'i_cidinternal',
			'mc_(cid|eid)',
			'mkt_tok',
			'mc_[ce]id',
			'n_cid',
			'n_tw',
			'otc',
			'oly_(anon|enc)_id',
			'rb_clickid',
			'rct',
			'ref',
			'rt',
			'soc_(src|trk)',
			'sub_rt',
			'ST',
			'td',
			'triedRedirect',
			'twico',
			'twinews',
			'wickedid',
			'xadid',
			'yclid',
			'_gl',
			'_hs(enc|mi)',
			'_openstat',
			'__scale',
			'_sh'
			];
	const s= '(' + q.join('\|') + ')=(.*?&|.*)';
	console.log(q);
	console.log(s);
    if (!tab.url.match(new RegExp('https://www\.amazon\.co\.jp/'))){
		if (tab.url.match(new RegExp('[\?\&#]'+s, 'g'))){
			chrome.tabs.update(tab.id,
				{ url: tab.url.replace(new RegExp(s, 'g'), '').replace(new RegExp('[\?\&#]$','g'),'') });
		}
	}
	if (tab.url.match(new RegExp('https://www.technologyreview.jp/'))) {
		if (tab.url.match(new RegExp('/mail\.html$'))) {
			chrome.tabs.update(tab.id,
				{ url: tab.url.replace(new RegExp('/mail\.html$', 'g'), '') });
		}
	}
});
