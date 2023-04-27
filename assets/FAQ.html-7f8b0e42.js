import{_ as r,Y as d,Z as h,$ as e,a0 as l,a1 as t,a2 as a,a3 as i,F as s}from"./framework-8be3ab77.js";const c={},u=e("h1",{id:"常见问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见问题","aria-hidden":"true"},"#"),l(" 常见问题")],-1),_=e("h2",{id:"如何创建胡桃的桌面快捷方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何创建胡桃的桌面快捷方式","aria-hidden":"true"},"#"),l(" 如何创建胡桃的桌面快捷方式")],-1),p={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"社区力量",-1),f={href:"https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12",target:"_blank",rel:"noopener noreferrer"},b=i('<ul><li><code>Win+R</code> 呼出运行窗口，在窗口中输入<code>shell:AppsFolder</code><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp" alt="Run" loading="lazy"></li><li>Windows 会弹出应用程序目录，找到胡桃工具箱</li><li>右键，点击<code>创建快捷方式</code></li><li>根据提示操作你就可以获得一个桌面快捷方式了</li></ul><h2 id="如何添加一个默认以管理员方式运行的快捷方式" tabindex="-1"><a class="header-anchor" href="#如何添加一个默认以管理员方式运行的快捷方式" aria-hidden="true">#</a> 如何添加一个默认以管理员方式运行的快捷方式</h2>',2),m={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"社区力量",-1),S={href:"https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/17",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"基本原理：使用下方的 PowerShell 脚本可以以管理员方式运行胡桃",-1),w=e("div",{class:"language-PowerShell","data-ext":"PowerShell"},[e("pre",{class:"language-PowerShell"},[e("code",null,`Start-Process shell:AppsFolder\\60568DGPStudio.SnapHutao_ebfp3nyc27j86!App -verb runas
`)])],-1),P={href:"https://github.com/DGP-Studio/Snap.Hutao/raw/main/src/Snap.Hutao/Snap.Hutao/Assets/Logo.ico",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,[l("在桌面点击右键，选择"),e("code",null,"新建"),l(" -> "),e("code",null,"快捷方式")],-1),H=e("li",null,[l("在"),e("code",null,"请键入对象的位置"),l("中直接输入:")],-1),v=i(`<div class="language-PowerShell" data-ext="PowerShell"><pre class="language-PowerShell"><code>  powershell -Command &quot;Start-Process shell:AppsFolder\\60568DGPStudio.SnapHutao_ebfp3nyc27j86!App -verb runas
</code></pre></div><ul><li>将快捷方式命名为你需要的名称，比如<code>Snap Hutao</code></li><li>确认创建，此时你会在桌面得到一个有 PowerShell 图标的快捷方式</li><li>右键该快捷方式，点击属性 <ul><li>将<code>运行方式</code>修改为<code>最小化</code></li><li>点击更改图标，选择<code>浏览</code>，并选中刚刚下载的图标</li></ul></li><li>这样你就获得了胡桃工具箱的桌面快捷方式，并且运行它将直接以管理员模式运行 <ul><li>你也可以将固定到任务栏或磁贴区</li></ul></li></ul><h2 id="如何让胡桃工具箱开机自动启动" tabindex="-1"><a class="header-anchor" href="#如何让胡桃工具箱开机自动启动" aria-hidden="true">#</a> 如何让胡桃工具箱开机自动启动</h2>`,3),C={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/184",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[l("设置一个"),e("strong",null,"计划任务程序"),l("令上述批处理文件开机自启，或将上述批处理文件加入"),e("strong",null,"启动项"),l("中")],-1),G=e("li",null,"或有其他令胡桃工具箱可开机自启的思路，可自行探索",-1),z=i('<h2 id="如何通过胡桃工具箱快速地启动游戏" tabindex="-1"><a class="header-anchor" href="#如何通过胡桃工具箱快速地启动游戏" aria-hidden="true">#</a> 如何通过胡桃工具箱快速地启动游戏</h2><ul><li><p>在主程序中正确设置高级启动器功能</p></li><li><p>将胡桃工具箱在系统中固定在快速启动栏中</p></li><li><p>在快速启动栏中右键胡桃应用程序</p><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png_.webp" alt="quick-start" loading="lazy"></p></li><li><p>选择<code>启动游戏</code>即可</p></li></ul><h2 id="如何通过网络代理使用胡桃工具箱" tabindex="-1"><a class="header-anchor" href="#如何通过网络代理使用胡桃工具箱" aria-hidden="true">#</a> 如何通过网络代理使用胡桃工具箱</h2>',3),F=e("h2",{id:"为什么在设置中点击修改游戏路径无效",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么在设置中点击修改游戏路径无效","aria-hidden":"true"},"#"),l(" 为什么在设置中点击修改游戏路径无效")],-1),I=e("p",null,"特定系统版本的用户，由于微软对文件选择对话框的COM实现的差异，会存在点击按钮后无响应的问题。",-1),N={href:"https://github.com/microsoft/WindowsAppSDK/issues/2931",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"为什么程序会出现乱码现象",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么程序会出现乱码现象","aria-hidden":"true"},"#"),l(" 为什么程序会出现乱码现象")],-1),L=e("li",null,[l("当用户在 Windows 10 下使用胡桃且发现有乱码情况时： "),e("ul",null,[e("li",null,[l("可以下载 "),e("code",null,"Segoe Fluent Icons"),l("字体")]),e("li",null,[l("安装时选择"),e("code",null,"为系统所有用户安装"),l("，即可解决问题")])])],-1),R={href:"https://aka.ms/SegoeFluentIcons",target:"_blank",rel:"noopener noreferrer"},q=i('<h2 id="为什么解锁帧率后使用心海时出现掉帧" tabindex="-1"><a class="header-anchor" href="#为什么解锁帧率后使用心海时出现掉帧" aria-hidden="true">#</a> 为什么解锁帧率后使用心海时出现掉帧</h2><p>原神的BUG，和我们没关系</p><h2 id="为什么会弹出需要使用新应用以打开的对话框" tabindex="-1"><a class="header-anchor" href="#为什么会弹出需要使用新应用以打开的对话框" aria-hidden="true">#</a> 为什么会弹出需要使用新应用以打开的对话框</h2><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp" alt="uninstall-error" loading="lazy"></p><p>如在卸载胡桃工具箱后出现如上图所示的<code>需要使用新应用以打开此 hutao 链接</code>，说明没有按文档要求在卸载前清除实时便笺定时任务。 请根据文档在设置中清除定时任务后再卸载胡桃工具箱。</p>',5),j={href:"https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"为什么米游社帐号登录状态经常失效-添加的帐号消失",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么米游社帐号登录状态经常失效-添加的帐号消失","aria-hidden":"true"},"#"),l(" 为什么米游社帐号登录状态经常失效，添加的帐号消失")],-1),E=e("li",null,"我们通过储存帐号的米游社 Cookie 来维持登录状态。",-1),V=e("li",null,[l("但是当用户在浏览器或其它设备上"),e("strong",null,"注销帐号"),l("后， 维持登录状态的 Cookie 将"),e("strong",null,"失效"),l("。")],-1),O=e("li",null,"这会导致胡桃工具箱上的米游社帐号在启动后被自动移除。",-1),W=e("li",null,"此情况也可能因为网络连接问题导致无法检查Cookie有效性，故出现此情况后请优先重启胡桃工具箱。",-1),Q=e("li",null,"自 1.4.15 版本起，你可以通过在帐号面板中刷新 Cookie 来刷新登录状态",-1),U=i('<h2 id="为什么游戏登录状态会失效-导致切换帐号功能无效" tabindex="-1"><a class="header-anchor" href="#为什么游戏登录状态会失效-导致切换帐号功能无效" aria-hidden="true">#</a> 为什么游戏登录状态会失效，导致切换帐号功能无效</h2><ul><li>保存游戏登录状态的要素有两个：网络环境和设备 ID</li><li>导致该问题的常见原因是： <ul><li>网络环境频繁变换，如公网 IP 更换</li><li>操作失误，导致实际上根本没有保存登录状态（空的登录状态无法避免被胡桃识别） <ul><li>确认你的帐号已登录后，进入游戏</li><li>关闭游戏后，确定游戏进程已关闭</li><li>再次进行帐号检测，来添加登录状态</li></ul></li></ul></li></ul><h2 id="为什么程序会提示注册计划任务失败" tabindex="-1"><a class="header-anchor" href="#为什么程序会提示注册计划任务失败" aria-hidden="true">#</a> 为什么程序会提示注册计划任务失败</h2><p>使用管理员模式使用一次实时便笺后，胡桃的任务计划会被以管理员权限创建。当再次以非管理员模式启动胡桃时，程序在修改计划任务时会缺少权限。 继续使用管理员模式即可解决该问题。</p><h2 id="为什么在开启代理后胡桃工具箱会没有网络连接" tabindex="-1"><a class="header-anchor" href="#为什么在开启代理后胡桃工具箱会没有网络连接" aria-hidden="true">#</a> 为什么在开启代理后胡桃工具箱会没有网络连接</h2>',5),J=i('<h2 id="为什么商店版本和侧载版本不会相互覆盖升级" tabindex="-1"><a class="header-anchor" href="#为什么商店版本和侧载版本不会相互覆盖升级" aria-hidden="true">#</a> 为什么商店版本和侧载版本不会相互覆盖升级</h2><ul><li>商店版本和侧载版本有不同的软件 ID，所以会被系统识别为不同的程序</li><li>商店版的更新只会覆盖商店版应用；侧载版更新包只会更新侧载版应用</li><li>在你的系统中，商店版的胡桃工具箱名称为 <code>Snap Hutao</code>，侧载版的名称为 <code>胡桃</code></li></ul><h2 id="安装进度卡在-正在安装所需框架-一个可能的情况为卡在15" tabindex="-1"><a class="header-anchor" href="#安装进度卡在-正在安装所需框架-一个可能的情况为卡在15" aria-hidden="true">#</a> 安装进度卡在“正在安装所需框架”（一个可能的情况为卡在15%）</h2>',3),M=e("li",null,"这可能是因为你的系统无法自动安装框架，通常是网络或者windows update组件导致，这类问题请到微软社区提问",-1),X={href:"https://d.hut.ao/releases/Dependency",target:"_blank",rel:"noopener noreferrer"};function Y(K,T){const o=s("ExternalLinkIcon"),n=s("RouterLink");return d(),h("div",null,[u,_,e("div",p,[g,e("p",null,[l("感谢 "),e("a",f,[l("CzHUV 提供的解决方案"),t(o)])])]),b,e("div",m,[x,e("p",null,[l("感谢 "),e("a",S,[l("Parsifa1 提供的解决方案"),t(o)])])]),k,w,e("ul",null,[e("li",null,[l("保存胡桃工具箱的 Logo 资源 "),e("ul",null,[e("li",null,[l("你可以点击"),e("a",P,[l("这里"),t(o)]),l("下载")])])]),D,H]),v,e("ul",null,[e("li",null,[l("请参考如下思路 "),e("ul",null,[e("li",null,[l("可以自行创建一个批处理文件，内容参考"),e("a",C,[l("此issue"),t(o)]),l("中，令胡桃以管理员模式直接运行的命令。")]),A])]),G]),z,e("p",null,[l("参考 "),t(n,{to:"/zh/advanced/exceptions.html#httprequestexception"},{default:a(()=>[l("HttpRequestException 错误")]),_:1}),l(" 文档")]),F,I,e("p",null,[l("相关的 "),e("a",N,[l("Github Issue"),t(o)])]),y,e("ul",null,[L,e("li",null,[l("您可以从 "),e("a",R,[l("微软官方"),t(o)]),l("下载到该字体文件")])]),q,e("ul",null,[e("li",null,[l("如果你在系统定时任务中找不到胡桃的定时任务，但问题仍然出现，请参考"),e("a",j,[l("这份文档"),t(o)]),l("来解决")])]),B,e("ul",null,[E,V,O,W,e("li",null,[l("自2022年10月起，米游社极大地提高了账号被判定为有风险的概率，"),t(n,{to:"/zh/advanced/mihoyo-risk-tip.html"},{default:a(()=>[l("账号有风险")]),_:1}),l("时亦会令Cookie无法被识别为有效状态")]),Q]),U,e("p",null,[l("参考 "),t(n,{to:"/zh/advanced/exceptions.html#httprequestexception"},{default:a(()=>[l("HttpRequestException 错误")]),_:1}),l(" 文档")]),J,e("ul",null,[M,e("li",null,[l("也可以选择手动安装 "),e("a",X,[l("胡桃的相关依赖"),t(o)]),l("尝试解决")])])])}const $=r(c,[["render",Y],["__file","FAQ.html.vue"]]);export{$ as default};
