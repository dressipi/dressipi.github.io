var idClient = "6150449";
var apiKey = "E8f8fIGCl0wIHgYJRpoTxw";
var jsLoc =  "https://d1vrqwgmdbblos.cloudfront.net/assets/brand_alley.js";
var productCode = "1307964";
//<![CDATA[
(function (widgetDomElement, widgetOptions) {
  var loadAsync = function (url, callback) {
    var done, head, script;
    done = false;
    head = window.document.getElementsByTagName('head')[0];
    script = window.document.createElement('script');
    script.src = url;
    script.onload = script.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true;
        callback();
      }
    };
    head.appendChild(script);
  };

  var initWidget = function () {
    window.Dressipi.initWidget(widgetDomElement, widgetOptions);
  };

  loadAsync(jsLoc, initWidget);

})(document.getElementById('widget-container'), {userId: idClient, productCode: productCode, apiKey: apiKey, loginMethod: function () {
  //console.log('login method called')
}, forceLocaleSizeSet: '1' });  //]]>
;
