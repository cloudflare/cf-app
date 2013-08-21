---
layout: docs
title: Loading JavaScript
---

Once your app is turned on by a domain, you have the option to load a JavaScript file which will be stored and served by CloudFlare's global CDN, for free.

The contents of the JavaScript module need to follow the RequireJS style. If you are integrating an existing service (like for example an analyics service) you can just load the thirdparty file as follows:

<script src="https://gist.github.com/ram-nadella/40e28267d68c801172ea.js"></script>

We highly recommend that you put all your JavaScript in the original app module file and not load any other JS files as this would requires additional round trips and will only delay the time for exection of your script content.

Please note that all apps JS is fetched by an async script loadeder and will stored in LocalStorage when availalbe. When testing, make sure to clear LocalStorage (run `localStorage.clear()` in the JavaScript console) in order to force a re-download of your scripts.