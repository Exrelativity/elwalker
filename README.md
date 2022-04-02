Elwalker API is a Node.js backend starter for SaaS startups written in TypeScript. It has all the features you need to build a SaaS product, like user management and authentication, billing, organizations, GDPR tools, API keys, rate limiting, superadmin impersonation, and more.

|           | Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Elwalker API is build to work with [Elwalker UI](https://github.com/##/##), the frontend PWA starter for SaaS startups.

**⚠️ v3 BETA WARNING:** The `master` branch and all 3.x releases are currently in beta. For production, use v1.x instead.

## ⭐ Features

### 🆕 New in v2

- Casbin-powered permission management
- JWT-powered single-use coupon codes
- Redis-powered queues for outbound emails and logs
- Cloud agnostic, no longer specific to AWS
- Elwalker scripts for building and deploying
- Async JSON response and smart controller injection

### 🔐 Security

- JWT-powered authentication and user management
- TOTP-powered two-factor authentication (2FA)
- OAuth2 login with third-party accounts
- Location-based login verification
- Security event logging and history

### 💳 SaaS

- Stripe-powered recurring billing
- Teams with managed user permissions
- CRUD invoices, methods, transactions, etc.
- Rich HTML transactional emails
- GDPR-compliant data export and delete
- API gateway with API keys and rate limiting
- Domain verification with auto-approve members

### 👩‍💻 Developer utilities

- OvernightJS-powered decorators and class syntax
- Injection-proof helpers for querying databases
- Data pagination and CRUD utilities for all tables
- Authorization helpers
- Caching and invalidation for common queries
- User impersonation for super-admin
- Easy redirect rules in YAML
- ElasticSearch-powered server and event logs

## 🛠 Usage

1. Use this template or fork this repository
1. Install dependencies with `npm install`
1. Add a `.env` file based on [config.ts](https://github.com/###/api/blob/master/src/config.ts).
1. Create MariaDB/MySQL tables based on [schema.sql](https://github.com/###/api/blob/master/schema.sql)
1. Add your controllers in the `./src/controllers` directory
1. Generate your `app.ts` file using `staart controllers`
1. Build with `staart build` and deploy with `staart launch`

### Updating Elwalker

To update your installation of Elwalker, run the following:

```bash
staart update api
```

If you've used the "Use this template" option on GitHub, you might have to force pull from `staart/api` the first time since the histories wouldn't match. You can use the flag `--allow-unrelated-histories` in this case.

## 💻 Docs

- [Getting started](https://##.js.org/api/getting-started.html)
- [Setting up environment variables](https://##.js.org/api/setting-up-environment-variables.html)
- [Creating a controller](https://##.js.org/api/creating-a-controller.html)
- [Updating Elwalker](https://##.js.org/api/update.html)
- [Response headers](https://##.js.org/api/response-headers.html)
- [Throwing errors](https://##.js.org/api/throwing-errors.html)
- [Authorization](https://##.js.org/api/authorization.html)
- [API key authentication](https://##.js.org/api/api-key-authentication.html)
- [Redirects](https://##.js.org/api/redirects.html)
- [Serving static files](https://##.js.org/api/serving-static-files.html)

**[View docs site →](https://##.js.org/api)**

**[View TypeDoc →](https://##-typedoc.netlify.com)**

**[View API demo →](http://##.prod.oswaldlabs.com)**

**[View frontend demo →](https://##-demo.o15y.com)**


## [🏁 Elwalker Ecosystem](https://##.js.org)

The Elwalker ecosystem consists of open-source projects to build your SaaS startup, written in TypeScript.

| Package                                                  |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

