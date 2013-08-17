Authentication
==============

Many apps have a robust suite of services on their own dashboards. CloudFlare offers an authenticated link to these dashboards from the CloudFlare Apps dashboard, where CloudFlare customers are signed in.

CloudFlare Apps that use the `Accounts API <app-partner-api.html>`_ will be given an HMAC key when the app is created. Requests from the Accounts API will be signed with that key. Developers can include a "login" object in their response to the account creation request (POST to /accounts). If a login object with a "url" key is present, a link to that URL will be displayed in the apps control panel under the short description. This link should contain a token that allows the user to log in directly.

It is recommended that HTTPS be used both for the Accounts API endpoint and for these login link URLs

CloudFlare does not support OAuth for customer login.