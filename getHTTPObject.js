function getHTTPObject() {
  if (typeof XMLHttpReuest == "undefined")
    XMLHttpRequest = function () {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (e) {}

    }