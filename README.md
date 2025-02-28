# CZ AI Agent MVP
A lightweight AI agent to replicate Binance CEO CZ’s online presence for X replies.

## Overview
- **Celebrity**: CZ (Binance CEO) - Chosen for his massive crypto influence and active X presence.
- **Purpose**: Respond to X tags/questions as CZ, using his style (bold, crypto-savvy, concise).
- **Time Allocation**: 1 hour planning (MVP scope).

## Approach
1. **Data Source**: Real-time X posts from CZ’s official account (@cz_binance) via X API.
2. **Agent Logic**: 
   - Detects tags/questions (e.g., “Hey CZAI, what’s your take on BTC?”).
   - Fetches CZ’s recent posts for context.
   - Feeds to ChatGPT-4 with a custom prompt.
3. **Output**: Posts replies mimicking CZ’s tone on X/Instagram.

## Tech Stack
- **Backend**: Node.js (lightweight, async-friendly).
- **LLM**: ChatGPT-4 via API (e.g., OpenAI or OpenRouter).
- **API**: X API for real-time post fetching.

## Data Fed to Agent
- **Input**: CZ’s latest 10-20 X posts (context window).
- **Prompt**: "Respond as CZ: crypto expert, confident, short replies."
- **Misinformation Handling**: Stick to verified CZ posts; no external news yet (MVP scope).

## Future Enhancements
- Vector database for historical CZ content (YouTube, blogs).
- Misinformation filter (cross-check with trusted crypto sources).

## Setup
1. Clone this repo.
2. `npm install` (for X and OpenAI APIs).
3. Add API keys (X, OpenAI).
4. Run `node agent.js`.

See `agent.js` for pseudo-code.
