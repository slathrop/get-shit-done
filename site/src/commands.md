---
title: Commands
layout: layouts/page.hbs
intro: The core slash commands you’ll use most often (and when to reach for each).
---

## The ones you’ll use constantly

| Command | Use it when |
|---|---|
| `/gsd:new-project` | You’re starting something new and want GSD to extract requirements and build a roadmap. |
| `/gsd:map-codebase` | You already have code and want GSD to learn your conventions before planning new work. |
| `/gsd:discuss-phase <n>` | You want to clarify how a phase should be implemented before planning. |
| `/gsd:plan-phase <n>` | You’re ready to generate a phase plan (deliverables, tasks, verification). |
| `/gsd:execute-phase <n>` | You want to run the phase plan via sub-agent tasks with verification gates. |
| `/gsd:verify-work` | You want a guided UAT checklist for recently completed work. |

## Quality-of-life commands

| Command | Use it when |
|---|---|
| `/gsd:progress` | You’re unsure what’s next and want a quick status + recommended action. |
| `/gsd:resume-work` | You’re coming back after a break and want context restoration. |
| `/gsd:pause-work` | You need to stop mid-phase and want a clean handoff for later. |
| `/gsd:whats-new` | You want release notes and reminders to update. |

## Tip

Run `/gsd:help` at any time to see the full command list and usage in your Claude Code environment.
