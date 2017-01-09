(function(){var k=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["frame-overlay"]=k({1:function(a,e,f,d){var b;return null!=(b=e["if"].call(a,d&&d.first,{name:"if",hash:{},fn:this.program(2,d,0),inverse:this.noop,data:d}))?b:""},2:function(a,e,f,d){var b;f=e.helperMissing;var c=this.escapeExpression;return'                <img src="'+c((b=null!=(b=e.image||(null!=a?a.image:a))?b:f,"function"===typeof b?b.call(a,{name:"image",hash:{},data:d}):b))+'" alt="'+c((b=null!=(b=e.title||(null!=a?a.title:a))?b:f,"function"===typeof b?b.call(a,{name:"title",hash:{},data:d}):b))+'">\n'},4:function(a,e,f,d){return'                <figure id="prev">\n                    <img src="/static/img/design/prev.jpg" alt="previous">\n                </figure>\n'},6:function(a,e,f,d){var b,c;f=e.helperMissing;var g=this.escapeExpression;return'                    <li class="'+(null!=(b=e["if"].call(a,d&&d.first,{name:"if",hash:{},fn:this.program(7,d,0),inverse:this.noop,data:d}))?b:"")+" "+(null!=(b=e["if"].call(a,null!=a?a.isVisible:a,{name:"if",hash:{},fn:this.program(9,d,0),inverse:this.noop,data:d}))?b:"")+'" data-index="'+g((c=null!=(c=e.index||(null!=a?a.index:a))?c:f,"function"===typeof c?c.call(a,{name:"index",hash:{},data:d}):c))+'">\n                        <img src="'+g((c=null!=(c=e.thumbnail||(null!=a?a.thumbnail:a))?c:f,"function"===typeof c?c.call(a,{name:"thumbnail",hash:{},data:d}):c))+'" alt="'+g((c=null!=(c=e.title||(null!=a?a.title:a))?c:f,"function"===typeof c?c.call(a,{name:"title",hash:{},data:d}):c))+'">\n                    </li>\n'},7:function(a,e,f,d){return"selected"},9:function(a,e,f,d){return"show"},11:function(a,e,f,d){return'                <figure id="next" class="enabled">\n                    <img src="/static/img/design/next.jpg" alt="next">\n                </figure>\n'},13:function(a,e,f,d){var b,c;f=e.helperMissing;return"                <li "+(null!=(b=e["if"].call(a,d&&d.first,{name:"if",hash:{},fn:this.program(14,d,0),inverse:this.noop,data:d}))?b:"")+">\n                    <h3>"+(null!=(b=(c=null!=(c=e.title||(null!=a?a.title:a))?c:f,"function"===typeof c?c.call(a,{name:"title",hash:{},data:d}):c))?b:"")+"</h3>\n                    <p>"+(null!=(b=(c=null!=(c=e.text||(null!=a?a.text:a))?c:f,"function"===typeof c?c.call(a,{name:"text",hash:{},data:d}):c))?b:"")+"</p>\n                </li>\n"},14:function(a,e,f,d){return'class="selected"'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,e,f,d){var b,c;f=this.lambda;var g=this.escapeExpression,h=e.helperMissing;return'<section id="frame-overlay" class="animate">\n    <aside></aside>\n    <main style="height:'+g(f(null!=(b=null!=a?a.frame:a)?b.height:b,a))+"; left:"+g(f(null!=(b=null!=a?a.frame:a)?b.left:b,a))+"; overflow:hidden; top:"+g(f(null!=(b=null!=a?a.frame:a)?b.top:b,a))+"; width:"+g(f(null!=(b=null!=a?a.frame:a)?b.width:b,a))+';">\n        <div id="img-main">\n'+(null!=(b=e.each.call(a,null!=a?a.info:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?b:"")+'        </div>\n        <div id="img-thumbs">\n'+(null!=(b=e["if"].call(a,null!=a?a.hasPagination:a,{name:"if",hash:{},fn:this.program(4,d,0),inverse:this.noop,data:d}))?b:"")+"            <ul>\n"+(null!=(b=e.each.call(a,null!=a?a.info:a,{name:"each",hash:{},fn:this.program(6,d,0),inverse:this.noop,data:d}))?b:"")+"            </ul>\n"+(null!=(b=e["if"].call(a,null!=a?a.hasPagination:a,{name:"if",hash:{},fn:this.program(11,d,0),inverse:this.noop,data:d}))?b:"")+'        </div>\n        <div id="img-text">\n            <header>\n                <h1>'+(null!=(b=(c=null!=(c=e.client||(null!=a?a.client:a))?c:h,"function"===typeof c?c.call(a,{name:"client",hash:{},data:d}):c))?b:"")+" &ndash; "+(null!=(b=(c=null!=(c=e.project||(null!=a?a.project:a))?c:h,"function"===typeof c?c.call(a,{name:"project",hash:{},data:d}):c))?b:"")+"</h1>\n                <h2>"+(null!=(b=(c=null!=(c=e.technology||(null!=a?a.technology:a))?c:h,"function"===typeof c?c.call(a,{name:"technology",hash:{},data:d}):c))?b:"")+"</h2>\n            </header>\n            <ul>\n"+(null!=(b=e.each.call(a,null!=a?a.info:a,{name:"each",hash:{},fn:this.program(13,d,0),inverse:this.noop,data:d}))?b:"")+'            </ul>\n        </div>\n    </main>\n    <figure class="close"></figure>\n</section>\n\n<figure id="frame-clone" style="height:'+g(f(null!=(b=null!=a?a.frame:a)?b.height:b,a))+"; left:"+g(f(null!=(b=null!=a?a.frame:a)?b.left:b,a))+"; top:"+g(f(null!=(b=null!=a?a.frame:a)?b.top:b,a))+"; width:"+g(f(null!=(b=null!=a?a.frame:a)?b.width:b,a))+';">\n    <img src="/static/img/portfolio/'+g(f(null!=(b=null!=a?a.frame:a)?b.folderNum:b,a))+'/icon.jpg" alt="">\n</figure>\n'},useData:!0})})();
