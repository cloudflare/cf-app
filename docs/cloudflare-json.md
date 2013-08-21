---
layout: docs
title: cloudflare.json
---

<div class="row">
    <div class="col-md-12">
        <p>Documentation for the manifest file that defines the app - cloudflare.json</p>
        <div class="alert alert-info">
            Mouse over the underlined attributes to see more information about it
        </div>
        <div id="cloudflare_json_manifest_doc">

<pre class="highlight json"><code class="json">{
    
    <span class="key" id="name">"name"</span>: "App name",
    <span class="key" id="description">"description"</span>: "Describe the app in a sentence or two",
    <span class="key" id="version">"version"</span>: "0.7",
    <span class="key" id="category">"category"</span>: "analytics",
    <span class="key" id="main">"main"</span>: "public/javascripts/app_module.js",
    <span class="key" id="config">"config"</span>:{
        <span class="key" id="details">"details"</span>:{
            <span class="key" id="Language">"Language"</span>: "English",
            <span class="key" id="Price">"Price"</span>: "Free",
            <span class="key" id="Restrictions">"Restrictions"</span>: "None",
            <span class="key" id="TOS">"TOS"</span>:"http://www.cloudflare.com/terms",
            <span class="key" id="has_js">"has_js"</span>: true
        }, 
        <span class="key" id="assets">"assets"</span>:{
            <span class="key" id="logos">"logos"</span> : {
                "200px": "./public/images/logo-200.png",
                "132px": "./public/images/logo-132.png"
            },
            <span class="key" id="detail_page">"detail_page"</span> : [
                "./public/images/example.png"
            ],
            "images" : [
                "./public/images/counter.png"
            ]
        },
        <span class="key" id="interface">"interface"</span>: [
            {
                "type": "string",
                "id": "food",
                "name": "Favorite Food",
                "description": "Please tell us your favorite food.",
                <span class="key" id="domain_request">"domain_request"</span>: true
            },
            {
                "type": "select",
                "id": "lottery",
                "name": "Do you Lotto?",
                "description": "Choose whether to buy a ticket",
                "options": [
                    {
                        "label": "Yes, buy a ticket!",
                        "value": "true"
                    },
                    {
                        "label": "No, I am scared.",
                        "value": ""
                    }
                ]
            }
        ]
    },
    <span class="key" id="account">"account"</span>: {
        <span class="key" id="callback_url">"callback_url"</span>: "http://countersback.herokuapp.com/api",
        <span class="key" id="user_fields">"user_fields"</span>: ["email"]
    },
    <span class="key" id="billing">"billing"</span>: {
        <span class="key" id="billing_type">"type"</span>: "zone",
        <span class="key" id="plans">"plans"</span>:[
            {
                "name" : "Chowder",
                "price": "3.20"
            },
            {
                "name" : "Minestrone",
                "price" : "6.55"
            }
        ]
    }
}
</code></pre>

        </div>
    </div>
</div>
