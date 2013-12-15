(function(){  
xtag.customEvents.press = {
    attach: [
      "touchend",
        "mouseup"
    ],
    condition: function (event) {
      return true;
    }
}
})();
