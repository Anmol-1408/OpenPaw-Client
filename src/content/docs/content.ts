export const docs = [
  {
    slug: "installation",
    title: "Installation",
    sections: [
      {
        heading: "Requirements",
        body: "Looper runs on macOS, Linux, and Windows (via WSL2). You need Node.js 18 or newer, and an API key from any supported LLM provider (OpenAI, Anthropic, or Gemini).",
      },
      {
        heading: "Install via npm",
        body: "The recommended way to install Looper globally:",
        code: "npm install -g looper",
      },
      {
        heading: "Install via curl",
        body: "For a standalone binary without Node.js:",
        code: "curl -fsSL https://get.looper.dev | sh",
      },
      {
        heading: "Install via Homebrew",
        body: "On macOS or Linuxbrew:",
        code: "brew install looper",
      },
      {
        heading: "Verify installation",
        body: "Check that Looper is on your PATH:",
        code: "looper --version\n# looper v1.4.2",
      },
    ],
  },
  {
    slug: "quickstart",
    title: "Quickstart",
    sections: [
      {
        heading: "Initialize",
        body: "Run init inside any project directory. Looper will create a ~/.looper/config.toml and index your repo.",
        code: "cd my-project\nlooper init",
      },
      {
        heading: "Set your API key",
        body: "Looper reads provider keys from environment variables:",
        code: "export LOOPER_API_KEY=\"sk-...\"\nexport LOOPER_PROVIDER=\"anthropic\"   # openai | anthropic | gemini",
      },
      {
        heading: "Your first run",
        body: "Ask a question about your codebase. Ask mode is read-only and completely safe:",
        code: "looper --mode ask \"how does routing work in this app?\"",
      },
      {
        heading: "Plan, then act",
        body: "Draft a plan, review it, then let the agent execute:",
        code: "looper --mode plan \"add rate limiting to the API\"\nlooper --mode agent --from-plan",
      },
    ],
  },
  {
    slug: "modes",
    title: "Modes",
    sections: [
      {
        heading: "Plan Mode",
        body: "Plan mode analyzes your repository and produces a numbered, step-by-step plan without modifying anything. Plans are saved to .looper/plans/ and can be edited by hand before execution.",
        code: "looper --mode plan \"migrate from express to fastify\"",
      },
      {
        heading: "Ask Mode",
        body: "Ask mode is a read-only Q&A layer over your codebase, git history, and logs. It never writes files, making it perfect for exploring unfamiliar projects.",
        code: "looper --mode ask \"which files handle payments?\"",
      },
      {
        heading: "Agent Mode",
        body: "Agent mode executes autonomously: editing files, running tests, and self-correcting on failures. Use --checkpoint to require approval at each step, and `looper rollback` to undo the last run.",
        code: "looper --mode agent \"fix all failing tests\" --checkpoint",
      },
      {
        heading: "Switching defaults",
        body: "Set a default mode in your config:",
        code: "# ~/.looper/config.toml\n[core]\ndefault_mode = \"plan\"",
      },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    sections: [
      {
        heading: "Telegram",
        body: "Connect a Telegram bot to receive run reports, error alerts, and approval requests. Create a bot with @BotFather, then add the token to your config:",
        code: "# ~/.looper/config.toml\n[integrations.telegram]\nbot_token = \"env:TELEGRAM_TOKEN\"\nchat_id = \"env:TELEGRAM_CHAT_ID\"\nnotify_on = [\"task_done\", \"error\", \"approval_needed\"]",
      },
      {
        heading: "Slack",
        body: "Post run summaries to a channel and trigger agent runs with /looper slash commands:",
        code: "[integrations.slack]\nwebhook_url = \"env:SLACK_WEBHOOK\"\nchannel = \"#dev-agents\"",
      },
      {
        heading: "GitHub",
        body: "Let agent mode open pull requests instead of committing directly:",
        code: "[integrations.github]\ntoken = \"env:GITHUB_TOKEN\"\nmode = \"pull_request\"   # or \"commit\"",
      },
      {
        heading: "Webhooks & more",
        body: "Any HTTP endpoint can receive Looper events. Discord, Gmail, Notion, Trello, and Google Calendar adapters ship built-in. Run `looper integrations list` to see everything available.",
        code: "[integrations.webhook]\nurl = \"https://your-server.dev/looper-events\"",
      },
    ],
  },
  {
    slug: "scheduling",
    title: "Scheduling",
    sections: [
      {
        heading: "Schedule a task",
        body: "Use natural language time expressions. Looper persists schedules in ~/.looper/schedules and runs them via a lightweight daemon:",
        code: "looper schedule \"daily standup summary\" --at 9am --to telegram",
      },
      {
        heading: "Recurring runs",
        body: "Use --every for intervals or standard cron syntax with --cron:",
        code: "looper schedule \"watch prod logs for errors\" --every 15m\nlooper schedule \"nightly test suite\" --cron \"0 22 * * *\"",
      },
      {
        heading: "Manage schedules",
        body: "List, pause, or remove scheduled tasks:",
        code: "looper schedule list\nlooper schedule pause <id>\nlooper schedule rm <id>",
      },
      {
        heading: "The daemon",
        body: "The scheduler daemon starts automatically on login. Control it manually if needed:",
        code: "looper daemon status\nlooper daemon restart",
      },
    ],
  },
];
