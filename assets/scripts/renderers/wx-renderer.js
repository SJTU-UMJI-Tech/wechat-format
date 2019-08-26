// Inject Xiumi Styles
var H2_PREFIX = '<section powered-by="xiumi.us" style="margin-top: 10px;margin-bottom: 10px;caret-color: rgb(0, 0, 0);color: rgb(0, 0, 0);font-family: -webkit-standard;font-size: 16px;white-space: normal;box-sizing: border-box;"><section style="display: flex;align-items: center;box-sizing: border-box;"><section style="flex: 1 1 auto;height: 1px;background-color: rgb(255, 237, 237);box-sizing: border-box;"></section><section style="flex: 0 1 auto;box-sizing: border-box;"><section opera-tn-ra-cell="_$.pages:0.layers:0.comps:21.col1" style="padding-right: 10px;padding-left: 10px;box-sizing: border-box;"><section powered-by="xiumi.us" style="text-align: center;box-sizing: border-box;"><section style="display: inline-block;vertical-align: middle;width: auto;background-color: rgba(255, 255, 255, 0);line-height: 0;letter-spacing: 0px;box-sizing: border-box;"><section powered-by="xiumi.us" style="box-sizing: border-box;"><section style="display: inline-block;width: 22px;height: 13px;vertical-align: top;overflow: hidden;line-height: 0;letter-spacing: 0px;box-sizing: border-box;"><section powered-by="xiumi.us" style="box-sizing: border-box;"><section style="max-width: 100%;vertical-align: middle;display: inline-block;line-height: 0;box-sizing: border-box;"><svg class="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 119.9 66.1" style="vertical-align: middle;max-width: 100%;box-sizing: border-box;" width="100%"><path style="box-sizing: border-box;" d="M4.4,65.4L4.4,65.4c-3.8-1.7-5.5-6.1-3.8-9.9L23.6,4.4c1.7-3.8,6.1-5.5,9.9-3.8l0,0  c3.8,1.7,5.5,6.1,3.8,9.9L14.3,61.7C12.6,65.4,8.2,67.1,4.4,65.4z" fill="rgb(255,197,197)"></path><path style="box-sizing: border-box;" d="M45.4,65.4L45.4,65.4c-3.8-1.7-5.5-6.1-3.8-9.9L64.6,4.4c1.7-3.8,6.1-5.5,9.9-3.8l0,0  c3.8,1.7,5.5,6.1,3.8,9.9L55.3,61.7C53.6,65.4,49.2,67.1,45.4,65.4z" fill="rgb(255,197,197)"></path><path style="box-sizing: border-box;" d="M86.4,65.4L86.4,65.4c-3.8-1.7-5.5-6.1-3.8-9.9l22.9-51.1c1.7-3.8,6.1-5.5,9.9-3.8l0,0  c3.8,1.7,5.5,6.1,3.8,9.9L96.3,61.7C94.6,65.4,90.2,67.1,86.4,65.4z" fill="rgb(255,197,197)"></path></svg></section></section></section></section></section><section style="display: inline-block;vertical-align: middle;width: auto;background-color: rgba(255, 255, 255, 0);box-sizing: border-box;"><section powered-by="xiumi.us" style="padding-right: 10px;padding-left: 10px;text-align: justify;color: rgb(101, 32, 10);font-size: 20px;box-sizing: border-box;"><p style="box-sizing: border-box;"><span style="font-size: 22px;"><strong style="box-sizing: border-box;">';
var H2_POSTFIX = '</strong></span><span style="font-size: 24px;"><strong style="box-sizing: border-box;"></strong></span><strong style="box-sizing: border-box;"></strong></p></section></section><section style="display: inline-block;vertical-align: middle;width: auto;background-color: rgba(255, 255, 255, 0);line-height: 0;letter-spacing: 0px;box-sizing: border-box;"><section powered-by="xiumi.us" style="box-sizing: border-box;"><section style="display: inline-block;width: 22px;height: 13px;vertical-align: top;overflow: hidden;line-height: 0;letter-spacing: 0px;box-sizing: border-box;"><section powered-by="xiumi.us" style="box-sizing: border-box;"><section style="max-width: 100%;vertical-align: middle;display: inline-block;line-height: 0;box-sizing: border-box;"><svg class="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 119.9 66.1" style="vertical-align: middle;max-width: 100%;box-sizing: border-box;" width="100%"><path style="box-sizing: border-box;" d="M4.4,65.4L4.4,65.4c-3.8-1.7-5.5-6.1-3.8-9.9L23.6,4.4c1.7-3.8,6.1-5.5,9.9-3.8l0,0  c3.8,1.7,5.5,6.1,3.8,9.9L14.3,61.7C12.6,65.4,8.2,67.1,4.4,65.4z" fill="rgb(255,197,197)"></path><path style="box-sizing: border-box;" d="M45.4,65.4L45.4,65.4c-3.8-1.7-5.5-6.1-3.8-9.9L64.6,4.4c1.7-3.8,6.1-5.5,9.9-3.8l0,0  c3.8,1.7,5.5,6.1,3.8,9.9L55.3,61.7C53.6,65.4,49.2,67.1,45.4,65.4z" fill="rgb(255,197,197)"></path><path style="box-sizing: border-box;" d="M86.4,65.4L86.4,65.4c-3.8-1.7-5.5-6.1-3.8-9.9l22.9-51.1c1.7-3.8,6.1-5.5,9.9-3.8l0,0  c3.8,1.7,5.5,6.1,3.8,9.9L96.3,61.7C94.6,65.4,90.2,67.1,86.4,65.4z" fill="rgb(255,197,197)"></path></svg></section></section></section></section></section></section></section></section><section style="flex: 1 1 auto;height: 1px;transform: matrix(-1, 0, 0, 1, 0, 0);background-color: rgb(255, 237, 237);box-sizing: border-box;"><br></section></section></section>';
var H3_PREFIX = '<section powered-by="xiumi.us" style="caret-color: rgb(0, 0, 0);color: rgb(0, 0, 0);font-family: -webkit-standard;font-size: 16px;white-space: normal;margin-top: 10px;margin-bottom: 10px;text-align: left;box-sizing: border-box;"><section style="display: inline-block;vertical-align: top;padding-left: 6px;box-sizing: border-box;"><section style="height: 22px;border-left-width: 1px;border-left-style: solid;border-color: rgb(253, 219, 219);margin-bottom: -21px;transform: rotate(30deg);transform-origin: 0px center;box-sizing: border-box;"></section><section style="border-top-width: 1px;border-top-style: solid;border-color: rgb(253, 219, 219);margin-left: 6px;padding-bottom: 2px;font-size: 18px;color: rgb(162, 68, 68);box-sizing: border-box;"><p style="box-sizing: border-box;"><span style="font-size: 22px;">';
var H3_POSTFIX = '</span></p></section></section></section>';
var BLOCKQUOTE_PREFIX = '<section powered-by="xiumi.us" style="caret-color: rgb(0, 0, 0);color: rgb(0, 0, 0);font-family: -webkit-standard;font-size: 16px;white-space: normal;text-align: left;margin-top: 10px;margin-bottom: -40px;box-sizing: border-box;"><section class="" style="display: inline-block;vertical-align: top;overflow: hidden;height: 40px;width: 60px;border-left-width: 10px;border-left-style: solid;border-left-color: rgb(255, 237, 237);border-bottom-left-radius: 0px;box-sizing: border-box;"></section></section><section powered-by="xiumi.us" style="font-family: -webkit-standard;font-size: 16px;white-space: normal;color: rgb(121, 121, 121);padding-right: 20px;padding-left: 20px;line-height: 1.8;box-sizing: border-box;">';
var BLOCKQUOTE_POSTFIX = '</section><section powered-by="xiumi.us" style="caret-color: rgb(0, 0, 0);color: rgb(0, 0, 0);font-family: -webkit-standard;font-size: 16px;white-space: normal;text-align: right;margin-top: -40px;margin-bottom: 10px;box-sizing: border-box;"><section class="" style="display: inline-block;vertical-align: top;overflow: hidden;height: 40px;width: 60px;border-left-width: 10px;border-left-style: none;border-left-color: rgb(253, 219, 219);border-bottom-left-radius: 0px;border-right-width: 10px;border-right-style: solid;border-right-color: rgb(253, 219, 219);border-top-right-radius: 0px;box-sizing: border-box;"></section></section>'

