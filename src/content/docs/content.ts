export const docs = [
  {
    slug: "installation",
    title: "Installation",
    sections: [
      {
        heading: "Requirements",
        body: "OpenPaw runs on macOS, Linux, and Windows (via WSL2). You need Node.js 18 or newer, and an API key from any supported LLM provider (OpenAI, Anthropic, or Gemini).",
      },
      {
        heading: "Install via npm",
        body: "The recommended way to install OpenPaw globally:",
        code: "npm install -g openpaw",
      },
      {
        heading: "Install via curl",
        body: "For a standalone binary without Node.js:",
        code: "curl -fsSL https://get.openpaw.dev | sh",
      },
      {
        heading: "Install via Homebrew",
        body: "On macOS or Linuxbrew:",
        code: "brew install openpaw",
      },
      {
        heading: "Verify installation",
        body: "Check that OpenPaw is on your PATH:",
        code: "openpaw --version\n# openpaw v1.4.2",
      },
    ],
  },
  {
    slug: "quickstart",
    title: "Quickstart",
    sections: [
      {
        heading: "Initialize",
        body: "Run init inside any project directory. OpenPaw will create a ~/.openpaw/config.toml and index your repo.",
        code: "cd my-project\nopenpaw init",
      },
      {
        heading: "Set your API key",
        body: "OpenPaw reads provider keys from environment variables:",
        code: "export OPENPAW_API_KEY=\"sk-...\"\nexport OPENPAW_PROVIDER=\"anthropic\"   # openai | anthropic | gemini",
      },
      {
        heading: "Your first run",
        body: "Ask a question about your codebase. Ask mode is read-only and completely safe:",
        code: "openpaw --mode ask \"how does routing work in this app?\"",
      },
      {
        heading: "Plan, then act",
        body: "Draft a plan, review it, then let the agent execute:",
        code: "openpaw --mode plan \"add rate limiting to the API\"\nopenpaw --mode agent --from-plan",
      },
    ],
  },
  {
    slug: "modes",
    title: "Modes",
    sections: [
      {
        heading: "Plan Mode",
        body: "Plan mode analyzes your repository and produces a numbered, step-by-step plan without modifying anything. Plans are saved to .openpaw/plans/ and can be edited by hand before execution.",
        code: "openpaw --mode plan \"migrate from express to fastify\"",
      },
      {
        heading: "Ask Mode",
        body: "Ask mode is a read-only Q&A layer over your codebase, git history, and logs. It never writes files, making it perfect for exploring unfamiliar projects.",
        code: "openpaw --mode ask \"which files handle payments?\"",
      },
      {
        heading: "Agent Mode",
        body: "Agent mode executes autonomously: editing files, running tests, and self-correcting on failures. Use --checkpoint to require approval at each step, and `openpaw rollback` to undo the last run.",
        code: "openpaw --mode agent \"fix all failing tests\" --checkpoint",
      },
      {
        heading: "Switching defaults",
        body: "Set a default mode in your config:",
        code: "# ~/.openpaw/config.toml\n[core]\ndefault_mode = \"plan\"",
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
        code: "# ~/.openpaw/config.toml\n[integrations.telegram]\nbot_token = \"env:TELEGRAM_TOKEN\"\nchat_id = \"env:TELEGRAM_CHAT_ID\"\nnotify_on = [\"task_done\", \"error\", \"approval_needed\"]",
      },
      {
        heading: "Slack",
        body: "Post run summaries to a channel and trigger agent runs with /openpaw slash commands:",
        code: "[integrations.slack]\nwebhook_url = \"env:SLACK_WEBHOOK\"\nchannel = \"#dev-agents\"",
      },
      {
        heading: "GitHub",
        body: "Let agent mode open pull requests instead of committing directly:",
        code: "[integrations.github]\ntoken = \"env:GITHUB_TOKEN\"\nmode = \"pull_request\"   # or \"commit\"",
      },
      {
        heading: "Webhooks & more",
        body: "Any HTTP endpoint can receive OpenPaw events. Discord, Gmail, Notion, Trello, and Google Calendar adapters ship built-in. Run `openpaw integrations list` to see everything available.",
        code: "[integrations.webhook]\nurl = \"https://your-server.dev/openpaw-events\"",
      },
    ],
  },
  {
    slug: "scheduling",
    title: "Scheduling",
    sections: [
      {
        heading: "Schedule a task",
        body: "Use natural language time expressions. OpenPaw persists schedules in ~/.openpaw/schedules and runs them via a lightweight daemon:",
        code: "openpaw schedule \"daily standup summary\" --at 9am --to telegram",
      },
      {
        heading: "Recurring runs",
        body: "Use --every for intervals or standard cron syntax with --cron:",
        code: "openpaw schedule \"watch prod logs for errors\" --every 15m\nopenpaw schedule \"nightly test suite\" --cron \"0 22 * * *\"",
      },
      {
        heading: "Manage schedules",
        body: "List, pause, or remove scheduled tasks:",
        code: "openpaw schedule list\nopenpaw schedule pause <id>\nopenpaw schedule rm <id>",
      },
      {
        heading: "The daemon",
        body: "The scheduler daemon starts automatically on login. Control it manually if needed:",
        code: "openpaw daemon status\nopenpaw daemon restart",
      },
    ],
  },
];
