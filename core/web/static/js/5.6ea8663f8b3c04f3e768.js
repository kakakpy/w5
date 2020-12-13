webpackJsonp([5],{OlBJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=[{title:"分类",dataIndex:"type_name",key:"type_name",scopedSlots:{customRender:"type_name"}},{title:"剧本名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"}},{title:"备注",dataIndex:"remarks",key:"remarks",scopedSlots:{customRender:"remarks"}},{title:"创建人",dataIndex:"nick_name",key:"nick_name"},{title:"更新时间",key:"update_time",dataIndex:"update_time",scopedSlots:{customRender:"update_time"}},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"},width:60}],o={name:"workflowHome",data:function(){return{columns:a,loading:!1,data:[],so_text:"",select_type:"0",type_data:[]}},mounted:function(){this.onLoad()},methods:{onLoad:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";this.loading=!0,this.onSelectType(),this.$http.post("/api/v1/w5/get/workflow/list",{keywords:e,type:n}).then(function(e){0==e.code?(t.data=e.data,t.loading=!1):(t.$message.error(e.msg),t.loading=!1)})},onSelectType:function(){var t=this;this.$http.post("/api/v1/w5/get/type/list",{type:1}).then(function(e){0==e.code?t.type_data=e.data:t.$message.error(e.msg)})},del:function(t){var e=this;this.$http.post("/api/v1/w5/post/workflow/del",{uuid:t}).then(function(t){0==t.code?(e.$message.success("删除成功"),e.onLoad()):e.$message.error(t.msg)})},onSearch:function(t){this.so_text=t,this.onLoad(this.so_text,this.select_type)},onSelect:function(t){this.select_type=t,this.onLoad(this.so_text,this.select_type)},tzAddPlayBook:function(){var t=this;this.$http.post("/api/v1/w5/post/workflow/add").then(function(e){if(0==e.code){var n=e.data.uuid;t.$router.push({name:"WorkflowEdit",params:{uuid:n}})}else t.$message.error(e.msg)})},tzUpdatePlayBook:function(t){this.$router.push({name:"WorkflowEdit",params:{uuid:t}})},onSwitch:function(t,e){var n=this,a=1;t&&(a=0),this.$http.post("/api/v1/w5/post/workflow/status",{id:e,status:a}).then(function(t){0==t.code?(n.$message.success("操作成功"),n.onLoad()):n.$message.error(t.msg)})},onFilterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-content",[n("div",{staticClass:"header_div"},[n("a-select",{staticClass:"align",staticStyle:{width:"120px"},attrs:{"show-search":"","filter-option":t.onFilterOption,"default-value":"0"},on:{change:t.onSelect}},[n("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),t._v(" "),t._l(t.type_data,function(e,a){return n("a-select-option",{key:a,attrs:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),n("a-input-search",{staticClass:"align",staticStyle:{width:"200px"},attrs:{placeholder:"请输入剧本名称"},on:{search:t.onSearch}}),t._v(" "),n("a-button",{staticClass:"align btn_add",attrs:{type:"primary",icon:"plus-circle"},on:{click:t.tzAddPlayBook}},[t._v("\n            创建剧本\n        ")])],1),t._v(" "),n("a-table",{attrs:{rowKey:"id",columns:t.columns,"data-source":t.data,loading:t.loading},scopedSlots:t._u([{key:"type_name",fn:function(e){return n("a-tag",{attrs:{color:"#7d838c"}},[t._v("\n            "+t._s(e)+"\n        ")])}},{key:"name",fn:function(e){return n("span",{},[n("b",[t._v(t._s(e))])])}},{key:"update_time",fn:function(e){return n("span",{},[t._v("\n            "+t._s(t.Dayjs(e).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"create_time",fn:function(e){return n("span",{},[t._v("\n            "+t._s(t.Dayjs(e).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"remarks",fn:function(e){return n("span",{},[t._v("\n            "+t._s(e)+"\n        ")])}},{key:"status",fn:function(e,a){return n("div",{},[n("a-switch",0===e?{attrs:{"default-checked":""},on:{click:function(e){return t.onSwitch(e,a.id)}}}:{on:{click:function(e){return t.onSwitch(e,a.id)}}},[n("a-icon",{attrs:{slot:"checkedChildren",type:"check"},slot:"checkedChildren"}),t._v(" "),n("a-icon",{attrs:{slot:"unCheckedChildren",type:"close"},slot:"unCheckedChildren"})],1)],1)}},{key:"action",fn:function(e,a){return n("span",{},[n("a-space",{attrs:{size:"small"}},[n("a-tooltip",{attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[t._v("删除")])]),t._v(" "),n("a-popconfirm",{attrs:{title:"是否要删除该剧本?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.del(a.uuid)}}},[n("a-icon",{staticClass:"pointer",attrs:{type:"delete"}})],1)],2),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a-tooltip",{attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[t._v("编辑")])]),t._v(" "),n("a-icon",{staticClass:"pointer",attrs:{type:"form"},on:{click:function(e){return t.tzUpdatePlayBook(a.uuid)}}})],2)],1)],1)}}])})],1)},staticRenderFns:[]};var i=n("VU/8")(o,s,!1,function(t){n("vvl2")},"data-v-cc436ed4",null);e.default=i.exports},vvl2:function(t,e){}});