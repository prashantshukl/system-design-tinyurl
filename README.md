# TinyURL Clone – System Design Project

## Features
- Shorten long URLs
- Redirect to original URL using short code
- Random short code generation
- MongoDB persistence

## Tech Stack
- Node.js, Express
- MongoDB
- (Optional) Redis, Rate Limiter

## System Design Notes
- Stateless short URL generation using random strings
- Caching layer considered for high-traffic redirects
- DB schema supports expiry, scaling strategies
