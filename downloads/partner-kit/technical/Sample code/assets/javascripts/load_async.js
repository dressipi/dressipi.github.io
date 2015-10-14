(function() {

  window.loadAsync = function(url, callback) {
    var done, head, script;
    done = false;
    head = window.document.getElementsByTagName("head")[0];
    script = window.document.createElement("script");
    script.src = url;
    script.onload = script.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        done = true;
        callback();
      }
    };
    head.appendChild(script);
  };

}).call(this);
