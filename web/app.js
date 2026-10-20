(() => {
  const KEY = 'autotune-workbench-v1';
  const platforms = ['X','Facebook','Instagram','Discord','小红书','抖音'];
  const nav = [
    ['overview','◫','工作总览'],['calendar','▦','内容日历'],['assets','◇','素材资产库'],
    ['copy','✎','双语文案'],['archive','▤','发布归档'],['feedback','◎','社区反馈'],
    ['rewards','♧','活动奖励'],['reports','▥','数据复盘']
  ];
  const initial = {
    posts:[
      {id:1,title:'「星轨回响」版本前瞻预告',campaign:'星轨回响 · 2.4',platform:'X',date:'2026-10-20',time:'18:00',status:'待发布',owner:'林',lang:'EN',copy:'A new journey begins. Discover what awaits in Version 2.4! #StarEcho',asset:'版本主视觉',url:''},
      {id:2,title:'角色「黎音」立绘首曝',campaign:'新角色预热',platform:'小红书',date:'2026-10-21',time:'12:00',status:'待审核',owner:'周',lang:'ZH',copy:'新的旅伴即将登场！你从她身上发现了哪些线索？',asset:'黎音立绘',url:''},
      {id:3,title:'开发者笔记 Vol. 07',campaign:'星轨回响 · 2.4',platform:'Discord',date:'2026-10-22',time:'20:00',status:'待发布',owner:'林',lang:'EN',copy:'Developer Notes Vol. 07 is here. Join the discussion!',asset:'开发者笔记长图',url:''},
      {id:4,title:'版本 PV 精彩片段',campaign:'星轨回响 · 2.4',platform:'抖音',date:'2026-10-23',time:'19:30',status:'制作中',owner:'陈',lang:'ZH',copy:'下一站，未知的星域。',asset:'PV 竖版切片',url:''},
      {id:5,title:'社区创作征集开启',campaign:'同人创作季',platform:'Instagram',date:'2026-10-24',time:'16:00',status:'待发布',owner:'周',lang:'EN',copy:'Show us your creativity! Join the community art event.',asset:'活动 KV',url:''},
      {id:6,title:'角色主题壁纸分享',campaign:'新角色预热',platform:'Facebook',date:'2026-10-25',time:'15:00',status:'待审核',owner:'陈',lang:'EN',copy:'A little gift for your screens.',asset:'壁纸套组',url:''}
    ],
    assets:[
      {id:1,name:'2.4 版本主视觉',type:'图片',campaign:'星轨回响 · 2.4',character:'群像',lang:'多语言',region:'全球',status:'可使用',symbol:'2.4',colors:['#294e62','#65b6a9']},
      {id:2,name:'黎音角色立绘',type:'图片',campaign:'新角色预热',character:'黎音',lang:'无文字',region:'全球',status:'审核中',symbol:'黎',colors:['#85677d','#d1a9ab']},
      {id:3,name:'版本 PV 竖版切片',type:'视频',campaign:'星轨回响 · 2.4',character:'群像',lang:'中文',region:'中国',status:'可使用',symbol:'▶',colors:['#414d76','#909cca']},
      {id:4,name:'社区创作季活动 KV',type:'图片',campaign:'同人创作季',character:'通用',lang:'英文',region:'海外',status:'可使用',symbol:'✦',colors:['#926e52','#dfb784']},
      {id:5,name:'开发者笔记长图',type:'图片',campaign:'星轨回响 · 2.4',character:'通用',lang:'英文',region:'海外',status:'制作中',symbol:'07',colors:['#315955','#8cb5a4']},
      {id:6,name:'角色主题壁纸套组',type:'图片',campaign:'新角色预热',character:'黎音',lang:'无文字',region:'全球',status:'可使用',symbol:'✧',colors:['#5e637e','#b4bed1']}
    ],
    archives:[
      {id:1,title:'版本直播预告',platform:'X',planned:'2026-10-17 18:00',actual:'2026-10-17 18:04',url:'https://x.com/example/status/001',likes:1420,comments:186,shares:308,views:48200,issue:'无',campaign:'星轨回响 · 2.4'},
      {id:2,title:'角色剪影猜想',platform:'小红书',planned:'2026-10-18 12:00',actual:'2026-10-18 12:03',url:'https://www.xiaohongshu.com/',likes:2860,comments:412,shares:157,views:67400,issue:'无',campaign:'新角色预热'},
      {id:3,title:'社群 FAQ 更新',platform:'Discord',planned:'2026-10-19 20:00',actual:'2026-10-19 20:31',url:'https://discord.com/',likes:264,comments:98,shares:33,views:5600,issue:'延迟 31 分钟',campaign:'星轨回响 · 2.4'}
    ],
    feedback:[
      {id:1,source:'Discord',user:'OrbitWalker',text:'新活动奖励邮件还没有收到，账号 UID 已提交两天。',type:'奖励发放',sentiment:'负面',campaign:'星轨回响 · 2.4',priority:'紧急',status:'待回复',owner:'林'},
      {id:2,source:'X',user:'@nebula_arc',text:'The new character design looks incredible! Any wallpaper release planned?',type:'内容需求',sentiment:'正面',campaign:'新角色预热',priority:'普通',status:'待回复',owner:'周'},
      {id:3,source:'小红书',user:'一颗小行星',text:'版本 PV 里的中文术语和游戏内翻译好像不一致。',type:'本地化',sentiment:'中性',campaign:'星轨回响 · 2.4',priority:'较高',status:'处理中',owner:'陈'},
      {id:4,source:'Instagram',user:'lunar.day',text:'Is this event available for players in Europe?',type:'活动规则',sentiment:'中性',campaign:'同人创作季',priority:'较高',status:'待回复',owner:'周'}
    ],
    rewards:[
      {id:1,event:'同人创作季 · 一等奖',user:'OrbitWalker',uid:'100028731',prize:'实体周边礼包',info:'已核对',delivery:'待发放',publicity:'待公示'},
      {id:2,event:'直播互动抽奖',user:'一颗小行星',uid:'100084205',prize:'游戏礼包码',info:'已核对',delivery:'已发放',publicity:'已公示'},
      {id:3,event:'社区签到挑战',user:'lunar.day',uid:'100017954',prize:'限定头像框',info:'待核对',delivery:'待发放',publicity:'待公示'}
    ],
    drafts:[]
  };
  let data;
  try { data = JSON.parse(localStorage.getItem(KEY)) || structuredClone(initial); } catch { data = structuredClone(initial); }
  let page = 'overview', query = '', filter = '全部';
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const save = () => localStorage.setItem(KEY, JSON.stringify(data));
  const dateFmt = s => s ? s.slice(5).replace('-','/') : '—';
  const tag = (s) => { const color = /待发布|可使用|已发放|已公示|正面|已回复|已核对/.test(s)?'green':/紧急|负面|延迟/.test(s)?'red':/审核|待核对|处理中|较高/.test(s)?'amber':/制作|待发放|待回复|待公示/.test(s)?'blue':'purple'; return '<span class="chip '+color+'">'+esc(s)+'</span>'; };
  const platformColor = p => ({X:'#222e37',Facebook:'#4b84c6',Instagram:'#bd78a8',Discord:'#7487cf',小红书:'#e2797d',抖音:'#41556c'})[p] || '#14ad96';
  const toast = msg => { const el=$('#toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2600); };
  const title = (eyebrow,h,sub,actions='') => '<div class="page-heading"><div><p class="eyebrow">'+eyebrow+'</p><h1>'+h+'</h1><p class="sub">'+sub+'</p></div><div class="heading-actions">'+actions+'</div></div>';
  const btn = (label,action,primary=false) => '<button class="btn '+(primary?'primary':'')+'" data-action="'+action+'">'+label+'</button>';
  const cardHead = (name,sub='',action='',label='查看全部 →') => '<div class="panel-head"><div><h2>'+name+'</h2>'+(sub?'<p>'+sub+'</p>':'')+'</div>'+(action?'<button class="panel-link" data-action="'+action+'">'+label+'</button>':'')+'</div>';
  function renderNav(){ $('#nav').innerHTML=nav.map(n=>'<button class="nav-item '+(page===n[0]?'active':'')+'" data-page="'+n[0]+'"><span class="nav-icon">'+n[1]+'</span>'+n[2]+(n[0]==='feedback'?'<span class="nav-count">'+data.feedback.filter(x=>x.status==='待回复').length+'</span>':'')+'</button>').join(''); $('#breadcrumbCurrent').textContent=nav.find(x=>x[0]===page)[2]; }
  function stat(label,value,foot,accent,soft,icon){return '<div class="stat-card" style="--accent:'+accent+';--accent-bg:'+soft+'"><div class="stat-top"><span class="stat-label">'+label+'</span><span class="stat-icon">'+icon+'</span></div><div class="stat-value">'+value+'</div><div class="stat-foot"><strong>'+foot[0]+'</strong>'+foot[1]+'</div></div>';}
  function overview(){
    const upcoming=data.posts.filter(x=>x.status!=='已发布').length, pending=data.feedback.filter(x=>x.status==='待回复').length;
    const rewardPending=data.rewards.filter(x=>x.delivery!=='已发放').length;
    const days=['周二','周三','周四','周五','周六','周日','周一'];
    const week=days.map((name,i)=>{const d=new Date(Date.UTC(2026,9,20+i)); const key=d.toISOString().slice(0,10);return '<div class="day-col '+(i===0?'today-col':'')+'"><div class="day-head"><small>'+name+'</small><strong>'+d.getUTCDate()+'</strong></div>'+data.posts.filter(x=>x.date===key).map(x=>'<div class="cal-item" data-open-post="'+x.id+'" style="--tag:'+platformColor(x.platform)+'"><small>'+esc(x.platform)+' · '+esc(x.time)+'</small><strong>'+esc(x.title)+'</strong><em>'+esc(x.status)+'</em></div>').join('')+'</div>';}).join('');
    const queue=[
      ...data.feedback.filter(x=>x.status==='待回复').slice(0,2).map(x=>({icon:'◎',tone:'#e46c6c',soft:'#fff1f0',title:x.type+' · '+x.user,meta:x.source+' · '+x.text,priority:x.priority})),
      ...data.posts.filter(x=>x.status==='待审核').slice(0,1).map(x=>({icon:'✎',tone:'#d99a45',soft:'#fff5e8',title:'文案待审核 · '+x.title,meta:x.platform+' · '+x.date,priority:'较高'})),
      ...data.rewards.filter(x=>x.delivery!=='已发放').slice(0,1).map(x=>({icon:'♧',tone:'#5790c6',soft:'#edf5fc',title:'奖励待发放 · '+x.user,meta:x.event+' · '+x.prize,priority:'普通'}))
    ];
    return title('OPERATIONS / OVERVIEW','今天的运营工作，一目了然','从内容准备到社区回应，掌握每一个待办节点。',btn('＋ 新建内容','new-post',true))+
    '<div class="stats-grid">'+
      stat('本周排期',upcoming,['6 平台','内容统一编排'],'#10ae95','#e9f8f3','▦')+
      stat('待回复反馈',pending,['需跟进','评论与社群反馈'],'#e77979','#fff0f0','◎')+
      stat('已归档发布',data.archives.length,['本周','发布记录已留档'],'#5796ce','#edf6fd','▤')+
      stat('奖励待发放',rewardPending,['需核对','用户与奖品状态'],'#e6a34d','#fff5e9','♧')+
    '</div><div class="dashboard-grid"><div><div class="panel calendar-panel">'+cardHead('本周内容日历','10 月 20 日 — 10 月 26 日','calendar','打开日历 →')+'<div class="weekbar"><strong>跨平台发布计划</strong><span>点击卡片查看内容详情</span></div><div class="week-grid">'+week+'</div></div><div class="section-spacer"></div><div class="panel">'+cardHead('最近发布记录','实际发布时间、链接与互动数据','archive')+archiveTable(data.archives.slice(0,3),true)+'</div></div><div class="right-stack"><div class="panel">'+cardHead('需要你处理','按紧急程度汇总的运营任务','feedback','进入反馈中心 →')+'<div class="queue-list">'+queue.map(x=>'<div class="queue-row"><span class="queue-icon" style="--tone:'+x.tone+';--soft:'+x.soft+'">'+x.icon+'</span><div><strong>'+esc(x.title)+'</strong><small>'+esc(x.meta).slice(0,42)+'</small></div><span class="priority '+(x.priority==='紧急'?'':'mid')+'">'+x.priority+'</span></div>').join('')+'</div></div><div class="panel">'+cardHead('平台覆盖','当前工作台支持的运营渠道')+'<div class="platform-strip">'+platforms.map(p=>'<span class="platform-pill">'+p+'<b>●</b></span>').join('')+'</div><div class="report-note">平台差异化文案、排期与发布链接统一留档，方便日报与周报复盘。</div></div></div></div>';
  }
  function calendar(){
    const rows=data.posts.filter(x=>(filter==='全部'||x.platform===filter)&&(!query||(x.title+x.campaign+x.copy).toLowerCase().includes(query.toLowerCase()))).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
    return title('CONTENT / SCHEDULE','内容日历','管理选题、文案版本、素材、平台要求与发布时间。',btn('＋ 新建内容','new-post',true))+
      '<div class="toolbar"><div class="filters"><input class="filter-input" id="search" placeholder="搜索选题或活动…" value="'+esc(query)+'"><select class="filter-select" id="filter"><option>全部</option>'+platforms.map(p=>'<option '+(filter===p?'selected':'')+'>'+p+'</option>').join('')+'</select></div>'+btn('生成待发布清单','export-queue')+'</div>'+
      '<div class="panel">'+cardHead('发布计划','按计划时间排序 · 共 '+rows.length+' 条')+'<div class="table-wrap"><table class="data-table"><thead><tr><th>内容 / 活动</th><th>平台</th><th>计划发布时间</th><th>素材</th><th>负责人</th><th>状态</th><th></th></tr></thead><tbody>'+rows.map(x=>'<tr><td><div class="cell-title">'+esc(x.title)+'</div><div class="cell-sub">'+esc(x.campaign)+' · '+esc(x.lang)+'</div></td><td><span style="color:'+platformColor(x.platform)+'">●</span> '+esc(x.platform)+'</td><td>'+esc(x.date+' '+x.time)+'</td><td>'+esc(x.asset||'—')+'</td><td><span class="avatar-stack"><span class="mini-avatar">'+esc(x.owner||'—')+'</span></span></td><td>'+tag(x.status)+'</td><td><button class="btn small" data-open-post="'+x.id+'">查看</button></td></tr>').join('')+'</tbody></table>'+(rows.length?'':'<div class="empty">没有匹配的内容。试试其他关键词或平台。</div>')+'</div></div>';
  }
  function assets(){
    const rows=data.assets.filter(x=>(filter==='全部'||x.type===filter)&&(!query||(x.name+x.campaign+x.character+x.lang+x.region).toLowerCase().includes(query.toLowerCase())));
    return title('LIBRARY / ASSETS','素材资产库','按版本、活动、角色、语言、地区与使用状态快速定位素材。',btn('＋ 新增素材','new-asset',true))+
    '<div class="filters"><input class="filter-input" id="search" placeholder="搜索名称、角色、地区…" value="'+esc(query)+'"><select class="filter-select" id="filter"><option>全部</option><option '+(filter==='图片'?'selected':'')+'>图片</option><option '+(filter==='视频'?'selected':'')+'>视频</option><option '+(filter==='文案'?'selected':'')+'>文案</option></select></div>'+
    '<div class="card-grid">'+rows.map(x=>'<article class="asset-card"><div class="asset-art" style="--c1:'+x.colors[0]+';--c2:'+x.colors[1]+'"><span>'+esc(x.symbol)+'</span><b class="asset-kind">'+esc(x.type)+'</b></div><div class="asset-body"><h3>'+esc(x.name)+'</h3><p>'+esc(x.campaign)+' · '+esc(x.character)+'<br>'+esc(x.lang)+' / '+esc(x.region)+'</p><div class="asset-meta">'+tag(x.status)+'<button class="btn small" data-open-asset="'+x.id+'">查看详情</button></div></div></article>').join('')+'</div>'+(rows.length?'':'<div class="panel empty">没有匹配的素材。</div>')+
    '<p class="timeline-note">此原型记录素材元数据和参考链接；实际文件上传需要接入存储服务。</p>';
  }
  function copy(){
    const saved=data.drafts.slice().reverse();
    return title('COPY / LOCALIZATION','双语文案工作台','保留原文、译文和修改记录，检查术语与平台格式。',btn('＋ 新建文案','new-draft',true))+
      '<div class="editor-grid"><div class="panel editor-card"><h3>快速改写与检查</h3><div class="form-row"><div class="field"><label>目标平台</label><select id="copyPlatform">'+platforms.map(p=>'<option>'+p+'</option>').join('')+'</select></div><div class="field"><label>目标语言</label><select id="copyLang"><option>英文</option><option>中文</option></select></div></div><div class="field"><label>原文 / 草稿</label><textarea id="copySource" placeholder="输入需要检查或适配的文案…"></textarea></div><div class="heading-actions"><button class="btn primary" data-action="check-copy">检查文案</button><button class="btn" data-action="save-draft">保存版本</button></div><p class="hint">术语与格式检查在浏览器内运行。AI 改写需在后续接入模型服务。</p></div><div class="panel editor-card"><h3>平台适配建议</h3><div class="soft-box" id="copyResult">选择目标平台并输入文案后，点击“检查文案”查看长度、标签、链接与术语提示。</div><ul class="lint-list"><li>统一保留原文与改写版本，便于审校回溯</li><li>检查“星轨回响 / Star Echo”等项目术语</li><li>根据平台提示调整字数、话题标签与链接形式</li></ul></div></div>'+
      '<div class="section-spacer"></div><div class="panel">'+cardHead('文案版本记录','保存后的草稿会保留在此浏览器')+'<div class="table-wrap"><table class="data-table"><thead><tr><th>版本</th><th>平台</th><th>语言</th><th>内容摘要</th><th>保存时间</th><th></th></tr></thead><tbody>'+saved.map(x=>'<tr><td class="cell-title">v'+x.id+'</td><td>'+esc(x.platform)+'</td><td>'+esc(x.lang)+'</td><td class="issue-text">'+esc(x.text.slice(0,90))+'</td><td>'+esc(x.savedAt)+'</td><td><button class="btn small" data-load-draft="'+x.id+'">加载</button></td></tr>').join('')+'</tbody></table>'+(saved.length?'':'<div class="empty">还没有保存的文案版本。</div>')+'</div></div>';
  }
  function archiveTable(rows,compact=false){return '<div class="table-wrap"><table class="data-table"><thead><tr><th>发布内容</th><th>平台</th><th>实际发布时间</th><th>互动</th><th>异常</th>'+(!compact?'<th>链接</th>':'')+'</tr></thead><tbody>'+rows.map(x=>'<tr><td><div class="cell-title">'+esc(x.title)+'</div><div class="cell-sub">'+esc(x.campaign)+'</div></td><td>'+esc(x.platform)+'</td><td>'+esc(x.actual)+'</td><td>♥ '+x.likes.toLocaleString()+'　◌ '+x.comments.toLocaleString()+'</td><td>'+tag(x.issue)+'</td>'+(!compact?'<td><a class="linkish" href="'+esc(x.url)+'" target="_blank" rel="noopener">打开链接 ↗</a></td>':'')+'</tr>').join('')+'</tbody></table>'+(rows.length?'':'<div class="empty">还没有发布记录。</div>')+'</div>';}
  function archive(){
    const rows=data.archives.filter(x=>(filter==='全部'||x.platform===filter)&&(!query||(x.title+x.campaign).toLowerCase().includes(query.toLowerCase())));
    const total=data.archives.reduce((a,x)=>a+x.likes+x.comments+x.shares,0);
    return title('PUBLISH / ARCHIVE','发布归档','记录实际发布、链接、基础互动数据与异常情况。',btn('＋ 录入发布记录','new-archive',true))+
    '<div class="stats-grid">'+stat('发布记录',data.archives.length,['已留档','覆盖各平台'],'#10ae95','#e9f8f3','▤')+stat('总互动',total.toLocaleString(),['点赞 / 评论 / 分享','基础汇总'],'#5796ce','#edf6fd','◌')+stat('异常记录',data.archives.filter(x=>x.issue!=='无').length,['需复盘','延迟或内容问题'],'#e77979','#fff0f0','!')+stat('覆盖平台',new Set(data.archives.map(x=>x.platform)).size,['平台','已有发布记录'],'#e6a34d','#fff5e9','◇')+'</div>'+
    '<div class="toolbar"><div class="filters"><input class="filter-input" id="search" placeholder="搜索发布内容…" value="'+esc(query)+'"><select class="filter-select" id="filter"><option>全部</option>'+platforms.map(p=>'<option '+(filter===p?'selected':'')+'>'+p+'</option>').join('')+'</select></div>'+btn('导出日报 CSV','export-archive')+'</div><div class="panel">'+cardHead('发布明细','计划时间与实际时间可对照，方便定位异常')+archiveTable(rows)+'</div>';
  }
  function feedback(){
    const rows=data.feedback.filter(x=>(filter==='全部'||x.status===filter)&&(!query||(x.text+x.user+x.type+x.campaign).toLowerCase().includes(query.toLowerCase())));
    return title('COMMUNITY / FEEDBACK','社区反馈中心','归集评论、私信和社群声音，分类处理并生成舆情摘要。',btn('＋ 录入反馈','new-feedback',true))+
    '<div class="stats-grid">'+stat('待回复',data.feedback.filter(x=>x.status==='待回复').length,['需处理','优先关注紧急反馈'],'#e77979','#fff0f0','◎')+stat('处理中',data.feedback.filter(x=>x.status==='处理中').length,['跟进中','等待结论'],'#e6a34d','#fff5e9','↻')+stat('负面反馈',data.feedback.filter(x=>x.sentiment==='负面').length,['需关注','可能形成舆情'],'#bb7eb9','#f8eff8','!')+stat('反馈总量',data.feedback.length,['已归集','多个社区平台'],'#10ae95','#e9f8f3','▤')+'</div>'+
    '<div class="toolbar"><div class="filters"><input class="filter-input search-inline" id="search" placeholder="搜索用户、问题或活动…" value="'+esc(query)+'"><select class="filter-select" id="filter"><option>全部</option><option>待回复</option><option>处理中</option><option>已回复</option></select></div>'+btn('复制舆情摘要','copy-summary')+'</div>'+
    '<div class="panel">'+cardHead('反馈处理清单','按优先级与状态追踪')+'<div class="table-wrap"><table class="data-table"><thead><tr><th>来源 / 用户</th><th>反馈内容</th><th>分类</th><th>情绪</th><th>紧急度</th><th>状态</th><th>操作</th></tr></thead><tbody>'+rows.map(x=>'<tr><td><div class="cell-title">'+esc(x.user)+'</div><div class="cell-sub">'+esc(x.source)+' · '+esc(x.campaign)+'</div></td><td class="issue-text">'+esc(x.text)+'</td><td>'+tag(x.type)+'</td><td>'+tag(x.sentiment)+'</td><td>'+tag(x.priority)+'</td><td>'+tag(x.status)+'</td><td><button class="btn small" data-advance-feedback="'+x.id+'">'+(x.status==='待回复'?'标记处理中':x.status==='处理中'?'标记已回复':'已完成')+'</button></td></tr>').join('')+'</tbody></table>'+(rows.length?'':'<div class="empty">没有匹配的反馈。</div>')+'</div></div>';
  }
  function rewards(){
    const rows=data.rewards.filter(x=>!query||(x.event+x.user+x.uid+x.prize).toLowerCase().includes(query.toLowerCase()));
    return title('EVENT / REWARDS','活动奖励核对','逐项核对用户信息、奖品发放与公示，减少遗漏和重复。',btn('＋ 新增奖励项','new-reward',true))+
    '<div class="soft-box" style="margin-bottom:18px">发放前建议核对 UID 与获奖名单；完成发放后更新状态，并检查公示文案是否包含必要信息。相同活动与 UID 的重复记录会在新增时提示。</div>'+
    '<div class="filters"><input class="filter-input" id="search" placeholder="搜索活动、用户、UID 或奖品…" value="'+esc(query)+'"></div>'+
    '<div class="panel">'+cardHead('奖励发放与公示清单','共 '+rows.length+' 项')+'<div class="table-wrap"><table class="data-table"><thead><tr><th>活动 / 奖品</th><th>用户 / UID</th><th>信息核对</th><th>发放状态</th><th>公示状态</th><th>操作</th></tr></thead><tbody>'+rows.map(x=>'<tr><td><div class="cell-title">'+esc(x.event)+'</div><div class="cell-sub">'+esc(x.prize)+'</div></td><td>'+esc(x.user)+'<div class="cell-sub">'+esc(x.uid)+'</div></td><td>'+tag(x.info)+'</td><td>'+tag(x.delivery)+'</td><td>'+tag(x.publicity)+'</td><td><button class="btn small" data-open-reward="'+x.id+'">更新</button></td></tr>').join('')+'</tbody></table>'+(rows.length?'':'<div class="empty">没有匹配的奖励项。</div>')+'</div></div>';
  }
  function reports(){
    const byPlatform=platforms.map(p=>({name:p,count:data.archives.filter(x=>x.platform===p).length})), max=Math.max(...byPlatform.map(x=>x.count),1);
    const engagement=data.archives.reduce((a,x)=>a+x.likes+x.comments+x.shares,0), views=data.archives.reduce((a,x)=>a+x.views,0);
    const issueCount=data.feedback.reduce((a,x)=>(a[x.type]=(a[x.type]||0)+1,a),{});
    return title('INSIGHTS / REPORTS','数据复盘','把发布表现与社区反馈整理成可复用的运营结论。',btn('导出周报 CSV','export-weekly',true))+
    '<div class="stats-grid">'+stat('总浏览量',views.toLocaleString(),['已归档','基础曝光数据'],'#5796ce','#edf6fd','◉')+stat('总互动',engagement.toLocaleString(),['已归档','赞评转汇总'],'#10ae95','#e9f8f3','♡')+stat('平均互动率',views?(engagement/views*100).toFixed(1)+'%':'0%',['互动 ÷ 浏览','仅基于已归档记录'],'#e6a34d','#fff5e9','↗')+stat('反馈处理率',data.feedback.length?Math.round(data.feedback.filter(x=>x.status==='已回复').length/data.feedback.length*100)+'%':'0%',['已回复 ÷ 总反馈','处理进度'],'#bb7eb9','#f8eff8','◎')+'</div>'+
    '<div class="report-grid"><div class="panel">'+cardHead('各平台已归档发布量','依据归档记录实时汇总')+'<div class="bars">'+byPlatform.map(x=>'<div class="bar-col" style="--h:'+Math.max(5,x.count/max*80)+'%"><span class="bar-value">'+x.count+'</span><div class="bar"></div><span class="bar-label">'+x.name+'</span></div>').join('')+'</div></div><div class="panel">'+cardHead('社区反馈问题分布','用来确定下周 FAQ 与内容重点')+'<div class="progress-list">'+Object.entries(issueCount).map(([k,v])=>'<div class="progress-row"><strong>'+esc(k)+'</strong><div class="progress-track"><div class="progress-fill" style="width:'+Math.round(v/data.feedback.length*100)+'%"></div></div><em>'+v+'</em></div>').join('')+'</div></div></div>'+
    '<div class="section-spacer"></div><div class="panel">'+cardHead('本周复盘摘要','基于当前工作台数据自动生成')+'<div class="report-note">'+esc(summary())+'</div></div>';
  }
  function summary(){const open=data.feedback.filter(x=>x.status!=='已回复'), top=Object.entries(data.feedback.reduce((a,x)=>(a[x.type]=(a[x.type]||0)+1,a),{})).sort((a,b)=>b[1]-a[1])[0];return '本周已归档 '+data.archives.length+' 条发布记录，累计互动 '+data.archives.reduce((a,x)=>a+x.likes+x.comments+x.shares,0).toLocaleString()+' 次。社区归集 '+data.feedback.length+' 条反馈，其中 '+open.length+' 条仍需跟进。高频问题为“'+(top?top[0]:'暂无')+'”。奖励清单中 '+data.rewards.filter(x=>x.delivery!=='已发放').length+' 项待发放。';}
  function render(){renderNav();$('#content').innerHTML=({overview,calendar,assets,copy,archive,feedback,rewards,reports})[page](); bindFilters();}
  function bindFilters(){const s=$('#search'),f=$('#filter');if(s)s.addEventListener('input',e=>{query=e.target.value;const pos=e.target.selectionStart;render();const next=$('#search');next.focus();next.setSelectionRange(pos,pos);});if(f)f.addEventListener('change',e=>{filter=e.target.value;render();});}
  function navigate(p){page=p;query='';filter='全部';render();$('.sidebar').classList.remove('open');$('#mobileOverlay')?.classList.remove('show');window.scrollTo(0,0);}
  function modal(name,body,submit,button='保存'){const layer=$('#modalLayer');layer.hidden=false;layer.innerHTML='<div class="modal" role="dialog" aria-modal="true" aria-label="'+esc(name)+'"><div class="modal-head"><h2>'+esc(name)+'</h2><button class="close" data-close aria-label="关闭">×</button></div><form id="modalForm"><div class="modal-body">'+body+'</div><div class="modal-foot"><button type="button" class="btn" data-close>取消</button><button class="btn primary" type="submit">'+button+'</button></div></form></div>';$('#modalForm').onsubmit=e=>{e.preventDefault();submit(new FormData(e.target));};}
  function closeModal(){$('#modalLayer').hidden=true;$('#modalLayer').innerHTML='';}
  const field=(label,name,value='',type='text',required=true)=>'<div class="field"><label>'+label+'</label><input name="'+name+'" type="'+type+'" value="'+esc(value)+'" '+(required?'required':'')+'></div>';
  const select=(label,name,options,value)=>'<div class="field"><label>'+label+'</label><select name="'+name+'">'+options.map(o=>'<option '+(o===value?'selected':'')+'>'+esc(o)+'</option>').join('')+'</select></div>';
  function newPost(existing){
    const x=existing||{}, p=select('平台','platform',platforms,x.platform||'X');
    modal(existing?'内容详情 / 编辑':'新建排期内容',field('内容标题','title',x.title)+field('版本 / 活动','campaign',x.campaign)+
      '<div class="form-row">'+p+select('状态','status',['制作中','待审核','待发布','已发布'],x.status||'制作中')+'</div>'+
      '<div class="form-row">'+field('计划日期','date',x.date||'2026-10-20','date')+field('发布时间','time',x.time||'18:00','time')+'</div>'+
      '<div class="form-row">'+field('关联素材','asset',x.asset||'', 'text',false)+field('负责人','owner',x.owner||'林')+'</div>'+
      select('语言','lang',['ZH','EN','双语'],x.lang||'ZH')+'<div class="field"><label>文案</label><textarea name="copy">'+esc(x.copy||'')+'</textarea></div>'+field('发布链接（发布后填写）','url',x.url||'','url',false),
      fd=>{const obj=Object.fromEntries(fd);if(existing)Object.assign(existing,obj);else data.posts.push({id:Date.now(),...obj});save();closeModal();render();toast(existing?'内容已更新':'内容已加入排期');});
  }
  function newAsset(existing){
    const x=existing||{};
    modal(existing?'素材详情 / 编辑':'新增素材',field('素材名称','name',x.name)+
      '<div class="form-row">'+select('类型','type',['图片','视频','文案'],x.type||'图片')+select('使用状态','status',['制作中','审核中','可使用','已停用'],x.status||'制作中')+'</div>'+
      '<div class="form-row">'+field('版本 / 活动','campaign',x.campaign)+field('角色','character',x.character||'通用')+'</div>'+
      '<div class="form-row">'+field('语言','lang',x.lang||'多语言')+field('地区','region',x.region||'全球')+'</div>'+
      field('参考链接','reference',x.reference||'','url',false),
      fd=>{const obj=Object.fromEntries(fd);if(existing)Object.assign(existing,obj);else data.assets.push({id:Date.now(),...obj,symbol:obj.type==='视频'?'▶':'✦',colors:['#315955','#7cbbaa']});save();closeModal();render();toast('素材信息已保存');});
  }
  function newArchive(){
    modal('录入发布记录',field('内容标题','title')+'<div class="form-row">'+select('平台','platform',platforms,'X')+field('版本 / 活动','campaign')+'</div>'+
      '<div class="form-row">'+field('计划发布时间','planned','','datetime-local')+field('实际发布时间','actual','','datetime-local')+'</div>'+field('发布链接','url','','url')+
      '<div class="form-row">'+field('点赞','likes','0','number')+field('评论','comments','0','number')+'</div>'+
      '<div class="form-row">'+field('分享','shares','0','number')+field('浏览','views','0','number')+'</div>'+field('异常情况','issue','无'),
      fd=>{const x=Object.fromEntries(fd);['likes','comments','shares','views'].forEach(k=>x[k]=Number(x[k]));x.planned=x.planned.replace('T',' ');x.actual=x.actual.replace('T',' ');data.archives.unshift({id:Date.now(),...x});save();closeModal();render();toast('发布记录已归档');});
  }
  function newFeedback(){
    modal('录入社区反馈', '<div class="form-row">'+select('来源平台','source',platforms,'Discord')+field('用户昵称','user')+'</div>'+
      '<div class="field"><label>反馈内容</label><textarea name="text" required></textarea></div>'+
      '<div class="form-row">'+select('问题类型','type',['奖励发放','内容需求','本地化','活动规则','技术问题','其他'],'其他')+select('情绪倾向','sentiment',['正面','中性','负面'],'中性')+'</div>'+
      '<div class="form-row">'+field('版本 / 活动','campaign')+select('紧急程度','priority',['普通','较高','紧急'],'普通')+'</div>'+field('负责人','owner','林'),
      fd=>{data.feedback.unshift({id:Date.now(),...Object.fromEntries(fd),status:'待回复'});save();closeModal();render();toast('反馈已加入处理清单');});
  }
  function newReward(existing){
    const x=existing||{};
    modal(existing?'更新奖励状态':'新增奖励项',field('活动 / 奖项','event',x.event)+field('用户昵称','user',x.user)+
      '<div class="form-row">'+field('用户 UID','uid',x.uid)+field('奖品','prize',x.prize)+'</div>'+
      '<div class="form-row">'+select('信息核对','info',['待核对','已核对'],x.info||'待核对')+select('发放状态','delivery',['待发放','已发放'],x.delivery||'待发放')+'</div>'+select('公示状态','publicity',['待公示','已公示'],x.publicity||'待公示'),
      fd=>{const obj=Object.fromEntries(fd);if(!existing&&data.rewards.some(r=>r.event===obj.event&&r.uid===obj.uid)){toast('该活动与 UID 已存在，请核对重复发放风险');return;}if(existing)Object.assign(existing,obj);else data.rewards.push({id:Date.now(),...obj});save();closeModal();render();toast('奖励清单已更新');});
  }
  function checkCopy(){const text=$('#copySource').value.trim(), p=$('#copyPlatform').value;if(!text){toast('请先输入文案');return;}const limits={X:280,Facebook:5000,Instagram:2200,Discord:2000,小红书:1000,抖音:2200}, count=[...text].length, warnings=[];if(count>limits[p])warnings.push('超过 '+p+' 建议上限 '+limits[p]+' 字符');if(/星轨回响/.test(text)&&$('#copyLang').value==='英文')warnings.push('建议核对术语：星轨回响 → Star Echo');if(/Star Echo/i.test(text)&&$('#copyLang').value==='中文')warnings.push('建议核对术语：Star Echo → 星轨回响');if(p==='Instagram'&&/https?:\/\//.test(text))warnings.push('Instagram 正文中的链接通常不可直接点击，可改为主页链接引导');if(p==='X'&&!/#/.test(text))warnings.push('可考虑补充活动话题标签');$('#copyResult').innerHTML='<strong>'+esc(p)+' · '+count+' / '+limits[p]+' 字符</strong><br>'+(warnings.length?warnings.map(x=>'• '+esc(x)).join('<br>'):'✓ 未发现长度或术语格式问题。')+'<br><br>请由运营人员最终审校语气、事实和平台规则。';}
  function download(name,rows){const csv='\uFEFF'+rows.map(row=>row.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\r\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);toast('CSV 已导出');}
  function exportQueue(){download('AutoTune-待发布清单.csv',[['标题','活动','平台','日期','时间','状态','负责人','素材','语言','文案'],...data.posts.filter(x=>x.status!=='已发布').map(x=>[x.title,x.campaign,x.platform,x.date,x.time,x.status,x.owner,x.asset,x.lang,x.copy])]);}
  function exportArchive(){download('AutoTune-发布日报.csv',[['标题','平台','计划时间','实际时间','链接','点赞','评论','分享','浏览','异常'],...data.archives.map(x=>[x.title,x.platform,x.planned,x.actual,x.url,x.likes,x.comments,x.shares,x.views,x.issue])]);}
  function exportWeekly(){download('AutoTune-周报.csv',[['类别','项目','数值'],['汇总','归档发布',data.archives.length],['汇总','社区反馈',data.feedback.length],['汇总','待回复',data.feedback.filter(x=>x.status==='待回复').length],['汇总','待发放奖励',data.rewards.filter(x=>x.delivery!=='已发放').length],...data.archives.map(x=>['发布',x.title,x.likes+x.comments+x.shares]),...data.feedback.map(x=>['反馈',x.type,x.status])]);}
  document.addEventListener('click',e=>{
    const pageButton=e.target.closest('[data-page]');if(pageButton){navigate(pageButton.dataset.page);return;}
    if(e.target.matches('[data-close]')||e.target===$('#modalLayer')){closeModal();return;}
    const post=e.target.closest('[data-open-post]');if(post){newPost(data.posts.find(x=>x.id==post.dataset.openPost));return;}
    const asset=e.target.closest('[data-open-asset]');if(asset){newAsset(data.assets.find(x=>x.id==asset.dataset.openAsset));return;}
    const reward=e.target.closest('[data-open-reward]');if(reward){newReward(data.rewards.find(x=>x.id==reward.dataset.openReward));return;}
    const feedback=e.target.closest('[data-advance-feedback]');if(feedback){const x=data.feedback.find(x=>x.id==feedback.dataset.advanceFeedback);if(x.status!=='已回复'){x.status=x.status==='待回复'?'处理中':'已回复';save();render();toast('反馈状态已更新');}return;}
    const draft=e.target.closest('[data-load-draft]');if(draft){const x=data.drafts.find(x=>x.id==draft.dataset.loadDraft);$('#copySource').value=x.text;$('#copyPlatform').value=x.platform;$('#copyLang').value=x.lang;toast('已加载文案版本');return;}
    const action=e.target.closest('[data-action]')?.dataset.action;
    if(action==='new-post')newPost();if(action==='new-asset')newAsset();if(action==='new-archive')newArchive();if(action==='new-feedback')newFeedback();if(action==='new-reward')newReward();
    if(action==='new-draft'){$('#copySource').value='';$('#copyResult').textContent='已清空编辑区，可开始新版本。';$('#copySource').focus();}
    if(action==='check-copy')checkCopy();
    if(action==='save-draft'){const value=$('#copySource').value.trim();if(!value){toast('请先输入文案');return;}data.drafts.push({id:Date.now(),platform:$('#copyPlatform').value,lang:$('#copyLang').value,text:value,savedAt:new Date().toLocaleString('zh-CN')});save();render();toast('文案版本已保存');}
    if(action==='export-queue')exportQueue();if(action==='export-archive')exportArchive();if(action==='export-weekly')exportWeekly();
    if(action==='copy-summary'){navigator.clipboard.writeText(summary()).then(()=>toast('舆情摘要已复制')).catch(()=>toast('复制失败，请检查浏览器权限'));}
  });
  $('#menuBtn').onclick=()=>{$('.sidebar').classList.add('open');$('#mobileOverlay').classList.add('show');};
  $('#searchBtn').onclick=()=>{const field=$('#search');if(field)field.focus();else navigate('calendar');};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
  const overlay=document.createElement('div');overlay.id='mobileOverlay';overlay.className='mobile-overlay';overlay.onclick=()=>{$('.sidebar').classList.remove('open');overlay.classList.remove('show');};document.body.appendChild(overlay);
  $('#today').textContent='2026 年 10 月 20 日 · 周二';
  render();
})();
