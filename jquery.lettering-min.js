//  $.fn.lettering 1.0  -- MIT/GPL Licensed - More info: http://github.com/maranomynet/Lettering.js/
(function(e){var i=e.fn.lettering=function(f,d){var b=e.extend({},m,j[f]||f||j.letters,d);return this.each(function(){b.prep&&b.prep(this);k.call(this,b);if(b.num){e(this).find(b.tag+'.'+b.cl.replace(/\s/g,'.')).addClass(function(a){return b.cl+(a+1)})}})},k=function(a,f){var d=this,b=a.split?e(d).text().split(a.split):d.nodeType==3?d.nodeValue.split(''):d.nodeType==1?d.childNodes:[],g,h=[],l=b.length;while(l--){var c=b[l];if(c){if(typeof c=='string'){g='';if(a.addAttr){c=a.matAttr?a.mapAttr.call(c):c;g=' data-cont="'+(c=='"'?'&quot;':c)+'"'}h.push('<span class="'+a.cl+'"'+g+'>'+c+'</span>'+(a.after||''))}else{k.call(c,a)}}}h.length&&e(d)[a.split?'html':'replaceWith'](h.reverse().join(''))},j=i.presets={letters:{},kern:{addAttr:!0,num:!1},words:{split:/\s+/,cl:'word',after:' '},lines:{cl:'line',prep:function(a){this.split='|'+(new Date()).getTime()+'|';e(a).find('br').replaceWith(this.split)}}},m=i.defaults={tag:'span',cl:'char',num:!0}})(jQuery);