var WxRenderer = function (opts) {
  this.opts = opts
  var ENV_USE_REFERENCES = true
  var ENV_STETCH_IMAGE = true

  var footnotes = []
  var footnoteindex = 0
  var styleMapping = null

  var FONT_FAMILY_MONO = "Operator Mono, Consolas, Monaco, Menlo, monospace"

  var COPY = function (base, extend) { return Object.assign({}, base, extend)}

  this.buildTheme = function (themeTpl) {
    var mapping = {}
    var base = COPY(themeTpl.BASE, {
      'font-family': this.opts.fonts,
      'font-size': this.opts.size
    })
    var base_block = COPY(base, {
      'margin': '20px 10px'
    })
    for (var ele in themeTpl.inline) {
      if (themeTpl.inline.hasOwnProperty(ele)) {
        var style = themeTpl.inline[ele]
        if (ele === 'codespan') {
          style['font-family'] = FONT_FAMILY_MONO
        }
        mapping[ele] = COPY(base, style)
      }
    }
    for (var ele in themeTpl.block) {
      if (themeTpl.block.hasOwnProperty(ele)) {
        var style = themeTpl.block[ele]
        if (ele === 'code') {
          style['font-family'] = FONT_FAMILY_MONO
        }
        mapping[ele] = COPY(base_block, style)
      }
    }
    return mapping
  }

  var S = function (tokenName) {
    var arr = []
    var dict = styleMapping[tokenName]
    for (const key in dict) {
      arr.push(key + ':' + dict[key])
    }
    return 'style="' + arr.join(';') + '"'
  }

  var addFootnote = function (title, link) {
    footnoteindex += 1
    footnotes.push([footnoteindex, title, link])
    return footnoteindex
  }

  this.buildFootnotes = function () {
    var footnoteArray = footnotes.map(function (x) {
      if (x[1] === x[2]) {
        return '<code style="font-size: 90%; opacity: 0.6;">[' + x[0] + ']</code>: <i>'  + x[1] +'</i><br/>'
      }
      return '<code style="font-size: 90%; opacity: 0.6;">[' + x[0] + ']</code> ' + x[1] + ': <i>'  + x[2] +'</i><br/>'
    })
    return '<h3 ' + S('h3') + '>References</h3><p ' + S('footnotes') + '>'  + footnoteArray.join('\n') + '</p>'
  }

  this.setOptions = function (newOpts) {
    this.opts = COPY(this.opts, newOpts)
  }

  this.hasFootnotes = function () {
    return footnotes.length !== 0
  }

  this.getRenderer = function () {
    footnotes = []
    footnoteindex = 0

    styleMapping = this.buildTheme(this.opts.theme)
    var renderer = new marked.Renderer()
    FuriganaMD.register(renderer);

    renderer.heading = function (text, level) {
			if (level == 1) {
				return ''
			} else if (level == 2) {
				return H2_PREFIX + text + H2_POSTFIX
		  } else if (level == 3) {
		  	return H3_PREFIX + text + H3_POSTFIX
		  }
      if (level < 3) {
        return '<h2 ' + S('h2') + '>' + text + '</h2>'
      } else {
        return '<h3 ' + S('h3') + '>' + text + '</h3>'
      }
    }
    renderer.paragraph = function (text) {
      return '<p ' + S('p') + '>' + text + '</p>'
    }
    renderer.blockquote = function (text) {
      return BLOCKQUOTE_PREFIX + text + BLOCKQUOTE_POSTFIX
      //return '<blockquote ' + S('blockquote') + '>' + text + '</blockquote>'
    }
    renderer.code = function (text, infostring) {
      text = text.replace(/</g, "&lt;")
      text = text.replace(/>/g, "&gt;")

      var lines = text.split('\n')
      var codeLines = []
      var numbers = []
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        codeLines.push('<code><span class="code-snippet_outer">' + (line || '<br>') + '</span></code>')
        numbers.push('<li></li>')
      }
      var lang = infostring || ''
      return '<section class="code-snippet__fix code-snippet__js">'
        + '<ul class="code-snippet__line-index code-snippet__js">' + numbers.join('')+'</ul>'
        + '<pre class="code-snippet__js" data-lang="'+lang+'">'
          + codeLines.join('')
        + '</pre></section>'
    }
    renderer.codespan = function (text, infostring) {
      return '<code ' + S('codespan') + '>' + text + '</code>'
    }
    renderer.listitem = function (text) {
      return '<span ' + S('listitem') + '><span style="margin-right: 10px;"><%s/></span>' + text + '</span>';
    }
    renderer.list = function (text, ordered, start) {
      var segments = text.split('<%s/>');
      if (!ordered) {
        text = segments.join('•');
        return '<p ' + S('ul') + '>' + text + '</p>';
      }
      text = segments[0];
			for (var i = 1; i < segments.length; i++) {
				var number = start + i - 1;
        text = text + number + '.' + segments[i];
      }
      return '<p ' + S('ol') + '>' + text + '</p>';
    }
    renderer.image = function (href, title, text) {
      return '<img ' + S(ENV_STETCH_IMAGE ? 'image' : 'image_org') + ' src="' + href + '" title="'+title+'" alt="'+text+'"/>'
    }
    renderer.link = function (href, title, text) {
      if (href.indexOf('https://mp.weixin.qq.com') === 0) {
        return '<a href="' + href +'" title="' + (title || text) + '" ' + S('wx_link') +'>' + text + '</a>';
      }else if( href === text){
        return text;
      } else {
        if (ENV_USE_REFERENCES) {
          var ref = addFootnote(title || text, href)
          return '<span ' + S('link') + '>' + text + '<sup>['+ref+']</sup></span>';
        } else {
          return '<a href="' + href +'" title="' + (title || text) + '" ' + S('link') + '>' + text + '</a>';
        }
      }
    }
    renderer.strong = renderer.em = function (text) {
      return '<strong ' + S('strong') + '>' + text + '</strong>';
    }
    renderer.table = function (header, body) {
      return '<table ' + S('table') + '><thead ' + S('thead') + '>' + header + '</thead><tbody>' + body + '</tbody></table>';
    }
    renderer.tablecell = function (text, flags) {
      return '<td ' + S('td') + '>' + text + '</td>';
    }
    renderer.hr = function(){
      return '<hr style="border-style: solid;border-width: 1px 0 0;border-color: rgba(0,0,0,0.1);-webkit-transform-origin: 0 0;-webkit-transform: scale(1, 0.5);transform-origin: 0 0;transform: scale(1, 0.5);">';
    }
    return renderer
  }
}
