if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>a(e,r),f={module:{uri:r},exports:d,require:t};s[r]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-CLfEDWUi.js",revision:"ea5504ba90f90116533766a182cf76d7"},{url:"assets/achievements.html-BoYLPwfG.js",revision:"afaf18bf0fdac406990e1190f09254c6"},{url:"assets/achievements.html-CnWAD8Jy.js",revision:"0a645475cd3b01f4266b58143e07c298"},{url:"assets/achievements.html-DVqStmNi.js",revision:"708b8f7ee0c38529c1d700e8d1e84640"},{url:"assets/achievements.html-groEJ5n_.js",revision:"adba3f3274c2e9bf2ed600dff86fbf63"},{url:"assets/app-BIw2Kioy.js",revision:"563cc1a2bf047cbd23f55bc05becf022"},{url:"assets/archive.html-mYyknrlZ.js",revision:"de13f13ed0d766a71d0cea0cc98d603e"},{url:"assets/bug-report.html-_Deseie4.js",revision:"6d29010f025c6597e14ce91a345c0f11"},{url:"assets/bug-report.html-Ci3hzmVm.js",revision:"d19aa54e519af03982df25caf56b3a89"},{url:"assets/bug-report.html-CUgixPGd.js",revision:"40cb45894216c561e70f2d456067dc0e"},{url:"assets/bug-report.html-D-ifVSt7.js",revision:"9d047e088d8c981e6b66e7a0e4e12274"},{url:"assets/character-data.html-BQpgphgO.js",revision:"13bffdea3fa1741523f7252c181354ee"},{url:"assets/character-data.html-CX5287lq.js",revision:"21e6561f573c3936a4e9593a4660c0ba"},{url:"assets/character-data.html-DdTL1hBp.js",revision:"8740ad0862774bf37c3a30c47e29fc37"},{url:"assets/character-data.html-DteLfxbW.js",revision:"7a72d2f5e24c81be977627952387cec8"},{url:"assets/character-wiki.html-B_26OOs8.js",revision:"2743d63d67e2378a5c462bed6975216e"},{url:"assets/character-wiki.html-BttxNL49.js",revision:"9b3d23ccc237d38d93657d6b9a933b1c"},{url:"assets/character-wiki.html-CgUJS9Ek.js",revision:"ea3c1feeb0862dedd9be4172299ceec2"},{url:"assets/character-wiki.html-D2ywnWU8.js",revision:"70f9434287ae548de13f8b2d216d7963"},{url:"assets/community.html-BD-m9-pm.js",revision:"896453f0ef405522d1646d9ada7838fc"},{url:"assets/community.html-BivuO7xf.js",revision:"a720338ce2cb3cc33cb018e75465b0cf"},{url:"assets/community.html-Df1ysUtN.js",revision:"70721f185895de271627821d3ab9f621"},{url:"assets/community.html-DoHF7yni.js",revision:"094a42f21926ff8c7faad727c5eb82b5"},{url:"assets/contribute.html-BLm9tjvs.js",revision:"ae302cd31d20b165916b2763e4adfa72"},{url:"assets/contribute.html-BWQABeAL.js",revision:"823ca11f5c18132d32d7524a3a8e93ec"},{url:"assets/contribute.html-DALmnTrF.js",revision:"9974be34a2a813c4f337788bbf7166c3"},{url:"assets/contribute.html-xXJwBk_n.js",revision:"c6be87dc66f3febab5e1cd7e629f9ab7"},{url:"assets/dashboard.html-4Ol6rhVL.js",revision:"3492e76d47d0bb7c758e7d5bea5694ae"},{url:"assets/dashboard.html-APEGu2rg.js",revision:"ffe0e2d6c5c06f5cca1eaa66489a2112"},{url:"assets/dashboard.html-BdI4rNXk.js",revision:"d5b12b2f2f6248a5b7d3c50ab3a4d26e"},{url:"assets/dashboard.html-q7cXHS9M.js",revision:"edefef2f8eca98271fc9307e773414ee"},{url:"assets/dependency.html-BrhW_aHE.js",revision:"10f4adb24fe9f8ca2af094ee866cab65"},{url:"assets/dependency.html-cWaFCw2K.js",revision:"c744e65524c8d1a336ef421c282728a9"},{url:"assets/develop-plan.html-B3ZjUpL_.js",revision:"3b2bffbc422654da631f5624dadffb02"},{url:"assets/develop-plan.html-CLQwxG6j.js",revision:"2cb2b82e77d8c3263cb719a2ec867781"},{url:"assets/develop-plan.html-DY0cdSqt.js",revision:"1e84a6e12bde348b1da75c5c1d0a552e"},{url:"assets/develop-plan.html-VExBRtME.js",revision:"8dfa3bd430a94480844339b299645cea"},{url:"assets/digitalocean-horizontal-CWne6he4.js",revision:"6ceec52d3ddbf7537fac3f5b1edd41ae"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-Cf_x2pQU.js",revision:"0276d06619e40eac7ea6a95cd9bc3882"},{url:"assets/exceptions.html-CYZ3-VEs.js",revision:"b54896289fb17b286f60532b76c984aa"},{url:"assets/exceptions.html-DSGl2b6n.js",revision:"38ca735cfa378b84aea8890fe6b59691"},{url:"assets/exceptions.html-fEx4Tety.js",revision:"f64df48c5073630224b1ceb9e1ed8f7f"},{url:"assets/FAQ.html-BGsOUYRW.js",revision:"f2b8ab124081f04b0bb17ad561fb87a2"},{url:"assets/FAQ.html-BsFyARsO.js",revision:"ffe504f538611fedd6cadcf67fedcfa3"},{url:"assets/FAQ.html-Bu06MUjZ.js",revision:"7a97db93362335bdd87575cc12e62f05"},{url:"assets/FAQ.html-CuJhBYQM.js",revision:"eb77cf8fd4728a2215677c492bcd375e"},{url:"assets/feedback-center.html-7ISXy0QR.js",revision:"6b666bca55ff5e72474985295620d1d3"},{url:"assets/feedback-center.html-DPBhxyT7.js",revision:"88b95eb52ce313a5aee377df17ad031b"},{url:"assets/Gacha-system-and-export-principal.html-B9iRxh3H.js",revision:"24f7953fe94e8d7044054d9c3da7fa91"},{url:"assets/Gacha-system-and-export-principal.html-DK6--kQU.js",revision:"abe22db043a9b9d0910d259d2de267f5"},{url:"assets/Gacha-system-and-export-principal.html-DnYVv9iX.js",revision:"aac5d8db1286207ad23b597671b2b67b"},{url:"assets/Gacha-system-and-export-principal.html-o4N1CnPe.js",revision:"d3250b0a84813fe8a8fbb2d52849c5f9"},{url:"assets/game-launcher.html-D0HDT31p.js",revision:"8d8a841578d4a1a0c31dbe77d4c58ece"},{url:"assets/game-launcher.html-D9WFCRDK.js",revision:"58afe671fddc0bc32c6ff49cfeca0c26"},{url:"assets/game-launcher.html-DnihIYNt.js",revision:"8601e6a5a1a5178a4c7f56673a593108"},{url:"assets/game-launcher.html-DWLHk73k.js",revision:"d7eff9f5dd373d3f2e0cfaf20e7bf840"},{url:"assets/get-stoken-cookie-from-the-third-party.html-6Hm5nHqL.js",revision:"d7e39f7cdfcc7af2a2325889638f3381"},{url:"assets/get-stoken-cookie-from-the-third-party.html-Bx02Sx1L.js",revision:"dc2196e4d515f8557dc4af041777b35d"},{url:"assets/get-stoken-cookie-from-the-third-party.html-DN8LtJFA.js",revision:"280b4b513d8083631d51472e3b7c5dc7"},{url:"assets/get-stoken-cookie-from-the-third-party.html-OSveCYPY.js",revision:"6f7b040a2cdfc15cf4ebc1a73ac57c52"},{url:"assets/giscus--_FS5kYt.js",revision:"bb05431bc292361992e6141ce0948b43"},{url:"assets/gitlab-logo-DbxlVhvV.js",revision:"8b8d75f5d0302ef1656d1c66c4d79c78"},{url:"assets/hutao-API.html-BinTWgjs.js",revision:"eece0f2858a1e17028301762502f5ce9"},{url:"assets/hutao-API.html-BM9o0cgM.js",revision:"a054b92b34723530768cba4fcf85f0bd"},{url:"assets/hutao-API.html-DK1Cjgje.js",revision:"4762825b0bee114dcc8c994be1620e8e"},{url:"assets/hutao-API.html-DOFkWW0a.js",revision:"b9ff587d3e9dc8e008db66fed26a1cc7"},{url:"assets/hutao-passport.html-cRrQOO3y.js",revision:"56336f3534637e032b2c17eb26e20893"},{url:"assets/hutao-passport.html-D7JkOW8j.js",revision:"bbfd2a3df5f33fd7e6e7c8b6480f60cf"},{url:"assets/hutao-settings.html-B1uNLpVl.js",revision:"9cb07c98e2c2234026778431d2b526e2"},{url:"assets/hutao-settings.html-BQNa6oxk.js",revision:"17a145a3765812089447595732bd970d"},{url:"assets/hutao-settings.html-CpHyYCmK.js",revision:"386f6ee9d32fc277ceb7531b30b97091"},{url:"assets/hutao-settings.html-Dp5L0TJZ.js",revision:"d1341681f4a0f157f6bc27df2631d5f1"},{url:"assets/i18n.html-B4RFXeAp.js",revision:"4dd1a81d61ec36df27ad6a487521bb52"},{url:"assets/i18n.html-C7jMtwfa.js",revision:"dda85dc885a7b0445e415ce282f5fa35"},{url:"assets/i18n.html-DH06HXFF.js",revision:"cc59bb5a804cc16fb65c7621098c8e48"},{url:"assets/i18n.html-h1t3MnVh.js",revision:"e4951caf2975de37be4c298ea341c018"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-zMbLkDvU.js",revision:"31f36bdf766eca20dff7683b6d0b15c7"},{url:"assets/index.html-B2kS21p2.js",revision:"0b67284dfd1f5e4f0fa708f739823ff2"},{url:"assets/index.html-BGEp6T2r.js",revision:"d442a4523558adfbf2da465e3d89e636"},{url:"assets/index.html-BNcVp1rJ.js",revision:"0a0ba5f8ddbdff77ce6f2d3777fdbc66"},{url:"assets/index.html-BrMfvUci.js",revision:"78002db983e3cf29976667954cbc25e6"},{url:"assets/index.html-BtEXRmjG.js",revision:"17f062f1acc14326a3f9aff766cec2f0"},{url:"assets/index.html-BW9I8Ubg.js",revision:"e1290e11af2eedd11c148b5dbcfebcb5"},{url:"assets/index.html-BWLRz6rL.js",revision:"c08cd37cc8d749bd4727cc712d65e8fa"},{url:"assets/index.html-BxQ4dtPg.js",revision:"c2817c6ca8aed72b2919812003ba737f"},{url:"assets/index.html-C1wQ8t21.js",revision:"421c0ce0b9c2e6b8254cc41f560d3a79"},{url:"assets/index.html-c2Oyh2Ca.js",revision:"a29dffc02bb5ea4dc66c73c5f8ea0189"},{url:"assets/index.html-C8vF2EQ4.js",revision:"26ccf282ad1211de78f2ef9c8e26988e"},{url:"assets/index.html-CukqBN08.js",revision:"af29890c611c9f421832f65081af9c4e"},{url:"assets/index.html-CVmUYfqT.js",revision:"d6f08d8bd98137ba1c343236086f0d75"},{url:"assets/index.html-D0KFHZqd.js",revision:"f7e8b01a6882999f26d57576fa20277e"},{url:"assets/index.html-D51K6Iv3.js",revision:"f3862b8e712528945f295e5754557ef3"},{url:"assets/index.html-DiNNWvIQ.js",revision:"69135bddae055cfaf76a18b6e6c36ab4"},{url:"assets/index.html-DTTVfheA.js",revision:"e76d33a648ebc9265005931153a1195f"},{url:"assets/index.html-ecXmo0qH.js",revision:"22bc3e7297ed0aaa49837ae8bf98718a"},{url:"assets/index.html-ftB2vepT.js",revision:"7f750a58187f5a3e78c916d4822c5915"},{url:"assets/index.html-JsNPpLQd.js",revision:"122c9f19b512b38294f2c1c80a3022d1"},{url:"assets/index.html-nf0753UB.js",revision:"c877b3f17e145427ff281cc0ffd79baa"},{url:"assets/index.html-TEK1I8fi.js",revision:"4bf024228bb04bf5c3f2b548478e165f"},{url:"assets/index.html-xDykwTTd.js",revision:"ac67805710d047bbed10381f9c2ce768"},{url:"assets/index.html-zIRdPTK1.js",revision:"19cdd4c54300099edd5702f0cb15c79a"},{url:"assets/jetbrains-RzWQj_l9.js",revision:"f1b62c45d4477d4bdc1626be6bb44dce"},{url:"assets/join.html-DzPPBD3h.js",revision:"549cfb6a40dfd25ea062ec12fbaa2e3c"},{url:"assets/join.html-PkvAOQjc.js",revision:"faad5fe6fb79e10d9b18bcb97fb57a83"},{url:"assets/join.html-WCjdy4c8.js",revision:"88ee97611dec7cce13869c1046f9860f"},{url:"assets/known-issue.html-BvgwJrDm.js",revision:"edb95c5f87065284823b900f3676f14a"},{url:"assets/known-issue.html-D4OzUgQU.js",revision:"6ae616112a9e65222806a9fbdf2685da"},{url:"assets/known-issue.html-DtBe4iRz.js",revision:"8130112884334d81b98c45b7f25b4228"},{url:"assets/known-issue.html-DVjH5yXE.js",revision:"42c8dc1e017871e049a259251a525c58"},{url:"assets/latest.html-CLRlf8Wi.js",revision:"3f71d10d50474c83bf4b2135802e4275"},{url:"assets/latest.html-DK_3exmc.js",revision:"8e3bb221d80abb807b1720f5317f9631"},{url:"assets/menu.html-CDF9Mb1T.js",revision:"83f514a4c16250e0715e87d1c9b91016"},{url:"assets/menu.html-CGZDp1ek.js",revision:"2f4a93c53290c33b2191a468b4d2a876"},{url:"assets/menu.html-HdHNGRzR.js",revision:"bfc1c7c1a6983f84ee0a990608ca2fe3"},{url:"assets/menu.html-k1eKoGQr.js",revision:"5d0178162f7b4b33eeaddd4dca897ec1"},{url:"assets/mhy-account-switch.html-CbKU-7mv.js",revision:"47de5e7bd34c93f8de6b3265234407b2"},{url:"assets/mhy-account-switch.html-CJWDGb23.js",revision:"e63b7ce7adbab2bd6e466d245b44c1be"},{url:"assets/mhy-account-switch.html-Dm2k4e1W.js",revision:"8c5255c52f3a78ebcaf42986559d4ffd"},{url:"assets/mhy-account-switch.html-DmAtAfTV.js",revision:"b3646617486ef47c04d07c17831ec772"},{url:"assets/monster-wiki.html-9Dt4IVBf.js",revision:"29976368e30fb716f16b9b3ac9c8cce9"},{url:"assets/monster-wiki.html-BlgS0dEC.js",revision:"aec647ba4fbbf9dff9a70eb1bee7b5b0"},{url:"assets/monster-wiki.html-bYemcPTt.js",revision:"a2405c170dbd78d2d0562f704578687d"},{url:"assets/monster-wiki.html-VhpU8Sxr.js",revision:"2b5833eebbe14042a3bf55cb057c04d7"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/platform.html-3QXnEgBX.js",revision:"d15493eb8fa6e889894fc86be801e497"},{url:"assets/platform.html-BStH46Qv.js",revision:"099e2d509e0624e49450ad0f32932df4"},{url:"assets/platform.html-CaMfWcnn.js",revision:"bf1abb1e40e39c5f94ee339f2a43c6b6"},{url:"assets/platform.html-CzvmXZWv.js",revision:"a7600ef0b8a0fc98069018437fed8cc3"},{url:"assets/privacy-notice.html-B-ATnFL8.js",revision:"4a8d4519c363ea7b158c5c3351e17fc0"},{url:"assets/privacy-notice.html-BZDZKLC9.js",revision:"0587da0aadf5bbcd00d921df787b6957"},{url:"assets/privacy-notice.html-CUhuG5rU.js",revision:"55e071b33728c4b936d4ad16b72910c8"},{url:"assets/privacy-notice.html-Kt4LNVkF.js",revision:"2ceea65f15ae0e23deeeac98469175a4"},{url:"assets/project.html-1UNjEe-X.js",revision:"f855436c12d305c607943d06934076f1"},{url:"assets/project.html-B7EIaVev.js",revision:"ed043c4bc1efc7a4d90198b7816d1288"},{url:"assets/project.html-CM9hERux.js",revision:"44d8a598a63df33b46a4472abf69399b"},{url:"assets/project.html-CUEFIViD.js",revision:"80b4676a7a5dc51b44009699971a8206"},{url:"assets/quick-start.html-B39dUijk.js",revision:"fe6e22677b28b93949e9d160e954c598"},{url:"assets/quick-start.html-BHDMMMNO.js",revision:"0e6adc4135a908df489d17bac7284057"},{url:"assets/quick-start.html-CzgNRWca.js",revision:"431083783784fe30139022406122d18c"},{url:"assets/quick-start.html-DUTsQRvS.js",revision:"15f71ba7e3b2de0c5064f897b89384df"},{url:"assets/real-time-notes.html-B26VYPUE.js",revision:"a4f02adf65c7d7b27c4b093982c85630"},{url:"assets/real-time-notes.html-CA-wAtWw.js",revision:"127ea710b0c443b836b406b5220bf16a"},{url:"assets/real-time-notes.html-DGBelt_M.js",revision:"cc1a5131b691c15f5a5f9754fff456cd"},{url:"assets/real-time-notes.html-DPZAzhRA.js",revision:"de59e3794c10b8b052dc5624e34ceda0"},{url:"assets/setup.html-B9x8F6QO.js",revision:"d89e2c31c05f951c536d970ccc55708e"},{url:"assets/setup.html-BoMHCHdD.js",revision:"3457bf2f31d76406a6bc955c12e51818"},{url:"assets/setup.html-D92-pueO.js",revision:"bf9f59fc3bd89625e4e7c64f0be35bcc"},{url:"assets/setup.html-MnE6S2XT.js",revision:"a1caff6ce2c93f200ba7669b8ccdb80d"},{url:"assets/side-load.html-CHIvKPlV.js",revision:"41be72a1631a16cde2284031eb0cc20a"},{url:"assets/side-load.html-DQKkLl0O.js",revision:"dd8f3896d651fcb0588e5415fd7d9282"},{url:"assets/star-request.html-BBrGNVUi.js",revision:"593d4879360b4f5bb682a8b468d0a42a"},{url:"assets/star-request.html-BHAHloMW.js",revision:"8b98761a9d2057791ee16d52e0d9b0ba"},{url:"assets/star-request.html-BP0MrXqn.js",revision:"3c985782cdc6eb37ae7b59d05d58990c"},{url:"assets/star-request.html-CIPTSgla.js",revision:"de8bee66a824f42aa2733f0c86dd5226"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/style-ZijGtiHQ.css",revision:"8856afb6c1a9d4e2cd48960e6ceba398"},{url:"assets/support-us.html-CaAiAtJJ.js",revision:"b08307c1ba3bfb3b15881d638dca76fd"},{url:"assets/support-us.html-ClgdCNeL.js",revision:"94bd08368548135405af1330b41bd510"},{url:"assets/support-us.html-Dm2xg86n.js",revision:"1e1e7cf34c4282147ce85a621abe9ce8"},{url:"assets/support-us.html-DOKJHzXC.js",revision:"dddd2ef2c5603667583d8ff8b0daf175"},{url:"assets/symposium1.html-RN_BBS8y.js",revision:"0f8fd05d3a6f566b5fcda05a5cad7082"},{url:"assets/symposium2.html-DCqQ3LHx.js",revision:"2259360a3ecf0a0f60b743d59aeb78a4"},{url:"assets/tos.html-D_XElKrV.js",revision:"6b653f16b122ef5d7cbd1fba9780428d"},{url:"assets/tos.html-DKLhxw8h.js",revision:"69355938a0504d23df0b07488828793e"},{url:"assets/tos.html-DzodUG4b.js",revision:"f41276ef3275db9b0542a2f8d08199c3"},{url:"assets/tos.html-yxBenxWI.js",revision:"27fe349258b5b8716bc1d658bc840798"},{url:"assets/uninstall.html-BonNO7cr.js",revision:"5f0889f605f9ebf7130c2b51bb65681b"},{url:"assets/uninstall.html-DjMRdpxc.js",revision:"68812e9305e3691e769d7e3c165d0d7f"},{url:"assets/uninstall.html-KN_iakw3.js",revision:"578f9fe818f97b11f1f831b1a9b366be"},{url:"assets/uninstall.html-w4BIfeJL.js",revision:"32c2b1406aabf1722190574c38b386e3"},{url:"assets/update-log.html-BLhrObd3.js",revision:"648131c2237dd5235894218f6b655954"},{url:"assets/update-log.html-BuakyOEH.js",revision:"5e71451784d34d86d658eacc8cf7f7ff"},{url:"assets/update-log.html-D-frxyuk.js",revision:"1cedd92e8977ab4662cf7b326ec45d8f"},{url:"assets/update-log.html-xUcxGij5.js",revision:"011c9541f0abc9e39518f017ff52a747"},{url:"assets/version-1-9-0-breaking-changes.html--vJ8DOnc.js",revision:"314e18b50eabdb646d21d722e7fa27ea"},{url:"assets/version-1-9-0-breaking-changes.html-CAt94MUF.js",revision:"162b11519e8ba35d8b1edec80e2a3c34"},{url:"assets/version-1-9-0-breaking-changes.html-CV9cUcCU.js",revision:"2703a00b13be0f1488983e3921b9c1a6"},{url:"assets/version-1-9-0-breaking-changes.html-iRifO90R.js",revision:"2364343669b598946fd7f17f96af3a12"},{url:"assets/weapon-wiki.html-aHWM0M52.js",revision:"06b4be6b23a3c0794d49dc0b03b20a87"},{url:"assets/weapon-wiki.html-Cedj8W0c.js",revision:"e83c204ed6e98e915b517174dbc9cb92"},{url:"assets/weapon-wiki.html-CEM1FrtB.js",revision:"569df2fdfbeab9606c9a20ce4751a34c"},{url:"assets/weapon-wiki.html-Cpc0fDTw.js",revision:"921e565b4bd82f34d75deb3ab2a97cb7"},{url:"assets/wish-export.html-1djrWx4Z.js",revision:"8bddd8558fe4edff6430cfa46f7a3037"},{url:"assets/wish-export.html-C4a_SoPZ.js",revision:"fa7db136131ba8bd47c0fa6e4888af9e"},{url:"assets/wish-export.html-Cg9vcKEx.js",revision:"b44e2d174425be753611370c680f6f44"},{url:"assets/wish-export.html-lup3ALWF.js",revision:"9d50d55690c2546548a7a2f7b8251398"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"images/202409/Microsoft-logo.svg",revision:"490b9c67b69597ce119d75ec333273ae"},{url:"svg/afd-official.svg",revision:"bec79d5731d1c28c509746469eaafd0c"},{url:"svg/afdian.svg",revision:"22e22e64ee9da786e70d0ead0dc1ef26"},{url:"svg/crowdin-core-logo-cDark.svg",revision:"d4869cc6cb3e3a21d73ecea205dd951c"},{url:"svg/crowdin-light.svg",revision:"74707ad6ef73e20c671c197b31d72189"},{url:"svg/ducalis.svg",revision:"8ecc71258d180a1a014cc0730caef494"},{url:"svg/jetbrains.svg",revision:"2d77be0dd63858a25d034b11773b95ac"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"8fa1067c2c83a32167054dbe0a22548b"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"images/202404/wish_import_zh-cn.webp",revision:"a470b1ed0f9b3010f6ecd3f0cdd40fc5"},{url:"images/202409/navicat.png",revision:"da2e6b3cd228afb814f94a5fbc112e95"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
