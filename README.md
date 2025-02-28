# CZ AI Agent MVP
A lightweight AI agent to replicate Binance CEO CZ’s online presence for X replies.

## Overview
- **Celebrity**: CZ (Binance CEO) - Chosen for his massive crypto influence and active X presence.
- **Purpose**: Respond to X tags/questions as CZ, using his style (bold, crypto-savvy, concise).
- **Time Allocation**: 1 hour planning (MVP scope).

## Approach
1. **Data Source**: Scrape CZ’s public X posts (@cz_binance) via browser automation (Puppeteer).
2. **Agent Logic**: 
   - Logs into an X account to bypass API costs.
   - Detects tags/questions (e.g., “Hey CZAI, what’s your take on BTC?”).
   - Scrapes CZ’s recent posts for context.
   - Feeds to ChatGPT-4 with a custom prompt (simulated in MVP).
3. **Output**: Generates replies mimicking CZ’s tone for X/Instagram.

## Tech Stack
- **Backend**: Node.js with Puppeteer (browser automation, free data fetching).
- **LLM**: ChatGPT-4 via API (e.g., OpenAI, mocked in MVP).
- **No API**: Avoids X API costs using login-based scraping.

## Data Fed to Agent
- **Input**: CZ’s latest public X posts (scraped live from his profile).
- **How Selected**: Browser automation navigates to @cz_binance, grabs visible posts.
- **Misinformation Handling**: Uses only CZ’s verified account data; no external sources yet (MVP scope).

## Future Enhancements
- **Vector Database**: Store historical CZ content (X posts, replies, threads) in a vector DB (e.g., Pinecone).
- **YouTube Transcripts**: Crawl Binance YouTube or CZ interviews, transcribe, and add to DB.
- **X AMAs/Spaces**: Scrape transcripts from CZ’s X Spaces/AMAs for deeper context.
- **Misinformation Filter**: Cross-check with trusted crypto sources (e.g., Binance blog).
- **Posting Logic**: Automate X/Instagram replies via API or browser.

## Setup
1. Clone this repo.
2. Run `npm init -y` to initialize a new Node.js project.
3. Run `npm install puppeteer` to install dependencies.
4. Update `agent.js` with your X account credentials (private, not committed).
5. Run `node agent.js` to start the agent.

See `agent.js` for working code.
