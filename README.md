# Elastic Path Demo Storefront

Welcome to my outdoor outfitters store, "Lonely Llama"! This is a Next.js frontend that integrates with 
Elastic Path's backend services to handle the products, cart, search/filtering, and checkout experiences.
This project was generated with (the amazing) [Elastic Path Commerce Cloud CLI](https://www.elasticpath.com/).

## Comments
This storefront was generated using the CLI and then customized to include search from Algolia. The integrations for this particular app were included as a part of the CLI 
code generation process. I'll also include a link to a vanilla React application that accomplishes the same thing.

## How to Run Locally
1. Clone this repo into the location of your choice: `git clone https://github.com/samohansen/lonely-llama.git`
2. `cd` into the directory and install the required packages: `npm install`
3. Make sure you have an Elastic Path store set up and integrated with Algolia:
  - You can sign up for a free Algolia account and use those API credentials in Integrations Manager
  - Needed creds from Algolia: API Key (NEXT_PUBLIC_ALGOLIA_API_KEY) App ID, (NEXT_PUBLIC_ALGOLIA_APP_ID), Index Name (NEXT_PUBLIC_ALGOLIA_INDEX_NAME)
  - Needed creds from Elastic Path: EPCC Client ID (NEXT_PUBLIC_EPCC_CLIENT_ID), Client Secret (EPCC_CLIENT_SECRET), Endpoint URL (NEXT_PUBLIC_EPCC_ENDPOINT_URL)
4. Open .env.local and enter your Elastic Path store credentials and Algolia credentials
5. Run `npm run dev`