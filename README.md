# Creator Insights Tracker

> A unified creator analytics dashboard that solves the "Which posts actually made me money?" problem.

## Overview

Creator Insights Tracker is a Whop app designed to help content creators understand the true ROI of their content across multiple platforms. Instead of juggling between different analytics dashboards, creators can see which specific posts, videos, or content pieces actually drove revenue, engagement, and conversions.

## The Problem We Solve

Creators today face a critical challenge: **they don't know which content actually makes them money**.

- You have 1,000 posts across Instagram, Twitter, YouTube, and TikTok
- You have sales data from Whop, Gumroad, Stripe, and other platforms
- But which content piece drove which sale?
- Which type of content has the highest ROI?
- Should you make more tutorials or entertainment content?

**Creator Insights Tracker connects the dots** between your content and your revenue.

## Key Features

- **Unified Dashboard**: See all your content performance in one place
- **Revenue Attribution**: Track which posts/videos led to actual sales
- **Cross-Platform Analytics**: Connect Instagram, Twitter, YouTube, TikTok, and more
- **Engagement Metrics**: View likes, comments, shares, and saves alongside revenue data
- **Content ROI**: Understand which content types give you the best return on effort
- **Smart Insights**: Get AI-powered recommendations on what to create next

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **API Integration**: Whop SDK for authentication and payments
- **Charts**: Recharts for data visualization
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Whop account and app credentials
- API keys for the platforms you want to connect

### Installation

```bash
# Clone the repository
git clone https://github.com/ckorhonen/creator-insights-tracker.git
cd creator-insights-tracker

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file with:

```
VITE_WHOP_API_KEY=your_whop_api_key
VITE_WHOP_APP_ID=your_whop_app_id
```

## Project Structure

```
creator-insights-tracker/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and API clients
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Roadmap

- [x] Initial project setup
- [ ] Whop authentication integration
- [ ] Dashboard UI design
- [ ] Platform API integrations (Instagram, Twitter, YouTube)
- [ ] Revenue attribution algorithm
- [ ] Data visualization components
- [ ] Export and reporting features
- [ ] Mobile responsiveness
- [ ] AI-powered content recommendations

## Use Cases

1. **Course Creators**: See which YouTube videos or tweets drove the most course sales
2. **Newsletter Writers**: Track which topics lead to the most paid subscriptions
3. **Digital Product Sellers**: Understand which content promotes your products best
4. **Community Builders**: Identify what content brings in new paying members

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For questions or support, please open an issue on GitHub or contact us through Whop.

---

**Built for creators who want to work smarter, not harder.** 🚀