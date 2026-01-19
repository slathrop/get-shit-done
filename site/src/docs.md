---
title: Docs
layout: layouts/page.hbs
intro: How GSD works, the mental model, and the fastest way to get value.
---

## The mental model

GSD is an orchestration layer on top of Claude Code.

You describe what you want. GSD turns that into:

- A **project source of truth** (`PROJECT.md`, `REQUIREMENTS.md`)
- A **roadmap** broken into phases (`ROADMAP.md`)
- A **state tracker** you can resume from (`STATE.md`)
- Phase plans that become **executable prompts** (`PLAN.md` files)

The goal is simple: make Claude Code more reliable for solo developers by being **explicit** about goals, constraints, and verification.

## Why it works (context rot)

Long Claude Code sessions degrade over time: earlier tokens are “stronger” than later tokens as the context window fills.

GSD fights this by breaking work into phases → sub-plans → **2–3 atomic tasks**, where each task is executed by a **fresh sub-agent context**. That means each task gets a clean context window instead of inheriting a long, messy conversation history.

## What you’ll see on disk

A typical GSD run produces a `.planning/` folder with artifacts you can read and audit:

- `PROJECT.md` — the single source of truth (vision, values, constraints)
- `REQUIREMENTS.md` — what’s in v1, v2, and out of scope
- `ROADMAP.md` — phases + deliverables
- `STATE.md` — progress + checkpoints + timing metrics
- `PLAN.md` files — dense execution prompts with verification criteria
- Summary files + commits after each completed plan

## Typical workflow

1. **(Optional) Map an existing codebase**
   - Run `/gsd:map-codebase` first if you already have a project.

2. **Initialize a project**
   - Run `/gsd:new-project` and answer questions until the system understands the idea.

3. **Discuss a phase**
   - Run `/gsd:discuss-phase <n>` to lock in your preferences and remove ambiguity.

4. **Plan and execute**
   - Run `/gsd:plan-phase <n>` then `/gsd:execute-phase <n>`.

5. **Verify**
   - Run `/gsd:verify-work` for user acceptance testing prompts and checklists.

## Recommended run mode

GSD is designed for automation. Running Claude Code with `--dangerously-skip-permissions` removes a ton of friction for routine commands (git, file ops, etc.).

## Next

- See **Commands** for the list of core slash commands.
- See **Support** for ways to help GSD grow.
