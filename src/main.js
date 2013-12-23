(function(){  
xtag.customEvents.press = {
    attach: [
      "touchend",
        "mouseup"
    ],
    condition: function (event) {
      if (event.target.xtag.customevent.press.data.activated) return false;
      setTimeout(function () {
       this.activated=false;
        }.bind(event.target.xtag.customevents.press.data), 100);
      return true;
    }
}
})();
