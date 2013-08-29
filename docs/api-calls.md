---
layout: docs
title: API Calls
---

<div class="row">
    <h2>API calls</h2>
    <div class="col-md-6">
        <p>
            For apps that choose to integrate their service with CloudFlare, CloudFlare will make API calls in response 
            to user actions which you can use for creating accounts, signing up domains and setting the right level of service 
            for users/domains in response to a billing change API call.
        </p>
    </div>
    <div class="col-md-6">
        <h4>Authentication</h4>
        <p>
            All requests will contain the X-Auth-HMAC header, with the header value set to the hmac to the request body generated 
            using the SHA-256 algorithm with the app's shared secret. The shared secret is available in the app developer dashboard when you 
            submit your app to CloudFlare.
            <pre class="highlight php"><code class="php">&lt;?php $hmac = hash_hmac(&quot;sha256&quot;, $data, $shared_secret); ?&gt;</code></pre>
        </p>
    </div>
    <div class="col-md-6">
        <p>
            The following table lists the API calls that will be made to your API endpoint based on the user state and action
        </p>
    </div>
    <div class="col-md-2">
        
    </div>
</div>
<div class="row">
    <h3>API calls to expect</h3>
    <table class="table">
        <thead>
            <tr>
                <th>User Action</th>
                <th>HTTP Method</th>
                <th>API Endpoint</th>
                <th class="col-md-6">Request Body</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>User enables app for the first time</td>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/accounts</td>
                <td>
<pre><code class="json">{
    "account_id": "9",
    "email": "user@domain.com"
}
</code></pre>
                </td>
            </tr>
            <tr>
                <td>User that already used the app on atleast one domain enables the app again</td>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/domains</td>
                <td>
<pre><code class="json">{
    "account_id": "13",
    "domain_id": "1580",
    "domain_name": "example.com",
    "domain_options": {
        "preference": "red"
    }
}
</code></pre>
                </td>
            </tr>
            <tr>
                <td>User disables app on a domain</td>
                <td><col-md- class="label label-info">DELETE</col-md-></td>
                <td>/domains/&lt;domain_id&gt;</td>
                <td>
<pre><code class="json">{
    "account_id": 13,
    "domain_id": 1580
}
</code></pre>
                </td>
            </tr>
            <tr>
                <td>User starts paying for a subscription</td>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/subscriptions</td>
                <td>
<pre><code class="json">{
    "domain_id": 1580,
    "sub_plan": "App Name Plan Name"
}
</code></pre>
                </td>
            </tr>
            <tr>
                <td>User switches to a different plan level</td>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/subscriptions</td>
                <td>
<pre><code class="json">{
    "domain_id": 1580,
    "sub_plan": "App Name Plan Name"
}
</code></pre>
                </td>
            </tr>
            <tr>
                <td>User stops playing for subscription</td>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/subscriptions</td>
                <td>
<pre><code class="json">{
    "domain_id": 1580,
    "sub_plan": ""
}
</code></pre>
                </td>
            </tr>
        </tbody>
    </table>
    
    <h3>Responding to requests</h3>
    <table class="table">
        <thead>
            <tr>
                <th>HTTP Method</th>
                <th>API Endpoint</th>
                <th class="col-md-6">Response</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/accounts</td>
                <td>
<pre><code class="json">{
    "account_id": "9",
    "status": "approved",
    "error": false,
    "msg": "Account created",
    "login": {
        "url": "<url that can identify the user, we will add a signature param for authentication>"
    }
}
</code></pre>
                </td>
                <td>"status" can be one of "approved", "pending" or "rejected". See <a href="/docs/single-sign-on.html">Single Sign-on documentation</a> for what the url attribute should be set to.</td>
            </tr>
            <tr>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/domains</td>
                <td>
<pre><code class="json">{
    "account_id": "13",
    "domain_id": "1580",
    "status": "approved",
    "error": false,
    "msg": "Domain approved"
}
</code></pre>
                </td>
                <td>"status" can be one of "approved", "pending" or "rejected"</td>
            </tr>
            <tr>
                <td><col-md- class="label label-info">DELETE</col-md-></td>
                <td>/domains/&lt;domain_id&gt;</td>
                <td>
<pre><code class="json">{
    "account_id": 13,
    "domain_id": 1580,
    "status": "deleted",
    "error": false,
    "msg": "Domain has been deleted"
}
</code></pre>
                </td>
                <td></td>
            </tr>
            <tr>
                <td><col-md- class="label label-info">POST</col-md-></td>
                <td>/subscriptions</td>
                <td>
<pre><code class="json">{
    "domain_id": 1580,
    "status": "updated",
    "error": false,
    "msg": "Subscription updated"
}
</code></pre>
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

