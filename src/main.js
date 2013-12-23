(function(){  
xtag.customEvents.press = {
    attach: [
      "touchend",
        "mouseup"
    ],
    condition: function (event) {
      if (!event.target.xtag) event.target.xtag = {};
      if (!event.target.xtag.customevents) event.target.xtag.customevents = {};
      if (!event.target.xtag.customevents.press) event.target.xtag.customevents.press = {data: {activated: false}};
      if (event.target.xtag.customevents.press.data.activated) return false;
      setTimeout(function () {
       this.activated=false;
        }.bind(event.target.xtag.customevents.press.data), 100);
      this.activated = true;
      return true;
    }
}
})();
