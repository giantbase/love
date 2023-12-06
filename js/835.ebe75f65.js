"use strict";(self["webpackChunklove"]=self["webpackChunklove"]||[]).push([[835],{6835:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"header"},[t("span",[e._v(e._s(e.inputTitle))]),t("el-input",{staticClass:"select",attrs:{placeholder:"请输入搜索内容"},model:{value:e.loveData.condition,callback:function(t){e.$set(e.loveData,"condition",t)},expression:"loveData.condition"}},[t("el-button",{staticClass:"btnSearch",attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.btnSearch},slot:"append"},[e._v("搜索")])],1)],1),t("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"志愿队伍",name:"first"}},[t("div",{staticClass:"teamCard"},e._l(e.allTeamInfo.records,(function(a){return t("router-link",{key:a.id,staticClass:"team",attrs:{to:`/volunteerTeam?id=${a.id}`}},[t("span",{staticClass:"hidden"},[t("img",{attrs:{src:a.imgUrl,alt:""}})]),t("div",{staticClass:"teamIntro"},[t("h1",[e._v(e._s(a.name))]),t("div",{staticClass:"teamPeople"},[t("span",[e._v("队伍人数："),t("i",[e._v(e._s(a.memberNumber))]),e._v(" 人")]),t("span",[e._v("还可加入："),t("i",[e._v(e._s(a.needPeople))]),e._v(" 人")])]),t("div",{staticClass:"teamLocate"},[t("i",{staticClass:"el-icon-location",staticStyle:{color:"#ff9e2c"}}),e._v("所属地： "),t("span",[e._v(e._s(a.address))])])])])})),1)]),t("el-tab-pane",{attrs:{label:"志愿活动",name:"second"}},[t("div",{staticClass:"teamCard"},e._l(e.allitemInfo.records,(function(a){return t("router-link",{key:a.id,staticClass:"team activity",attrs:{to:`/volunteerActivity?id=${a.id}`}},[t("span",{staticClass:"hidden"},[t("img",{attrs:{src:a.imgUrl,alt:""}})]),t("div",{staticClass:"teamIntro"},[t("h1",[e._v(e._s(a.name))]),t("div",{staticClass:"activityPeople"},[t("span",[e._v("剩余"),t("i",[e._v(e._s(a.needMember-a.enrollMember)+" 人")])]),t("span",[e._v("目标"),t("i",[e._v(e._s(a.needMember)+" 人")])]),t("span",[e._v("报名"),t("i",[e._v(e._s(a.enrollMember)+" 人")])])]),t("div",{staticClass:"teamLocate"},[t("i",{staticClass:"el-icon-location",staticStyle:{color:"#ff9e2c"}}),e._v("详细地址： "),t("span",[e._v(e._s(a.address))])])])])})),1)])],1),t("Pagination",{attrs:{pageNo:e.loveData.currentPage,pageSize:e.loveData.size,total:e.total,continues:5},on:{getPageNo:e.getPageNo}}),t("div",{staticClass:"locate"},[t("span",[e._v(" 所在地区当前位置： "),t("i",[e._v(e._s(e.location.teamProvince)+" "+e._s(e.location.teamCity))])])]),t("el-button",{staticClass:"drawer",attrs:{type:"primary"},on:{click:e.drawerChange}},[e._v(" 我的志愿队伍 ")]),t("el-drawer",{attrs:{title:"我的志愿队伍",visible:e.drawer},on:{"update:visible":function(t){e.drawer=t}}},[this.teamId?t("div",[t("h1",{staticClass:"serve"},[e._v(" 我的服务时长："),t("i",[e._v(e._s(e._f("timestamp")(e.$store.state.loveTeam.totalDuration)))])]),t("h1",{staticClass:"serve"},[e._v(" 我加入的时间："),t("i",[e._v(e._s(e._f("timeFilter")(e.peopleTeam.joinTeamTime)))])]),t("h1",{staticClass:"serve"},[e._v("我加入的志愿团队：")]),t("router-link",{staticClass:"team drawerTeam",attrs:{to:`/volunteerTeam?id=${e.peopleTeam.id}`}},[t("span",{staticClass:"hidden"},[t("img",{attrs:{src:e.peopleTeam.imgUrl,alt:""}})]),t("div",{staticClass:"teamIntro"},[t("h1",[e._v(e._s(e.peopleTeam.name))]),t("div",{staticClass:"teamPeople"},[t("span",[e._v("队伍人数："),t("i",[e._v(e._s(e.peopleTeam.memberNumber))]),e._v(" 人")]),t("span",[e._v("还可加入："),t("i",[e._v(e._s(e.peopleTeam.size-e.peopleTeam.memberNumber))]),e._v(" 人")])]),t("div",{staticClass:"teamLocate"},[t("i",{staticClass:"el-icon-location",staticStyle:{color:"#ff9e2c"}}),e._v("所属地： "),t("span",[e._v(e._s(e.peopleTeam.address))])])])])],1):t("el-empty",{attrs:{description:"您还没有加入志愿队伍哦！！"}})],1)],1)},i=[],o=(a(7658),a(3822)),l={name:"LoveTeam",data(){return{activeName:"first",drawer:!1,searchOrClick:!1,location:{teamProvince:"",teamCity:""},loveData:{currentPage:1,condition:"",size:8}}},methods:{getCity(){const e=new BMap.Geolocation;var t=this;e.getCurrentPosition((function(e){let a=e.address.province,s=e.address.city;t.location.teamProvince=a,t.location.teamCity=s}),(function(e){t.location.teamProvince="定位失败"}),{provider:"baidu"})},drawerChange(){this.drawer=!0,0==this.teamId&&this.$message({message:"对不起，您尚且没有加入志愿队伍",type:"warning"})},btnSearch(){""!=this.loveData.condition?"second"==this.activeName?(this.$store.dispatch("getSelectItemVoByName",this.loveData),this.searchOrClick=!0):(this.$store.dispatch("getTeamsByName",this.loveData),this.searchOrClick=!0):this.$message({message:"搜索框不能为空，请您输入需要搜索的内容!",type:"warning"})},getPageNo(e){this.loveData.currentPage=e,this.getLoveDate()},getLoveDate(){let e=this.loveData;for(let t in e)""===e[t]&&delete e[t];"first"==this.activeName?this.$store.dispatch("getAllTeam",e):this.$store.dispatch("getItemVos",e)}},watch:{drawer(e,t){1==e?this.$router.push({query:{islogin:1}}):this.$router.push({query:{}})},activeName(){this.loveData.condition="",Object.assign(this.loveData,{currentPage:1,condition:"",size:8}),this.getLoveDate()},"loveData.condition":{handler(e){""==e&&this.searchOrClick&&(this.getLoveDate(),this.searchOrClick=!1)}},"location.teamProvince":{handler(e){"定位失败"==e&&this.getCity()}}},mounted(){this.getCity(),this.getLoveDate(),null!=this.memberData&&this.$store.dispatch("getSelectJoinTeam",this.memberData.userId)},computed:{...(0,o.rn)({allTeamInfo:e=>e.loveTeam.allTeamInfo||[],allitemInfo:e=>e.loveTeam.allitemInfo||[],peopleTeam:e=>e.loveTeam.peopleTeam||[],memberData:e=>e.user.member,teamId:e=>e.loveTeam.teamId}),total(){return"first"==this.activeName?this.allTeamInfo.total:this.allitemInfo.total},inputTitle(){return"first"==this.activeName?"志愿队伍搜索：":"志愿活动搜索："}},filters:{timeFilter(e){if(void 0!=e)return e.split("T")[0]},timestamp(e){if(void 0!=e){if(0==e)return"0 小时";const t=Math.floor(e/36e5),a=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3);let i="";return t>0&&(i+=t+"时"),a>0&&(i+=a+"分"),s>0&&(i+=s+"秒"),i}}}},r=l,n=a(1001),c=(0,n.Z)(r,s,i,!1,null,"ff8a8a9c",null),m=c.exports}}]);