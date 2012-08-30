===============
Getting started
===============

CloudFlare has two goals with the Apps marketplace.

1. Make CloudFlare customers happier.
2. When CloudFlare helps a developer make money, CloudFlare earns a
   share.

CloudFlare wants to continue to make WebOps for its customers – website
owners, all – easier and better. Apps that extend services to a site
owner and the site’s visitors may save time, make money or simply bring
a smile to a visitor’s face. CloudFlare’s core benefits are security and
performance, and we use that platform to enable the broad diversity of
the web.

For Apps that charge the site owner, CloudFlare does billing and
distribution and sends on 70% monthly to the app developer. CloudFlare
supports freemium models; upgrade links, though, must return to
CloudFlare for billing. For Apps that make their money in other ways,
such as advertising or data analytics, CloudFlare expects the site owner
to benefit first, and then CloudFlare splits the remainder with the app
developer.

What is CloudFlare?
-------------------

CloudFlare provides security and performance to websites of all sizes.
Running on a global network, CloudFlare accelerates web traffic and
filters attacks of all kinds before they reaches the site owner’s
server. CloudFlare customers deliver all web traffic to their visitors
through CloudFlare’s network.

CloudFlare numbers
------------------

CloudFlare launched its public service in September, 2010.

As of May, 2012, CloudFlare… \* powers more than 350,000 websites \*
delivers more than 1,500,000,000 pageviews daily \* sees visits from
more than 470,000,000 unique users monthly

(add data about geo distribution of visitors)

With CloudFlare Apps, you can make your service instantly available to
this audience.

What are CloudFlare Apps?
-------------------------

CloudFlare Apps are services useful to website owners, integrated with a
simple dashboard choice on any CloudFlare-powered website.

Two criteria to be a CloudFlare App: 1. Make a website owner’s life
better. 2. Take advantage of CloudFlare’s platform.

Better is deliberately open-ended. Saving time? Great! Making money?
Fantastic! Having fun? Definitely!

CloudFlare’s platform is fantastic for many web services and utilities.
CloudFlare Apps is not simply to promote outside services; they must be
integrated. CloudFlare isn’t promoting services that are not integrated
as apps.

Current CloudFlare Apps
-----------------------

Several dozen Apps have been developed in close coordination between
CloudFlare developers and outside developers. More recently,
CloudFlare’s platform has evolved to free developers to work on their
own schedule. These apps all take advantage of the latest iteration of
the platform: \* Trumpet \* EarthHour \* Instaflare \* Visitor
DNSChanger Detector \* A Better Browser

What can CloudFlare Apps do?
----------------------------

Many things… see below.

Distribution
~~~~~~~~~~~~

Reach website owners who care about making their website better. (see
numbers)

Development via git
~~~~~~~~~~~~~~~~~~~

Use git (public or private repos) to craft and test your App, and make
updates.

Versioning supported

Private and public beta testing supported.

(CloudFlare retains

Account creation
~~~~~~~~~~~~~~~~

CloudFlare can create an account on the developer’s service
automatically, via API.

Developer has a relationship with the site owner, even if site owner
leaves CloudFlare.

Default info (list) + any service specific info can be requested.

JavaScript deployment
~~~~~~~~~~~~~~~~~~~~~

CloudFlareJS - performant loader removes fear of larding a website with
too many services

Served from global CDN at no charge (no hosting fees)

(#1 support problem of most services which need JS deployment is getting
the code on the page in the right place – even **after** the customer
has paid for the service.)

Global delivery
~~~~~~~~~~~~~~~

CloudFlare will host and deliver App assets (JavaScript, images, CSS,
and (more?)) from its global CDN at no charge to App developers.

DNS manipulation
~~~~~~~~~~~~~~~~

CNAME creation, primarily. Other DNS record types possible.

Exception: hosting partners/CNAME customers (~20%)

Billing
~~~~~~~

(coming soon)

CloudFlare provides a billing platform and simply adds App charges to a
customer’s existing account.

Options include: \* Monthly (pro-rated) charges \* One-time purchases

Roadmap
-------

-  Other assets
-  Account creation - capabilities of custom apps
-  DNS record creation - capabilities of custom apps
-  Billing - capabilities of custom apps
-  Placement - Ability to specify individual DNS records (subdomains,
   for example), directories or even individual pages for App
   deployment. Current: Apps are deployed site-wide, with exclusion
   possible via Page Rules. (NEW TO ALL APPS)

Promotion
---------

Need examples and screenshots.

-  CloudFlare.com/apps
-  App detail page
-  Dashboard
-  Apps page
-  CloudFlare blog
-  CloudFlare Twitter (x2)
-  CloudFlare Facebook (G+, too, I suppose)
-  Discovery and promotion (SOON) including during CF setup
-  Email (SOON) part of weekly stats email once we start that

Steps to develop
----------------

(not nearly done)

-  Review the sample app on GitHub
-  Apply to be an app developer (link)
-  Use CloudFlareJS sandbox and documentation http://js.cloudflare.com
-  Run cloudflare.json linter (coming soon)
-  …
