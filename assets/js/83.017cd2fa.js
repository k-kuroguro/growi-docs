(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{697:function(t,e,a){"use strict";a.r(e);var r=a(48),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"autostart-using-systemd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autostart-using-systemd","aria-hidden":"true"}},[t._v("#")]),t._v(" Autostart using systemd")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("This chapter introduces how to autostart GROWI using systemd.")]),t._v(" "),a("h2",{attrs:{id:"create-a-unit-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-unit-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Create a Unit File")]),t._v(" "),a("p",[t._v("Create "),a("code",[t._v("/etc/systemd/system/growi.service")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[Unit]\nDescription=Growi\nAfter=network.target mongod.service\n\n[Service]\nWorkingDirectory=/opt/growi\nEnvironment=PORT=3000\\\nMONGO_URI=mongodb://localhost:27017/growi\\\nELASTICSEARCH_URI=http://localhost:9200/growi\nExecStart=/usr/local/bin/npm start\n\n[Install]\nWantedBy=multi-user.target\n")])])]),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h4",{attrs:{id:"workingdirectory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workingdirectory","aria-hidden":"true"}},[t._v("#")]),t._v(" WorkingDirectory")]),t._v(" "),a("p",[t._v("Set "),a("code",[t._v("WorkingDirectory")]),t._v(" to the directory where GROWI is located. If you have followed "),a("RouterLink",{attrs:{to:"/en/admin-guide/getting-started/docker-compose.html"}},[t._v("GROWI Docs")]),t._v(", GROWI should be found in  "),a("code",[t._v("/opt/growi")]),t._v(". Set it according to your environment.")],1),t._v(" "),a("h4",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment","aria-hidden":"true"}},[t._v("#")]),t._v(" Environment")]),t._v(" "),a("p",[t._v("Set environment variables such as "),a("code",[t._v("MONGO_URI")]),t._v(" and "),a("code",[t._v("FILE_UPLOAD")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"execstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execstart","aria-hidden":"true"}},[t._v("#")]),t._v(" ExecStart")]),t._v(" "),a("p",[t._v("Set "),a("code",[t._v("ExecStart")]),t._v(" according to your environment. On CentOS, set it to "),a("code",[t._v("/usr/bin/npm start")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"run-systemctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-systemctl","aria-hidden":"true"}},[t._v("#")]),t._v(" Run systemctl")]),t._v(" "),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[t._v("#")]),t._v(" Start")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo systemctl start growi\n")])])]),a("h3",{attrs:{id:"enable-autostart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-autostart","aria-hidden":"true"}},[t._v("#")]),t._v(" Enable Autostart")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo systemctl enable growi\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);