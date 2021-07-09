(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{842:function(t,e,a){"use strict";a.r(e);var r=a(48),n=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"slack-bot-の開発環境構築"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slack-bot-の開発環境構築","aria-hidden":"true"}},[t._v("#")]),t._v(" Slack Bot の開発環境構築")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#概要"}},[t._v("概要")])]),a("li",[a("a",{attrs:{href:"#準備"}},[t._v("準備")])]),a("li",[a("a",{attrs:{href:"#サーバー起動手順"}},[t._v("サーバー起動手順")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("p",[t._v("Slack 上で GROWI にアクセス、操作する Slack-Bot「GROWI-Bot」の開発手順です。")]),t._v(" "),a("ul",[a("li",[t._v("Bot 管理ベージ\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://api.slack.com/apps/A01KC9EV5KK",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.slack.com/apps/A01KC9EV5KK"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#準備","aria-hidden":"true"}},[t._v("#")]),t._v(" 準備")]),t._v(" "),a("ul",[a("li",[t._v("開発時にサーバーのデプロイするために"),a("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngrok"),a("OutboundLink")],1),t._v(" をインストールしておく。")]),t._v(" "),a("li",[t._v("「GROWI-Bot」のコラボレータ申請をする。")])]),t._v(" "),a("h2",{attrs:{id:"サーバー起動手順"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#サーバー起動手順","aria-hidden":"true"}},[t._v("#")]),t._v(" サーバー起動手順")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("以下の情報を取得")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://api.slack.com/apps/A01KC9EV5KK/general",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basic Information"),a("OutboundLink")],1),t._v(" の 「App Credentials」内の "),a("code",[t._v("Signing Secret")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://api.slack.com/apps/A01KC9EV5KK/oauth?",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth & Permissions"),a("OutboundLink")],1),t._v(" の「OAuth Tokens for Your Team」内の "),a("code",[t._v("Bot User OAuth Access Token")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("config/env.dev.js")]),t._v(" に取得した値をセットする")]),t._v(" "),a("div",{staticClass:"language-text:config.dev.js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  SLACK_SIGNING_SECRET: '{Signing Secret}',\n  SLACK_BOT_TOKEN: '{Bot User OAuth Access Token}',\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("yarn server")]),t._v(" で起動")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("$ ngrok http 3000")]),t._v(" を実行")]),t._v(" "),a("div",{staticClass:"language-shell:ターミナル extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ ngrok http 3000\n\nngrok by @inconshreveable                                       (Ctrl+C to quit)\n\nSession Status                online\nSession Expires               37 minutes\nVersion                       2.3.35\nRegion                        United States (us)\nWeb Interface                 http://127.0.0.1:4040\nForwarding                    http://ad2a1e1851f1.ngrok.io -> http://localhost:3\nForwarding                    https://ad2a1e1851f1.ngrok.io -> http://localhost:\n\nConnections                   ttl     opn     rt1     rt5     p50     p90\n                              5       0       0.00    0.00    5.00    5.01\n\nHTTP Requests\n-------------\n")])])]),a("p",[t._v("Forwarding の https の方の URL (今回の例では "),a("code",[t._v("https://ad2a1e1851f1.ngrok.io")]),t._v(" )をコピー")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://api.slack.com/apps/A01KC9EV5KK/slash-commands?",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slash Commands"),a("OutboundLink")],1),t._v(" の Request URL に、コピーした URL + "),a("code",[t._v("/_api/v3/slack-bot")]),t._v(" を設定")])]),t._v(" "),a("li",[a("p",[t._v("Slack にて該当のアクションを行い、サーバーへのアクセスが確認できたら設定完了")])])])])},[],!1,null,null,null);e.default=n.exports}}]);