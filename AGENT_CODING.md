# Promptbook Coder quick reference

This project is prepared for the `ptbk coder` workflow. Promptbook Coder does not create a new model on its own; it orchestrates coding agents such as GitHub Copilot, OpenAI Codex, Claude Code, Opencode, Cline, and Gemini CLI through prompt files in `prompts/`.

## Workflow
1. Put repository-wide coding rules into `AGENTS.md`. The default `npm run coder:run` script already passes `--context AGENTS.md`.
2. Create or customize prompt templates in `prompts/templates/`. The starter project template created by `ptbk coder init` is `prompts/templates/common.md`.
3. Generate prompt files with `npm run coder:generate-boilerplates` or `npx ptbk coder generate-boilerplates --template <template> --count <count>`.
4. Replace every `@@@`, keep drafts as `[-]`, and switch prompts to `[ ]` when they are ready to run. Completed prompts are marked `[x]`.
5. Run `npm run coder:run` to execute the next ready prompt with the configured coding agent.
6. Use `npm run coder:verify` to archive finished prompts into `prompts/done/` and append repair follow-up prompts when more work is needed.
7. Use `npm run coder:find-refactor-candidates` when you want Promptbook to suggest refactor prompts automatically.

## Templates
-   Project-owned templates created by `ptbk coder init`: `prompts/templates/common.md`
-   Built-in `--template` aliases: `common`, `agents-server`
-   To add a custom template, create a markdown file such as `prompts/templates/backend.md`.
-   To use a project template, run `npx ptbk coder generate-boilerplates --template prompts/templates/backend.md`.
-   Keep shared repository rules in `AGENTS.md` and recurring task-family rules in template files so individual prompt files stay focused on the actual task.

## Created npm scripts
| Script | Purpose |
| --- | --- |
| `npm run coder:generate-boilerplates` | Runs `npx ptbk coder generate-boilerplates` to create new prompt files in `prompts/`. |
| `npm run coder:run` | Runs `npx ptbk coder run --agent github-copilot --model gpt-5.4 --thinking-level xhigh --context AGENTS.md --no-wait` to execute the next ready prompt with shared repository context from `AGENTS.md`. |
| `npm run coder:find-refactor-candidates` | Runs `npx ptbk coder find-refactor-candidates` to generate prompt candidates for large or crowded files. |
| `npm run coder:verify` | Runs `npx ptbk coder verify` to archive verified prompts into `prompts/done/` and append repair prompts when needed. |

## Customizing the workflow
-   Edit `package.json` if you want `npm run coder:run` to use another coding agent, model, thinking level, context file, or wait mode.
-   Use direct CLI commands when you need one-off flags such as `--priority`, `--ignore-git-changes`, `--dry-run`, `--allow-credits`, or `--auto-migrate`.
-   Use `npx ptbk coder --help` and `npx ptbk coder <command> --help` for the full CLI reference.
