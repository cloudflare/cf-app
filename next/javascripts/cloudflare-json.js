/** 
Attach popovers for each of the keys in the JSON
*/


var manifest_docs = {
    "name": {
        title: "Name of the app",
        content: "Cannot be longer than 64 characters",
        required: true
    },
    "description": {
        title: "Describe your app",
        content: "Use a sentence or two to tell users what your app does. Cannot be longer than 200 characters",
        required: true
    },
    "version": {
        title: "Current version",
        content: "Use two numbers seperated by a dot eg. 0.1, 1.7, 12.9. App version needs to be incremented for every new release",
        required: true
    },
    "category": {
        title: "App category",
        content: "Set to one of the following: analytics, affiliate links, game, monitoring, support, trust, translation, advertising, fonts, " +
                 "malware scan, webmaster, trust seal, contextual search, library, website backup, live chat, policy management, loyalty programs, " +
                 "testing, social sharing, audio, security monitoring, survey, anti-censorship, content protection, advocacy, website audit, search engine optimization",
        required: true
    },
    "main": {
        title: "Path to the app's CloudFlare JS module",
        content: "You can specify a Javascript file to be executed on domains that choose to turn your app on",
        required: false
    },
    "config": {
        title: "App configuration",
        content: "This section will define the app's interface in the CloudFlare apps dashboard, any preferences that the user needs to specify and additional information about the app",
        required: true
    },
    "details": {
        title: "App details",
        content: "Additional details about the app",
        required: true
    },
    "Language": {
        title: "Suppored languages",
        content: "Languages that your app/service currently supports",
        required: true
    },
    "Price": {
        title: "App pricing info",
        content: "Describe your app's pricing information in general language, just say Free if there is no charge." +
                 " Fill out the billing section if your plan to offer a paid version of your app",
        required: true
    },
    "Restrictions": {
        title: "App restrictions & limitation",
        content: "Describe your app's restriction or limitation if any (for example, if you offer a translation service you could say you can list the supported languages here)",
        required: true
    },
    "TOS": {
        title: "Terms of Service",
        content: "A link to your terms of service page",
        required: true
    },
    "assets": {
        title: "Images for showcasing the app",
        content: "List the assets that will be used. App logos and additional images for use on the app dashboard and the app detail page." +
                 " <strong> Note: All assets specified should be present in the app respository and the paths should be relative to the location of the app manifest (cloudflare.json)</strong>",
        required: true
    },
    "logos": {
        title: "App logos",
        content: "Relative paths to the app's logo image in png format in two sizes, 132px and 200px horizontal width",
        required: true
    },
    "detail_page": {
        title: "Images used on the app detail page",
        content: "You get an entire page on cloudflare.com to put marketing material for your app and to highlight it's features, images used on that page will go here",
        required: false
    },
    "has_js": {
        title: "Has JavaScript module",
        content: "Setting this to true will load a JavaScript module on all websites that enable this app." +
                 "The module is expected to be available as part of the repo and follow the CloudFlare JS module sepc.",
    },
    "interface": {
        title: "Define the user interface",
        content: "You have some control over what the app can render in the dashboard and can prompt the user for input if required." +
                 "Two types of interface elements are allowed, input elements that allow users to type in and a select drop box with pre-defined options." +
                 " All values will be availalbe as strings on the page",
        required: false
    },
    "interface_type": {
        title: "Type of interface element to render",
        content: "Type can be one of: \"input\" or \"select\"",
        required: true
    },
    "domain_request": {
        title: "Send as part of domain request",
        content: "Setting the value of this key to true will pass the value of data entereted by the user to the API endpoint as part of domain request." +
                 " The key will be the \"id\" of the interface element",
        required: false
    },
    "account": {
        title: "User account section",
        content: "Apps that need to talk back to a service endpoint when users take actions like turning the app on, making a payment etc need to use this section",
        required: false
    },
    "callback_url": {
        title: "App service endpoint",
        content: "User actions like enabling app for a domain, paying for the app will result in API calls to the endpoint.",
        required: false
    },
    "user_fields": {
        title: "Expected user data",
        content: "User data that is expected when making the API call corresponding to an account creation - the first time a user tries to turn the app on " +
                 " for any zone. Type: Array. Possible values: \"user_email\"",
        required: false
    },
    "billing": {
        title: "Billing information",
        content: "Use this section if your app requires payment. Currently only domain level billing is supported",
        required: false
    },
    "billing_type": {
        title: "Billing type",
        content: "Currently apps can be billed per domain. Possible value for this is \"domain\"",
        required: false
    },
    "plans": {
        title: "App plans",
        content: "List of plans that will be offered, an array of objects with keys \"name\" and \"price\". Price is rounded to two decimal places. eg. 3.00, 19.99, 199.00",
        required: false
    }
}

var default_popover_options = {
    placement: 'right',
    trigger: 'hover'
};

// wait for syntax highlighter to finish it's job, seem to mess with DOM manipulation
setTimeout(function() {
    // iterate over list of key docs and attach popover elements
    for (var manifest_key in manifest_docs) {
        var options = manifest_docs[manifest_key];
        $.extend(options, default_popover_options);
        $("#" + manifest_key).popover(options);
    };
}, 1000);


