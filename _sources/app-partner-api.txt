CloudFlare App Partner API
==========================

The CloudFlare App Partner API currently consists of two endpoints: Accounts and Domains.

Accounts are the relationships between a CloudFlare user and your service, and Domains belong to Accounts, and reference which web domains have been enabled by a user.

The account API endpoint is configured in your cloudflare.json like this:

::

	{
		"account": {
		"callback_url": "https://mysite.com/api",
		“user_fields”: [“email”]
	},
	"billing": {
		"type": "zone",
		"plans":[
			{
				"name" : "Chowder",
				"price": "3.20"
			},
			{
				"name" : "Minestrone",
				"price" : "6.55"
			}
		]
	},
	config: {
	"interface": [
			{
					"type": "string",
					"name": "food",
					"description": "Please tell us your favorite food.",
			"domain_request": true
			},
	{
					"type": "string",
					"name": "color",
					"description": "Please tell us your favorite color."
			}
		]
		}
	}

When a user wants to create an account, we will send you a POST request like this to your callback_url/accounts::

	{
		“account_id”: 100937,
		“email”: “email@example.com”
	}

You should respond like this::

	{
		“account_id”: 100937,
				“status”: “approve”	
		“login”: {
			“url”: “https://mysite.com/login?token=TOKEN”,
			“expires”: “timestamp”
	}
	}

You can also use status “pending” if you don’t want to approve it on the spot.

Once you process a pending account you should send a PUT request to https://cloudflare.com/api/v3.0beta/app_accounts/account_id with::

	{
		“account_id”: 100937,	
		“login”: {
			“url”: “https://mysite.com/login?token=TOKEN”,
			“expires”: “timestamp”
	}
	}

The login should be valid for at least an hour.

Once we have an approved account, a user can add a domain. When this happens we will make a POST to callback_url/domains::

	{
		“account_id”: 100937,
		“domain_name”: “siteysite.com”,
		“domain_id”: 103778,
		“domain_options”: {
			“food”: “mousse”
	}
	}

Food is there, but color is not, because food has the domain_request flag set in the cloudflare.json.

If you respond with a JSON object like this::

	{
		“status”: “approved”,
		"domain_id": "103778"
	}

then we will allow the app to be activated on that domain.

::

	{
		“status”: “invalid”,
		"domain_id": "103778",
		“message”: “account has been banned”
	}

To process the request offline and respond later::

	{
		“status”: “pending”,
		"domain_id": "103778"
	}

When you are ready to approve or reject a pending account request, send a PUT request to https://cloudflare.com/api/v3.0beta/app_domains/domain_id

::

	{
		"action": "approve",
		"notes": "Sweet!",
		"domain_id": "103778"
	}

or::

	{
		"domain_id": "103778",
		"action": "reject",
		"notes": "Sorry, we cannot accept raw-egg-based submissions at this time"
	}

You should respond to GET requests to your callback_url/domains/domain_id with the current status of a domain request.

::

	{
		“status”: “pending”,
		"domain_id": "103778"
	}

When a user disables your app on a domain, we will send a DELETE request to callback_url/domains/domain_id.

If you have a billing section in your config, we will send POST request to a /subscriptions endpoint that look like this::

	{
		“sub_plan”: “Chowder”,
		"domain_id": "103778"
	}

When a user cancels it will look like this::

	{
		“sub_plan”: “”,
		"domain_id": "103778"
	}