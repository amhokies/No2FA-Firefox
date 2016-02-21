var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /https:\/\/login\.vt\.edu\/profile\/cas\/login\?execution=e[0-9]*s2/,
  contentScriptFile: [data.url("jquery-1.12.0.min.js"), data.url("content-script.js")],
  contentScriptWhen: "start"
});
