(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{N3Mv:function(e,t,n){"use strict";var i=n("ZZY7");n.n(i).a},SYI6:function(e,t,n){},URgk:function(e,t,n){e.exports=n("AOTY")("./node_modules/timers-browserify/main.js")},ZZY7:function(e,t,n){},khiK:function(e,t,n){"use strict";n.r(t);var i=n("P2sY"),o=n.n(i),a=n("5WJX"),s=n.n(a),r=(n("eROu"),n("vFQT"),n("Qjfq"),n("Tqh3"),n("MVQK"),n("LTPx"),n("NN4D"),{name:"Editor",props:{id:{type:String,default:"editor"},value:{type:String,required:!0},height:{type:Number,default:300},showImmediate:{type:Boolean,default:!1},setting:{type:Object,default:function(){return{}}},plugins:{type:String|Array,default:function(){return["link","image","fullscreen","colorpicker","textcolor"]}},toolbar:{type:String|Array,default:"bold italic underline strikethrough | fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat moticons forecolor backcolor | fullscreen"}},watch:{value:{deep:!0,handler:function(e,t){var n=this;!this.change&&this.hasInstance&&this.$nextTick(function(){return s.a.get(n.id).setContent(e||"")})}}},data:function(){return{hasInstance:!1,fullscreen:!1,change:!1}},methods:{initTinymce:function(){var e=this,t={selector:"#"+this.id,height:this.height,theme:"modern",body_class:"panel-body ",object_resizing:!1,skin_url:"static/tinymce/skins/lightgray",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",default_link_target:"_blank",link_title:!1,branding:!1,nonbreaking_force_tab:!0,init_instance_callback:function(t){e.hasInstance=!0,e.value&&t.setContent(e.value),t.on("NodeChange Change KeyUp SetContent",function(){e.change=!0;var n=t.getContent();e.$emit("input",n)})},setup:function(e){var t=this;e.on("FullscreenStateChanged",function(e){t.fullscreen=e.state})},toolbar:this.toolbar,plugins:this.plugins};o()(t,this.setting),s.a.init(t)},setContent:function(e){s.a.get(this.id).setContent(e)}},mounted:function(){this.initTinymce()},destroyed:function(){s.a.get(this.id)&&s.a.get(this.id).destroy()}}),l=(n("sWo8"),n("KHd+")),c=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tinymce-wrap"},[e._t("beforeEditor"),e._v(" "),n("textarea",{attrs:{id:e.id}}),e._v(" "),e.showImmediate?n("div",{staticClass:"show-input"},[n("div",{domProps:{innerHTML:e._s(e.value)}})]):e._e(),e._v(" "),e._t("afterEditor")],2)},[],!1,null,null,null);c.options.__file="Editor.vue";var u={components:{Editor:c.exports},name:"RichText",data:function(){return{value:'<h1><span style="background-color: #ffffff; color: #0000ff;">Vue-base-template</span></h1>\n<p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1; color: #34495e; font-family: \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif; font-size: 15px;">Vue (读音 /vjuː/，类似于&nbsp;<span style="font-weight: 600; color: #2c3e50;">view</span>) 是一套用于构建用户界面的<span style="font-weight: 600; color: #2c3e50;">渐进式框架</span>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与<a style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://cn.vuejs.org/v2/guide/single-file-components.html">现代化的工具链</a>以及各种<a style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://github.com/vuejs/awesome-vue#libraries--plugins" target="_blank" rel="noopener">支持类库</a>结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>\n<p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1; color: #34495e; font-family: \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif; font-size: 15px;">如果你想在深入学习 Vue 之前对它有更多了解，我们<a id="modal-player" style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://cn.vuejs.org/v2/guide/">制作了一个视频</a>，带您了解其核心概念和一个示例工程。</p>\n<p style="word-spacing: 0.05em; line-height: 1.6em; margin: 1.2em 0px -1.2em; padding-bottom: 1.2em; position: relative; z-index: 1; color: #34495e; font-family: \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif; font-size: 15px;">如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看<a style="text-decoration-line: none; color: #42b983; font-weight: 600;" href="https://cn.vuejs.org/v2/guide/comparison.html">对比其它框架</a>。</p>\n<p>&nbsp;</p>'}},watch:{value:function(e){}}},d=(n("N3Mv"),Object(l.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor"},[n("Editor",{attrs:{id:"demo",height:200,setting:{},"show-immediate":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},[],!1,null,null,null));d.options.__file="ReachText.vue",t.default=d.exports},sWo8:function(e,t,n){"use strict";var i=n("SYI6");n.n(i).a}}]);