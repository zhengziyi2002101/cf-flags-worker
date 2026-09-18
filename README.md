# Cloudflare Flags Worker
This project is named **cf-worker-new**, a Cloudflare Worker for the assignment, integrated with Cloudflare D1 and private R2 object storage.

## Project Overview
- A web gallery to display country flag images stored in private R2 bucket
- `/secure` protected page using Cloudflare Access authentication
- D1 database stores flag metadata
- All flag images are stored in a private R2 bucket (public access disabled), served through Worker proxy

## Routes
| Route | Description |
| ---- | ---- |
| `/` | Homepage: Flag gallery preview |
| `/secure` | Protected page, shows authenticated user email, timestamp and visitor country code |
| `/flags/[filename].png` | Proxy endpoint to fetch images from private R2 bucket |

## Resources Used
- Worker name: `cf-worker-new`
  - Worker URL: `cf-worker-new.cf-lab-web.workers.dev`
- D1 Database: `flag_db`
  - Database ID: `3f54e105-d763-4f39-bd4a-d41c6e053cbd`
- R2 Bucket: `flag-storage` (Private, public access disabled)

## Deployment with Wrangler CLI
1. Install wrangler: `npm install -g wrangler`
2. Login your Cloudflare account: `wrangler login`
3. Deploy worker: `wrangler deploy`

The `wrangler.toml` file is pre-configured with existing D1 and R2 bindings, no need to recreate storage resources.
> Note: This assignment skips actual local deployment due to network limitation.
