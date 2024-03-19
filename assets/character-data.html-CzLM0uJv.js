import{_ as n,r,o,c,a as e,b as t,d as l,w as i,e as s}from"./app-BCYlaIL8.js";const h={},p=e("h1",{id:"我的角色",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#我的角色"},[e("span",null,"我的角色")])],-1),d={class:"hint-container info"},m=e("p",{class:"hint-container-title"},"前置要求",-1),u=s('<p>我的角色功能可读取当前账号所拥有角色的具体数据，包括等级、命之座、武器、天赋、圣遗物等；并自动计算圣遗物评分和双爆评分</p><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01hK2R3O1g6e0qblXd2_!!1797064093.png_.webp" alt="属性统计示例图" loading="lazy"></p><h2 id="同步角色信息" tabindex="-1"><a class="header-anchor" href="#同步角色信息"><span>同步角色信息</span></a></h2><p>推荐的使用步骤：</p><ol><li>从米游社养成计算同步</li><li>从米游社原神战绩同步</li><li>设置游戏内橱窗中的6个角色后使用 Enka API 同步详细数据</li></ol><h3 id="从-enka-api-同步" tabindex="-1"><a class="header-anchor" href="#从-enka-api-同步"><span>从 Enka API 同步</span></a></h3><div class="hint-container info"><p class="hint-container-title">同步特征</p><ul><li>Enka API 同步游戏内角色橱窗中公开展示的角色的信息 <ul><li>该同步方式包括圣遗物具体数据</li><li>该同步方法包括角色着装信息</li><li>该同步方式一次最多包含 8 个角色</li></ul></li></ul></div><ul><li>在游戏中将角色橱窗设置为公开并添加<strong>需要获取详细资料的角色</strong>进入橱窗展示 <ul><li>角色橱窗中最多可同时展示 8 个角色</li></ul></li><li>若您更换了橱窗内的角色或角色内的配置，需等待游戏内的数据同步至服务器 <ul><li>开启功能和更换角色后需要最多 5 分钟同步数据</li></ul></li><li>进入胡桃工具箱的 “我的角色” 功能页面，在界面右上角点击 “同步角色信息”</li><li>点击 “从Enka API 同步”</li></ul><h3 id="从米游社原神战绩同步" tabindex="-1"><a class="header-anchor" href="#从米游社原神战绩同步"><span>从米游社原神战绩同步</span></a></h3><div class="hint-container info"><p class="hint-container-title">同步特征</p><ul><li>米游社我的角色 同步的数据来源于米游社数据 <ul><li>该同步方式不包含圣遗物信息</li><li>该同步方式一次可同步全部角色信息</li></ul></li></ul></div><ul><li>在胡桃工具箱的 “我的角色” 功能页面，在界面右上角点击 “同步角色信息”</li><li>点击 “从米游社我的角色同步”</li></ul><h3 id="从米游社养成计算同步" tabindex="-1"><a class="header-anchor" href="#从米游社养成计算同步"><span>从米游社养成计算同步</span></a></h3><div class="hint-container info"><p class="hint-container-title">同步特征</p><ul><li>“米游社养成计算” 同步的数据来源于米游社养成计算数据 <ul><li>该同步方式一次可同步全部角色信息</li></ul></li></ul></div><ul><li>在胡桃工具箱的 “我的角色” 功能页面，在界面右上角点击 “同步角色信息”</li><li>点击 “从米游社养成计算同步”</li></ul><h2 id="将当前选定角色加入养成计算" tabindex="-1"><a class="header-anchor" href="#将当前选定角色加入养成计算"><span>将当前选定角色加入养成计算</span></a></h2><ul><li>在胡桃工具箱的 “我的角色” 功能页面，点击切换至需要加入养成计算的角色的资料页面</li><li>点击界面右上方的“养成计算”按钮，输入目标等级 <ul><li><strong>已同步数据的角色</strong>的当前角色等级、天赋等级会预填入其中，目标等级可自由更改</li></ul></li></ul><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01n3GYLI1g6e0zAVRM7_!!1797064093.png_.webp" alt="rolescal" loading="lazy"></p>',17),g=e("h2",{id:"导出图片",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导出图片"},[e("span",null,"导出图片")])],-1),_=e("ul",null,[e("li",null,"在我的角色页面中，你可以在选择一个角色的情况下点击右上角的 “导出图片” 按钮以将角色数据转化为图片形式，这将有助于你分享你的角色信息"),e("li",null,"导出的图片储存在系统剪贴板中，你可以在合适的地方直接粘贴以获得该图片"),e("li",null,"导出图片样式如下图所示")],-1),f=e("p",null,[e("img",{src:"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FDkZtN1g6e0vJuDZV_!!1797064093.png_.webp",alt:"sample-output-image",loading:"lazy"})],-1);function k(y,x){const a=r("RouteLink");return o(),c("div",null,[p,e("div",d,[m,e("p",null,[t("该功能需要你在胡桃工具箱中登录米游社账号，登录方法可见"),l(a,{to:"/zh/features/mhy-account-switch.html#%E7%B1%B3%E6%B8%B8%E7%A4%BE%E5%A4%9A%E8%B4%A6%E5%8F%B7%E5%88%87%E6%8D%A2"},{default:i(()=>[t("米游社多账号切换")]),_:1}),t("文档")])]),u,e("ul",null,[e("li",null,[t("添加完毕后，您可在“养成计划”功能中查看“已添加的养成目标” "),e("ul",null,[e("li",null,[t("关于养成计划功能的详细说明，请见"),l(a,{to:"/zh/features/develop-plan.html#%E5%85%BB%E6%88%90%E8%AE%A1%E5%88%92"},{default:i(()=>[t("养成计划")]),_:1}),t("文档")])])])]),g,_,f])}const v=n(h,[["render",k],["__file","character-data.html.vue"]]),E=JSON.parse('{"path":"/zh/features/character-data.html","title":"我的角色","lang":"zh-CN","frontmatter":{"headerDepth":2,"category":["功能","教程"],"tag":["数据统计","角色橱窗"],"order":8,"comment":false,"description":"胡桃工具箱的我的角色功能可以读取原神账号下所拥有的角色的具体数据进行展示并提供分析数据，包括等级、命之座、天赋和圣遗物评分等数据。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/character-data.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/character-data.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/character-data.html"}],["meta",{"property":"og:url","content":"https://hut.ao/zh/features/character-data.html"}],["meta",{"property":"og:site_name","content":"胡桃工具箱"}],["meta",{"property":"og:title","content":"我的角色"}],["meta",{"property":"og:description","content":"胡桃工具箱的我的角色功能可以读取原神账号下所拥有的角色的具体数据进行展示并提供分析数据，包括等级、命之座、天赋和圣遗物评分等数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01hK2R3O1g6e0qblXd2_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-03-17T06:20:08.000Z"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"数据统计"}],["meta",{"property":"article:tag","content":"角色橱窗"}],["meta",{"property":"article:modified_time","content":"2024-03-17T06:20:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"我的角色\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01hK2R3O1g6e0qblXd2_!!1797064093.png_.webp\\",\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01n3GYLI1g6e0zAVRM7_!!1797064093.png_.webp\\",\\"https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FDkZtN1g6e0vJuDZV_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-03-17T06:20:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/zh/rss.xml","title":"胡桃工具箱 RSS Feed"}]]},"headers":[{"level":2,"title":"同步角色信息","slug":"同步角色信息","link":"#同步角色信息","children":[{"level":3,"title":"从 Enka API 同步","slug":"从-enka-api-同步","link":"#从-enka-api-同步","children":[]},{"level":3,"title":"从米游社原神战绩同步","slug":"从米游社原神战绩同步","link":"#从米游社原神战绩同步","children":[]},{"level":3,"title":"从米游社养成计算同步","slug":"从米游社养成计算同步","link":"#从米游社养成计算同步","children":[]}]},{"level":2,"title":"将当前选定角色加入养成计算","slug":"将当前选定角色加入养成计算","link":"#将当前选定角色加入养成计算","children":[]},{"level":2,"title":"导出图片","slug":"导出图片","link":"#导出图片","children":[]}],"git":{"createdTime":1679366029000,"updatedTime":1710656408000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":14},{"name":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"qhy040404","email":"qhy040404@163.com","commits":1}]},"readingTime":{"minutes":3.17,"words":951},"filePathRelative":"zh/features/character-data.md","localizedDate":"2023年3月21日"}');export{v as comp,E as data};
