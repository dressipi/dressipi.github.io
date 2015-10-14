(function() {
  var checkOrigin, eventHandler, removeFirst;

  removeFirst = function(host) {
    return host.split('.').slice(1).join('.');
  };

  checkOrigin = function(origin) {
    var hostname, originDomain;
    originDomain = removeFirst(origin);
    hostname = window.location.hostname;
    if (hostname.match(/^www\./)) {
      hostname = removeFirst(hostname);
    }
    return origin.match(/^https?:\/\/dressipi-(staging|production)\./) && hostname === originDomain;
  };

  eventHandler = function(event) {
    var match, offsetTop;
    if (match = checkOrigin(event.origin)) {
      if (match = event.data.match(/^resize;(\d+)$/)) {
        return document.getElementById("dressipi-iframe").style.height = match[1] + "px";
      } else if (match = event.data.match(/^scroll;/)) {
        return window.scrollTo(0, 0);
      } else if (match = event.data.match(/^scrollToAnchor;(\d+)$/)) {
        offsetTop = document.getElementById("dressipi-iframe").offsetTop;
        return window.scroll(0, offsetTop + parseInt(match[1]));
      }
    }
  };

  if (typeof window.addEventListener !== "undefined") {
    window.addEventListener("message", eventHandler);
  } else {
    window.attachEvent("onmessage", eventHandler);
  }

}).call(this);
