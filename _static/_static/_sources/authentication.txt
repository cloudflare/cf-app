Authentication
==============

Many apps have a robust suite of services on their own dashboards. CloudFlare offers an authenticated link to these dashboards from the CloudFlare Apps dashboard, where CloudFlare customers are signed in.

CloudFlare Apps offers single sign-on (SSO) using a HMAC link. The HMAC key will be shared via the CloudFlare developer dashboard. (Screenshot to be added.)

Developers may also offer direct sign-in to their services, using the account created via CloudFlare Apps. CloudFlare will not know the customers' password (and doesn't want to), so the developer will need to consider the authentication process and how to communicate to the customer about this option (email, or first visit, or other).

Suggestions and recommendations coming soon.

Note: CloudFlare is not an OAuth provider.