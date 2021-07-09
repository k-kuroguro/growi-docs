(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{409:function(e,t,a){e.exports=a.p+"assets/img/setup-search-system1.c45ef1bb.png"},410:function(e,t,a){e.exports=a.p+"assets/img/setup-search-system2.bb440832.png"},411:function(e,t,a){e.exports=a.p+"assets/img/setup-search-system3.33542644.png"},716:function(e,t,a){"use strict";a.r(t);var n=a(48),i=Object(n.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"setup-and-management-of-full-text-search"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-management-of-full-text-search","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup and Management of Full Text Search")]),e._v(" "),n("p",[e._v("This guide will explain how to set up and manage Elasticsearch for full text search")]),e._v(" "),n("h2",{attrs:{id:"activating-and-connecting-to-elasticsearch-using-various-environments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activating-and-connecting-to-elasticsearch-using-various-environments","aria-hidden":"true"}},[e._v("#")]),e._v(" Activating and connecting to Elasticsearch using various environments")]),e._v(" "),n("p",[e._v("Please refer to system management page for instructions on activating and connecting to Elasticsearch.")]),e._v(" "),n("ul",[n("li",[e._v("docker-compose\n"),n("ul",[n("li",[e._v("Users of "),n("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/growi-docker-compose"),n("OutboundLink")],1),e._v("\nwill automatically have Elasticsearch activated by default.  No additional setup is required.")])])]),e._v(" "),n("li",[e._v("ubuntu\n"),n("ul",[n("li",[e._v("Please find instructions for setting up and using Elasticsearch "),n("RouterLink",{attrs:{to:"/en/admin-guide/getting-started/ubuntu-server.html#elasticsearch"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Please set the environment variable "),n("code",[e._v("ELASTICSEARCH_URI")]),e._v(" to the URI of the Elasticsearch instance.\nyou will use for GROWI.")])])]),e._v(" "),n("li",[e._v("centOS\n"),n("ul",[n("li",[e._v("Please find instructions for setting up and using Elasticsearch "),n("RouterLink",{attrs:{to:"/en/admin-guide/getting-started/centos.html#elasticsearch"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Please set the environment variable "),n("code",[e._v("ELASTICSEARCH_URI")]),e._v(" to the URI of the Elasticsearch instance.")])])])]),e._v(" "),n("h2",{attrs:{id:"confirming-your-elasticsearch-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#confirming-your-elasticsearch-connection","aria-hidden":"true"}},[e._v("#")]),e._v(" Confirming your Elasticsearch connection")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("If your Elasticsearch is properly set up using the Elasticsearch URI in the "),n("code",[e._v("ELASTICSEARCH_URI")]),e._v(" environment variable,\na search bar wil appear in the GROWI top bar and you will be able to check the Elasticsearch connection\nsettings and index information of your Elasticsearch instance in the (Full Text Search Management?) page of\nthe management screen.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(409),alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("If you see the below error message even though you have set your Elasticsearch URI properly, double check your\nElasticsearch information and URI.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(410),alt:""}})])])]),e._v(" "),n("h2",{attrs:{id:"rebuilding-indexes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rebuilding-indexes","aria-hidden":"true"}},[e._v("#")]),e._v(" Rebuilding Indexes")]),e._v(" "),n("p",[e._v("In order to use Elasticsearch's search capabilities, data from the search database and data from MongoDB\nmust first be combined to create searchable data.  If the data has become inaccessible due to direct user\naction or some other interference, the search functionality will not be able to function properly.")]),e._v(" "),n("p",[e._v("In such cases, you may be able to fix the problem by rebuilding the index using the (Full Text Search Management?)\npage on the management screen.")]),e._v(" "),n("p",[e._v("You can rebuild the index by clicking the Rebuild Index button on the (Full Text Search Management?) page.\nIt may take a few seconds before the index rebuild is complete.")]),e._v(" "),n("h2",{attrs:{id:"normalizing-indexes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#normalizing-indexes","aria-hidden":"true"}},[e._v("#")]),e._v(" Normalizing Indexes")]),e._v(" "),n("p",[e._v("An index may become corrupted if the processing of the index is interrupted.  One way this might occur is\nif the above rebuilding operation is interrupted.  When doing an index rebuild, please wait until the\nrebuild is complete to avoid corrupting the data.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(411),alt:""}})]),e._v(" "),n("p",[e._v("A corrupted index can be repaired and returned to usable status by renormalizing the index as shown above.")])])},[],!1,null,null,null);t.default=i.exports}}]);