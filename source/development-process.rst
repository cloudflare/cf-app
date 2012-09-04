Development Process
===================

Prerequisites
=============

There are very few prerequisites for developing a CloudFlare App. You will need:

* A free account on CloudFlare.com
* A domain on CloudFlare for testing your app. Any CloudFlare plan, including free, is fine.
* A git repo, whether on GitHub.com or elsewhere, with at least the minimum elements from the sample app <https://github.com/cloudflare/cfapp_sample>.
* An app idea, whether integrating an existing web service or creating a new service without dependencies

Ready?
======

Ready to start? Here's the steps:

* Submit your app idea, with a git repo link. https://www.cloudflare.com/app-signup.html
* CloudFlare Apps team will review your app submission. On approval of the initial submission, your application's AppKey will be confirmed and CloudFlare Apps team will follow up with you, via email to start.
* Upon approval, the app's status will be shown in your development dashboard.

Status of an App
================

An app goes through each of the following stages, often in rapid succession. CloudFlare's goal is to respond to all developer inquiries in one business day or less. Complicated reviews, especially first-time reviews, may require more time, but the developer can expect notification within one business day.

* Submission
* Stage
* Review
* Approve
* Promote
* Published

Submission
  App has been submitted for review to CloudFlare by developer. When CloudFlare assigns an AppKey the app is proceeding. After the initial submission, new versions are submitted via a Pull request in the CloudFlare dashboard.

Stage
  New pull request from App developer has been acknowledged by CloudFlare, and the new repo is staged on CloudFlare internal systems, awaiting review. (TK - what new versions look like

Review
  CloudFlare is reviewing the app version. If a new version is submitted while an existing version is in review, the new version will be evaluated separately/later. If a new version is staged *before* review, the earlier version will be ignored.

Approve
  CloudFlare has approved the update. If this update is the first version of the app, the app will now be available on the CloudFlare network, and ready for private beta testing. However, the app is not publicly available until it's been Published.
  
Promote
  Multiple versions of an app may be live on the global network, but only the Promoted version is available to all customers without manual configuration of client parameters. The promoted version is the released version, and additional development may be done in new versions, tested by the developer and in-the-know testers. When a new version is ready for general release, the new version will be promoted.

Publish
  CloudFlare removes authentication and app is available to all CloudFlare customers.
  
Review Process
--------------

The goal of CloudFlare Apps is to have useful services of all kinds instantly and easily available to CloudFlare customers on CloudFlare-powered websites.

Apps cannot compromise on the core CloudFlare benefits of website speed and security, and making things easy.

New apps are reviewed with the following concerns:

* Are there any security considerations?
* Are there any performance considerations?
* Are the services described accurately?
* Is the "install" experience smooth? 
* Does turning off the app work smoothly?

To maintain security, CloudFlare reviews apps for vulnerabilities and malware of all sorts.

To maintain performance, CloudFlare offers the resources of its global network to app developers at no charge.

Exclusivity
===========

The CloudFlare Apps marketplace is not exclusive in any category.

Conflicts
---------

CloudFlare makes efforts to notify customers if technical concerns limit the use of separate apps at the same time. For example, two different link re-writing services could interact erratically,  confusing the customer and the customer's website visitors.

Contract
--------

If an app involves billing of or payments to a site owner (CloudFlare customer), the developer must sign CloudFlare's standard application contract before the app is published and generally available to all customers.

Billing and Payments
--------------------

For services where the CloudFlare customer pays, CloudFlare does the billing, and pays the developer 70% on a monthly basis, via ACH or other means if appropriate. CloudFlare supports freemium models; upgrade links, though, must return to CloudFlare for billing.

For services which earn the CloudFlare customer money, such as advertising or affiliate networks, the developer will pay CloudFlare monthly via ACH, and CloudFlare will pay the CloudFlare customer the customer's share. After the customer is paid (usually the majority), CloudFlare and the developer will split the remainder.

License
-------
The developer may choose to apply a license to his or her app, as long as the license choice doesn't limit use on the CloudFlare network.
