
## .agents\skills\supabase\assets\feedback-issue-template.md
```md
## What happened

**Task:** <!-- e.g., "Set up MFA on patient records" -->

**Skill said:** <!-- e.g., "Use auth.jwt()->'app_metadata' in the RLS policy" -->

**Expected:** <!-- e.g., "The function also needs SECURITY DEFINER + grant to supabase_auth_admin" -->

## Source

**File:** <!-- e.g., references/security-model.md -->

**Section:** <!-- e.g., "Trust Boundaries > user_metadata vs app_metadata" -->

## Fix suggestion

<!-- Leave blank if unsure -->

```

## .agents\skills\supabase\references\skill-feedback.md
```md
# Skill Feedback

Use this when the user reports that the skill gave incorrect guidance, is missing information, or could be improved. This is about the skill (agent instructions), not about Supabase the product.

## Steps

1. **Ask permission** — Ask the user if they'd like to submit feedback to the skill maintainers. If they decline, move on.

2. **Draft the issue** — Use the template at [assets/feedback-issue-template.md](../assets/feedback-issue-template.md) to structure the feedback. Fill in the fields based on the conversation. Always identify which specific reference file and section caused the problem.

3. **Submit** — Create a GitHub Issue on the `supabase/agent-skills` repository using the draft as the issue body. The title must follow this format: `user-feedback: <summary of the problem>`.

4. **Share the result** — Share the issue URL with the user after submission. If submission fails, give the user this link to create the issue manually:

```
https://github.com/supabase/agent-skills/issues/new
```

```

## .agents\skills\supabase\CHANGELOG.md
```md
# Changelog

## [0.1.4](https://github.com/supabase/agent-skills/compare/v0.1.3...v0.1.4) (2026-06-05)


### Features

* add instructions to check changelog ([#74](https://github.com/supabase/agent-skills/issues/74)) ([4bb13d8](https://github.com/supabase/agent-skills/commit/4bb13d858d19f1f848505a66f46fc9603fdcde95))
* add npm supply-chain security guidance to supabase skill ([#94](https://github.com/supabase/agent-skills/issues/94)) ([82df90a](https://github.com/supabase/agent-skills/commit/82df90a5de1cd84386d8bc192746e50343b86dc0))
* instructions on exposing tables to the data api ([#71](https://github.com/supabase/agent-skills/issues/71)) ([f15a5a4](https://github.com/supabase/agent-skills/commit/f15a5a40779072a530c9e53c3f14ec4131118ea6))
* using Supabase agent skills ([#12](https://github.com/supabase/agent-skills/issues/12)) ([7c2e389](https://github.com/supabase/agent-skills/commit/7c2e3894fddfde8eb6c77d2a8921904543b9be7a))


### Bug Fixes

* bump supabase skill to v0.1.1 and fix Data API broken link ([#72](https://github.com/supabase/agent-skills/issues/72)) ([5a6542e](https://github.com/supabase/agent-skills/commit/5a6542e08fc026d90c9a6a0f5a67749e9ceb9946))
* cover SECURITY DEFINER, auth.role() deprecation, and BOLA in security checklist ([#85](https://github.com/supabase/agent-skills/issues/85)) ([133f43e](https://github.com/supabase/agent-skills/commit/133f43e8c2ffc48823ff0630c692cabecea3e3a3))
* update Data API doc link and bump supabase skill to v0.1.1 ([#73](https://github.com/supabase/agent-skills/issues/73)) ([e5f7a7c](https://github.com/supabase/agent-skills/commit/e5f7a7cfd697765848ffd6a4505f3c02e1ee17ee))

## [0.1.3](https://github.com/supabase/agent-skills/compare/v0.1.2...v0.1.3) (2026-06-02)


### Features

* add instructions to check changelog ([#74](https://github.com/supabase/agent-skills/issues/74)) ([4bb13d8](https://github.com/supabase/agent-skills/commit/4bb13d858d19f1f848505a66f46fc9603fdcde95))
* add npm supply-chain security guidance to supabase skill ([#94](https://github.com/supabase/agent-skills/issues/94)) ([82df90a](https://github.com/supabase/agent-skills/commit/82df90a5de1cd84386d8bc192746e50343b86dc0))
* instructions on exposing tables to the data api ([#71](https://github.com/supabase/agent-skills/issues/71)) ([f15a5a4](https://github.com/supabase/agent-skills/commit/f15a5a40779072a530c9e53c3f14ec4131118ea6))
* using Supabase agent skills ([#12](https://github.com/supabase/agent-skills/issues/12)) ([7c2e389](https://github.com/supabase/agent-skills/commit/7c2e3894fddfde8eb6c77d2a8921904543b9be7a))


### Bug Fixes

* bump supabase skill to v0.1.1 and fix Data API broken link ([#72](https://github.com/supabase/agent-skills/issues/72)) ([5a6542e](https://github.com/supabase/agent-skills/commit/5a6542e08fc026d90c9a6a0f5a67749e9ceb9946))
* cover SECURITY DEFINER, auth.role() deprecation, and BOLA in security checklist ([#85](https://github.com/supabase/agent-skills/issues/85)) ([133f43e](https://github.com/supabase/agent-skills/commit/133f43e8c2ffc48823ff0630c692cabecea3e3a3))
* update Data API doc link and bump supabase skill to v0.1.1 ([#73](https://github.com/supabase/agent-skills/issues/73)) ([e5f7a7c](https://github.com/supabase/agent-skills/commit/e5f7a7cfd697765848ffd6a4505f3c02e1ee17ee))

```

## .agents\skills\supabase\SKILL.md
```md
---
name: supabase
description: "Use when doing ANY task involving Supabase. Triggers: Supabase products (Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues); client libraries and SSR integrations (supabase-js, @supabase/ssr) in Next.js, React, SvelteKit, Astro, Remix; auth issues (login, logout, sessions, JWT, cookies, getSession, getUser, getClaims, RLS); Supabase CLI or MCP server; schema changes, migrations, security audits, Postgres extensions (pg_graphql, pg_cron, pg_vector)."
metadata:
  author: supabase
  version: "0.1.2"
---

# Supabase

## Core Principles

**1. Supabase changes frequently — verify against changelog and current docs before implementing.**
Do not rely on training data for Supabase features. Function signatures, config.toml settings, and API conventions change between versions.

First, fetch `https://supabase.com/changelog.md` (a lightweight summary index — not a heavy pull), scan for `breaking-change` tags relevant to your task, and follow the linked page for any that apply. Then look up the relevant topic using the documentation access methods below.

**2. Verify your work.**
After implementing any fix, run a test query to confirm the change works. A fix without verification is incomplete.

**3. Recover from errors, don't loop.**
If an approach fails after 2-3 attempts, stop and reconsider. Try a different method, check documentation, inspect the error more carefully, and review relevant logs when available. Supabase issues are not always solved by retrying the same command, and the answer is not always in the logs, but logs are often worth checking before proceeding.

**4. Exposing tables to the Data API:** Depending on the user's [Data API settings](https://supabase.com/dashboard/project/<ref>/integrations/data_api/settings), newly created tables may not be automatically exposed via the Data (REST) API. If this is the case, `anon` and `authenticated` roles will need to be explicitly granted access.

> Note that this is separate from RLS, which controls which _rows_ are visible once a table is accessible, not whether the table is accessible at all.

When a user reports a SQL-created table is unexpectedly inaccessible, check their Data API settings and whether the roles have been granted access via explicit `GRANT` SQL. When granting public (`anon`/`authenticated`) access, always enable RLS too. See [Exposing a Table to the Data API](https://supabase.com/docs/guides/api/securing-your-api.md) for the full setup workflow.

**5. RLS in exposed schemas.**
Enable RLS on every table in any exposed schema, which includes `public` by default. This is critical in Supabase because tables in exposed schemas can be reachable through the Data API when the `anon`/`authenticated` roles have access (see [Exposing a Table to the Data API](https://supabase.com/docs/guides/api/securing-your-api.md)). For private schemas, prefer RLS as defense in depth. After enabling RLS, create policies that match the actual access model rather than defaulting every table to the same `auth.uid()` pattern.

**6. Security checklist.**
When working on any Supabase task that touches auth, RLS, views, storage, or user data, run through this checklist. These are Supabase-specific security traps that silently create vulnerabilities:

- **Auth and session security**
  - **Never use `user_metadata` claims in JWT-based authorization decisions.** In Supabase, `raw_user_meta_data` is user-editable and can appear in `auth.jwt()`, so it is unsafe for RLS policies or any other authorization logic. Store authorization data in `raw_app_meta_data` / `app_metadata` instead.
  - **Deleting a user does not invalidate existing access tokens.** Sign out or revoke sessions first, keep JWT expiry short for sensitive apps, and for strict guarantees validate `session_id` against `auth.sessions` on sensitive operations.
  - **If you use `app_metadata` or `auth.jwt()` for authorization, remember JWT claims are not always fresh until the user's token is refreshed.**

- **API key and client exposure**
  - **Never expose the `service_role` or secret key in public clients.** Prefer publishable keys for frontend code. Legacy `anon` keys are only for compatibility. In Next.js, any `NEXT_PUBLIC_` env var is sent to the browser.

- **RLS, views, and privileged database code**
  - **Views bypass RLS by default.** In Postgres 15 and above, use `CREATE VIEW ... WITH (security_invoker = true)`. In older versions of Postgres, protect your views by revoking access from the `anon` and `authenticated` roles, or by putting them in an unexposed schema.
  - **UPDATE requires a SELECT policy.** In Postgres RLS, an UPDATE needs to first SELECT the row. Without a SELECT policy, updates silently return 0 rows — no error, just no change.
  - **`auth.role()` is deprecated — use the `TO` clause instead.** Supabase has deprecated `auth.role()` in favour of specifying the target role directly on the policy with `TO authenticated` or `TO anon`. Beyond deprecation, `auth.role() = 'authenticated'` breaks silently when anonymous sign-ins are enabled, because anonymous users carry the `authenticated` Postgres role and pass the check regardless of whether the user is genuinely signed in.
    ```sql
    -- Deprecated (do not use)
    create policy "example" on table_name for select
    using ( auth.role() = 'authenticated' );
    ```
  - **`TO authenticated` alone is authentication without authorization (BOLA / IDOR).** Using `TO authenticated` only checks the role — it does not restrict which rows a user can access. The correct pattern combines `TO authenticated` with an ownership predicate in `USING`:
    ```sql
    create policy "example" on table_name for select
    to authenticated
    using ( (select auth.uid()) = user_id );
    ```
  - **UPDATE policies require both `USING` and `WITH CHECK`.** Without `WITH CHECK`, a user can reassign a row's `user_id` to another user:
    ```sql
    create policy "example" on table_name for update
    to authenticated
    using ( (select auth.uid()) = user_id )
    with check ( (select auth.uid()) = user_id );
    ```
  - **`SECURITY DEFINER` functions bypass RLS.** A `SECURITY DEFINER` function runs with its creator's privileges — typically a role with `bypassrls` (e.g., `postgres`). Never add `SECURITY DEFINER` to resolve a permission error; it silently removes access control without fixing the underlying cause. Prefer `SECURITY INVOKER`.
  - **`SECURITY DEFINER` functions in `public` are callable by all roles.** Postgres grants `EXECUTE` to `PUBLIC` by default for every new function, so any `SECURITY DEFINER` function in `public` is a public API endpoint callable by `anon` and `authenticated` (which inherit from `PUBLIC`) without any additional grant. When `SECURITY DEFINER` is genuinely needed (e.g., bypassing RLS on an internal lookup table), keep the function in a non-exposed schema, always include an `auth.uid()` check in the function body, and run `supabase db advisors` after making changes.

- **Storage access control**
  - **Storage upsert requires INSERT + SELECT + UPDATE.** Granting only INSERT allows new uploads but file replacement (upsert) silently fails. You need all three.

- **Dependency and supply-chain security**
  - **Always pin package versions and commit lockfiles** when installing Supabase packages (`supabase-js`, `@supabase/ssr`, `supabase-py`, etc.). See the [npm security guide](https://supabase.com/docs/guides/security/npm-security.md) for the full checklist.

For any security concern not covered above, fetch the Supabase product security index: `https://supabase.com/docs/guides/security/product-security.md`

## Supabase CLI

Always discover commands via `--help` — never guess. The CLI structure changes between versions.

```bash
supabase --help                    # All top-level commands
supabase <group> --help            # Subcommands (e.g., supabase db --help)
supabase <group> <command> --help  # Flags for a specific command
```

**Supabase CLI Known gotchas:**

- `supabase db query` requires **CLI v2.79.0+** → use MCP `execute_sql` or `psql` as fallback
- `supabase db advisors` requires **CLI v2.81.3+** → use MCP `get_advisors` as fallback
- When you need a new migration SQL file, **always** create it with `supabase migration new <name>` first. Never invent a migration filename or rely on memory for the expected format.

**Version check and upgrade:** Run `supabase --version` to check. For CLI changelogs and version-specific features, consult the [CLI documentation](https://supabase.com/docs/reference/cli/introduction) or [GitHub releases](https://github.com/supabase/cli/releases).

## Supabase MCP Server

For setup instructions, server URL, and configuration, see the [MCP setup guide](https://supabase.com/docs/guides/getting-started/mcp).

**Troubleshooting connection issues** — follow these steps in order:

1. **Check if the server is reachable:**
   `curl -so /dev/null -w "%{http_code}" https://mcp.supabase.com/mcp`
   A `401` is expected (no token) and means the server is up. Timeout or "connection refused" means it may be down.

2. **Check `.mcp.json` configuration:**
   Verify the project root has a valid `.mcp.json` with the correct server URL. If missing, create one pointing to `https://mcp.supabase.com/mcp`.

3. **Authenticate the MCP server:**
   If the server is reachable and `.mcp.json` is correct but tools aren't visible, the user needs to authenticate. The Supabase MCP server uses OAuth 2.1 — tell the user to trigger the auth flow in their agent, complete it in the browser, and reload the session.

## Supabase Documentation

Before implementing any Supabase feature, find the relevant documentation. Use these methods in priority order:

1. **MCP `search_docs` tool** (preferred — returns relevant snippets directly)
2. **Fetch docs pages as markdown** — any docs page can be fetched by appending `.md` to the URL path.
3. **Web search** for Supabase-specific topics when you don't know which page to look at.

## Making and Committing Schema Changes

**To make schema changes, use `execute_sql` (MCP) or `supabase db query` (CLI).** These run SQL directly on the database without creating migration history entries, so you can iterate freely and generate a clean migration when ready.

Do NOT use `apply_migration` to change a local database schema — it writes a migration history entry on every call, which means you can't iterate, and `supabase db diff` / `supabase db pull` will produce empty or conflicting diffs. If you use it, you'll be stuck with whatever SQL you passed on the first try.

**When ready to commit** your changes to a migration file:

1. **Run advisors** → `supabase db advisors` (CLI v2.81.3+) or MCP `get_advisors`. Fix any issues.
2. **Review the Security Checklist above** if your changes involve views, functions, triggers, or storage.
3. **Generate the migration** → `supabase db pull <descriptive-name> --local --yes`
4. **Verify** → `supabase migration list --local`

## Reference Guides

- **Skill Feedback** → [references/skill-feedback.md](references/skill-feedback.md)
  **MUST read when** the user reports that this skill gave incorrect guidance or is missing information.

```

## .agents\skills\supabase-postgres-best-practices\references\advanced-full-text-search.md
```md
---
title: Use tsvector for Full-Text Search
impact: MEDIUM
impactDescription: 100x faster than LIKE, with ranking support
tags: full-text-search, tsvector, gin, search
---

## Use tsvector for Full-Text Search

LIKE with wildcards can't use indexes. Full-text search with tsvector is orders of magnitude faster.

**Incorrect (LIKE pattern matching):**

```sql
-- Cannot use index, scans all rows
select * from articles where content like '%postgresql%';

-- Case-insensitive makes it worse
select * from articles where lower(content) like '%postgresql%';
```

**Correct (full-text search with tsvector):**

```sql
-- Add tsvector column and index
alter table articles add column search_vector tsvector
  generated always as (to_tsvector('english', coalesce(title,'') || ' ' || coalesce(content,''))) stored;

create index articles_search_idx on articles using gin (search_vector);

-- Fast full-text search
select * from articles
where search_vector @@ to_tsquery('english', 'postgresql & performance');

-- With ranking
select *, ts_rank(search_vector, query) as rank
from articles, to_tsquery('english', 'postgresql') query
where search_vector @@ query
order by rank desc;
```

Search multiple terms:

```sql
-- AND: both terms required
to_tsquery('postgresql & performance')

-- OR: either term
to_tsquery('postgresql | mysql')

-- Prefix matching
to_tsquery('post:*')
```

Reference: [Full Text Search](https://supabase.com/docs/guides/database/full-text-search)

```

## .agents\skills\supabase-postgres-best-practices\references\advanced-jsonb-indexing.md
```md
---
title: Index JSONB Columns for Efficient Querying
impact: MEDIUM
impactDescription: 10-100x faster JSONB queries with proper indexing
tags: jsonb, gin, indexes, json
---

## Index JSONB Columns for Efficient Querying

JSONB queries without indexes scan the entire table. Use GIN indexes for containment queries.

**Incorrect (no index on JSONB):**

```sql
create table products (
  id bigint primary key,
  attributes jsonb
);

-- Full table scan for every query
select * from products where attributes @> '{"color": "red"}';
select * from products where attributes->>'brand' = 'Nike';
```

**Correct (GIN index for JSONB):**

```sql
-- GIN index for containment operators (@>, ?, ?&, ?|)
create index products_attrs_gin on products using gin (attributes);

-- Now containment queries use the index
select * from products where attributes @> '{"color": "red"}';

-- For specific key lookups, use expression index
create index products_brand_idx on products ((attributes->>'brand'));
select * from products where attributes->>'brand' = 'Nike';
```

Choose the right operator class:

```sql
-- jsonb_ops (default): supports all operators, larger index
create index idx1 on products using gin (attributes);

-- jsonb_path_ops: only @> operator, but 2-3x smaller index
create index idx2 on products using gin (attributes jsonb_path_ops);
```

Reference: [JSONB Indexes](https://www.postgresql.org/docs/current/datatype-json.html#JSON-INDEXING)

```

## .agents\skills\supabase-postgres-best-practices\references\conn-idle-timeout.md
```md
---
title: Configure Idle Connection Timeouts
impact: HIGH
impactDescription: Reclaim 30-50% of connection slots from idle clients
tags: connections, timeout, idle, resource-management
---

## Configure Idle Connection Timeouts

Idle connections waste resources. Configure timeouts to automatically reclaim them.

**Incorrect (connections held indefinitely):**

```sql
-- No timeout configured
show idle_in_transaction_session_timeout;  -- 0 (disabled)

-- Connections stay open forever, even when idle
select pid, state, state_change, query
from pg_stat_activity
where state = 'idle in transaction';
-- Shows transactions idle for hours, holding locks
```

**Correct (automatic cleanup of idle connections):**

```sql
-- Terminate connections idle in transaction after 30 seconds
alter system set idle_in_transaction_session_timeout = '30s';

-- Terminate completely idle connections after 10 minutes
alter system set idle_session_timeout = '10min';

-- Reload configuration
select pg_reload_conf();
```

For pooled connections, configure at the pooler level:

```ini
# pgbouncer.ini
server_idle_timeout = 60
client_idle_timeout = 300
```

Reference: [Connection Timeouts](https://www.postgresql.org/docs/current/runtime-config-client.html#GUC-IDLE-IN-TRANSACTION-SESSION-TIMEOUT)

```

## .agents\skills\supabase-postgres-best-practices\references\conn-limits.md
```md
---
title: Set Appropriate Connection Limits
impact: CRITICAL
impactDescription: Prevent database crashes and memory exhaustion
tags: connections, max-connections, limits, stability
---

## Set Appropriate Connection Limits

Too many connections exhaust memory and degrade performance. Set limits based on available resources.

**Incorrect (unlimited or excessive connections):**

```sql
-- Default max_connections = 100, but often increased blindly
show max_connections;  -- 500 (way too high for 4GB RAM)

-- Each connection uses 1-3MB RAM
-- 500 connections * 2MB = 1GB just for connections!
-- Out of memory errors under load
```

**Correct (calculate based on resources):**

```sql
-- Formula: max_connections = (RAM in MB / 5MB per connection) - reserved
-- For 4GB RAM: (4096 / 5) - 10 = ~800 theoretical max
-- But practically, 100-200 is better for query performance

-- Recommended settings for 4GB RAM
alter system set max_connections = 100;

-- Also set work_mem appropriately
-- work_mem * max_connections should not exceed 25% of RAM
alter system set work_mem = '8MB';  -- 8MB * 100 = 800MB max
```

Monitor connection usage:

```sql
select count(*), state from pg_stat_activity group by state;
```

Reference: [Database Connections](https://supabase.com/docs/guides/platform/performance#connection-management)

```

## .agents\skills\supabase-postgres-best-practices\references\conn-pooling.md
```md
---
title: Use Connection Pooling for All Applications
impact: CRITICAL
impactDescription: Handle 10-100x more concurrent users
tags: connection-pooling, pgbouncer, performance, scalability
---

## Use Connection Pooling for All Applications

Postgres connections are expensive (1-3MB RAM each). Without pooling, applications exhaust connections under load.

**Incorrect (new connection per request):**

```sql
-- Each request creates a new connection
-- Application code: db.connect() per request
-- Result: 500 concurrent users = 500 connections = crashed database

-- Check current connections
select count(*) from pg_stat_activity;  -- 487 connections!
```

**Correct (connection pooling):**

```sql
-- Use a pooler like PgBouncer between app and database
-- Application connects to pooler, pooler reuses a small pool to Postgres

-- Configure pool_size based on: (CPU cores * 2) + spindle_count
-- Example for 4 cores: pool_size = 10

-- Result: 500 concurrent users share 10 actual connections
select count(*) from pg_stat_activity;  -- 10 connections
```

Pool modes:

- **Transaction mode**: connection returned after each transaction (best for most apps)
- **Session mode**: connection held for entire session (needed for prepared statements, temp tables)

Reference: [Connection Pooling](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler)

```

## .agents\skills\supabase-postgres-best-practices\references\conn-prepared-statements.md
```md
---
title: Use Prepared Statements Correctly with Pooling
impact: HIGH
impactDescription: Avoid prepared statement conflicts in pooled environments
tags: prepared-statements, connection-pooling, transaction-mode
---

## Use Prepared Statements Correctly with Pooling

Prepared statements are tied to individual database connections. In transaction-mode pooling, connections are shared, causing conflicts.

**Incorrect (named prepared statements with transaction pooling):**

```sql
-- Named prepared statement
prepare get_user as select * from users where id = $1;

-- In transaction mode pooling, next request may get different connection
execute get_user(123);
-- ERROR: prepared statement "get_user" does not exist
```

**Correct (use unnamed statements or session mode):**

```sql
-- Option 1: Use unnamed prepared statements (most ORMs do this automatically)
-- The query is prepared and executed in a single protocol message

-- Option 2: Deallocate after use in transaction mode
prepare get_user as select * from users where id = $1;
execute get_user(123);
deallocate get_user;

-- Option 3: Use session mode pooling (port 5432 vs 6543)
-- Connection is held for entire session, prepared statements persist
```

Check your driver settings:

```sql
-- Many drivers use prepared statements by default
-- Node.js pg: { prepare: false } to disable
-- JDBC: prepareThreshold=0 to disable
```

Reference: [Prepared Statements with Pooling](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pool-modes)

```

## .agents\skills\supabase-postgres-best-practices\references\data-batch-inserts.md
```md
---
title: Batch INSERT Statements for Bulk Data
impact: MEDIUM
impactDescription: 10-50x faster bulk inserts
tags: batch, insert, bulk, performance, copy
---

## Batch INSERT Statements for Bulk Data

Individual INSERT statements have high overhead. Batch multiple rows in single statements or use COPY.

**Incorrect (individual inserts):**

```sql
-- Each insert is a separate transaction and round trip
insert into events (user_id, action) values (1, 'click');
insert into events (user_id, action) values (1, 'view');
insert into events (user_id, action) values (2, 'click');
-- ... 1000 more individual inserts

-- 1000 inserts = 1000 round trips = slow
```

**Correct (batch insert):**

```sql
-- Multiple rows in single statement
insert into events (user_id, action) values
  (1, 'click'),
  (1, 'view'),
  (2, 'click'),
  -- ... up to ~1000 rows per batch
  (999, 'view');

-- One round trip for 1000 rows
```

For large imports, use COPY:

```sql
-- COPY is fastest for bulk loading
copy events (user_id, action, created_at)
from '/path/to/data.csv'
with (format csv, header true);

-- Or from stdin in application
copy events (user_id, action) from stdin with (format csv);
1,click
1,view
2,click
\.
```

Reference: [COPY](https://www.postgresql.org/docs/current/sql-copy.html)

```

## .agents\skills\supabase-postgres-best-practices\references\data-n-plus-one.md
```md
---
title: Eliminate N+1 Queries with Batch Loading
impact: MEDIUM-HIGH
impactDescription: 10-100x fewer database round trips
tags: n-plus-one, batch, performance, queries
---

## Eliminate N+1 Queries with Batch Loading

N+1 queries execute one query per item in a loop. Batch them into a single query using arrays or JOINs.

**Incorrect (N+1 queries):**

```sql
-- First query: get all users
select id from users where active = true;  -- Returns 100 IDs

-- Then N queries, one per user
select * from orders where user_id = 1;
select * from orders where user_id = 2;
select * from orders where user_id = 3;
-- ... 97 more queries!

-- Total: 101 round trips to database
```

**Correct (single batch query):**

```sql
-- Collect IDs and query once with ANY
select * from orders where user_id = any(array[1, 2, 3, ...]);

-- Or use JOIN instead of loop
select u.id, u.name, o.*
from users u
left join orders o on o.user_id = u.id
where u.active = true;

-- Total: 1 round trip
```

Application pattern:

```sql
-- Instead of looping in application code:
-- for user in users: db.query("SELECT * FROM orders WHERE user_id = $1", user.id)

-- Pass array parameter:
select * from orders where user_id = any($1::bigint[]);
-- Application passes: [1, 2, 3, 4, 5, ...]
```

Reference: [N+1 Query Problem](https://supabase.com/docs/guides/database/query-optimization)

```

## .agents\skills\supabase-postgres-best-practices\references\data-pagination.md
```md
---
title: Use Cursor-Based Pagination Instead of OFFSET
impact: MEDIUM-HIGH
impactDescription: Consistent O(1) performance regardless of page depth
tags: pagination, cursor, keyset, offset, performance
---

## Use Cursor-Based Pagination Instead of OFFSET

OFFSET-based pagination scans all skipped rows, getting slower on deeper pages. Cursor pagination is O(1).

**Incorrect (OFFSET pagination):**

```sql
-- Page 1: scans 20 rows
select * from products order by id limit 20 offset 0;

-- Page 100: scans 2000 rows to skip 1980
select * from products order by id limit 20 offset 1980;

-- Page 10000: scans 200,000 rows!
select * from products order by id limit 20 offset 199980;
```

**Correct (cursor/keyset pagination):**

```sql
-- Page 1: get first 20
select * from products order by id limit 20;
-- Application stores last_id = 20

-- Page 2: start after last ID
select * from products where id > 20 order by id limit 20;
-- Uses index, always fast regardless of page depth

-- Page 10000: same speed as page 1
select * from products where id > 199980 order by id limit 20;
```

For multi-column sorting:

```sql
-- Cursor must include all sort columns
select * from products
where (created_at, id) > ('2024-01-15 10:00:00', 12345)
order by created_at, id
limit 20;
```

Reference: [Pagination](https://supabase.com/docs/guides/database/pagination)

```

## .agents\skills\supabase-postgres-best-practices\references\data-upsert.md
```md
---
title: Use UPSERT for Insert-or-Update Operations
impact: MEDIUM
impactDescription: Atomic operation, eliminates race conditions
tags: upsert, on-conflict, insert, update
---

## Use UPSERT for Insert-or-Update Operations

Using separate SELECT-then-INSERT/UPDATE creates race conditions. Use INSERT ... ON CONFLICT for atomic upserts.

**Incorrect (check-then-insert race condition):**

```sql
-- Race condition: two requests check simultaneously
select * from settings where user_id = 123 and key = 'theme';
-- Both find nothing

-- Both try to insert
insert into settings (user_id, key, value) values (123, 'theme', 'dark');
-- One succeeds, one fails with duplicate key error!
```

**Correct (atomic UPSERT):**

```sql
-- Single atomic operation
insert into settings (user_id, key, value)
values (123, 'theme', 'dark')
on conflict (user_id, key)
do update set value = excluded.value, updated_at = now();

-- Returns the inserted/updated row
insert into settings (user_id, key, value)
values (123, 'theme', 'dark')
on conflict (user_id, key)
do update set value = excluded.value
returning *;
```

Insert-or-ignore pattern:

```sql
-- Insert only if not exists (no update)
insert into page_views (page_id, user_id)
values (1, 123)
on conflict (page_id, user_id) do nothing;
```

Reference: [INSERT ON CONFLICT](https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT)

```

## .agents\skills\supabase-postgres-best-practices\references\lock-advisory.md
```md
---
title: Use Advisory Locks for Application-Level Locking
impact: MEDIUM
impactDescription: Efficient coordination without row-level lock overhead
tags: advisory-locks, coordination, application-locks
---

## Use Advisory Locks for Application-Level Locking

Advisory locks provide application-level coordination without requiring database rows to lock.

**Incorrect (creating rows just for locking):**

```sql
-- Creating dummy rows to lock on
create table resource_locks (
  resource_name text primary key
);

insert into resource_locks values ('report_generator');

-- Lock by selecting the row
select * from resource_locks where resource_name = 'report_generator' for update;
```

**Correct (advisory locks):**

```sql
-- Session-level advisory lock (released on disconnect or unlock)
select pg_advisory_lock(hashtext('report_generator'));
-- ... do exclusive work ...
select pg_advisory_unlock(hashtext('report_generator'));

-- Transaction-level lock (released on commit/rollback)
begin;
select pg_advisory_xact_lock(hashtext('daily_report'));
-- ... do work ...
commit;  -- Lock automatically released
```

Try-lock for non-blocking operations:

```sql
-- Returns immediately with true/false instead of waiting
select pg_try_advisory_lock(hashtext('resource_name'));

-- Use in application
if (acquired) {
  -- Do work
  select pg_advisory_unlock(hashtext('resource_name'));
} else {
  -- Skip or retry later
}
```

Reference: [Advisory Locks](https://www.postgresql.org/docs/current/explicit-locking.html#ADVISORY-LOCKS)

```

## .agents\skills\supabase-postgres-best-practices\references\lock-deadlock-prevention.md
```md
---
title: Prevent Deadlocks with Consistent Lock Ordering
impact: MEDIUM-HIGH
impactDescription: Eliminate deadlock errors, improve reliability
tags: deadlocks, locking, transactions, ordering
---

## Prevent Deadlocks with Consistent Lock Ordering

Deadlocks occur when transactions lock resources in different orders. Always
acquire locks in a consistent order.

**Incorrect (inconsistent lock ordering):**

```sql
-- Transaction A                    -- Transaction B
begin;                              begin;
update accounts                     update accounts
set balance = balance - 100         set balance = balance - 50
where id = 1;                       where id = 2;  -- B locks row 2

update accounts                     update accounts
set balance = balance + 100         set balance = balance + 50
where id = 2;  -- A waits for B     where id = 1;  -- B waits for A

-- DEADLOCK! Both waiting for each other
```

**Correct (lock rows in consistent order first):**

```sql
-- Explicitly acquire locks in ID order before updating
begin;
select * from accounts where id in (1, 2) order by id for update;

-- Now perform updates in any order - locks already held
update accounts set balance = balance - 100 where id = 1;
update accounts set balance = balance + 100 where id = 2;
commit;
```

Alternative: use a single statement to update atomically:

```sql
-- Single statement acquires all locks atomically
begin;
update accounts
set balance = balance + case id
  when 1 then -100
  when 2 then 100
end
where id in (1, 2);
commit;
```

Detect deadlocks in logs:

```sql
-- Check for recent deadlocks
select * from pg_stat_database where deadlocks > 0;

-- Enable deadlock logging
set log_lock_waits = on;
set deadlock_timeout = '1s';
```

Reference:
[Deadlocks](https://www.postgresql.org/docs/current/explicit-locking.html#LOCKING-DEADLOCKS)

```

## .agents\skills\supabase-postgres-best-practices\references\lock-short-transactions.md
```md
---
title: Keep Transactions Short to Reduce Lock Contention
impact: MEDIUM-HIGH
impactDescription: 3-5x throughput improvement, fewer deadlocks
tags: transactions, locking, contention, performance
---

## Keep Transactions Short to Reduce Lock Contention

Long-running transactions hold locks that block other queries. Keep transactions as short as possible.

**Incorrect (long transaction with external calls):**

```sql
begin;
select * from orders where id = 1 for update;  -- Lock acquired

-- Application makes HTTP call to payment API (2-5 seconds)
-- Other queries on this row are blocked!

update orders set status = 'paid' where id = 1;
commit;  -- Lock held for entire duration
```

**Correct (minimal transaction scope):**

```sql
-- Validate data and call APIs outside transaction
-- Application: response = await paymentAPI.charge(...)

-- Only hold lock for the actual update
begin;
update orders
set status = 'paid', payment_id = $1
where id = $2 and status = 'pending'
returning *;
commit;  -- Lock held for milliseconds
```

Use `statement_timeout` to prevent runaway transactions:

```sql
-- Abort queries running longer than 30 seconds
set statement_timeout = '30s';

-- Or per-session
set local statement_timeout = '5s';
```

Reference: [Transaction Management](https://www.postgresql.org/docs/current/tutorial-transactions.html)

```

## .agents\skills\supabase-postgres-best-practices\references\lock-skip-locked.md
```md
---
title: Use SKIP LOCKED for Non-Blocking Queue Processing
impact: MEDIUM-HIGH
impactDescription: 10x throughput for worker queues
tags: skip-locked, queue, workers, concurrency
---

## Use SKIP LOCKED for Non-Blocking Queue Processing

When multiple workers process a queue, SKIP LOCKED allows workers to process different rows without waiting.

**Incorrect (workers block each other):**

```sql
-- Worker 1 and Worker 2 both try to get next job
begin;
select * from jobs where status = 'pending' order by created_at limit 1 for update;
-- Worker 2 waits for Worker 1's lock to release!
```

**Correct (SKIP LOCKED for parallel processing):**

```sql
-- Each worker skips locked rows and gets the next available
begin;
select * from jobs
where status = 'pending'
order by created_at
limit 1
for update skip locked;

-- Worker 1 gets job 1, Worker 2 gets job 2 (no waiting)

update jobs set status = 'processing' where id = $1;
commit;
```

Complete queue pattern:

```sql
-- Atomic claim-and-update in one statement
update jobs
set status = 'processing', worker_id = $1, started_at = now()
where id = (
  select id from jobs
  where status = 'pending'
  order by created_at
  limit 1
  for update skip locked
)
returning *;
```

Reference: [SELECT FOR UPDATE SKIP LOCKED](https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE)

```

## .agents\skills\supabase-postgres-best-practices\references\monitor-explain-analyze.md
```md
---
title: Use EXPLAIN ANALYZE to Diagnose Slow Queries
impact: LOW-MEDIUM
impactDescription: Identify exact bottlenecks in query execution
tags: explain, analyze, diagnostics, query-plan
---

## Use EXPLAIN ANALYZE to Diagnose Slow Queries

EXPLAIN ANALYZE executes the query and shows actual timings, revealing the true performance bottlenecks.

**Incorrect (guessing at performance issues):**

```sql
-- Query is slow, but why?
select * from orders where customer_id = 123 and status = 'pending';
-- "It must be missing an index" - but which one?
```

**Correct (use EXPLAIN ANALYZE):**

```sql
explain (analyze, buffers, format text)
select * from orders where customer_id = 123 and status = 'pending';

-- Output reveals the issue:
-- Seq Scan on orders (cost=0.00..25000.00 rows=50 width=100) (actual time=0.015..450.123 rows=50 loops=1)
--   Filter: ((customer_id = 123) AND (status = 'pending'::text))
--   Rows Removed by Filter: 999950
--   Buffers: shared hit=5000 read=15000
-- Planning Time: 0.150 ms
-- Execution Time: 450.500 ms
```

Key things to look for:

```sql
-- Seq Scan on large tables = missing index
-- Rows Removed by Filter = poor selectivity or missing index
-- Buffers: read >> hit = data not cached, needs more memory
-- Nested Loop with high loops = consider different join strategy
-- Sort Method: external merge = work_mem too low
```

Reference: [EXPLAIN](https://supabase.com/docs/guides/database/inspect)

```

## .agents\skills\supabase-postgres-best-practices\references\monitor-pg-stat-statements.md
```md
---
title: Enable pg_stat_statements for Query Analysis
impact: LOW-MEDIUM
impactDescription: Identify top resource-consuming queries
tags: pg-stat-statements, monitoring, statistics, performance
---

## Enable pg_stat_statements for Query Analysis

pg_stat_statements tracks execution statistics for all queries, helping identify slow and frequent queries.

**Incorrect (no visibility into query patterns):**

```sql
-- Database is slow, but which queries are the problem?
-- No way to know without pg_stat_statements
```

**Correct (enable and query pg_stat_statements):**

```sql
-- Enable the extension
create extension if not exists pg_stat_statements;

-- Find slowest queries by total time
select
  calls,
  round(total_exec_time::numeric, 2) as total_time_ms,
  round(mean_exec_time::numeric, 2) as mean_time_ms,
  query
from pg_stat_statements
order by total_exec_time desc
limit 10;

-- Find most frequent queries
select calls, query
from pg_stat_statements
order by calls desc
limit 10;

-- Reset statistics after optimization
select pg_stat_statements_reset();
```

Key metrics to monitor:

```sql
-- Queries with high mean time (candidates for optimization)
select query, mean_exec_time, calls
from pg_stat_statements
where mean_exec_time > 100  -- > 100ms average
order by mean_exec_time desc;
```

Reference: [pg_stat_statements](https://supabase.com/docs/guides/database/extensions/pg_stat_statements)

```

## .agents\skills\supabase-postgres-best-practices\references\monitor-vacuum-analyze.md
```md
---
title: Maintain Table Statistics with VACUUM and ANALYZE
impact: MEDIUM
impactDescription: 2-10x better query plans with accurate statistics
tags: vacuum, analyze, statistics, maintenance, autovacuum
---

## Maintain Table Statistics with VACUUM and ANALYZE

Outdated statistics cause the query planner to make poor decisions. VACUUM reclaims space, ANALYZE updates statistics.

**Incorrect (stale statistics):**

```sql
-- Table has 1M rows but stats say 1000
-- Query planner chooses wrong strategy
explain select * from orders where status = 'pending';
-- Shows: Seq Scan (because stats show small table)
-- Actually: Index Scan would be much faster
```

**Correct (maintain fresh statistics):**

```sql
-- Manually analyze after large data changes
analyze orders;

-- Analyze specific columns used in WHERE clauses
analyze orders (status, created_at);

-- Check when tables were last analyzed
select
  relname,
  last_vacuum,
  last_autovacuum,
  last_analyze,
  last_autoanalyze
from pg_stat_user_tables
order by last_analyze nulls first;
```

Autovacuum tuning for busy tables:

```sql
-- Increase frequency for high-churn tables
alter table orders set (
  autovacuum_vacuum_scale_factor = 0.05,     -- Vacuum at 5% dead tuples (default 20%)
  autovacuum_analyze_scale_factor = 0.02     -- Analyze at 2% changes (default 10%)
);

-- Check autovacuum status
select * from pg_stat_progress_vacuum;
```

Reference: [VACUUM](https://supabase.com/docs/guides/database/database-size#vacuum-operations)

```

## .agents\skills\supabase-postgres-best-practices\references\query-composite-indexes.md
```md
---
title: Create Composite Indexes for Multi-Column Queries
impact: HIGH
impactDescription: 5-10x faster multi-column queries
tags: indexes, composite-index, multi-column, query-optimization
---

## Create Composite Indexes for Multi-Column Queries

When queries filter on multiple columns, a composite index is more efficient than separate single-column indexes.

**Incorrect (separate indexes require bitmap scan):**

```sql
-- Two separate indexes
create index orders_status_idx on orders (status);
create index orders_created_idx on orders (created_at);

-- Query must combine both indexes (slower)
select * from orders where status = 'pending' and created_at > '2024-01-01';
```

**Correct (composite index):**

```sql
-- Single composite index (leftmost column first for equality checks)
create index orders_status_created_idx on orders (status, created_at);

-- Query uses one efficient index scan
select * from orders where status = 'pending' and created_at > '2024-01-01';
```

**Column order matters** - place equality columns first, range columns last:

```sql
-- Good: status (=) before created_at (>)
create index idx on orders (status, created_at);

-- Works for: WHERE status = 'pending'
-- Works for: WHERE status = 'pending' AND created_at > '2024-01-01'
-- Does NOT work for: WHERE created_at > '2024-01-01' (leftmost prefix rule)
```

Reference: [Multicolumn Indexes](https://www.postgresql.org/docs/current/indexes-multicolumn.html)

```

## .agents\skills\supabase-postgres-best-practices\references\query-covering-indexes.md
```md
---
title: Use Covering Indexes to Avoid Table Lookups
impact: MEDIUM-HIGH
impactDescription: 2-5x faster queries by eliminating heap fetches
tags: indexes, covering-index, include, index-only-scan
---

## Use Covering Indexes to Avoid Table Lookups

Covering indexes include all columns needed by a query, enabling index-only scans that skip the table entirely.

**Incorrect (index scan + heap fetch):**

```sql
create index users_email_idx on users (email);

-- Must fetch name and created_at from table heap
select email, name, created_at from users where email = 'user@example.com';
```

**Correct (index-only scan with INCLUDE):**

```sql
-- Include non-searchable columns in the index
create index users_email_idx on users (email) include (name, created_at);

-- All columns served from index, no table access needed
select email, name, created_at from users where email = 'user@example.com';
```

Use INCLUDE for columns you SELECT but don't filter on:

```sql
-- Searching by status, but also need customer_id and total
create index orders_status_idx on orders (status) include (customer_id, total);

select status, customer_id, total from orders where status = 'shipped';
```

Reference: [Index-Only Scans](https://www.postgresql.org/docs/current/indexes-index-only-scans.html)

```

## .agents\skills\supabase-postgres-best-practices\references\query-index-types.md
```md
---
title: Choose the Right Index Type for Your Data
impact: HIGH
impactDescription: 10-100x improvement with correct index type
tags: indexes, btree, gin, gist, brin, hash, index-types
---

## Choose the Right Index Type for Your Data

Different index types excel at different query patterns. The default B-tree isn't always optimal.

**Incorrect (B-tree for JSONB containment):**

```sql
-- B-tree cannot optimize containment operators
create index products_attrs_idx on products (attributes);
select * from products where attributes @> '{"color": "red"}';
-- Full table scan - B-tree doesn't support @> operator
```

**Correct (GIN for JSONB):**

```sql
-- GIN supports @>, ?, ?&, ?| operators
create index products_attrs_idx on products using gin (attributes);
select * from products where attributes @> '{"color": "red"}';
```

Index type guide:

```sql
-- B-tree (default): =, <, >, BETWEEN, IN, IS NULL
create index users_created_idx on users (created_at);

-- GIN: arrays, JSONB, full-text search
create index posts_tags_idx on posts using gin (tags);

-- GiST: geometric data, range types, nearest-neighbor (KNN) queries
create index locations_idx on places using gist (location);

-- BRIN: large time-series tables (10-100x smaller)
create index events_time_idx on events using brin (created_at);

-- Hash: equality-only (slightly faster than B-tree for =)
create index sessions_token_idx on sessions using hash (token);
```

Reference: [Index Types](https://www.postgresql.org/docs/current/indexes-types.html)

```

## .agents\skills\supabase-postgres-best-practices\references\query-missing-indexes.md
```md
---
title: Add Indexes on WHERE and JOIN Columns
impact: CRITICAL
impactDescription: 100-1000x faster queries on large tables
tags: indexes, performance, sequential-scan, query-optimization
---

## Add Indexes on WHERE and JOIN Columns

Queries filtering or joining on unindexed columns cause full table scans, which become exponentially slower as tables grow.

**Incorrect (sequential scan on large table):**

```sql
-- No index on customer_id causes full table scan
select * from orders where customer_id = 123;

-- EXPLAIN shows: Seq Scan on orders (cost=0.00..25000.00 rows=100 width=85)
```

**Correct (index scan):**

```sql
-- Create index on frequently filtered column
create index orders_customer_id_idx on orders (customer_id);

select * from orders where customer_id = 123;

-- EXPLAIN shows: Index Scan using orders_customer_id_idx (cost=0.42..8.44 rows=100 width=85)
```

For JOIN columns, always index the foreign key side:

```sql
-- Index the referencing column
create index orders_customer_id_idx on orders (customer_id);

select c.name, o.total
from customers c
join orders o on o.customer_id = c.id;
```

Reference: [Query Optimization](https://supabase.com/docs/guides/database/query-optimization)

```

## .agents\skills\supabase-postgres-best-practices\references\query-partial-indexes.md
```md
---
title: Use Partial Indexes for Filtered Queries
impact: HIGH
impactDescription: 5-20x smaller indexes, faster writes and queries
tags: indexes, partial-index, query-optimization, storage
---

## Use Partial Indexes for Filtered Queries

Partial indexes only include rows matching a WHERE condition, making them smaller and faster when queries consistently filter on the same condition.

**Incorrect (full index includes irrelevant rows):**

```sql
-- Index includes all rows, even soft-deleted ones
create index users_email_idx on users (email);

-- Query always filters active users
select * from users where email = 'user@example.com' and deleted_at is null;
```

**Correct (partial index matches query filter):**

```sql
-- Index only includes active users
create index users_active_email_idx on users (email)
where deleted_at is null;

-- Query uses the smaller, faster index
select * from users where email = 'user@example.com' and deleted_at is null;
```

Common use cases for partial indexes:

```sql
-- Only pending orders (status rarely changes once completed)
create index orders_pending_idx on orders (created_at)
where status = 'pending';

-- Only non-null values
create index products_sku_idx on products (sku)
where sku is not null;
```

Reference: [Partial Indexes](https://www.postgresql.org/docs/current/indexes-partial.html)

```

## .agents\skills\supabase-postgres-best-practices\references\schema-constraints.md
```md
---
title: Add Constraints Safely in Migrations
impact: HIGH
impactDescription: Prevents migration failures and enables idempotent schema changes
tags: constraints, migrations, schema, alter-table
---

## Add Constraints Safely in Migrations

PostgreSQL does not support `ADD CONSTRAINT IF NOT EXISTS`. Migrations using this syntax will fail.

**Incorrect (causes syntax error):**

```sql
-- ERROR: syntax error at or near "not" (SQLSTATE 42601)
alter table public.profiles
add constraint if not exists profiles_birthchart_id_unique unique (birthchart_id);
```

**Correct (idempotent constraint creation):**

```sql
-- Use DO block to check before adding
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_birthchart_id_unique'
    and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
    add constraint profiles_birthchart_id_unique unique (birthchart_id);
  end if;
end $$;
```

For all constraint types:

```sql
-- Check constraints
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'check_age_positive'
  ) then
    alter table users add constraint check_age_positive check (age > 0);
  end if;
end $$;

-- Foreign keys
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_birthchart_id_fkey'
  ) then
    alter table profiles
    add constraint profiles_birthchart_id_fkey
    foreign key (birthchart_id) references birthcharts(id);
  end if;
end $$;
```

Check if constraint exists:

```sql
-- Query to check constraint existence
select conname, contype, pg_get_constraintdef(oid)
from pg_constraint
where conrelid = 'public.profiles'::regclass;

-- contype values:
-- 'p' = PRIMARY KEY
-- 'f' = FOREIGN KEY
-- 'u' = UNIQUE
-- 'c' = CHECK
```

Reference: [Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html)

```

## .agents\skills\supabase-postgres-best-practices\references\schema-data-types.md
```md
---
title: Choose Appropriate Data Types
impact: HIGH
impactDescription: 50% storage reduction, faster comparisons
tags: data-types, schema, storage, performance
---

## Choose Appropriate Data Types

Using the right data types reduces storage, improves query performance, and prevents bugs.

**Incorrect (wrong data types):**

```sql
create table users (
  id int,                    -- Will overflow at 2.1 billion
  email varchar(255),        -- Unnecessary length limit
  created_at timestamp,      -- Missing timezone info
  is_active varchar(5),      -- String for boolean
  price varchar(20)          -- String for numeric
);
```

**Correct (appropriate data types):**

```sql
create table users (
  id bigint generated always as identity primary key,  -- 9 quintillion max
  email text,                     -- No artificial limit, same performance as varchar
  created_at timestamptz,         -- Always store timezone-aware timestamps
  is_active boolean default true, -- 1 byte vs variable string length
  price numeric(10,2)             -- Exact decimal arithmetic
);
```

Key guidelines:

```sql
-- IDs: use bigint, not int (future-proofing)
-- Strings: use text, not varchar(n) unless constraint needed
-- Time: use timestamptz, not timestamp
-- Money: use numeric, not float (precision matters)
-- Enums: use text with check constraint or create enum type
```

Reference: [Data Types](https://www.postgresql.org/docs/current/datatype.html)

```

## .agents\skills\supabase-postgres-best-practices\references\schema-foreign-key-indexes.md
```md
---
title: Index Foreign Key Columns
impact: HIGH
impactDescription: 10-100x faster JOINs and CASCADE operations
tags: foreign-key, indexes, joins, schema
---

## Index Foreign Key Columns

Postgres does not automatically index foreign key columns. Missing indexes cause slow JOINs and CASCADE operations.

**Incorrect (unindexed foreign key):**

```sql
create table orders (
  id bigint generated always as identity primary key,
  customer_id bigint references customers(id) on delete cascade,
  total numeric(10,2)
);

-- No index on customer_id!
-- JOINs and ON DELETE CASCADE both require full table scan
select * from orders where customer_id = 123;  -- Seq Scan
delete from customers where id = 123;          -- Locks table, scans all orders
```

**Correct (indexed foreign key):**

```sql
create table orders (
  id bigint generated always as identity primary key,
  customer_id bigint references customers(id) on delete cascade,
  total numeric(10,2)
);

-- Always index the FK column
create index orders_customer_id_idx on orders (customer_id);

-- Now JOINs and cascades are fast
select * from orders where customer_id = 123;  -- Index Scan
delete from customers where id = 123;          -- Uses index, fast cascade
```

Find missing FK indexes:

```sql
select
  conrelid::regclass as table_name,
  a.attname as fk_column
from pg_constraint c
join pg_attribute a on a.attrelid = c.conrelid and a.attnum = any(c.conkey)
where c.contype = 'f'
  and not exists (
    select 1 from pg_index i
    where i.indrelid = c.conrelid and a.attnum = any(i.indkey)
  );
```

Reference: [Foreign Keys](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK)

```

## .agents\skills\supabase-postgres-best-practices\references\schema-lowercase-identifiers.md
```md
---
title: Use Lowercase Identifiers for Compatibility
impact: MEDIUM
impactDescription: Avoid case-sensitivity bugs with tools, ORMs, and AI assistants
tags: naming, identifiers, case-sensitivity, schema, conventions
---

## Use Lowercase Identifiers for Compatibility

PostgreSQL folds unquoted identifiers to lowercase. Quoted mixed-case identifiers require quotes forever and cause issues with tools, ORMs, and AI assistants that may not recognize them.

**Incorrect (mixed-case identifiers):**

```sql
-- Quoted identifiers preserve case but require quotes everywhere
CREATE TABLE "Users" (
  "userId" bigint PRIMARY KEY,
  "firstName" text,
  "lastName" text
);

-- Must always quote or queries fail
SELECT "firstName" FROM "Users" WHERE "userId" = 1;

-- This fails - Users becomes users without quotes
SELECT firstName FROM Users;
-- ERROR: relation "users" does not exist
```

**Correct (lowercase snake_case):**

```sql
-- Unquoted lowercase identifiers are portable and tool-friendly
CREATE TABLE users (
  user_id bigint PRIMARY KEY,
  first_name text,
  last_name text
);

-- Works without quotes, recognized by all tools
SELECT first_name FROM users WHERE user_id = 1;
```

Common sources of mixed-case identifiers:

```sql
-- ORMs often generate quoted camelCase - configure them to use snake_case
-- Migrations from other databases may preserve original casing
-- Some GUI tools quote identifiers by default - disable this

-- If stuck with mixed-case, create views as a compatibility layer
CREATE VIEW users AS SELECT "userId" AS user_id, "firstName" AS first_name FROM "Users";
```

Reference: [Identifiers and Key Words](https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS)

```

## .agents\skills\supabase-postgres-best-practices\references\schema-partitioning.md
```md
---
title: Partition Large Tables for Better Performance
impact: MEDIUM-HIGH
impactDescription: 5-20x faster queries and maintenance on large tables
tags: partitioning, large-tables, time-series, performance
---

## Partition Large Tables for Better Performance

Partitioning splits a large table into smaller pieces, improving query performance and maintenance operations.

**Incorrect (single large table):**

```sql
create table events (
  id bigint generated always as identity,
  created_at timestamptz,
  data jsonb
);

-- 500M rows, queries scan everything
select * from events where created_at > '2024-01-01';  -- Slow
vacuum events;  -- Takes hours, locks table
```

**Correct (partitioned by time range):**

```sql
create table events (
  id bigint generated always as identity,
  created_at timestamptz not null,
  data jsonb
) partition by range (created_at);

-- Create partitions for each month
create table events_2024_01 partition of events
  for values from ('2024-01-01') to ('2024-02-01');

create table events_2024_02 partition of events
  for values from ('2024-02-01') to ('2024-03-01');

-- Queries only scan relevant partitions
select * from events where created_at > '2024-01-15';  -- Only scans events_2024_01+

-- Drop old data instantly
drop table events_2023_01;  -- Instant vs DELETE taking hours
```

When to partition:

- Tables > 100M rows
- Time-series data with date-based queries
- Need to efficiently drop old data

Reference: [Table Partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html)

```

## .agents\skills\supabase-postgres-best-practices\references\schema-primary-keys.md
```md
---
title: Select Optimal Primary Key Strategy
impact: HIGH
impactDescription: Better index locality, reduced fragmentation
tags: primary-key, identity, uuid, serial, schema
---

## Select Optimal Primary Key Strategy

Primary key choice affects insert performance, index size, and replication
efficiency.

**Incorrect (problematic PK choices):**

```sql
-- identity is the SQL-standard approach
create table users (
  id serial primary key  -- Works, but IDENTITY is recommended
);

-- Random UUIDs (v4) cause index fragmentation
create table orders (
  id uuid default gen_random_uuid() primary key  -- UUIDv4 = random = scattered inserts
);
```

**Correct (optimal PK strategies):**

```sql
-- Use IDENTITY for sequential IDs (SQL-standard, best for most cases)
create table users (
  id bigint generated always as identity primary key
);

-- For distributed systems needing UUIDs, use UUIDv7 (time-ordered)
-- Requires pg_uuidv7 extension: create extension pg_uuidv7;
create table orders (
  id uuid default uuid_generate_v7() primary key  -- Time-ordered, no fragmentation
);

-- Alternative: time-prefixed IDs for sortable, distributed IDs (no extension needed)
create table events (
  id text default concat(
    to_char(now() at time zone 'utc', 'YYYYMMDDHH24MISSMS'),
    gen_random_uuid()::text
  ) primary key
);
```

Guidelines:

- Single database: `bigint identity` (sequential, 8 bytes, SQL-standard)
- Distributed/exposed IDs: UUIDv7 (requires pg_uuidv7) or ULID (time-ordered, no
  fragmentation)
- `serial` works but `identity` is SQL-standard and preferred for new
  applications
- Avoid random UUIDs (v4) as primary keys on large tables (causes index
  fragmentation)

Reference:
[Identity Columns](https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-PARMS-GENERATED-IDENTITY)

```

## .agents\skills\supabase-postgres-best-practices\references\security-privileges.md
```md
---
title: Apply Principle of Least Privilege
impact: MEDIUM
impactDescription: Reduced attack surface, better audit trail
tags: privileges, security, roles, permissions
---

## Apply Principle of Least Privilege

Grant only the minimum permissions required. Never use superuser for application queries.

**Incorrect (overly broad permissions):**

```sql
-- Application uses superuser connection
-- Or grants ALL to application role
grant all privileges on all tables in schema public to app_user;
grant all privileges on all sequences in schema public to app_user;

-- Any SQL injection becomes catastrophic
-- drop table users; cascades to everything
```

**Correct (minimal, specific grants):**

```sql
-- Create role with no default privileges
create role app_readonly nologin;

-- Grant only SELECT on specific tables
grant usage on schema public to app_readonly;
grant select on public.products, public.categories to app_readonly;

-- Create role for writes with limited scope
create role app_writer nologin;
grant usage on schema public to app_writer;
grant select, insert, update on public.orders to app_writer;
grant usage on sequence orders_id_seq to app_writer;
-- No DELETE permission

-- Login role inherits from these
create role app_user login password 'xxx';
grant app_writer to app_user;
```

Revoke public defaults:

```sql
-- Revoke default public access
revoke all on schema public from public;
revoke all on all tables in schema public from public;
```

Reference: [Roles and Privileges](https://supabase.com/blog/postgres-roles-and-privileges)

```

## .agents\skills\supabase-postgres-best-practices\references\security-rls-basics.md
```md
---
title: Enable Row Level Security for Multi-Tenant Data
impact: CRITICAL
impactDescription: Database-enforced tenant isolation, prevent data leaks
tags: rls, row-level-security, multi-tenant, security
---

## Enable Row Level Security for Multi-Tenant Data

Row Level Security (RLS) enforces data access at the database level, ensuring users only see their own data.

**Incorrect (application-level filtering only):**

```sql
-- Relying only on application to filter
select * from orders where user_id = $current_user_id;

-- Bug or bypass means all data is exposed!
select * from orders;  -- Returns ALL orders
```

**Correct (database-enforced RLS):**

```sql
-- Enable RLS on the table
alter table orders enable row level security;

-- Create policy for users to see only their orders
create policy orders_user_policy on orders
  for all
  using (user_id = current_setting('app.current_user_id')::bigint);

-- Force RLS even for table owners
alter table orders force row level security;

-- Set user context and query
set app.current_user_id = '123';
select * from orders;  -- Only returns orders for user 123
```

Policy for authenticated role:

```sql
create policy orders_user_policy on orders
  for all
  to authenticated
  using (user_id = auth.uid());
```

Reference: [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)

```

## .agents\skills\supabase-postgres-best-practices\references\security-rls-performance.md
```md
---
title: Optimize RLS Policies for Performance
impact: HIGH
impactDescription: 5-10x faster RLS queries with proper patterns
tags: rls, performance, security, optimization
---

## Optimize RLS Policies for Performance

Poorly written RLS policies can cause severe performance issues. Use subqueries and indexes strategically.

**Incorrect (function called for every row):**

```sql
create policy orders_policy on orders
  using (auth.uid() = user_id);  -- auth.uid() called per row!

-- With 1M rows, auth.uid() is called 1M times
```

**Correct (wrap functions in SELECT):**

```sql
create policy orders_policy on orders
  using ((select auth.uid()) = user_id);  -- Called once, cached

-- 100x+ faster on large tables
```

Use security definer functions for complex checks:

`SECURITY DEFINER` functions run with the creator's privileges and bypass RLS on any tables they touch — which is what makes them useful for internal lookups, but also what makes them dangerous if misused. Always include an explicit `auth.uid()` check inside the function body, keep them in a non-exposed schema, and revoke `EXECUTE` from any role that shouldn't call them directly.

```sql
-- Create helper function in a private schema
create or replace function private.is_team_member(team_id bigint)
returns boolean
language sql
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.team_members
    -- always check the calling user's identity inside the function
    where team_id = $1 and user_id = (select auth.uid())
  );
$$;

-- Revoke direct execution from public roles
revoke execute on function private.is_team_member(bigint) from PUBLIC, anon, authenticated, service_role;

-- Use in policy (indexed lookup, not per-row check)
create policy team_orders_policy on orders
  using ((select private.is_team_member(team_id)));
```

Always add indexes on columns used in RLS policies:

```sql
create index orders_user_id_idx on orders (user_id);
```

Reference: [RLS Performance](https://supabase.com/docs/guides/database/postgres/row-level-security#rls-performance-recommendations)

```

## .agents\skills\supabase-postgres-best-practices\references\_contributing.md
```md
# Writing Guidelines for Postgres References

This document provides guidelines for creating effective Postgres best
practice references that work well with AI agents and LLMs.

## Key Principles

### 1. Concrete Transformation Patterns

Show exact SQL rewrites. Avoid philosophical advice.

**Good:** "Use `WHERE id = ANY(ARRAY[...])` instead of
`WHERE id IN (SELECT ...)`" **Bad:** "Design good schemas"

### 2. Error-First Structure

Always show the problematic pattern first, then the solution. This trains agents
to recognize anti-patterns.

```markdown
**Incorrect (sequential queries):** [bad example]

**Correct (batched query):** [good example]
```

### 3. Quantified Impact

Include specific metrics. Helps agents prioritize fixes.

**Good:** "10x faster queries", "50% smaller index", "Eliminates N+1" 
**Bad:** "Faster", "Better", "More efficient"

### 4. Self-Contained Examples

Examples should be complete and runnable (or close to it). Include `CREATE TABLE`
if context is needed.

```sql
-- Include table definition when needed for clarity
CREATE TABLE users (
  id bigint PRIMARY KEY,
  email text NOT NULL,
  deleted_at timestamptz
);

-- Now show the index
CREATE INDEX users_active_email_idx ON users(email) WHERE deleted_at IS NULL;
```

### 5. Semantic Naming

Use meaningful table/column names. Names carry intent for LLMs.

**Good:** `users`, `email`, `created_at`, `is_active`
**Bad:** `table1`, `col1`, `field`, `flag`

---

## Code Example Standards

### SQL Formatting

```sql
-- Use lowercase keywords, clear formatting
CREATE INDEX CONCURRENTLY users_email_idx
  ON users(email)
  WHERE deleted_at IS NULL;

-- Not cramped or ALL CAPS
CREATE INDEX CONCURRENTLY USERS_EMAIL_IDX ON USERS(EMAIL) WHERE DELETED_AT IS NULL;
```

### Comments

- Explain _why_, not _what_
- Highlight performance implications
- Point out common pitfalls

### Language Tags

- `sql` - Standard SQL queries
- `plpgsql` - Stored procedures/functions
- `typescript` - Application code (when needed)
- `python` - Application code (when needed)

---

## When to Include Application Code

**Default: SQL Only**

Most references should focus on pure SQL patterns. This keeps examples portable.

**Include Application Code When:**

- Connection pooling configuration
- Transaction management in application context
- ORM anti-patterns (N+1 in Prisma/TypeORM)
- Prepared statement usage

**Format for Mixed Examples:**

````markdown
**Incorrect (N+1 in application):**

```typescript
for (const user of users) {
  const posts = await db.query("SELECT * FROM posts WHERE user_id = $1", [
    user.id,
  ]);
}
```
````

**Correct (batch query):**

```typescript
const posts = await db.query("SELECT * FROM posts WHERE user_id = ANY($1)", [
  userIds,
]);
```

---

## Impact Level Guidelines

| Level | Improvement | Use When |
|-------|-------------|----------|
| **CRITICAL** | 10-100x | Missing indexes, connection exhaustion, sequential scans on large tables |
| **HIGH** | 5-20x | Wrong index types, poor partitioning, missing covering indexes |
| **MEDIUM-HIGH** | 2-5x | N+1 queries, inefficient pagination, RLS optimization |
| **MEDIUM** | 1.5-3x | Redundant indexes, query plan instability |
| **LOW-MEDIUM** | 1.2-2x | VACUUM tuning, configuration tweaks |
| **LOW** | Incremental | Advanced patterns, edge cases |

---

## Reference Standards

**Primary Sources:**

- Official Postgres documentation
- Supabase documentation
- Postgres wiki
- Established blogs (2ndQuadrant, Crunchy Data)

**Format:**

```markdown
Reference:
[Postgres Indexes](https://www.postgresql.org/docs/current/indexes.html)
```

---

## Review Checklist

Before submitting a reference:

- [ ] Title is clear and action-oriented
- [ ] Impact level matches the performance gain
- [ ] impactDescription includes quantification
- [ ] Explanation is concise (1-2 sentences)
- [ ] Has at least 1 **Incorrect** SQL example
- [ ] Has at least 1 **Correct** SQL example
- [ ] SQL uses semantic naming
- [ ] Comments explain _why_, not _what_
- [ ] Trade-offs mentioned if applicable
- [ ] Reference links included
- [ ] `pnpm test` passes

```

## .agents\skills\supabase-postgres-best-practices\references\_sections.md
```md
# Section Definitions

This file defines the rule categories for Postgres best practices. Rules are automatically assigned to sections based on their filename prefix.

Take the examples below as pure demonstrative. Replace each section with the actual rule categories for Postgres best practices.

---

## 1. Query Performance (query)
**Impact:** CRITICAL
**Description:** Slow queries, missing indexes, inefficient query plans. The most common source of Postgres performance issues.

## 2. Connection Management (conn)
**Impact:** CRITICAL
**Description:** Connection pooling, limits, and serverless strategies. Critical for applications with high concurrency or serverless deployments.

## 3. Security & RLS (security)
**Impact:** CRITICAL
**Description:** Row-Level Security policies, privilege management, and authentication patterns.

## 4. Schema Design (schema)
**Impact:** HIGH
**Description:** Table design, index strategies, partitioning, and data type selection. Foundation for long-term performance.

## 5. Concurrency & Locking (lock)
**Impact:** MEDIUM-HIGH
**Description:** Transaction management, isolation levels, deadlock prevention, and lock contention patterns.

## 6. Data Access Patterns (data)
**Impact:** MEDIUM
**Description:** N+1 query elimination, batch operations, cursor-based pagination, and efficient data fetching.

## 7. Monitoring & Diagnostics (monitor)
**Impact:** LOW-MEDIUM
**Description:** Using pg_stat_statements, EXPLAIN ANALYZE, metrics collection, and performance diagnostics.

## 8. Advanced Features (advanced)
**Impact:** LOW
**Description:** Full-text search, JSONB optimization, PostGIS, extensions, and advanced Postgres features.

```

## .agents\skills\supabase-postgres-best-practices\references\_template.md
```md
---
title: Clear, Action-Oriented Title (e.g., "Use Partial Indexes for Filtered Queries")
impact: MEDIUM
impactDescription: 5-20x query speedup for filtered queries
tags: indexes, query-optimization, performance
---

## [Rule Title]

[1-2 sentence explanation of the problem and why it matters. Focus on performance impact.]

**Incorrect (describe the problem):**

```sql
-- Comment explaining what makes this slow/problematic
CREATE INDEX users_email_idx ON users(email);

SELECT * FROM users WHERE email = 'user@example.com' AND deleted_at IS NULL;
-- This scans deleted records unnecessarily
```

**Correct (describe the solution):**

```sql
-- Comment explaining why this is better
CREATE INDEX users_active_email_idx ON users(email) WHERE deleted_at IS NULL;

SELECT * FROM users WHERE email = 'user@example.com' AND deleted_at IS NULL;
-- Only indexes active users, 10x smaller index, faster queries
```

[Optional: Additional context, edge cases, or trade-offs]

Reference: [Postgres Docs](https://www.postgresql.org/docs/current/)

```

## .agents\skills\supabase-postgres-best-practices\CHANGELOG.md
```md
# Changelog

## [1.3.0](https://github.com/supabase/agent-skills/compare/v1.2.0...v1.3.0) (2026-06-05)


### Features

* add schema-constraints reference for safe migration patterns ([#30](https://github.com/supabase/agent-skills/issues/30)) ([9b236f3](https://github.com/supabase/agent-skills/commit/9b236f3ebd65d76a2c570f19931353da9c858d5a))
* using Supabase agent skills ([#12](https://github.com/supabase/agent-skills/issues/12)) ([7c2e389](https://github.com/supabase/agent-skills/commit/7c2e3894fddfde8eb6c77d2a8921904543b9be7a))


### Bug Fixes

* correct broken reference link in postgres best practices skill ([#58](https://github.com/supabase/agent-skills/issues/58)) ([f4e2277](https://github.com/supabase/agent-skills/commit/f4e22777fd8573537297b568c16e5a45a25927da))
* cover SECURITY DEFINER, auth.role() deprecation, and BOLA in security checklist ([#85](https://github.com/supabase/agent-skills/issues/85)) ([133f43e](https://github.com/supabase/agent-skills/commit/133f43e8c2ffc48823ff0630c692cabecea3e3a3))

## [1.2.0](https://github.com/supabase/agent-skills/compare/v1.1.1...v1.2.0) (2026-06-02)


### Features

* add schema-constraints reference for safe migration patterns ([#30](https://github.com/supabase/agent-skills/issues/30)) ([9b236f3](https://github.com/supabase/agent-skills/commit/9b236f3ebd65d76a2c570f19931353da9c858d5a))
* using Supabase agent skills ([#12](https://github.com/supabase/agent-skills/issues/12)) ([7c2e389](https://github.com/supabase/agent-skills/commit/7c2e3894fddfde8eb6c77d2a8921904543b9be7a))


### Bug Fixes

* correct broken reference link in postgres best practices skill ([#58](https://github.com/supabase/agent-skills/issues/58)) ([f4e2277](https://github.com/supabase/agent-skills/commit/f4e22777fd8573537297b568c16e5a45a25927da))
* cover SECURITY DEFINER, auth.role() deprecation, and BOLA in security checklist ([#85](https://github.com/supabase/agent-skills/issues/85)) ([133f43e](https://github.com/supabase/agent-skills/commit/133f43e8c2ffc48823ff0630c692cabecea3e3a3))

```

## .agents\skills\supabase-postgres-best-practices\SKILL.md
```md
---
name: supabase-postgres-best-practices
description: Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations.
license: MIT
metadata:
  author: supabase
  version: "1.1.1"
  organization: Supabase
  date: January 2026
  abstract: Comprehensive Postgres performance optimization guide for developers using Supabase and Postgres. Contains performance rules across 8 categories, prioritized by impact from critical (query performance, connection management) to incremental (advanced features). Each rule includes detailed explanations, incorrect vs. correct SQL examples, query plan analysis, and specific performance metrics to guide automated optimization and code generation.
---

# Supabase Postgres Best Practices

Comprehensive performance optimization guide for Postgres, maintained by Supabase. Contains rules across 8 categories, prioritized by impact to guide automated query optimization and schema design.

## When to Apply

Reference these guidelines when:
- Writing SQL queries or designing schemas
- Implementing indexes or query optimization
- Reviewing database performance issues
- Configuring connection pooling or scaling
- Optimizing for Postgres-specific features
- Working with Row-Level Security (RLS)

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Query Performance | CRITICAL | `query-` |
| 2 | Connection Management | CRITICAL | `conn-` |
| 3 | Security & RLS | CRITICAL | `security-` |
| 4 | Schema Design | HIGH | `schema-` |
| 5 | Concurrency & Locking | MEDIUM-HIGH | `lock-` |
| 6 | Data Access Patterns | MEDIUM | `data-` |
| 7 | Monitoring & Diagnostics | LOW-MEDIUM | `monitor-` |
| 8 | Advanced Features | LOW | `advanced-` |

## How to Use

Read individual rule files for detailed explanations and SQL examples:

```
references/query-missing-indexes.md
references/query-partial-indexes.md
references/_sections.md
```

Each rule file contains:
- Brief explanation of why it matters
- Incorrect SQL example with explanation
- Correct SQL example with explanation
- Optional EXPLAIN output or metrics
- Additional context and references
- Supabase-specific notes (when applicable)

## References

- https://www.postgresql.org/docs/current/
- https://supabase.com/docs
- https://wiki.postgresql.org/wiki/Performance_Optimization
- https://supabase.com/docs/guides/database/overview
- https://supabase.com/docs/guides/auth/row-level-security

```

## app\about\page.tsx
```tsx
"use client";

import { Shield, Target, Eye, Award, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

export default function AboutPage() {
  const { lang } = useLanguage();
  const { aboutTranslations: a } = useCms();

  const milestones = a.milestones[lang];

  const team = [
    {
      initial: "A",
      photo: "/team-a.jpg",
      name: "Fakhriadi Rasyaad",
      role: "Chief Executive Officer",
      desc: a.ceo_desc[lang],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 380, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{a.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,5vw,68px)", lineHeight: 1.1 }}>
            {a.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.6)", marginTop: 14, maxWidth: 520, lineHeight: 1.75 }}>
            {a.hero_sub[lang]}
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-pad page-container">
        <div className="grid-2">
          {/* Vision */}
          <div style={{ padding: "48px 40px", border: "1px solid #E2DDD5", background: "#FEFEFE" }}>
            <div style={{ width: 48, height: 48, background: "#1A2744", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
              <Eye size={20} color="#C9A84C" />
            </div>
            <div style={lbl}>{a.vision_label[lang]}</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.2, margin: "12px 0 16px" }}>
              {a.vision_title[lang]}
            </h2>
            <div style={{ ...goldLine, marginBottom: 20 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85 }}>
              {a.vision_body[lang]}
            </p>
          </div>

          {/* Mission */}
          <div style={{ padding: "48px 40px", background: "#1A2744" }}>
            <div style={{ width: 48, height: 48, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
              <Target size={20} color="#C9A84C" />
            </div>
            <div style={{ ...lbl, color: "#C9A84C" }}>{a.mission_label[lang]}</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.2, margin: "12px 0 16px" }}>
              {a.mission_title[lang]}
            </h2>
            <div style={{ ...goldLine, marginBottom: 24 }} />
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {(a.mission_points[lang] as string[]).map((point: string, i: number) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  <div style={{ width: 6, height: 6, background: "#C9A84C", marginTop: 7, flexShrink: 0 }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={lbl}>Core Values</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 20px" }}>
              {lang === "id" ? "Nilai yang Kami Pegang" : "Values We Hold"}
            </h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>
          <div className="grid-4">
            {[
              { Icon: Shield,    title: a.val_integrity[lang],  desc: a.val_integrity_desc[lang] },
              { Icon: Award,     title: a.val_excellence[lang], desc: a.val_excellence_desc[lang] },
              { Icon: Users,     title: a.val_partnership[lang],desc: a.val_partnership_desc[lang] },
              { Icon: TrendingUp,title: a.val_innovation[lang], desc: a.val_innovation_desc[lang] },
            ].map((v, i) => (
              <div key={i} style={{ background: "#FFFFFF", padding: "36px 28px", border: "1px solid #E2DDD5", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <v.Icon size={20} color="#C9A84C" />
                </div>
                <h3 style={{ fontFamily: ff.serif, fontSize: 18, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad page-container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={lbl}>{a.timeline_label[lang]}</div>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 20px" }}>
            {a.timeline_title[lang]}
          </h2>
          <div style={{ ...goldLine, margin: "0 auto" }} />
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "#E2DDD5" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {(milestones as any[]).map((m: any, i: number) => (
              <div key={i} style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{ width: 40, height: 40, background: i === 1 ? "#1A2744" : "#FFFFFF", border: i === 1 ? "none" : "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ width: 8, height: 8, background: "#C9A84C", borderRadius: i === 1 ? 0 : "50%" }} />
                  </div>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ ...lbl, marginBottom: 8 }}>{m.year}</div>
                  <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85 }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={lbl}>{a.team_title[lang]}</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 0" }}>
              {lang === "id" ? "Tim Kepemimpinan" : "Leadership Team"}
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {team.map((p, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", maxWidth: 280, textAlign: "center", overflow: "hidden" }}>
                <div style={{ height: 3, background: "linear-gradient(to right,#9B7A2E,#C9A84C)" }} />
                <div style={{ padding: "40px 32px" }}>
                  <div style={{ width: 72, height: 72, background: "#1A2744", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: ff.serif, fontSize: 28, fontWeight: 600, color: "#C9A84C" }}>
                    {p.initial}
                  </div>
                  <div style={{ fontFamily: ff.serif, fontSize: 18, fontWeight: 600, color: "#1A2744" }}>{p.name}</div>
                  <div style={{ ...lbl, fontSize: 9, marginTop: 6, marginBottom: 16 }}>{p.role}</div>
                  <div style={{ width: 32, height: 1, background: "#C9A84C", margin: "0 auto 16px" }} />
                  <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

## app\admin\page.tsx
```tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCms } from "../context/CmsContext";
import { useLanguage } from "../context/LanguageContext";
import { t as defaultTranslations } from "../translations";
import {
  Settings, Lock, Save, RefreshCw, Eye, EyeOff, Search,
  X, ChevronDown, ChevronUp, LogOut, Check, AlertTriangle,
  ArrowLeft, ArrowRight, ChevronRight, Star, Cpu, Activity, Code2, Zap, Layout, Globe,
  BookOpen, Briefcase, HeartPulse, Bot, FolderOpen, Mail, Scale
} from "lucide-react";

// ── Type aliases ──────────────────────────────────────────────────────────────
type HomeTranslations = typeof defaultTranslations.home;

// ── Styling constants ─────────────────────────────────────────────────────────
const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans:  "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 56, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

// ── Page tab definitions ──────────────────────────────────────────────────────
type PageId = "home" | "about" | "services" | "robotics" | "biomedic" | "software" | "portfolio" | "contact" | "privacy" | "terms";

interface PageTab {
  id: PageId;
  label: string;
  icon: React.ReactNode;
  url: string;
  sections: { id: string; title: string; keys: string[] }[];
}

function buildPageTabs(cms: ReturnType<typeof useCms>): PageTab[] {
  return [
    {
      id: "home",
      label: "Home",
      icon: <Globe size={14} />,
      url: "/",
      sections: [
        {
          id: "hero",
          title: "Hero & Stats Section",
          keys: ["hero_label","hero_title1","hero_em","hero_title2","hero_sub","hero_cta1","hero_cta2","stat_founded","stat_products","stat_clients","stat_quality"],
        },
        {
          id: "overview",
          title: "Overview (About Us) Section",
          keys: ["overview_label","overview_title1","overview_em","overview_title2","overview_p1","overview_p2","overview_cta","overview_card_tagline"],
        },
        {
          id: "services",
          title: "Services Highlights Section",
          keys: ["services_label","services_title","svc_robotics_title","svc_robotics_desc","svc_biomedic_title","svc_biomedic_desc","svc_software_title","svc_software_desc","svc_more"],
        },
        { id: "testimonials", title: "Testimonials Section", keys: ["testi_label","testi_title"] },
        { id: "cta", title: "CTA Footer Banner Section", keys: ["cta_title1","cta_em","cta_title2","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "about",
      label: "About",
      icon: <BookOpen size={14} />,
      url: "/about",
      sections: [
        { id: "hero",     title: "Hero Section",        keys: ["hero_label","hero_title","hero_sub"] },
        { id: "vision",   title: "Vision & Mission",    keys: ["vision_label","vision_title","vision_body","mission_label","mission_title"] },
        { id: "values",   title: "Core Values",         keys: ["val_integrity","val_integrity_desc","val_excellence","val_excellence_desc","val_partnership","val_partnership_desc","val_innovation","val_innovation_desc"] },
        { id: "timeline", title: "Timeline",            keys: ["timeline_label","timeline_title"] },
        { id: "team",     title: "Team Section",        keys: ["team_title","ceo_desc"] },
      ],
    },
    {
      id: "services",
      label: "Services",
      icon: <Briefcase size={14} />,
      url: "/services",
      sections: [
        { id: "hero", title: "Hero Section", keys: ["hero_label","hero_title","hero_sub"] },
        { id: "robotics_cat", title: "Robotics Category", keys: ["cat_robotics_label","cat_robotics_headline","cat_robotics_intro","svc_robot_assembly_title","svc_robot_assembly_desc","svc_robot_material_title","svc_robot_material_desc","svc_robot_welding_title","svc_robot_welding_desc","svc_robot_integration_title","svc_robot_integration_desc"] },
        { id: "biomedic_cat", title: "Biomedic Category", keys: ["cat_biomedic_label","cat_biomedic_headline","cat_biomedic_intro","svc_bio_fetal_title","svc_bio_fetal_desc","svc_bio_vital_title","svc_bio_vital_desc","svc_bio_drowsy_title","svc_bio_drowsy_desc","svc_bio_calib_title","svc_bio_calib_desc"] },
        { id: "software_cat", title: "Software Category", keys: ["cat_software_label","cat_software_headline","cat_software_intro","svc_sw_finance_title","svc_sw_finance_desc","svc_sw_monitoring_title","svc_sw_monitoring_desc","svc_sw_custom_title","svc_sw_custom_desc"] },
        { id: "cta", title: "CTA Section", keys: ["cta_title","cta_sub","cta_btn","more_btn"] },
      ],
    },
    {
      id: "robotics",
      label: "Robotics",
      icon: <Bot size={14} />,
      url: "/services/robotics",
      sections: [
        { id: "hero",      title: "Hero Section",       keys: ["breadcrumb","hero_label","hero_title","hero_sub","hero_cta"] },
        { id: "services",  title: "Services",           keys: ["section_label","section_title","svc1_title","svc1_desc"] },
        { id: "catalogue", title: "Product Catalogue",  keys: ["catalogue_label","catalogue_title","cat1_tag","cat1_name","cat1_desc","cat1_wa","cat1_pay","cat2_tag","cat2_name","cat2_desc","cat2_wa","cat2_pay","wa_btn","pay_btn"] },
        { id: "why",       title: "Why LTI Section",    keys: ["why_label","why_title","why_sub","adv1_title","adv1_desc","adv2_title","adv2_desc","adv3_title","adv3_desc","adv4_title","adv4_desc"] },
        { id: "cta",       title: "CTA Section",        keys: ["cta_title","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "biomedic",
      label: "Biomedic",
      icon: <HeartPulse size={14} />,
      url: "/services/biomedic",
      sections: [
        { id: "hero",      title: "Hero Section",       keys: ["breadcrumb","hero_label","hero_sub","hero_cta"] },
        { id: "services",  title: "Services",           keys: ["section_label","section_title","svc1_title","svc1_desc","svc2_title","svc2_desc","svc3_title","svc3_desc"] },
        { id: "catalogue", title: "Product Catalogue",  keys: ["catalogue_label","catalogue_title","cat1_tag","cat1_desc","cat1_wa","cat1_pay","cat2_tag","cat2_desc","cat2_wa","cat2_pay","wa_btn","pay_btn"] },
        { id: "why",       title: "Why LTI Section",    keys: ["why_label","why_title","why_sub","adv1_title","adv1_desc","adv2_title","adv2_desc","adv3_title","adv3_desc","adv4_title","adv4_desc"] },
        { id: "cta",       title: "CTA Section",        keys: ["cta_title","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "software",
      label: "Software",
      icon: <Code2 size={14} />,
      url: "/services/software",
      sections: [
        { id: "hero",      title: "Hero Section",       keys: ["breadcrumb","hero_label","hero_sub","hero_cta"] },
        { id: "services",  title: "Services",           keys: ["section_label","section_title","svc1_title","svc1_desc","svc2_title","svc2_desc","svc3_title","svc3_desc"] },
        { id: "catalogue", title: "Product Catalogue",  keys: ["catalogue_label","catalogue_title","cat1_tag","cat1_name","cat1_desc","cat1_wa","cat1_pay","cat2_tag","cat2_name","cat2_desc","cat2_wa","cat2_pay","cat3_tag","cat3_name","cat3_desc","cat3_wa","cat3_pay","wa_btn","pay_btn"] },
        { id: "why",       title: "Why LTI Section",    keys: ["why_label","why_title","why_sub","adv1_title","adv1_desc","adv2_title","adv2_desc","adv3_title","adv3_desc","adv4_title","adv4_desc"] },
        { id: "cta",       title: "CTA Section",        keys: ["cta_title","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <FolderOpen size={14} />,
      url: "/portfolio",
      sections: [
        { id: "hero",     title: "Hero Section",      keys: ["hero_label","hero_title","hero_sub"] },
        { id: "stats",    title: "Stats Bar",         keys: ["stat_done","stat_satisfy","stat_year","selected","result_label"] },
        { id: "projects", title: "Projects",          keys: ["p1_title","p1_desc","p1_result","p2_title","p2_desc","p2_result"] },
        { id: "next",     title: "Upcoming Projects", keys: ["next_title","next_sub"] },
        { id: "cta",      title: "CTA Section",       keys: ["cta_title","cta_sub","cta_btn"] },
      ],
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail size={14} />,
      url: "/contact",
      sections: [
        { id: "hero",    title: "Hero Section",         keys: ["hero_label","hero_title","hero_sub"] },
        { id: "info",    title: "Contact Info",         keys: ["offices_label","offices_title","address_label","address_value","phone_label","phone_value","email_label","hours_label","hours_value"] },
        { id: "form",    title: "Enquiry Form",         keys: ["form_label","form_title","submit_btn"] },
        { id: "sent",    title: "Success Message",      keys: ["sent_title","sent_sub"] },
      ],
    },
    {
      id: "privacy",
      label: "Privacy",
      icon: <Scale size={14} />,
      url: "/privacy-policy",
      sections: [
        { id: "hero",     title: "Hero Section",          keys: ["hero_label","hero_title","updated"] },
        { id: "intro",    title: "Introduction",          keys: ["intro"] },
        { id: "sections", title: "Policy Sections",       keys: ["s1_title","s2_title","s3_title","s4_title","s5_title","s6_title"] },
        { id: "contact",  title: "Contact Box",           keys: ["contact_title","contact_sub"] },
      ],
    },
    {
      id: "terms",
      label: "Terms",
      icon: <Scale size={14} />,
      url: "/terms-of-service",
      sections: [
        { id: "hero",     title: "Hero Section",          keys: ["hero_label","hero_title","updated"] },
        { id: "intro",    title: "Introduction",          keys: ["intro"] },
        { id: "sections", title: "Terms Sections",        keys: ["s1_title","s2_title","s3_title","s4_title","s5_title","s6_title"] },
        { id: "contact",  title: "Contact Box",           keys: ["contact_title","contact_sub"] },
      ],
    },
  ];
}

// ── Helper: get live translations for a page from CmsContext ─────────────────
function usePageTranslations(pageId: PageId, cms: ReturnType<typeof useCms>): Record<string, { id: string; en: string }> {
  const map: Record<PageId, Record<string, any>> = {
    home:      cms.homeTranslations,
    about:     cms.aboutTranslations,
    services:  cms.servicesTranslations,
    robotics:  cms.roboticsTranslations,
    biomedic:  cms.biomedicTranslations,
    software:  cms.softwareTranslations,
    portfolio: cms.portfolioTranslations,
    contact:   cms.contactTranslations,
    privacy:   cms.privacyTranslations,
    terms:     cms.termsTranslations,
  };
  return map[pageId] ?? {};
}

// ── Field Input Component ────────────────────────────────────────────────────
function FieldRow({
  keyStr,
  value,
  isFocused,
  onUpdate,
  onFocus,
}: {
  keyStr: string;
  value: { id?: string; en?: string } | undefined;
  isFocused: boolean;
  onUpdate: (lang: "id" | "en", val: string) => void;
  onFocus: () => void;
}) {
  const isTextarea =
    keyStr.endsWith("_sub") ||
    keyStr.includes("_desc") ||
    keyStr.includes("_p1") ||
    keyStr.includes("_p2") ||
    keyStr.includes("_tagline") ||
    keyStr.includes("_body") ||
    keyStr.includes("_intro") ||
    keyStr === "quote";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#111B30",
    border: isFocused ? "1px solid #C9A84C" : "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "4px",
    padding: "8px 12px 8px 36px",
    fontSize: "12px",
    color: "#FFFFFF",
    outline: "none",
    fontFamily: "var(--font-jost)",
    ...(isTextarea ? { minHeight: "60px", resize: "vertical" as const, lineHeight: "1.4" } : {}),
  };

  const renderInput = (lang: "id" | "en") => {
    const langLabel = (
      <span style={{ position: "absolute", top: "8px", left: "8px", fontSize: "9px", background: "rgba(255,255,255,0.1)", padding: "2px 4px", borderRadius: "2px", color: "rgba(255,255,255,0.7)" }}>
        {lang.toUpperCase()}
      </span>
    );
    const val = value?.[lang] || "";

    return (
      <div style={{ marginBottom: lang === "id" ? "8px" : 0, position: "relative" }}>
        {langLabel}
        {isTextarea ? (
          <textarea id={`cms-input-${keyStr}-${lang}`} value={val} onChange={(e) => onUpdate(lang, e.target.value)} onFocus={onFocus} style={inputStyle} />
        ) : (
          <input id={`cms-input-${keyStr}-${lang}`} type="text" value={val} onChange={(e) => onUpdate(lang, e.target.value)} onFocus={onFocus} style={inputStyle} />
        )}
      </div>
    );
  };

  return (
    <div style={{ borderLeft: isFocused ? "3px solid #C9A84C" : "1px solid rgba(255,255,255,0.06)", paddingLeft: "10px", transition: "all 0.2s ease" }}>
      <label style={{ fontSize: "11px", color: isFocused ? "#C9A84C" : "rgba(255,255,255,0.5)", fontWeight: 600, display: "block", marginBottom: "6px", fontFamily: "monospace" }}>
        {keyStr}
      </label>
      {renderInput("id")}
      {renderInput("en")}
    </div>
  );
}

// ── Main Admin Component ──────────────────────────────────────────────────────
export default function AdminPage() {
  const { lang } = useLanguage();
  const cms = useCms();
  const {
    isLoggedIn, login, loginWithOAuth, logout,
    isCmsMode, setIsCmsMode,
    homeTranslations: h,
    updateHomeField,
    updateField,
    publishChanges,
    resetDefaults,
    activeEditKey, setActiveEditKey,
    isSaving,
  } = cms;

  const [password,           setPassword]           = useState("");
  const [loginError,         setLoginError]         = useState("");
  const [showPasswordLogin,  setShowPasswordLogin]  = useState(false);
  const [searchQuery,        setSearchQuery]        = useState("");
  const [activeSection,      setActiveSection]      = useState<string | null>("hero");
  const [activePage,         setActivePage]         = useState<PageId>("home");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const pageTabs = buildPageTabs(cms);
  const currentTab = pageTabs.find(p => p.id === activePage)!;
  const pageTranslations = usePageTranslations(activePage, cms);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  useEffect(() => {
    if (isLoggedIn) setIsCmsMode(true);
  }, [isLoggedIn, setIsCmsMode]);

  // Reset to first section when tab changes
  useEffect(() => {
    if (currentTab?.sections?.[0]) {
      setActiveSection(currentTab.sections[0].id);
    }
  }, [activePage]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(password);
    if (success) {
      setPassword("");
      setLoginError("");
      setToast({ message: "Welcome to CMS Admin Dashboard!", type: "success" });
    } else {
      setLoginError("Incorrect password. Try again.");
    }
  };

  const handleOAuthLogin = async (provider: "github" | "google") => {
    setLoginError("");
    const success = await loginWithOAuth(provider);
    if (!success) {
      setLoginError(`Failed to initiate login with ${provider}.`);
    }
  };

  const handlePublish = async () => {
    const success = await publishChanges();
    setToast(success
      ? { message: "Changes published & saved to codebase!", type: "success" }
      : { message: "Failed to save changes to disk.", type: "error" }
    );
  };

  const handleReset = async () => {
    if (window.confirm("Reset ALL translations across ALL pages to defaults? This cannot be undone.")) {
      const success = await resetDefaults();
      setToast(success
        ? { message: "Restored to default translations!", type: "success" }
        : { message: "Failed to reset translations.", type: "error" }
      );
    }
  };

  // ── LOGIN SCREEN ────────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div id="cms-login-overlay" style={{ minHeight: "100vh", backgroundColor: "#0D1424", backgroundImage: "linear-gradient(135deg, #0D1424 0%, #15223D 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div className="cms-login-card animate-fade-in" style={{ backgroundColor: "#111B30", border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "12px", padding: "45px 40px", width: "100%", maxWidth: "400px", boxShadow: "0 20px 45px rgba(0, 0, 0, 0.4)", fontFamily: "var(--font-jost)", color: "#FFFFFF" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(201, 168, 76, 0.12)", color: "#C9A84C", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <Lock size={26} />
            </div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "30px", color: "#C9A84C", fontWeight: 400 }}>PT. LTI CMS Portal</h3>
            <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)", marginTop: "8px" }}>Authenticate to manage all page translations</p>
          </div>

          {/* OAuth Provider Login Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "8px" }}>
            <button
              onClick={() => handleOAuthLogin("github")}
              style={{
                width: "100%",
                backgroundColor: "#1E2536",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.5px",
                padding: "14px",
                borderRadius: "6px",
                cursor: "pointer",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#242E47";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1E2536";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>
            <button
              onClick={() => handleOAuthLogin("google")}
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                color: "#1F2937",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.5px",
                padding: "14px",
                borderRadius: "6px",
                cursor: "pointer",
                border: "1px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-.14 3.01-3.1 3.01v2.51h4.97c2.91-2.68 4.58-6.61 4.58-11.37z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-4.97-2.51c-1.39.93-3.17 1.49-4.99 1.49-3.84 0-7.09-2.59-8.25-6.09H1.67v2.6C3.65 20.43 7.57 24 12 24z"/>
                <path fill="#FBBC05" d="M3.75 13.98c-.3-.88-.47-1.82-.47-2.78s.17-1.9.47-2.78V5.82H1.67A11.94 11.94 0 0 0 0 11.2c0 2.05.52 4 1.44 5.73l2.31-2.95z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.22 0 12 0 7.57 0 3.65 3.57 1.67 7.42l3.75 2.95c1.16-3.5 4.41-6.09 8.25-6.09z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {loginError && !showPasswordLogin && <p style={{ color: "#EF4444", fontSize: "11px", marginTop: "12px", textAlign: "center" }}>{loginError}</p>}

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "24px 0", opacity: 0.5 }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />
            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.6)" }}>or</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />
          </div>

          {/* Password fallback */}
          {!showPasswordLogin ? (
            <button
              onClick={() => setShowPasswordLogin(true)}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                color: "#C9A84C",
                border: "1px dashed rgba(201, 168, 76, 0.4)",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "12px",
                cursor: "pointer",
                fontFamily: "var(--font-jost)",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 168, 76, 0.05)";
                e.currentTarget.style.borderColor = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(201, 168, 76, 0.4)";
              }}
            >
              Sign in with password fallback
            </button>
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: "24px" }}>
                <input
                  id="cms-password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Admin Password"
                  style={{ width: "100%", backgroundColor: "#1A2744", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "6px", padding: "14px 18px", color: "#FFFFFF", fontSize: "14px", outline: "none", transition: "border-color 0.2s ease" }}
                  onFocus={(e) => (e.target.style.borderColor = "#C9A84C")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")}
                />
                {loginError && <p style={{ color: "#EF4444", fontSize: "11px", marginTop: "6px" }}>{loginError}</p>}
              </div>
              <button id="cms-login-submit" type="submit" style={{ width: "100%", background: "linear-gradient(135deg, #9B7A2E 0%, #C9A84C 100%)", color: "#1A2744", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", padding: "14px", borderRadius: "6px", cursor: "pointer", boxShadow: "0 4px 15px rgba(201, 168, 76, 0.2)" }}>
                Unlock Dashboard
              </button>
            </form>
          )}

          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <Link href="/" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <ArrowLeft size={12} /> Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── DASHBOARD ───────────────────────────────────────────────────────────────
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#0D1424", fontFamily: "var(--font-jost)", color: "#FFFFFF", overflow: "hidden" }}>

      {/* TOAST */}
      {toast && (
        <div className={`cms-toast ${toast.type}`} style={{ position: "fixed", bottom: "24px", left: "24px", zIndex: 2001, backgroundColor: toast.type === "success" ? "#10B981" : "#EF4444", color: "#FFFFFF", padding: "12px 20px", borderRadius: "6px", boxShadow: "0 4px 15px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", animation: "slideIn 0.3s ease-out" }}>
          {toast.type === "success" ? <Check size={16} /> : <AlertTriangle size={16} />}
          {toast.message}
        </div>
      )}

      {/* TOP BAR */}
      <header style={{ height: "64px", backgroundColor: "#111B30", borderBottom: "1px solid rgba(201, 168, 76, 0.25)", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Layout size={20} color="#C9A84C" />
          <div>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", color: "#C9A84C", fontWeight: 400, margin: 0 }}>PT. LTI CMS Editor</h1>
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginTop: "-2px" }}>All Pages Admin</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href={currentTab.url} target="_blank" style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", color: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <Globe size={13} color="#C9A84C" /> View Live Page
          </Link>
          <button id="cms-logout-btn" onClick={logout} style={{ color: "#EF4444", backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", padding: "8px 12px", borderRadius: "4px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
            <LogOut size={13} /> Logout
          </button>
        </div>
      </header>

      {/* BODY */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* PAGE TAB SIDEBAR */}
        <nav style={{ width: "64px", backgroundColor: "#0D1424", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "16px", gap: "4px", flexShrink: 0 }}>
          {pageTabs.map((tab) => {
            const active = activePage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePage(tab.id)}
                title={tab.label}
                style={{
                  width: "48px", height: "48px", borderRadius: "8px",
                  backgroundColor: active ? "rgba(201,168,76,0.15)" : "transparent",
                  border: active ? "1px solid rgba(201,168,76,0.4)" : "1px solid transparent",
                  color: active ? "#C9A84C" : "rgba(255,255,255,0.4)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", gap: "3px", transition: "all 0.15s ease",
                  fontSize: "8px", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase",
                  fontFamily: "var(--font-jost)",
                }}
              >
                {tab.icon}
                <span style={{ fontSize: "7px", letterSpacing: 0 }}>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* EDITOR PANEL */}
        <aside style={{ width: "400px", backgroundColor: "#111B30", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0 }}>

          {/* Panel header with page name */}
          <div style={{ padding: "16px 20px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ color: "#C9A84C" }}>{currentTab.icon}</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF" }}>{currentTab.label} Page</span>
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", marginLeft: "auto", fontFamily: "monospace" }}>{currentTab.url}</span>
            </div>

            {/* CMS Mode Toggle + Search */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>Hover Highlight</span>
                <button id="cms-inline-toggle" onClick={() => setIsCmsMode(!isCmsMode)} style={{ backgroundColor: isCmsMode ? "#C9A84C" : "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: "4px", color: isCmsMode ? "#1A2744" : "#FFFFFF", fontSize: "11px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                  {isCmsMode ? <Eye size={12} /> : <EyeOff size={12} />}
                  {isCmsMode ? "Enabled" : "Disabled"}
                </button>
              </div>
              <div style={{ position: "relative" }}>
                <input id="cms-search-input" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search keys..." style={{ width: "100%", backgroundColor: "#0D1424", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "7px 10px 7px 30px", fontSize: "12px", color: "#FFFFFF", outline: "none" }} />
                <Search size={13} style={{ position: "absolute", left: "9px", top: "9px", color: "rgba(255,255,255,0.4)" }} />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} style={{ position: "absolute", right: "8px", top: "7px", background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", display: "flex" }}>
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sections accordion */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px" }} className="cms-fields-container">
            {currentTab.sections.map((section) => {
              const filteredKeys = section.keys.filter((key) => {
                const field = pageTranslations[key] as { id?: string; en?: string } | undefined;
                return (
                  key.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (field?.id || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (field?.en || "").toLowerCase().includes(searchQuery.toLowerCase())
                );
              });

              if (filteredKeys.length === 0) return null;
              const isExpanded = activeSection === section.id;

              return (
                <div key={section.id} style={{ marginBottom: "10px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden", backgroundColor: "#152037" }}>
                  <button
                    onClick={() => setActiveSection(isExpanded ? null : section.id)}
                    style={{ width: "100%", padding: "11px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: isExpanded ? "rgba(201,168,76,0.08)" : "transparent", color: isExpanded ? "#C9A84C" : "#FFFFFF", fontSize: "12px", fontWeight: 500, textAlign: "left", cursor: "pointer" }}
                  >
                    <span>{section.title}</span>
                    {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>

                  {isExpanded && (
                    <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
                      {filteredKeys.map((key) => {
                        const fieldValue = pageTranslations[key] as { id?: string; en?: string } | undefined;
                        // Skip non-bilingual fields (arrays, nested objects)
                        if (!fieldValue || typeof fieldValue !== "object" || Array.isArray(fieldValue) || (!("id" in fieldValue) && !("en" in fieldValue))) return null;

                        return (
                          <FieldRow
                            key={key}
                            keyStr={key}
                            value={fieldValue}
                            isFocused={activeEditKey === key}
                            onFocus={() => setActiveEditKey(key)}
                            onUpdate={(lang, val) => updateField(activePage, key, lang, val)}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom action bar */}
          <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "8px", backgroundColor: "#16223D" }}>
            <button id="cms-publish-btn" onClick={handlePublish} disabled={isSaving} style={{ width: "100%", background: "linear-gradient(135deg, #9B7A2E 0%, #C9A84C 100%)", color: "#1A2744", fontWeight: 600, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "11px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer", opacity: isSaving ? 0.7 : 1 }}>
              <Save size={13} />
              {isSaving ? "Saving..." : "Save & Publish All"}
            </button>
            <button id="cms-reset-btn" onClick={handleReset} disabled={isSaving} style={{ width: "100%", backgroundColor: "rgba(239,68,68,0.08)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.18)", fontWeight: 500, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", padding: "9px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", cursor: "pointer" }}>
              <RefreshCw size={11} /> Reset All Defaults
            </button>
          </div>
        </aside>

        {/* LIVE PREVIEW PANEL */}
        <section style={{ flex: 1, backgroundColor: "#1C2A49", padding: "24px", overflowY: "auto", display: "flex", justifyContent: "center" }} className="admin-preview-section">
          <div className="admin-preview-frame" style={{ width: "100%", maxWidth: "1024px", backgroundColor: "#FEFEFE", color: "#2D2D2D", borderRadius: "8px", boxShadow: "0 10px 40px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
            {/* Browser chrome */}
            <div style={{ height: "36px", backgroundColor: "#F5F4F1", borderBottom: "1px solid #E2DDD5", padding: "0 14px", display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EF4444", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981", display: "inline-block" }} />
              </div>
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "4px", fontSize: "10px", color: "#6B6B6B", padding: "2px 14px", marginLeft: "12px", flex: 1, maxWidth: "480px", fontFamily: "monospace", textAlign: "center" }}>
                localhost:3000{currentTab.url}
              </div>
              <div style={{ marginLeft: "auto", fontSize: "10px", fontWeight: 700, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "1px" }}>Live Preview</div>
            </div>

            {/* Preview content — HOME PAGE */}
            {activePage === "home" && (
              <div style={{ flex: 1, overflowY: "auto" }}>

                {/* Hero */}
                <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#1A2744 0%,#243356 50%,#1A2744 100%)", position: "relative", overflow: "hidden", padding: "60px 0" }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                  <div style={{ position: "relative", zIndex: 1, padding: "0 40px", maxWidth: 680 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <div style={{ height: 1, width: 36, background: "#C9A84C" }} />
                      <span style={lbl}><span className={`cms-editable-wrapper ${activeEditKey === "hero_label" ? "active" : ""}`}>{h.hero_label[lang]}</span></span>
                    </div>
                    <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", lineHeight: 1.1, fontSize: "clamp(32px,4.5vw,58px)", marginBottom: 20 }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "hero_title1" ? "active" : ""}`}>{h.hero_title1[lang]}</span>{" "}
                      <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C9A84C" }}>
                        <span className={`cms-editable-wrapper ${activeEditKey === "hero_em" ? "active" : ""}`}>{h.hero_em[lang]}</span>
                      </em>{" "}
                      <span className={`cms-editable-wrapper ${activeEditKey === "hero_title2" ? "active" : ""}`}>{h.hero_title2[lang]}</span>
                    </h1>
                    <p style={{ fontFamily: ff.sans, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, maxWidth: 480, marginBottom: 32 }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "hero_sub" ? "active" : ""}`}>{h.hero_sub[lang]}</span>
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <div className="btn-solid-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
                        <span className={`cms-editable-wrapper ${activeEditKey === "hero_cta1" ? "active" : ""}`}>{h.hero_cta1[lang]}</span> <ArrowRight size={11} />
                      </div>
                      <div className="btn-outline-light" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", fontFamily: ff.sans, fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase" }}>
                        <span className={`cms-editable-wrapper ${activeEditKey === "hero_cta2" ? "active" : ""}`}>{h.hero_cta2[lang]}</span>
                      </div>
                    </div>
                    <div className="grid-4" style={{ marginTop: 48, borderTop: "1px solid rgba(201,168,76,0.25)" }}>
                      {[
                        { num: "2026", label: h.stat_founded[lang],  key: "stat_founded" },
                        { num: "3+",   label: h.stat_products[lang], key: "stat_products" },
                        { num: "2",    label: h.stat_clients[lang],  key: "stat_clients" },
                        { num: "100%", label: h.stat_quality[lang],  key: "stat_quality" },
                      ].map((s, i) => (
                        <div key={i} style={{ padding: "16px 0 16px 10px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                          <div style={{ fontFamily: ff.serif, fontSize: 26, fontWeight: 600, color: "#C9A84C" }}>{s.num}</div>
                          <div style={{ ...lbl, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>
                            <span className={`cms-editable-wrapper ${activeEditKey === s.key ? "active" : ""}`}>{s.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Overview */}
                <section style={{ padding: "60px 40px" }}>
                  <div style={lbl}><span className={`cms-editable-wrapper ${activeEditKey === "overview_label" ? "active" : ""}`}>{h.overview_label[lang]}</span></div>
                  <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", lineHeight: 1.15, fontSize: "clamp(24px,3vw,40px)", margin: "10px 0 16px" }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_title1" ? "active" : ""}`}>{h.overview_title1[lang]}</span>{" "}
                    <em><span className={`cms-editable-wrapper ${activeEditKey === "overview_em" ? "active" : ""}`}>{h.overview_em[lang]}</span></em>{" "}
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_title2" ? "active" : ""}`}>{h.overview_title2[lang]}</span>
                  </h2>
                  <div style={{ ...goldLine, marginBottom: 20 }} />
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 12, maxWidth: 520 }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_p1" ? "active" : ""}`}>{h.overview_p1[lang]}</span>
                  </p>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 520 }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_p2" ? "active" : ""}`}>{h.overview_p2[lang]}</span>
                  </p>
                </section>

                {/* Services */}
                <section style={{ padding: "60px 40px", background: "#F5F4F1" }}>
                  <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <div style={lbl}><span className={`cms-editable-wrapper ${activeEditKey === "services_label" ? "active" : ""}`}>{h.services_label[lang]}</span></div>
                    <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(24px,3vw,40px)", margin: "10px 0 14px" }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "services_title" ? "active" : ""}`}>{h.services_title[lang]}</span>
                    </h2>
                    <div style={{ ...goldLine, margin: "0 auto" }} />
                  </div>
                  <div className="grid-3">
                    {[
                      { icon: <Cpu size={20} color="#C9A84C" />, title: h.svc_robotics_title[lang], desc: h.svc_robotics_desc[lang], tKey: "svc_robotics_title", dKey: "svc_robotics_desc" },
                      { icon: <Activity size={20} color="#C9A84C" />, title: h.svc_biomedic_title[lang], desc: h.svc_biomedic_desc[lang], tKey: "svc_biomedic_title", dKey: "svc_biomedic_desc" },
                      { icon: <Code2 size={20} color="#C9A84C" />, title: h.svc_software_title[lang], desc: h.svc_software_desc[lang], tKey: "svc_software_title", dKey: "svc_software_desc" },
                    ].map((s, i) => (
                      <div key={i} style={{ background: "#FEFEFE", padding: "28px 22px", border: "1px solid #E2DDD5" }}>
                        <div style={{ width: 44, height: 44, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>{s.icon}</div>
                        <h3 style={{ fontFamily: ff.serif, fontSize: 17, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>
                          <span className={`cms-editable-wrapper ${activeEditKey === s.tKey ? "active" : ""}`}>{s.title}</span>
                        </h3>
                        <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.7 }}>
                          <span className={`cms-editable-wrapper ${activeEditKey === s.dKey ? "active" : ""}`}>{s.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <section style={{ padding: "60px 40px", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", textAlign: "center" }}>
                  <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(24px,3vw,42px)", marginBottom: 14 }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "cta_title1" ? "active" : ""}`}>{h.cta_title1[lang]}</span>{" "}
                    <em style={{ color: "#C9A84C" }}><span className={`cms-editable-wrapper ${activeEditKey === "cta_em" ? "active" : ""}`}>{h.cta_em[lang]}</span></em>{" "}
                    <span className={`cms-editable-wrapper ${activeEditKey === "cta_title2" ? "active" : ""}`}>{h.cta_title2[lang]}</span>
                  </h2>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "cta_sub" ? "active" : ""}`}>{h.cta_sub[lang]}</span>
                  </p>
                  <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <div className="btn-solid-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "cta_btn1" ? "active" : ""}`}>{h.cta_btn1[lang]}</span> <ArrowRight size={11} />
                    </div>
                    <div className="btn-outline-light" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", fontFamily: ff.sans, fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase" }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "cta_btn2" ? "active" : ""}`}>{h.cta_btn2[lang]}</span>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Preview content — ALL OTHER PAGES (generic field list) */}
            {activePage !== "home" && (
              <div style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ color: "#C9A84C" }}>{currentTab.icon}</span>
                    <h2 style={{ fontFamily: ff.serif, fontWeight: 400, color: "#1A2744", fontSize: "28px", margin: 0 }}>{currentTab.label} Page — Field Overview</h2>
                  </div>
                  <p style={{ fontFamily: ff.sans, fontSize: "12px", color: "#6B6B6B" }}>
                    Select a field on the left to edit it. Changes are reflected immediately on the live website.
                  </p>
                </div>

                {currentTab.sections.map((section) => {
                  const keys = section.keys.filter(k => {
                    const field = pageTranslations[k] as any;
                    return field && typeof field === "object" && !Array.isArray(field) && ("id" in field || "en" in field);
                  });
                  if (keys.length === 0) return null;
                  return (
                    <div key={section.id} style={{ marginBottom: "24px" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px", paddingBottom: "8px", borderBottom: "1px solid #E2DDD5" }}>
                        {section.title}
                      </div>
                      <div style={{ display: "grid", gap: "10px" }}>
                        {keys.map((key) => {
                          const field = pageTranslations[key] as { id?: string; en?: string } | undefined;
                          const isFocused = activeEditKey === key;
                          return (
                            <div
                              key={key}
                              onClick={() => {
                                setActiveEditKey(key);
                                setActiveSection(section.id);
                                // expand the correct section
                                if (activeSection !== section.id) setActiveSection(section.id);
                              }}
                              style={{
                                padding: "12px 16px", border: isFocused ? "1px solid #C9A84C" : "1px solid #E2DDD5",
                                borderRadius: "4px", cursor: "pointer",
                                backgroundColor: isFocused ? "rgba(201,168,76,0.04)" : "#FFFFFF",
                                transition: "all 0.15s ease",
                              }}
                            >
                              <div style={{ fontFamily: "monospace", fontSize: "10px", color: isFocused ? "#C9A84C" : "#AAAAAA", marginBottom: "6px", fontWeight: 600 }}>{key}</div>
                              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                <div style={{ fontSize: "12px", color: "#2D2D2D", lineHeight: 1.5 }}>
                                  <span style={{ fontSize: "9px", color: "#C9A84C", fontWeight: 700, marginRight: "4px" }}>ID</span>
                                  {field?.id || <span style={{ color: "#AAAAAA", fontStyle: "italic" }}>—</span>}
                                </div>
                                <div style={{ fontSize: "12px", color: "#2D2D2D", lineHeight: 1.5 }}>
                                  <span style={{ fontSize: "9px", color: "#6B9BD2", fontWeight: 700, marginRight: "4px" }}>EN</span>
                                  {field?.en || <span style={{ color: "#AAAAAA", fontStyle: "italic" }}>—</span>}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

```

## app\api\cms-login\route.ts
```ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.CMS_ADMIN_PASSWORD || "admin123";

    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

```

## app\api\save-translations\route.ts
```ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


const ALL_PAGES = [
  "home", "about", "services", "robotics", "biomedic",
  "software", "portfolio", "contact", "privacy", "terms", "nav", "footer",
] as const;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("translations")
      .select("page, data");

    if (error) {
      console.error("Supabase GET error:", error);
      return NextResponse.json({}, { status: 200 }); // return empty — defaults will be used
    }

    // Merge rows into { page: data } object
    const overrides: Record<string, any> = {};
    for (const row of data ?? []) {
      overrides[row.page] = row.data;
    }

    return NextResponse.json(overrides);
  } catch (err: any) {
    console.error("GET translations error:", err);
    return NextResponse.json({}, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    // 1. Authenticate Request (Accepts either Supabase OAuth JWT or admin password fallback)
    const authHeader = request.headers.get("Authorization");
    const passwordFallback = request.headers.get("X-CMS-Password-Fallback");
    
    let isAuthorized = false;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      const { data: { user }, error: authError } = await supabase.auth.getUser(token);
      if (!authError && user) {
        isAuthorized = true;
      }
    }

    if (!isAuthorized && passwordFallback) {
      const correctPassword = process.env.CMS_ADMIN_PASSWORD || "admin123";
      if (passwordFallback === correctPassword) {
        isAuthorized = true;
      }
    }

    if (!isAuthorized) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
    }

    // Upsert each page's translations as a separate row
    const rows = ALL_PAGES
      .filter((page) => body[page] !== undefined)
      .map((page) => ({ page, data: body[page] ?? {} }));

    if (rows.length === 0) {
      // Reset: delete all rows
      const { error } = await supabase.from("translations").delete().neq("page", "");
      if (error) {
        console.error("Supabase DELETE error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true });
    }

    const { error } = await supabase
      .from("translations")
      .upsert(rows, { onConflict: "page" });

    if (error) {
      console.error("Supabase UPSERT error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("POST translations error:", err);
    return NextResponse.json({ success: false, error: err.message ?? "Unknown error" }, { status: 500 });
  }
}

```

## app\components\CmsAdminPanel.tsx
```tsx
"use client";

import React from "react";
import Link from "next/link";
import { Settings } from "lucide-react";

export default function CmsAdminPanel() {
  return (
    <Link
      id="cms-floating-trigger"
      href="/admin"
      className="cms-floating-btn"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        background: "linear-gradient(135deg, #9B7A2E 0%, #C9A84C 100%)",
        color: "#1A2744",
        borderRadius: "50px",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 4px 20px rgba(201, 168, 76, 0.4)",
        fontWeight: 600,
        fontSize: "12px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontFamily: "var(--font-jost)",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Settings size={16} className="animate-spin-slow" />
      CMS Admin
    </Link>
  );
}

```

## app\components\EditableText.tsx
```tsx
"use client";

import React from "react";
import { useCms } from "../context/CmsContext";
import { Edit3 } from "lucide-react";

interface EditableTextProps {
  fieldKey: string;
  children: React.ReactNode;
  inline?: boolean;
}

export default function EditableText({ fieldKey, children, inline = true }: EditableTextProps) {
  const { isCmsMode, activeEditKey, setActiveEditKey, isLoggedIn } = useCms();

  if (!isCmsMode || !isLoggedIn) {
    return <>{children}</>;
  }

  const isActive = activeEditKey === fieldKey;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveEditKey(fieldKey);
    
    // Find the sidebar input element and scroll to it
    const element = document.getElementById(`cms-input-${fieldKey}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        (element as HTMLElement).focus();
      }, 400);
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`cms-editable-wrapper ${isActive ? "active" : ""} ${inline ? "inline-mode" : "block-mode"}`}
      title={`Edit text for "${fieldKey}"`}
    >
      {children}
      <span className="cms-edit-indicator">
        <Edit3 size={8} />
      </span>
    </span>
  );
}

```

## app\components\Footer.tsx
```tsx
"use client";

import Link from "next/link";
import { 
  Mail, Phone, MapPin, 
  Home, Info, Settings, Briefcase, PhoneCall,
  Bot, HeartPulse, Activity, Code2, Smartphone, Cpu,
  Shield, FileText
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

const S = {
  serif: { fontFamily: "var(--font-cormorant), 'Poppins', sans-serif" },
  sans: { fontFamily: "var(--font-jost), 'Poppins', sans-serif" },
};

export default function Footer() {
  const { lang } = useLanguage();
  const f = t.footer;
  const n = t.nav;

  const quickLinks = [
    { href: "/",          label: t.nav.home[lang],      Icon: Home },
    { href: "/about",     label: t.nav.about[lang],     Icon: Info },
    { href: "/services",  label: t.nav.services[lang],  Icon: Settings },
    { href: "/portfolio", label: t.nav.portfolio[lang], Icon: Briefcase },
    { href: "/contact",   label: t.nav.contact[lang],   Icon: PhoneCall },
  ];

  const solutions = [
    { label: lang === "id" ? "Robotika Industri"   : "Industrial Robotics",   Icon: Bot },
    { label: lang === "id" ? "Perangkat Medis"     : "Medical Devices",        Icon: HeartPulse },
    { label: lang === "id" ? "Peralatan Bedah"     : "Surgical Equipment",     Icon: Activity },
    { label: lang === "id" ? "Software Enterprise" : "Enterprise Software",    Icon: Code2 },
    { label: lang === "id" ? "Web & Mobile"        : "Web & Mobile Apps",      Icon: Smartphone },
    { label: lang === "id" ? "Integrasi Sistem"    : "System Integration",     Icon: Cpu },
  ];

  return (
    <footer style={{ background: "#1A2744", color: "#FFFFFF" }}>
      <div style={{ height: "2px", background: "linear-gradient(to right, #9B7A2E, #C9A84C, #E8D5A3)" }} />

      <div className="page-container" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ ...S.serif, fontSize: "22px", fontWeight: 600, letterSpacing: "3px", color: "#FFFFFF" }}>PT. LTI</div>
              <div style={{ ...S.sans, fontSize: "8px", fontWeight: 500, letterSpacing: "5px", textTransform: "uppercase", color: "#C9A84C", marginTop: "3px" }}>PT. Lestari Teknologi Inovasi</div>
            </div>
            <p style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "24px" }}>
              {f.tagline[lang]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              {f.quickLinks[lang]}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link-hover"
                    style={{
                      ...S.sans,
                      fontSize: "12px",
                      textDecoration: "none",
                      letterSpacing: "0.5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <link.Icon size={13} color="#C9A84C" style={{ flexShrink: 0 }} />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              {f.ourSolutions[lang]}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {solutions.map(s => (
                <li key={s.label} style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <s.Icon size={13} color="#C9A84C" style={{ flexShrink: 0 }} />{s.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              {f.contact[lang]}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={13} color="#C9A84C" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
                Jl. Cikoneng, Lengkong, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40287
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Phone size={13} color="#C9A84C" />
                <a href="tel:+62222345678" style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                  +62 811-8089-1901
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Mail size={13} color="#C9A84C" />
                <a href="mailto:contact@lti.company" style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                contact@lti.company
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "56px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ ...S.sans, fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "1px" }}>
            © {new Date().getFullYear()} PT. Lestari Teknologi Inovasi. {f.copyright[lang]}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              href="/privacy-policy"
              style={{ ...S.sans, fontSize: "11px", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s ease" }}
              className="footer-link-hover"
            >
              <Shield size={11} />
              {f.privacyPolicy[lang]}
            </Link>
            <Link
              href="/terms-of-service"
              style={{ ...S.sans, fontSize: "11px", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s ease" }}
              className="footer-link-hover"
            >
              <FileText size={11} />
              {f.termsOfService[lang]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

## app\components\LayoutWrapper.tsx
```tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

```

## app\components\Navbar.tsx
```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield, FileText, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);

  const nav = t.nav;

  const navLinks = [
    { href: "/",          label: nav.home[lang] },
    { href: "/about",     label: nav.about[lang] },
    { href: "/services",  label: nav.services[lang] },
    { href: "/portfolio", label: nav.portfolio[lang] },
    { href: "/contact",   label: nav.contact[lang] },
  ];

  const serviceSubLinks = [
    { href: "/services/biomedic", label: nav.biomedic[lang],  desc: nav.biomedic_desc[lang] },
    { href: "/services/robotics", label: nav.robotics[lang],  desc: nav.robotics_desc[lang] },
    { href: "/services/software", label: nav.software[lang],  desc: nav.software_desc[lang] },
  ];

  const legalSubLinks = [
    { href: "/privacy-policy",   label: nav.privacyPolicy[lang],   desc: nav.privacyPolicy_desc[lang],   Icon: Shield },
    { href: "/terms-of-service", label: nav.termsOfService[lang],  desc: nav.termsOfService_desc[lang],  Icon: FileText },
  ];

  // Close mobile services submenu when mobile menu is closed
  useEffect(() => {
    if (!mobileOpen) setServicesMobileOpen(false);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navTextColor = scrolled ? "#2D2D2D" : "rgba(255,255,255,0.85)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 #E2DDD5" : "none",
      }}
    >
      {/* Gold top line */}
      <div style={{ height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C,#E8D5A3)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 76,
          }}
        >
          {/* LOGO */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/PT.png"
              alt="PT. LTI Logo"
              style={{ width: 44, height: 44, objectFit: "contain", display: "block" }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: ff.serif,
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: 2,
                  color: scrolled ? "#1A2744" : "#FFFFFF",
                  transition: "color 0.4s",
                }}
              >
                PT. LTI
              </span>
              <span
                style={{
                  fontFamily: ff.sans,
                  fontSize: 7,
                  fontWeight: 500,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginTop: 2,
                }}
              >
                Lestari Teknologi Inovasi
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    className="nav-services-wrap"
                  >
                    {/* Services trigger */}
                    <Link
                      href="/services"
                      className="nav-services-label"
                      style={{
                        fontFamily: ff.sans,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: 2.5,
                        textTransform: "uppercase",
                        color: navTextColor,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        transition: "color 0.3s",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className="nav-services-chevron"
                        style={{
                          transition: "transform 0.25s ease",
                        }}
                      />
                    </Link>

                    {/* Dropdown panel */}
                    <div className="nav-dropdown">
                      {/* Gold accent bar */}
                      <div className="nav-dropdown-gold-bar" />

                      {/* All Services link */}
                      <Link
                        href="/services"
                        className="nav-all-services"
                      >
                        {nav.allServices[lang]}
                      </Link>

                      {/* Sub links */}
                      {serviceSubLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="nav-submenu-item"
                        >
                          <span className="nav-submenu-title">
                            {sub.label}
                          </span>
                          <span className="nav-submenu-desc">
                            {sub.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Normal nav link
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontFamily: ff.sans,
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    color: navTextColor,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Legal dropdown — inside nav for consistent gap */}
            <div className="nav-services-wrap">
              <button
                className="nav-services-label"
                style={{
                  fontFamily: ff.sans,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: navTextColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                  transition: "color 0.3s",
                }}
              >
                {nav.legal[lang]}
                <ChevronDown
                  size={12}
                  className="nav-services-chevron"
                  style={{ transition: "transform 0.25s ease" }}
                />
              </button>
              <div className="nav-dropdown">
                <div className="nav-dropdown-gold-bar" />
                {legalSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="nav-submenu-item"
                  >
                    <span className="nav-submenu-title" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <sub.Icon size={11} color="#C9A84C" />
                      {sub.label}
                    </span>
                    <span className="nav-submenu-desc">{sub.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop right section */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: ff.sans,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: scrolled ? "#1A2744" : "rgba(255,255,255,0.85)",
                background: "none",
                border: scrolled ? "1px solid #E2DDD5" : "1px solid rgba(255,255,255,0.3)",
                padding: "6px 14px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              <Globe size={12} />
              {lang === "id" ? "EN" : "ID"}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className={`nav-cta-button ${scrolled ? "scrolled" : ""}`}
            >
              {nav.cta[lang]}
            </Link>
          </div>

          {/* Mobile right section */}
          <div className="nav-mobile" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Mobile language toggle */}
            <button
              onClick={toggleLang}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: ff.sans,
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: scrolled ? "#1A2744" : "#FFFFFF",
                background: "none",
                border: scrolled ? "1px solid #E2DDD5" : "1px solid rgba(255,255,255,0.4)",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              <Globe size={11} />
              {lang === "id" ? "EN" : "ID"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                color: scrolled ? "#2D2D2D" : "#FFFFFF",
                padding: 8,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="nav-mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: mobileOpen ? 600 : 0,
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E2DDD5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
          {navLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <div key={link.href} style={{ display: "flex", flexDirection: "column" }}>
                  <button
                    onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "4px 0",
                      cursor: "pointer",
                      fontFamily: ff.sans,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "#2D2D2D",
                      textAlign: "left",
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      style={{
                        transform: servicesMobileOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        color: "#C9A84C",
                      }}
                    />
                  </button>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: servicesMobileOpen ? 300 : 0,
                      transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      paddingLeft: 12,
                      marginTop: servicesMobileOpen ? 12 : 0,
                      borderLeft: "2px solid #E2DDD5",
                    }}
                  >
                    <Link
                      href="/services"
                      onClick={() => { setMobileOpen(false); setServicesMobileOpen(false); }}
                      style={{
                        fontFamily: ff.sans,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        textDecoration: "none",
                      }}
                    >
                      {nav.allServices[lang]}
                    </Link>
                    {serviceSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => { setMobileOpen(false); setServicesMobileOpen(false); }}
                        style={{
                          fontFamily: ff.sans,
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                          color: "#6B6B6B",
                          textDecoration: "none",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: ff.sans,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: "#2D2D2D",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-block",
              textAlign: "center",
              padding: "12px 24px",
              backgroundColor: "#1A2744",
              color: "#FFFFFF",
              fontFamily: ff.sans,
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: 8,
            }}
          >
            {nav.cta[lang]}
          </Link>

          {/* Legal links divider */}
          <div style={{ borderTop: "1px solid #E2DDD5", paddingTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
            {legalSubLinks.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: ff.sans,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#9B9B9B",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <sub.Icon size={11} color="#C9A84C" />
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
```

## app\contact\page.tsx
```tsx
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const S = {
  serif: {
    fontFamily: "var(--font-cormorant), 'Poppins', sans-serif",
  },
  sans: {
    fontFamily: "var(--font-jost), 'Poppins', sans-serif",
  },
  label: {
    fontFamily: "var(--font-jost), 'Poppins', sans-serif",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "4px",
    textTransform: "uppercase" as const,
    color: "#C9A84C",
  },
  goldLine: {
    width: "48px",
    height: "2px",
    background: "linear-gradient(to right, #9B7A2E, #C9A84C)",
  },
  gray: {
    color: "#6B6B6B",
  },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  background: "#F5F4F1",
  border: "1px solid #E2DDD5",
  fontFamily: "var(--font-jost), 'Poppins', sans-serif",
  fontSize: "13px",
  color: "#2D2D2D",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const { contactTranslations: c } = useCms();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailTo = "contact@lti.company";
    const emailSubject = form.subject || "General Enquiry";

    const emailBody = `
Full Name: ${form.name}
Company: ${form.company || "-"}
Email: ${form.email}
Phone: ${form.phone || "-"}

Subject: ${form.subject}

Message:
${form.message}
`;

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: "340px",
          display: "flex",
          alignItems: "flex-end",
          background: "linear-gradient(135deg, #1A2744 0%, #2C3E6B 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "48px",
                background: "#C9A84C",
              }}
            />
            <span style={S.label}>{c.hero_label[lang]}</span>
          </div>

          <h1
            style={{
              ...S.serif,
              fontWeight: 300,
              color: "#FFFFFF",
              fontSize: "clamp(42px, 5vw, 72px)",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              ...S.sans,
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "12px",
              maxWidth: "500px",
              lineHeight: 1.75,
            }}
          >
            {c.hero_sub[lang]}
          </p>
        </div>
      </section>

      <section className="section-pad page-container">
        <div className="grid-2-bias">
          {/* Contact Info */}
          <div>
            <span style={S.label}>{c.offices_label[lang]}</span>

            <h2
              style={{
                ...S.serif,
                fontWeight: 300,
                color: "#1A2744",
                fontSize: "clamp(24px,3vw,38px)",
                margin: "12px 0 32px",
              }}
            >
              {c.offices_title[lang]}
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                {
                  Icon: MapPin,
                  label: c.address_label[lang],
                  content: c.address_value[lang],
                },
                {
                  Icon: Phone,
                  label: c.phone_label[lang],
                  content: c.phone_value[lang],
                },
                {
                  Icon: Mail,
                  label: c.email_label[lang],
                  content: "contact@lti.company",
                },
                {
                  Icon: Clock,
                  label: c.hours_label[lang],
                  content: c.hours_value[lang],
                },
              ].map(({ Icon, label, content }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    border: "1px solid #E2DDD5",
                    padding: "18px 20px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#1A2744",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={14} color="#C9A84C" />
                  </div>

                  <div>
                    <div style={{ ...S.label, marginBottom: "6px" }}>
                      {label}
                    </div>
                    <div
                      style={{
                        ...S.sans,
                        fontSize: "12px",
                        ...S.gray,
                        lineHeight: 1.8,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <span style={S.label}>{c.form_label[lang]}</span>

            <h2
              style={{
                ...S.serif,
                fontWeight: 300,
                color: "#1A2744",
                fontSize: "clamp(24px,3vw,38px)",
                margin: "12px 0 32px",
              }}
            >
              {c.form_title[lang]}
            </h2>

            {submitted ? (
              <div
                style={{
                  border: "1px solid #C9A84C",
                  padding: "64px 40px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#1A2744",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Send size={22} color="#C9A84C" />
                </div>

                <h3
                  style={{
                    ...S.serif,
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#1A2744",
                    marginBottom: "12px",
                  }}
                >
                  {c.sent_title[lang]}
                </h3>

                <p
                  style={{
                    ...S.sans,
                    fontSize: "13px",
                    ...S.gray,
                    lineHeight: 1.8,
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  {c.sent_sub[lang]}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  {[
                    {
                      label: "Full Name *",
                      key: "name",
                      placeholder: "Budi Santoso",
                      required: true,
                    },
                    {
                      label: "Company",
                      key: "company",
                      placeholder: "PT Indonesia Group",
                      required: false,
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          ...S.sans,
                          fontSize: "9px",
                          fontWeight: 500,
                          letterSpacing: "2px",
                          textTransform: "uppercase" as const,
                          color: "#6B6B6B",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        {f.label}
                      </label>

                      <input
                        required={f.required}
                        placeholder={f.placeholder}
                        style={inputStyle}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="form-grid-2">
                  <div>
                    <label
                      style={{
                        ...S.sans,
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "2px",
                        textTransform: "uppercase" as const,
                        color: "#6B6B6B",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Email Address *
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="budi@company.co.id"
                      style={inputStyle}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        ...S.sans,
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "2px",
                        textTransform: "uppercase" as const,
                        color: "#6B6B6B",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Phone Number
                    </label>

                    <input
                      placeholder="+62 812 3456 7890"
                      style={inputStyle}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      ...S.sans,
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase" as const,
                      color: "#6B6B6B",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Subject *
                  </label>

                  <select
                    required
                    style={inputStyle}
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select a subject…
                    </option>
                    <option>Industrial Robotics & Automation</option>
                    <option>Healthcare Equipment</option>
                    <option>Software Development</option>
                    <option>System Integration</option>
                    <option>Technical Support & Maintenance</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      ...S.sans,
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase" as const,
                      color: "#6B6B6B",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Message *
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder="Describe your requirements in detail…"
                    style={{
                      ...inputStyle,
                      resize: "none",
                    }}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-solid-navy"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 36px",
                    ...S.sans,
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {c.submit_btn[lang]} <Send size={13} />
                </button>

                <p
                  style={{
                    ...S.sans,
                    fontSize: "11px",
                    color: "#BBBBB0",
                    marginTop: "12px",
                  }}
                >
                  * Required fields. Your information is kept strictly
                  confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ borderTop: "1px solid #E2DDD5" }}>
        <div style={{ height: "420px", position: "relative" }}>
          <iframe
            src="https://www.google.com/maps?q=Dewadaru%20Residence&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(20%) contrast(1.05)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PT Lestari Teknologi Inovasi - Dewadaru Residence"
          />

          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              background: "#FFFFFF",
              border: "1px solid #E2DDD5",
              padding: "16px 20px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "6px",
              }}
            >
              <MapPin size={12} color="#C9A84C" />
              <span style={S.label}>Head Office</span>
            </div>

            <div
              style={{
                ...S.serif,
                fontSize: "15px",
                fontWeight: 600,
                color: "#1A2744",
              }}
            >
              PT Lestari Teknologi Inovasi
            </div>

            <div
              style={{
                ...S.sans,
                fontSize: "12px",
                color: "#6B6B6B",
                marginTop: "2px",
              }}
            >
              Dewadaru Residence
            </div>

            <a
              href="https://maps.app.goo.gl/6NAqmwba1h3p48NG7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                ...S.sans,
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#1A2744",
                textDecoration: "none",
              }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## app\context\CmsContext.tsx
```tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { t as defaultTranslations } from "../translations";
import { supabase } from "@/lib/supabase";

type HomeTranslations      = typeof defaultTranslations.home;
type AboutTranslations     = typeof defaultTranslations.about;
type ServicesTranslations  = typeof defaultTranslations.services;
type RoboticsTranslations  = typeof defaultTranslations.robotics;
type BiomedicTranslations  = typeof defaultTranslations.biomedic;
type SoftwareTranslations  = typeof defaultTranslations.software;
type PortfolioTranslations = typeof defaultTranslations.portfolio;
type ContactTranslations   = typeof defaultTranslations.contact;
type PrivacyTranslations   = typeof defaultTranslations.privacy;
type TermsTranslations     = typeof defaultTranslations.terms;
type NavTranslations       = typeof defaultTranslations.nav;
type FooterTranslations    = typeof defaultTranslations.footer;

type AnyPageKey = "home" | "about" | "services" | "robotics" | "biomedic" | "software" | "portfolio" | "contact" | "privacy" | "terms" | "nav" | "footer";

interface CmsContextType {
  isLoggedIn: boolean;
  login: (password: string) => Promise<boolean>;
  loginWithOAuth: (provider: "github" | "google") => Promise<boolean>;
  logout: () => void;
  isCmsMode: boolean;
  setIsCmsMode: (val: boolean) => void;

  // Per-page translation state
  homeTranslations:      HomeTranslations;
  aboutTranslations:     AboutTranslations;
  servicesTranslations:  ServicesTranslations;
  roboticsTranslations:  RoboticsTranslations;
  biomedicTranslations:  BiomedicTranslations;
  softwareTranslations:  SoftwareTranslations;
  portfolioTranslations: PortfolioTranslations;
  contactTranslations:   ContactTranslations;
  privacyTranslations:   PrivacyTranslations;
  termsTranslations:     TermsTranslations;
  navTranslations:       NavTranslations;
  footerTranslations:    FooterTranslations;

  // Generic field updater
  updateField: (page: AnyPageKey, key: string, lang: "id" | "en", value: string) => void;
  // Legacy alias for home page (keeps existing code working)
  updateHomeField: (key: keyof HomeTranslations, lang: "id" | "en", value: string) => void;

  publishChanges: () => Promise<boolean>;
  resetDefaults: () => Promise<boolean>;
  activeEditKey: string | null;
  setActiveEditKey: (key: string | null) => void;
  isSaving: boolean;
}

const CmsContext = createContext<CmsContextType | null>(null);

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCmsMode, setIsCmsMode] = useState(false);
  const [activeEditKey, setActiveEditKey] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Per-page translation states
  const [homeTranslations,      setHomeTranslations]      = useState<HomeTranslations>(defaultTranslations.home);
  const [aboutTranslations,     setAboutTranslations]     = useState<AboutTranslations>(defaultTranslations.about);
  const [servicesTranslations,  setServicesTranslations]  = useState<ServicesTranslations>(defaultTranslations.services);
  const [roboticsTranslations,  setRoboticsTranslations]  = useState<RoboticsTranslations>(defaultTranslations.robotics);
  const [biomedicTranslations,  setBiomedicTranslations]  = useState<BiomedicTranslations>(defaultTranslations.biomedic);
  const [softwareTranslations,  setSoftwareTranslations]  = useState<SoftwareTranslations>(defaultTranslations.software);
  const [portfolioTranslations, setPortfolioTranslations] = useState<PortfolioTranslations>(defaultTranslations.portfolio);
  const [contactTranslations,   setContactTranslations]   = useState<ContactTranslations>(defaultTranslations.contact);
  const [privacyTranslations,   setPrivacyTranslations]   = useState<PrivacyTranslations>(defaultTranslations.privacy);
  const [termsTranslations,     setTermsTranslations]     = useState<TermsTranslations>(defaultTranslations.terms);
  const [navTranslations,       setNavTranslations]       = useState<NavTranslations>(defaultTranslations.nav);
  const [footerTranslations,    setFooterTranslations]    = useState<FooterTranslations>(defaultTranslations.footer);

  const setterMap: Record<AnyPageKey, React.Dispatch<React.SetStateAction<any>>> = {
    home:      setHomeTranslations,
    about:     setAboutTranslations,
    services:  setServicesTranslations,
    robotics:  setRoboticsTranslations,
    biomedic:  setBiomedicTranslations,
    software:  setSoftwareTranslations,
    portfolio: setPortfolioTranslations,
    contact:   setContactTranslations,
    privacy:   setPrivacyTranslations,
    terms:     setTermsTranslations,
    nav:       setNavTranslations,
    footer:    setFooterTranslations,
  };

  // Load overrides from server + localStorage on mount & listen to auth
  useEffect(() => {
    // 1. Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsLoggedIn(true);
      } else {
        const loggedIn = localStorage.getItem("lti-cms-logged-in") === "true";
        if (loggedIn) setIsLoggedIn(true);
      }
    });

    // 2. Listen to Auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setIsLoggedIn(true);
        localStorage.setItem("lti-cms-logged-in", "true");
      } else {
        const passwordLoggedIn = localStorage.getItem("lti-cms-logged-in") === "true";
        if (!passwordLoggedIn) {
          setIsLoggedIn(false);
        }
      }
    });

    const applyOverrides = (overrides: Record<string, any>) => {
      (Object.keys(setterMap) as AnyPageKey[]).forEach((page) => {
        if (overrides[page]) {
          setterMap[page]((prev: any) => ({ ...prev, ...overrides[page] }));
        }
      });
    };

    const loadTranslations = async () => {
      try {
        const localOverrides = localStorage.getItem("lti-cms-overrides");
        if (localOverrides) {
          applyOverrides(JSON.parse(localOverrides));
        }

        const res = await fetch("/api/save-translations");
        if (res.ok) {
          const serverOverrides = await res.json();
          applyOverrides(serverOverrides);
          localStorage.setItem("lti-cms-overrides", JSON.stringify(serverOverrides));
        }
      } catch (err) {
        console.error("Failed to load translation overrides:", err);
      }
    };

    loadTranslations();

    return () => {
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (password: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/cms-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setIsLoggedIn(true);
        localStorage.setItem("lti-cms-logged-in", "true");
        localStorage.setItem("lti-cms-password", password);
        return true;
      }
      return false;
    } catch (err) {
      console.error("CMS login failed:", err);
      return false;
    }
  };

  const loginWithOAuth = async (provider: "github" | "google"): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/admin`,
        },
      });
      if (error) throw error;
      return true;
    } catch (err) {
      console.error(`OAuth login failed with provider ${provider}:`, err);
      return false;
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setIsCmsMode(false);
    localStorage.removeItem("lti-cms-logged-in");
    localStorage.removeItem("lti-cms-password");
    await supabase.auth.signOut();
  };

  // Generic field updater — works for any page
  const updateField = (page: AnyPageKey, key: string, lang: "id" | "en", value: string) => {
    setterMap[page]((prev: any) => {
      const fieldData = prev[key];
      if (typeof fieldData === "object" && fieldData !== null && !Array.isArray(fieldData)) {
        return { ...prev, [key]: { ...fieldData, [lang]: value } };
      }
      return prev;
    });
  };

  // Legacy alias — keeps existing home page admin code working without changes
  const updateHomeField = (key: keyof HomeTranslations, lang: "id" | "en", value: string) => {
    updateField("home", key as string, lang, value);
  };

  const publishChanges = async (): Promise<boolean> => {
    setIsSaving(true);
    try {
      const overrides = {
        home:      homeTranslations,
        about:     aboutTranslations,
        services:  servicesTranslations,
        robotics:  roboticsTranslations,
        biomedic:  biomedicTranslations,
        software:  softwareTranslations,
        portfolio: portfolioTranslations,
        contact:   contactTranslations,
        privacy:   privacyTranslations,
        terms:     termsTranslations,
        nav:       navTranslations,
        footer:    footerTranslations,
      };

      localStorage.setItem("lti-cms-overrides", JSON.stringify(overrides));

      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      const localPassword = localStorage.getItem("lti-cms-password");

      const res = await fetch("/api/save-translations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {}),
          ...(localPassword ? { "X-CMS-Password-Fallback": localPassword } : {})
        },
        body: JSON.stringify(overrides),
      });

      setIsSaving(false);
      return res.ok;
    } catch (err) {
      console.error("Failed to publish changes:", err);
      setIsSaving(false);
      return false;
    }
  };

  const resetDefaults = async (): Promise<boolean> => {
    setIsSaving(true);
    try {
      localStorage.removeItem("lti-cms-overrides");
      setHomeTranslations(defaultTranslations.home);
      setAboutTranslations(defaultTranslations.about);
      setServicesTranslations(defaultTranslations.services);
      setRoboticsTranslations(defaultTranslations.robotics);
      setBiomedicTranslations(defaultTranslations.biomedic);
      setSoftwareTranslations(defaultTranslations.software);
      setPortfolioTranslations(defaultTranslations.portfolio);
      setContactTranslations(defaultTranslations.contact);
      setPrivacyTranslations(defaultTranslations.privacy);
      setTermsTranslations(defaultTranslations.terms);
      setNavTranslations(defaultTranslations.nav);
      setFooterTranslations(defaultTranslations.footer);

      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      const localPassword = localStorage.getItem("lti-cms-password");

      const res = await fetch("/api/save-translations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {}),
          ...(localPassword ? { "X-CMS-Password-Fallback": localPassword } : {})
        },
        body: JSON.stringify({}),
      });

      setIsSaving(false);
      return res.ok;
    } catch (err) {
      console.error("Failed to reset defaults:", err);
      setIsSaving(false);
      return false;
    }
  };

  return (
    <CmsContext.Provider
      value={{
        isLoggedIn,
        login,
        loginWithOAuth,
        logout,
        isCmsMode,
        setIsCmsMode,
        homeTranslations,
        aboutTranslations,
        servicesTranslations,
        roboticsTranslations,
        biomedicTranslations,
        softwareTranslations,
        portfolioTranslations,
        contactTranslations,
        privacyTranslations,
        termsTranslations,
        navTranslations,
        footerTranslations,
        updateField,
        updateHomeField,
        publishChanges,
        resetDefaults,
        activeEditKey,
        setActiveEditKey,
        isSaving,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
}

export function useCms() {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error("useCms must be used within a CmsProvider");
  }
  return context;
}

```

## app\context\LanguageContext.tsx
```tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "id" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("lti-lang") as Lang | null;
    if (stored === "id" || stored === "en") setLang(stored);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "id" ? "en" : "id";
      localStorage.setItem("lti-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

```

## app\portfolio\page.tsx
```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const { portfolioTranslations: p } = useCms();

  const projects = [
    {
      cat: "Software",
      client: "Yayasan Ahmad",
      cp: "CP: Dimas",
      year: "2026",
      accent: "#1A2744",
      title: p.p1_title[lang],
      desc: p.p1_desc[lang],
      tags: p.p1_tags[lang],
      result: p.p1_result[lang],
    },
    {
      cat: "Software",
      client: "Yayasan Panam",
      cp: "CP: Farhan Zamril",
      year: "2026",
      accent: "#2C3E6B",
      title: p.p2_title[lang],
      desc: p.p2_desc[lang],
      tags: p.p2_tags[lang],
      result: p.p2_result[lang],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 400, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{p.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.1, marginBottom: 16 }}>
            {p.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.62)", lineHeight: 1.8, maxWidth: 560 }}>
            {p.hero_sub[lang]}
          </p>
        </div>
      </section>

      {/* STATS */}
      <div style={{ borderBottom: "1px solid #E2DDD5" }}>
        <div className="page-container grid-stats">
          {[
            { num: "2",    lbl: p.stat_done[lang] },
            { num: "100%", lbl: p.stat_satisfy[lang] },
            { num: "2026", lbl: p.stat_year[lang] },
          ].map((s, i) => (
            <div key={i} style={{ padding: "36px 0", textAlign: "center", borderRight: i < 2 ? "1px solid #E2DDD5" : "none" }}>
              <div style={{ fontFamily: ff.serif, fontSize: 40, fontWeight: 600, color: "#C9A84C" }}>{s.num}</div>
              <div style={{ ...lbl, color: "#6B6B6B", marginTop: 6 }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section className="section-pad">
        <div className="page-container">
          <div style={{ marginBottom: 40 }}>
            <span style={lbl}>{p.selected[lang]}</span>
          </div>

          <div className="grid-proj">
            {projects.map((proj, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid #E2DDD5", background: "#FFFFFF" }}>
                <div style={{ height: 4, background: `linear-gradient(to right,${proj.accent},#C9A84C)` }} />
                <div style={{ padding: "36px 36px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 12 }}>
                    <div>
                      <span style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase", color: "#C9A84C", border: "1px solid #E8D5A3", padding: "3px 10px", display: "inline-block", marginBottom: 8 }}>
                        {proj.cat}
                      </span>
                      <div style={{ fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#6B6B6B" }}>
                        {proj.client}
                      </div>
                      <div style={{ fontFamily: ff.sans, fontSize: 11, color: "#C9A84C", marginTop: 3 }}>
                        {proj.cp}
                      </div>
                    </div>
                    <span style={{ fontFamily: ff.sans, fontSize: 12, color: "#AAAAAA", fontWeight: 500, whiteSpace: "nowrap" }}>{proj.year}</span>
                  </div>

                  <h3 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", lineHeight: 1.3, marginBottom: 16 }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85, flex: 1, marginBottom: 20 }}>
                    {proj.desc}
                  </p>

                  <div style={{ background: "#F5F4F1", borderLeft: "3px solid #C9A84C", padding: "12px 16px", marginBottom: 20 }}>
                    <div style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", marginBottom: 4 }}>{p.result_label[lang]}</div>
                    <div style={{ fontFamily: ff.sans, fontSize: 12, color: "#2D2D2D", fontWeight: 500 }}>{proj.result}</div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {(proj.tags as string[]).map((tag: string) => (
                      <span key={tag} style={{ fontFamily: ff.sans, fontSize: 9, letterSpacing: 0.5, padding: "3px 8px", background: "#F5F4F1", color: "#6B6B6B" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, border: "1px dashed #E2DDD5", padding: "48px 36px", textAlign: "center" }}>
            <div style={{ fontFamily: ff.serif, fontSize: 20, color: "#C9A84C", marginBottom: 8 }}>{p.next_title[lang]}</div>
            <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#AAAAAA", lineHeight: 1.7 }}>
              {p.next_sub[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm" style={{ background: "#F5F4F1", borderTop: "1px solid #E2DDD5" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3.5vw,46px)", marginBottom: 14 }}>
            {p.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 32 }}>
            {p.cta_sub[lang]}
          </p>
          <Link href="/contact" className="btn-solid-navy" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
            {p.cta_btn[lang]} <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
```

## app\privacy-policy\page.tsx
```tsx
"use client";

import { Shield, Lock, Eye, Bell, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const { privacyTranslations: p } = useCms();

  const sections = [
    { Icon: Eye,      title: p.s1_title[lang], content: p.s1[lang] },
    { Icon: Lock,     title: p.s2_title[lang], content: p.s2[lang] },
    { Icon: Shield,   title: p.s3_title[lang], content: p.s3[lang] },
    { Icon: Bell,     title: p.s4_title[lang], content: p.s4[lang] },
    { Icon: RefreshCw,title: p.s5_title[lang], content: p.s5[lang] },
    { Icon: Mail,     title: p.s6_title[lang], content: p.s6[lang] },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 340, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{p.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.1 }}>
            {p.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 14, maxWidth: 520, lineHeight: 1.75 }}>
            {p.updated[lang]}: 1 Mei 2026 &nbsp;·&nbsp; PT. Lestari Teknologi Inovasi
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad-sm">
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ border: "1px solid #E2DDD5", padding: "36px 40px", background: "#FDFBF7", position: "relative" }}>
            <div style={{ ...goldLine, marginBottom: 20 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.9 }}>
              {p.intro[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {sections.map(({ Icon, title, content }, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", padding: "36px 40px", position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: 28, background: "#FEFEFE", padding: "0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={13} color="#C9A84C" />
                  <span style={lbl}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", marginBottom: 20 }}>
                  {title}
                </h2>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {(content as string[]).map((item: string, j: number) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85 }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div style={{ marginTop: 48, background: "linear-gradient(135deg,#1A2744,#2C3E6B)", padding: "40px", textAlign: "center" }}>
            <div style={{ ...goldLine, margin: "0 auto 20px" }} />
            <h3 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#FFFFFF", marginBottom: 12 }}>
              {p.contact_title[lang]}
            </h3>
            <p style={{ fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.75 }}>
              {p.contact_sub[lang]}
            </p>
            <a
              href="mailto:contact@lti.company"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", background: "#C9A84C", color: "#1A2744",
                fontFamily: ff.sans, fontSize: 11, fontWeight: 600,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
              }}
            >
              <Mail size={14} />
              contact@lti.company
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## app\services\biomedic\page.tsx
```tsx
"use client";

import Link from "next/link";
import {
  HeartPulse, Activity, Cog, Wrench, ArrowLeft,
  CheckCircle2, Shield, Wifi, Layers, AlertTriangle,
  CreditCard,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useCms } from "../../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: 4,
  textTransform: "uppercase",
  color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
  margin: "16px 0 0",
};

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function BiomedicPage() {
  const { lang } = useLanguage();
  const { biomedicTranslations: b } = useCms();

  const services = [
    {
      Icon: Activity,
      title: b.svc1_title[lang],
      fullDesc: b.svc1_desc[lang],
      specs: b.svc1_specs[lang],
    },
    {
      Icon: Cog,
      title: b.svc2_title[lang],
      fullDesc: b.svc2_desc[lang],
      specs: b.svc2_specs[lang],
    },
    {
      Icon: Wrench,
      title: b.svc3_title[lang],
      fullDesc: b.svc3_desc[lang],
      specs: b.svc3_specs[lang],
    },
  ];

  const advantages = [
    { Icon: Shield,        title: b.adv1_title[lang], desc: b.adv1_desc[lang] },
    { Icon: Wifi,          title: b.adv2_title[lang], desc: b.adv2_desc[lang] },
    { Icon: Layers,        title: b.adv3_title[lang], desc: b.adv3_desc[lang] },
    { Icon: AlertTriangle, title: b.adv4_title[lang], desc: b.adv4_desc[lang] },
  ];

  const catalogue = [
    {
      Icon: Activity,
      tag: b.cat1_tag[lang],
      name: b.svc1_title[lang],
      desc: b.cat1_desc[lang],
      highlights: b.cat1_highlights[lang],
      wa: b.cat1_wa[lang],
      payText: b.cat1_pay[lang],
    },
    {
      Icon: Cog,
      tag: b.cat2_tag[lang],
      name: b.svc2_title[lang],
      desc: b.cat2_desc[lang],
      highlights: b.cat2_highlights[lang],
      wa: b.cat2_wa[lang],
      payText: b.cat2_pay[lang],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: 520, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#111D38 0%,#1A2744 55%,#22305A 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <HeartPulse size={440} color="#C9A84C" style={{ position: "absolute", right: -60, bottom: -80, opacity: 0.04, pointerEvents: "none" }} />

        <div className="hero-inner page-container" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/services" className="breadcrumb-link-hover" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: ff.sans, fontSize: 11, letterSpacing: 1.5, textDecoration: "none", marginBottom: 32, textTransform: "uppercase" }}>
            <ArrowLeft size={12} /> {b.breadcrumb[lang]}
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{b.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,76px)", lineHeight: 1.05, marginBottom: 20 }}>
            Hardware Monitoring
            <br />& {lang === "id" ? "Deteksi" : "Detection"}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, maxWidth: 560, marginBottom: 40 }}>
            {b.hero_sub[lang]}
          </p>
          <a href="#services" className="tab-link-gold" style={{ display: "inline-block", padding: "14px 36px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
            {b.hero_cta[lang]}
          </a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{b.section_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {b.section_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-1-1">
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "36px 32px", border: "1px solid #E2DDD5", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svc.Icon size={20} color="#C9A84C" />
                </div>
                <div>
                  <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8 }}>{svc.fullDesc}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 8, borderTop: "1px solid #E2DDD5", marginTop: "auto" }}>
                  {(svc.specs as string[]).map((spec: string, j: number) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <CheckCircle2 size={12} color="#C9A84C" />
                      <span style={{ fontFamily: ff.sans, fontSize: 11, color: "#555" }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOGUE ── */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{b.catalogue_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {b.catalogue_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-3">
            {catalogue.map((item, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ height: 3, background: "linear-gradient(to right,#9B7A2E,#C9A84C)" }} />
                <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <item.Icon size={20} color="#C9A84C" />
                    </div>
                    <span style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", border: "1px solid #E2DDD5", padding: "4px 10px" }}>
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{item.name}</h3>
                    <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 14, borderTop: "1px solid #E2DDD5" }}>
                    {(item.highlights as string[]).map((h: string, j: number) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <CheckCircle2 size={12} color="#C9A84C" />
                        <span style={{ fontFamily: ff.sans, fontSize: 11, color: "#555" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                    <a
                      href={`https://wa.me/6281180891901?text=${encodeURIComponent(item.wa)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-navy"
                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 10px", textDecoration: "none", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}
                    >
                      {WA_ICON}
                      {b.wa_btn[lang]}
                    </a>
                    <a
                      href={`https://wa.me/6281180891901?text=${encodeURIComponent(item.payText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-gold"
                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 10px", textDecoration: "none", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}
                    >
                      <CreditCard size={13} />
                      {b.pay_btn[lang]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LTI ── */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div className="grid-2-asym" style={{ marginBottom: 52 }}>
            <div>
              <span style={lbl}>{b.why_label[lang]}</span>
              <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15, margin: "10px 0 0" }}>
                {b.why_title[lang]}
              </h2>
              <div style={goldLine} />
            </div>
            <p style={{ fontFamily: ff.sans, fontSize: 15, color: "#6B6B6B", lineHeight: 1.85, paddingTop: 8 }}>
              {b.why_sub[lang]}
            </p>
          </div>
          <div className="grid-4">
            {advantages.map((adv, i) => (
              <div key={i} style={{ padding: "28px 24px", background: "#FEFEFE", border: "1px solid #E2DDD5" }}>
                <div style={{ width: 40, height: 40, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <adv.Icon size={17} color="#C9A84C" />
                </div>
                <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{adv.title}</h4>
                <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad-sm" style={{ background: "#1A2744" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 16 }}>
            {b.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
            {b.cta_sub[lang]}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/contact" className="btn-solid-gold" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {b.cta_btn1[lang]}
            </Link>
            <Link href="/services" className="btn-outline-light" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {b.cta_btn2[lang]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## app\services\robotics\page.tsx
```tsx
"use client";

import Link from "next/link";
import { Bot, Cpu, Wrench, ArrowLeft, CheckCircle2, Activity, Layers, Zap, Shield, CreditCard } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useCms } from "../../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: 4,
  textTransform: "uppercase",
  color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
  margin: "16px 0 0",
};

const WA_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function RoboticsPage() {
  const { lang } = useLanguage();
  const { roboticsTranslations: r } = useCms();

  const services = [
    {
      Icon: Cpu,
      title: r.svc1_title[lang],
      fullDesc: r.svc1_desc[lang],
      specs: r.svc1_specs[lang],
    },
  ];

  const advantages = [
    { Icon: Zap,      title: r.adv1_title[lang], desc: r.adv1_desc[lang] },
    { Icon: Layers,   title: r.adv2_title[lang], desc: r.adv2_desc[lang] },
    { Icon: Shield,   title: r.adv3_title[lang], desc: r.adv3_desc[lang] },
    { Icon: Activity, title: r.adv4_title[lang], desc: r.adv4_desc[lang] },
  ];

  const catalogue = [
    {
      Icon: Wrench,
      tag: r.cat1_tag[lang],
      name: r.cat1_name[lang],
      desc: r.cat1_desc[lang],
      highlights: r.cat1_highlights[lang],
      wa: r.cat1_wa[lang],
      payText: r.cat1_pay[lang],
    },
    {
      Icon: Wrench,
      tag: r.cat2_tag[lang],
      name: r.cat2_name[lang],
      desc: r.cat2_desc[lang],
      highlights: r.cat2_highlights[lang],
      wa: r.cat2_wa[lang],
      payText: r.cat2_pay[lang],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: 520, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#111D38 0%,#1A2744 55%,#22305A 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <Bot size={420} color="#C9A84C" style={{ position: "absolute", right: -40, bottom: -60, opacity: 0.04, pointerEvents: "none" }} />

        <div className="hero-inner page-container" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/services" className="breadcrumb-link-hover" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: ff.sans, fontSize: 11, letterSpacing: 1.5, textDecoration: "none", marginBottom: 32, textTransform: "uppercase" }}>
            <ArrowLeft size={12} /> {r.breadcrumb[lang]}
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{r.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,76px)", lineHeight: 1.05, marginBottom: 20 }}>
            {r.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, maxWidth: 560, marginBottom: 40 }}>
            {r.hero_sub[lang]}
          </p>
          <a href="#services" className="tab-link-gold" style={{ display: "inline-block", padding: "14px 36px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
            {r.hero_cta[lang]}
          </a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{r.section_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {r.section_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-1-1">
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "36px 32px", border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svc.Icon size={20} color="#C9A84C" />
                </div>
                <div>
                  <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8 }}>{svc.fullDesc}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 8, borderTop: "1px solid #E2DDD5", marginTop: "auto" }}>
                  {(svc.specs as string[]).map((spec: string, j: number) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <CheckCircle2 size={12} color="#C9A84C" />
                      <span style={{ fontFamily: ff.sans, fontSize: 11, color: "#555" }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOGUE ── */}
      <section className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{r.catalogue_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {r.catalogue_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-4" style={{ gap: 24 }}>
            {catalogue.map((item, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ height: 3, background: "linear-gradient(to right,#9B7A2E,#C9A84C)" }} />
                <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <item.Icon size={20} color="#C9A84C" />
                    </div>
                    <span style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", border: "1px solid #E2DDD5", padding: "4px 10px" }}>
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: ff.serif, fontSize: 18, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{item.name}</h3>
                    <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 14, borderTop: "1px solid #E2DDD5" }}>
                    {(item.highlights as string[]).map((h: string, j: number) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <CheckCircle2 size={11} color="#C9A84C" />
                        <span style={{ fontFamily: ff.sans, fontSize: 10, color: "#555" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                    <a
                      href={`https://wa.me/6281180891901?text=${encodeURIComponent(item.wa)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-navy"
                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 8px", textDecoration: "none", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}
                    >
                      {WA_ICON}
                      {r.wa_btn[lang]}
                    </a>
                    <a
                      href={`https://wa.me/6281180891901?text=${encodeURIComponent(item.payText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-gold"
                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 8px", textDecoration: "none", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}
                    >
                      <CreditCard size={13} />
                      {r.pay_btn[lang]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LTI ── */}
      <section className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div className="grid-2-asym" style={{ marginBottom: 52 }}>
            <div>
              <span style={lbl}>{r.why_label[lang]}</span>
              <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15, margin: "10px 0 0" }}>
                {r.why_title[lang]}
              </h2>
              <div style={goldLine} />
            </div>
            <p style={{ fontFamily: ff.sans, fontSize: 15, color: "#6B6B6B", lineHeight: 1.85, paddingTop: 8 }}>
              {r.why_sub[lang]}
            </p>
          </div>
          <div className="grid-4">
            {advantages.map((adv, i) => (
              <div key={i} style={{ padding: "28px 24px", background: "#FFFFFF", border: "1px solid #E2DDD5" }}>
                <div style={{ width: 40, height: 40, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <adv.Icon size={17} color="#C9A84C" />
                </div>
                <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{adv.title}</h4>
                <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad-sm" style={{ background: "#1A2744" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 16 }}>
            {r.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
            {r.cta_sub[lang]}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/contact" className="btn-solid-gold" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {r.cta_btn1[lang]}
            </Link>
            <Link href="/services" className="btn-outline-light" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {r.cta_btn2[lang]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## app\services\software\page.tsx
```tsx
"use client";

import Link from "next/link";
import {
  Code2, Database, Smartphone, ArrowLeft,
  CheckCircle2, GitMerge, RefreshCw, Lock, BarChart2,
  CreditCard,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useCms } from "../../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: 4,
  textTransform: "uppercase",
  color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
  margin: "16px 0 0",
};

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function SoftwarePage() {
  const { lang } = useLanguage();
  const { softwareTranslations: s } = useCms();

  const services = [
    { Icon: Database,   title: s.svc1_title[lang], fullDesc: s.svc1_desc[lang], specs: s.svc1_specs[lang] },
    { Icon: Smartphone, title: s.svc2_title[lang], fullDesc: s.svc2_desc[lang], specs: s.svc2_specs[lang] },
    { Icon: Code2,      title: s.svc3_title[lang], fullDesc: s.svc3_desc[lang], specs: s.svc3_specs[lang] },
  ];

  const advantages = [
    { Icon: GitMerge,  title: s.adv1_title[lang], desc: s.adv1_desc[lang] },
    { Icon: RefreshCw, title: s.adv2_title[lang], desc: s.adv2_desc[lang] },
    { Icon: Lock,      title: s.adv3_title[lang], desc: s.adv3_desc[lang] },
    { Icon: BarChart2, title: s.adv4_title[lang], desc: s.adv4_desc[lang] },
  ];

  const catalogue = [
    { Icon: Code2, tag: s.cat1_tag[lang], name: s.cat1_name[lang], desc: s.cat1_desc[lang], highlights: s.cat1_highlights[lang], wa: s.cat1_wa[lang], payText: s.cat1_pay[lang] },
    { Icon: Code2, tag: s.cat2_tag[lang], name: s.cat2_name[lang], desc: s.cat2_desc[lang], highlights: s.cat2_highlights[lang], wa: s.cat2_wa[lang], payText: s.cat2_pay[lang] },
    { Icon: Code2, tag: s.cat3_tag[lang], name: s.cat3_name[lang], desc: s.cat3_desc[lang], highlights: s.cat3_highlights[lang], wa: s.cat3_wa[lang], payText: s.cat3_pay[lang] },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: 520, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#111D38 0%,#1A2744 55%,#22305A 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <Code2 size={440} color="#C9A84C" style={{ position: "absolute", right: -60, bottom: -80, opacity: 0.04, pointerEvents: "none" }} />

        <div className="hero-inner page-container" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/services" className="breadcrumb-link-hover" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: ff.sans, fontSize: 11, letterSpacing: 1.5, textDecoration: "none", marginBottom: 32, textTransform: "uppercase" }}>
            <ArrowLeft size={12} /> {s.breadcrumb[lang]}
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{s.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,76px)", lineHeight: 1.05, marginBottom: 20 }}>
            Software Enterprise
            <br />& Monitoring
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, maxWidth: 560, marginBottom: 40 }}>
            {s.hero_sub[lang]}
          </p>
          <a href="#services" className="tab-link-gold" style={{ display: "inline-block", padding: "14px 36px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
            {s.hero_cta[lang]}
          </a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{s.section_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {s.section_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-3">
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "36px 32px", border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svc.Icon size={20} color="#C9A84C" />
                </div>
                <div>
                  <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8 }}>{svc.fullDesc}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 8, borderTop: "1px solid #E2DDD5", marginTop: "auto" }}>
                  {(svc.specs as string[]).map((spec: string, j: number) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <CheckCircle2 size={12} color="#C9A84C" />
                      <span style={{ fontFamily: ff.sans, fontSize: 11, color: "#555" }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOGUE ── */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{s.catalogue_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {s.catalogue_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-3">
            {catalogue.map((item, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ height: 3, background: "linear-gradient(to right,#9B7A2E,#C9A84C)" }} />
                <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <item.Icon size={20} color="#C9A84C" />
                    </div>
                    <span style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", border: "1px solid #E2DDD5", padding: "4px 10px" }}>
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{item.name}</h3>
                    <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 14, borderTop: "1px solid #E2DDD5" }}>
                    {(item.highlights as string[]).map((h: string, j: number) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <CheckCircle2 size={12} color="#C9A84C" />
                        <span style={{ fontFamily: ff.sans, fontSize: 11, color: "#555" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                    <a
                      href={`https://wa.me/6281180891901?text=${encodeURIComponent(item.wa)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-navy"
                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 10px", textDecoration: "none", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}
                    >
                      {WA_ICON}
                      {s.wa_btn[lang]}
                    </a>
                    <a
                      href={`https://wa.me/6281180891901?text=${encodeURIComponent(item.payText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-gold"
                      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 10px", textDecoration: "none", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}
                    >
                      <CreditCard size={13} />
                      {s.pay_btn[lang]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LTI ── */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div className="grid-2-asym" style={{ marginBottom: 52 }}>
            <div>
              <span style={lbl}>{s.why_label[lang]}</span>
              <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15, margin: "10px 0 0" }}>
                {s.why_title[lang]}
              </h2>
              <div style={goldLine} />
            </div>
            <p style={{ fontFamily: ff.sans, fontSize: 15, color: "#6B6B6B", lineHeight: 1.85, paddingTop: 8 }}>
              {s.why_sub[lang]}
            </p>
          </div>
          <div className="grid-4">
            {advantages.map((adv, i) => (
              <div key={i} style={{ padding: "28px 24px", background: "#FEFEFE", border: "1px solid #E2DDD5" }}>
                <div style={{ width: 40, height: 40, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <adv.Icon size={17} color="#C9A84C" />
                </div>
                <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{adv.title}</h4>
                <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad-sm" style={{ background: "#1A2744" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 16 }}>
            {s.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
            {s.cta_sub[lang]}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/contact" className="btn-solid-gold" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {s.cta_btn1[lang]}
            </Link>
            <Link href="/services" className="btn-outline-light" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {s.cta_btn2[lang]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## app\services\page.tsx
```tsx
"use client";

import Link from "next/link";
import { Bot, Cpu, Cog, Wrench, Activity, HeartPulse, Code2, Database, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)", margin: "16px 0 0",
};

export default function ServicesPage() {
  const { lang } = useLanguage();
  const { servicesTranslations: s } = useCms();

  const cats = [
    {
      id: "robotics",
      label: s.cat_robotics_label[lang],
      Icon: Bot,
      headline: s.cat_robotics_headline[lang],
      intro: s.cat_robotics_intro[lang],
      bg: "#FFFFFF",
      svcs: [
        { Icon: Cpu,   title: s.svc_robot_assembly_title[lang],    desc: s.svc_robot_assembly_desc[lang] },
        { Icon: Cog,   title: s.svc_robot_material_title[lang],    desc: s.svc_robot_material_desc[lang] },
        { Icon: Wrench,title: s.svc_robot_welding_title[lang],     desc: s.svc_robot_welding_desc[lang] },
        { Icon: Bot,   title: s.svc_robot_integration_title[lang], desc: s.svc_robot_integration_desc[lang] },
      ],
    },
    {
      id: "biomedic",
      label: s.cat_biomedic_label[lang],
      Icon: HeartPulse,
      headline: s.cat_biomedic_headline[lang],
      intro: s.cat_biomedic_intro[lang],
      bg: "#F5F4F1",
      svcs: [
        { Icon: Activity,   title: s.svc_bio_fetal_title[lang],  desc: s.svc_bio_fetal_desc[lang] },
        { Icon: HeartPulse, title: s.svc_bio_vital_title[lang],  desc: s.svc_bio_vital_desc[lang] },
        { Icon: Cog,        title: s.svc_bio_drowsy_title[lang], desc: s.svc_bio_drowsy_desc[lang] },
        { Icon: Wrench,     title: s.svc_bio_calib_title[lang],  desc: s.svc_bio_calib_desc[lang] },
      ],
    },
    {
      id: "software",
      label: s.cat_software_label[lang],
      Icon: Code2,
      headline: s.cat_software_headline[lang],
      intro: s.cat_software_intro[lang],
      bg: "#FFFFFF",
      svcs: [
        { Icon: Database,   title: s.svc_sw_finance_title[lang],    desc: s.svc_sw_finance_desc[lang] },
        { Icon: Smartphone, title: s.svc_sw_monitoring_title[lang], desc: s.svc_sw_monitoring_desc[lang] },
        { Icon: Code2,      title: s.svc_sw_custom_title[lang],     desc: s.svc_sw_custom_desc[lang] },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 400, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{s.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,72px)", lineHeight: 1.1, marginBottom: 16 }}>
            {s.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.62)", lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
            {s.hero_sub[lang]}
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {cats.map(c => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="tab-link-gold"
                style={{
                  display: "inline-block",
                  padding: "10px 22px",
                  fontFamily: ff.sans,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {cats.map((cat) => (
        <section key={cat.id} id={cat.id} className="section-pad" style={{ background: cat.bg }}>
          <div className="page-container">
            <div className="grid-2-asym" style={{ marginBottom: 12 }}>
              <div>
                <div style={{ width: 64, height: 64, border: "1px solid #E2DDD5", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <cat.Icon size={30} color="#C9A84C" />
                </div>
                <div style={lbl}>{cat.label}</div>
                <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15, margin: "10px 0 0" }}>
                  {cat.headline}
                </h2>
                <div style={goldLine} />
              </div>
              <div style={{ paddingTop: 8 }}>
                <p style={{ fontFamily: ff.sans, fontSize: 15, color: "#6B6B6B", lineHeight: 1.85 }}>{cat.intro}</p>
              </div>
            </div>

            {/* Button row */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
              <Link
                href={`/services/${cat.id}`}
                className="btn-outline-dark"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 28px",
                  textDecoration: "none",
                  fontFamily: ff.sans,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                }}
              >
                {s.more_btn[lang]}
                <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
              </Link>
            </div>

            <div className="grid-3" style={{ gap: 20 }}>
              {cat.svcs.map((svc, i) => (
                <div key={i} style={{ padding: "32px 28px", background: "#FFFFFF", border: "1px solid #E2DDD5" }}>
                  <div style={{ width: 40, height: 40, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <svc.Icon size={18} color="#C9A84C" />
                  </div>
                  <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{svc.title}</h4>
                  <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#1A2744" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 16 }}>
            {s.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
            {s.cta_sub[lang]}
          </p>
          <Link
            href="/contact"
            className="btn-solid-gold"
            style={{
              display: "inline-block",
              padding: "15px 40px",
              textDecoration: "none",
              fontFamily: ff.sans,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            {s.cta_btn[lang]}
          </Link>
        </div>
      </section>
    </div>
  );
}
```

## app\terms-of-service\page.tsx
```tsx
"use client";

import { FileText, Users, AlertTriangle, Ban, Scale, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

export default function TermsOfServicePage() {
  const { lang } = useLanguage();
  const { termsTranslations: terms } = useCms();

  const sections = [
    { Icon: Users,         title: terms.s1_title[lang], content: terms.s1[lang] },
    { Icon: FileText,      title: terms.s2_title[lang], content: terms.s2[lang] },
    { Icon: Scale,         title: terms.s3_title[lang], content: terms.s3[lang] },
    { Icon: AlertTriangle, title: terms.s4_title[lang], content: terms.s4[lang] },
    { Icon: Ban,           title: terms.s5_title[lang], content: terms.s5[lang] },
    { Icon: RefreshCw,     title: terms.s6_title[lang], content: terms.s6[lang] },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 340, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{terms.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.1 }}>
            {terms.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 14, maxWidth: 520, lineHeight: 1.75 }}>
            {terms.updated[lang]}: 1 Mei 2026 &nbsp;·&nbsp; PT. Lestari Teknologi Inovasi
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad-sm">
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ border: "1px solid #E2DDD5", padding: "36px 40px", background: "#FDFBF7", position: "relative" }}>
            <div style={{ ...goldLine, marginBottom: 20 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.9 }}>
              {terms.intro[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {sections.map(({ Icon, title, content }, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", padding: "36px 40px", position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: 28, background: "#FEFEFE", padding: "0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={13} color="#C9A84C" />
                  <span style={lbl}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", marginBottom: 20 }}>
                  {title}
                </h2>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {(content as string[]).map((item: string, j: number) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85 }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div style={{ marginTop: 48, background: "linear-gradient(135deg,#1A2744,#2C3E6B)", padding: "40px", textAlign: "center" }}>
            <div style={{ ...goldLine, margin: "0 auto 20px" }} />
            <h3 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#FFFFFF", marginBottom: 12 }}>
              {terms.contact_title[lang]}
            </h3>
            <p style={{ fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.75 }}>
              {terms.contact_sub[lang]}
            </p>
            <a
              href="mailto:contact@lti.company"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", background: "#C9A84C", color: "#1A2744",
                fontFamily: ff.sans, fontSize: 11, fontWeight: 600,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
              }}
            >
              <Mail size={14} />
              contact@lti.company
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## app\translations\index.ts
```ts
import overrides from "./overrides.json";

function mergeDeep(target: any, source: any): any {
  if (!source) return target;
  const output = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      if (key in target) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    } else {
      output[key] = source[key];
    }
  }
  return output;
}

const baseT = {
  // ── NAVBAR ──────────────────────────────────────────────────────────────
  nav: {
    home:      { id: "Home",        en: "Home" },
    about:     { id: "About Us",    en: "About Us" },
    services:  { id: "Services",    en: "Services" },
    portfolio: { id: "Portfolio",   en: "Portfolio" },
    contact:   { id: "Contact",     en: "Contact" },
    legal:     { id: "Legal",       en: "Legal" },
    cta:       { id: "Get in Touch",en: "Get in Touch" },
    biomedic:  { id: "Biomedik",    en: "Biomedic" },
    biomedic_desc: {
      id: "Perangkat monitoring & biomedis canggih.",
      en: "Advanced health monitoring & biomedical devices.",
    },
    robotics: { id: "Robotika",     en: "Robotics" },
    robotics_desc: {
      id: "Arm robot industri & sistem otomasi.",
      en: "Industrial robotic arms & automation systems.",
    },
    software: { id: "Software",     en: "Software" },
    software_desc: {
      id: "Sistem manajemen & software terintegrasi.",
      en: "Custom management systems & integrated software.",
    },
    allServices: { id: "Semua Layanan →", en: "All Services →" },
    privacyPolicy: { id: "Kebijakan Privasi", en: "Privacy Policy" },
    privacyPolicy_desc: {
      id: "Cara kami mengumpulkan dan melindungi data Anda.",
      en: "How we collect and protect your data.",
    },
    termsOfService: { id: "Syarat Layanan", en: "Terms of Service" },
    termsOfService_desc: {
      id: "Aturan dan panduan penggunaan layanan kami.",
      en: "Rules and guidelines for using our services.",
    },
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────
  footer: {
    tagline: {
      id: "Pelopor inovasi melalui robotika canggih, solusi kesehatan presisi, dan perangkat lunak enterprise.",
      en: "Pioneering innovation through advanced robotics, precision healthcare solutions, and enterprise-grade software.",
    },
    quickLinks:  { id: "Tautan Cepat",    en: "Quick Links" },
    ourSolutions:{ id: "Solusi Kami",      en: "Our Solutions" },
    contact:     { id: "Kontak",           en: "Contact" },
    copyright: {
      id: "Hak Cipta Dilindungi.",
      en: "All Rights Reserved.",
    },
    privacyPolicy:  { id: "Kebijakan Privasi", en: "Privacy Policy" },
    termsOfService: { id: "Syarat Layanan",     en: "Terms of Service" },
  },

  // ── CONTACT ──────────────────────────────────────────────────────────────
  contact: {
    hero_label:  { id: "Hubungi Kami",   en: "Get in Touch" },
    hero_title:  { id: "Contact Us",     en: "Contact Us" },
    hero_sub: {
      id: "Kami menyambut pertanyaan dari bisnis yang ingin meningkatkan operasional mereka.",
      en: "We welcome inquiries from businesses seeking to elevate their operations.",
    },
    offices_label: { id: "Kantor Kami",      en: "Our Offices" },
    offices_title: { id: "Hubungi Tim Kami", en: "Reach Our Team" },
    form_label:    { id: "Formulir Pertanyaan", en: "Enquiry Form" },
    form_title:    { id: "Kirim Pesan",         en: "Send Us a Message" },
    address_label: { id: "Kantor Pusat — Bandung", en: "Head Office — Bandung" },
    address_value: { id: "Dewadaru Residence",      en: "Dewadaru Residence" },
    phone_label:   { id: "Telepon",                 en: "Telephone" },
    phone_value:   { id: "+62 811-8089-1901 (WhatsApp)", en: "+62 811-8089-1901 (WhatsApp)" },
    email_label:   { id: "Email",                  en: "Email" },
    hours_label:   { id: "Jam Operasional",        en: "Business Hours" },
    hours_value: {
      id: "Senin – Jumat: 08:00 – 17:00 WIB\nSabtu: 09:00 – 13:00 WIB",
      en: "Monday – Friday: 08:00 – 17:00 WIB\nSaturday: 09:00 – 13:00 WIB",
    },
    submit_btn:    { id: "Kirim Pertanyaan",       en: "Submit Enquiry" },
    sent_title:    { id: "Pesan Siap Dikirim",     en: "Message Ready to Send" },
    sent_sub: {
      id: "Aplikasi email Anda telah dibuka dengan pesan yang ditujukan ke contact@lti.company.",
      en: "Your email application has been opened with the message addressed to contact@lti.company.",
    },
  },

  // ── HOMEPAGE ────────────────────────────────────────────────────────────
  home: {
    hero_label: {
      id: "Inovasi · Presisi · Keunggulan",
      en: "Innovation · Precision · Excellence",
    },
    hero_title1: {
      id: "Teknologi untuk",
      en: "Technology for",
    },
    hero_em:    { id: "Indonesia", en: "Indonesia" },
    hero_title2:{ id: "yang Lebih Maju.", en: "Moving Forward." },
    hero_sub: {
      id: "PT. Lestari Teknologi Inovasi menghadirkan solusi robotika industri, perangkat biomedis, dan perangkat lunak enterprise yang dirancang untuk kebutuhan nyata dunia usaha Indonesia. NIB: 0705260048529.",
      en: "PT. Lestari Teknologi Inovasi delivers industrial robotics, biomedical devices, and enterprise software solutions designed for the real needs of Indonesian businesses. NIB: 0705260048529.",
    },
    hero_cta1: { id: "Lihat Layanan",  en: "View Services" },
    hero_cta2: { id: "Hubungi Kami",   en: "Contact Us" },
    stat_founded: { id: "Tahun Berdiri",    en: "Year Founded" },
    stat_products: { id: "Produk Unggulan", en: "Flagship Products" },
    stat_clients:  { id: "Klien Aktif",     en: "Active Clients" },
    stat_quality:  { id: "Komitmen Kualitas",en: "Quality Commitment" },
    overview_label:{ id: "Tentang PT. LTI", en: "About PT. LTI" },
    overview_title1:{ id: "Lahir dari Semangat", en: "Born from a Spirit of" },
    overview_em:   { id: "Inovasi", en: "Innovation" },
    overview_title2: { id: "Lokal", en: "Local" },
    overview_p1: {
      id: "PT. Lestari Teknologi Inovasi berdiri pada 1 Mei 2026 dengan satu misi: menghadirkan teknologi berkualitas tinggi yang relevan, terjangkau, dan berdampak nyata bagi pelaku usaha dan institusi di Indonesia.",
      en: "PT. Lestari Teknologi Inovasi was founded on May 1, 2026 with one mission: to deliver high-quality technology that is relevant, affordable, and truly impactful for businesses and institutions across Indonesia.",
    },
    overview_p2: {
      id: "Kami membangun tiga lini solusi—robotika, biomedis, dan perangkat lunak—dengan tim yang berpengalaman dan berkomitmen terhadap kepuasan klien jangka panjang.",
      en: "We build three solution lines—robotics, biomedics, and software—with an experienced team committed to long-term client satisfaction.",
    },
    overview_cta: { id: "Selengkapnya", en: "Learn More" },
    overview_card_tagline: {
      id: "Berkomitmen menghadirkan teknologi inovatif yang berdampak nyata.",
      en: "Committed to delivering impactful innovative technology.",
    },
    services_label: { id: "Yang Kami Tawarkan", en: "What We Offer" },
    services_title: { id: "Solusi Utama Kami",   en: "Our Core Solutions" },
    svc_robotics_title: { id: "Robotika Industri", en: "Industrial Robotics" },
    svc_robotics_desc: {
      id: "Arm robot presisi tinggi untuk otomasi lini produksi, perakitan, dan proses manufaktur kompleks yang membutuhkan akurasi konsisten.",
      en: "High-precision robotic arms for production line automation, assembly, and complex manufacturing processes requiring consistent accuracy.",
    },
    svc_biomedic_title: { id: "Perangkat Biomedis", en: "Biomedical Devices" },
    svc_biomedic_desc: {
      id: "Hardware monitoring detak jantung janin untuk ibu hamil dan sistem deteksi kantuk berbasis sensor fisiologis untuk keselamatan pengemudi.",
      en: "Fetal heart rate monitoring hardware for pregnant mothers and drowsiness detection systems based on physiological sensors for driver safety.",
    },
    svc_software_title: { id: "Perangkat Lunak", en: "Software" },
    svc_software_desc: {
      id: "Sistem keuangan untuk yayasan MBG dan software monitoring janin yang terintegrasi dengan perangkat biomedis kami.",
      en: "Financial systems for MBG foundations and fetal monitoring software integrated with our biomedical devices.",
    },
    svc_more: { id: "Selengkapnya", en: "Learn More" },
    testi_label: { id: "Klien Kami",     en: "Our Clients" },
    testi_title: { id: "Dipercaya Sejak Awal", en: "Trusted From Day One" },
    cta_title1: { id: "Siap Bertransformasi Bersama", en: "Ready to Transform with" },
    cta_em:     { id: "PT. LTI",        en: "PT. LTI" },
    cta_title2: { id: "?",              en: "?" },
    cta_sub: {
      id: "Konsultasi awal bersama tim kami tidak dipungut biaya. Mari diskusikan kebutuhan bisnis Anda.",
      en: "An initial consultation with our team is free of charge. Let's discuss your business needs.",
    },
    cta_btn1: { id: "Jadwalkan Konsultasi", en: "Schedule a Consultation" },
    cta_btn2: { id: "Lihat Portofolio",     en: "View Portfolio" },
  },

  // ── ABOUT ───────────────────────────────────────────────────────────────
  about: {
    hero_label: { id: "Tentang Kami", en: "About Us" },
    hero_title: {
      id: "PT. Lestari Teknologi Inovasi",
      en: "PT. Lestari Teknologi Inovasi",
    },
    hero_sub: {
      id: "Perusahaan teknologi yang lahir dari komitmen untuk menghadirkan inovasi berdampak nyata bagi Indonesia.",
      en: "A technology company born from a commitment to deliver impactful innovation for Indonesia.",
    },
    vision_label: { id: "Visi Kami",   en: "Our Vision" },
    vision_title: { id: "Teknologi Lokal, Dampak Global", en: "Local Technology, Global Impact" },
    vision_body: {
      id: "Menjadi perusahaan teknologi Indonesia yang paling dipercaya—menghadirkan solusi robotika, biomedis, dan perangkat lunak yang memberdayakan industri dan meningkatkan kualitas hidup masyarakat.",
      en: "To become Indonesia's most trusted technology company—delivering robotics, biomedical, and software solutions that empower industries and improve people's quality of life.",
    },
    mission_label: { id: "Misi Kami",  en: "Our Mission" },
    mission_title: { id: "Berinovasi dengan Integritas", en: "Innovate with Integrity" },
    mission_points: {
      id: [
        "Menghadirkan produk berkualitas tinggi yang relevan dengan kebutuhan lokal",
        "Membangun kemitraan jangka panjang berdasarkan kepercayaan dan transparansi",
        "Terus berinvestasi dalam riset, teknologi, dan pengembangan tim",
        "Memberikan dampak positif bagi komunitas dan ekosistem bisnis Indonesia",
      ],
      en: [
        "Delivering high-quality products relevant to local needs",
        "Building long-term partnerships based on trust and transparency",
        "Continuously investing in research, technology, and team development",
        "Creating a positive impact for communities and Indonesia's business ecosystem",
      ],
    },
    val_integrity:  { id: "Integritas",  en: "Integrity" },
    val_integrity_desc: {
      id: "Kejujuran dan transparansi dalam setiap komitmen.",
      en: "Honesty and transparency in every commitment.",
    },
    val_excellence: { id: "Keunggulan", en: "Excellence" },
    val_excellence_desc: {
      id: "Standar tertinggi dalam setiap produk yang kami hadirkan.",
      en: "The highest standards in every product we deliver.",
    },
    val_partnership:{ id: "Kemitraan",  en: "Partnership" },
    val_partnership_desc: {
      id: "Hubungan yang melampaui sekadar transaksi bisnis.",
      en: "Relationships that go beyond mere business transactions.",
    },
    val_innovation: { id: "Inovasi",    en: "Innovation" },
    val_innovation_desc: {
      id: "Selalu berkembang, selalu relevan, selalu terdepan.",
      en: "Always evolving, always relevant, always ahead.",
    },
    timeline_label: { id: "Perjalanan Kami", en: "Our Journey" },
    timeline_title: { id: "Dari Gagasan Menuju Kenyataan", en: "From Vision to Reality" },
    milestones: {
      id: [
        { year: "2025", event: "Ide dan konsep PT. LTI mulai dirumuskan oleh para pendiri dengan fokus pada tiga lini: robotika, biomedis, dan perangkat lunak." },
        { year: "01/05/2026", event: "PT. Lestari Teknologi Inovasi resmi berdiri dan mulai beroperasi dari Bandung, Jawa Barat, Indonesia." },
        { year: "2026", event: "Menyelesaikan dua proyek perdana: sistem keuangan untuk Yayasan Ahmad dan Yayasan Panam. Produk biomedis memasuki fase pengembangan aktif." },
      ],
      en: [
        { year: "2025", event: "The concept and idea of PT. LTI began to be formulated by the founders, focusing on three lines: robotics, biomedics, and software." },
        { year: "01/05/2026", event: "PT. Lestari Teknologi Inovasi was officially established and began operating from Bandung, West Java, Indonesia." },
        { year: "2026", event: "Completed two inaugural projects: a financial system for Yayasan Ahmad and Yayasan Panam. Biomedical products entered active development phase." },
      ],
    },
    team_title: { id: "Owner", en: "Owner" },
    ceo_desc: {
      id: "Pemimpin visioner yang mengarahkan strategi dan pertumbuhan PT. LTI sejak hari pertama berdiri.",
      en: "A visionary leader who has directed the strategy and growth of PT. LTI since its very first day.",
    },
  },

  // ── SERVICES (main page) ─────────────────────────────────────────────────
  services: {
    hero_label:  { id: "Layanan Kami",    en: "Our Services" },
    hero_title:  { id: "Solusi & Layanan",en: "Solutions & Services" },
    hero_sub: {
      id: "Tiga divisi spesialis. Satu komitmen terhadap keunggulan dan dampak nyata.",
      en: "Three specialist divisions. One commitment to excellence and real impact.",
    },
    cat_robotics_label:   { id: "Robotika Industri",  en: "Industrial Robotics" },
    cat_robotics_headline:{ id: "Arm Robot Industri", en: "Industrial Robot Arms" },
    cat_robotics_intro: {
      id: "Kami merancang dan mengintegrasikan arm robot presisi tinggi untuk kebutuhan otomasi manufaktur, perakitan, dan penanganan material. Solusi kami dioptimalkan untuk meningkatkan efisiensi lini produksi secara signifikan.",
      en: "We design and integrate high-precision robotic arms for manufacturing automation, assembly, and material handling. Our solutions are optimized to significantly improve production line efficiency.",
    },
    cat_biomedic_label:   { id: "Perangkat Biomedis",            en: "Biomedical Devices" },
    cat_biomedic_headline:{ id: "Hardware Monitoring & Deteksi", en: "Monitoring & Detection Hardware" },
    cat_biomedic_intro: {
      id: "Dua produk biomedis utama PT. LTI dirancang untuk menjawab kebutuhan kritis: keselamatan ibu hamil melalui monitoring janin, dan keselamatan pengemudi melalui deteksi kantuk berbasis sensor fisiologis.",
      en: "PT. LTI's two core biomedical products address critical needs: maternal safety through fetal monitoring, and driver safety through physiological sensor-based drowsiness detection.",
    },
    cat_software_label:   { id: "Perangkat Lunak",                   en: "Software" },
    cat_software_headline:{ id: "Software Enterprise & Monitoring",  en: "Enterprise Software & Monitoring" },
    cat_software_intro: {
      id: "Tim software PT. LTI mengembangkan solusi digital yang terintegrasi erat dengan kebutuhan operasional klien—mulai dari manajemen keuangan yayasan hingga platform monitoring kesehatan yang terhubung dengan perangkat biomedis kami.",
      en: "PT. LTI's software team develops digital solutions closely integrated with clients' operational needs—from foundation financial management to health monitoring platforms connected to our biomedical devices.",
    },
    svc_robot_assembly_title: { id: "Arm Robot Perakitan", en: "Assembly Robot Arms" },
    svc_robot_assembly_desc: {
      id: "Robot lengan presisi untuk lini perakitan produk elektronik, otomotif, dan barang konsumsi. Akurasi tinggi, kecepatan konsisten.",
      en: "Precision robotic arms for electronics, automotive, and consumer goods assembly lines. High accuracy, consistent speed.",
    },
    svc_robot_material_title: { id: "Arm Robot Penanganan Material", en: "Material Handling Robot Arms" },
    svc_robot_material_desc: {
      id: "Sistem pemindahan dan penyortiran material otomatis menggunakan arm robot yang terintegrasi dengan conveyor dan sistem gudang.",
      en: "Automated material transfer and sorting systems using robotic arms integrated with conveyors and warehouse systems.",
    },
    svc_robot_welding_title: { id: "Arm Robot Las & Fabrikasi", en: "Welding & Fabrication Robot Arms" },
    svc_robot_welding_desc: {
      id: "Arm robot untuk pengelasan, pemotongan, dan fabrikasi logam dengan keseragaman hasil yang tidak bisa dicapai secara manual.",
      en: "Robotic arms for welding, cutting, and metal fabrication with consistency unachievable manually.",
    },
    svc_robot_integration_title: { id: "Integrasi & Pemeliharaan", en: "Integration & Maintenance" },
    svc_robot_integration_desc: {
      id: "Layanan instalasi, commissioning, pelatihan operator, dan kontrak pemeliharaan preventif untuk memastikan uptime maksimal.",
      en: "Installation, commissioning, operator training, and preventive maintenance contracts to ensure maximum uptime.",
    },
    svc_bio_fetal_title: { id: "Monitoring Detak Jantung Janin", en: "Fetal Heart Rate Monitoring" },
    svc_bio_fetal_desc: {
      id: "Perangkat hardware portabel untuk memantau detak jantung janin secara real-time. Dirancang untuk kemudahan penggunaan di klinik maupun rumah.",
      en: "Portable hardware device to monitor fetal heart rate in real-time. Designed for ease of use in clinics and at home.",
    },
    svc_bio_vital_title: { id: "Deteksi Sinyal Vital Ibu Hamil", en: "Maternal Vital Signs Detection" },
    svc_bio_vital_desc: {
      id: "Sensor yang merekam parameter fisiologis ibu hamil secara bersamaan dengan data janin, memberikan gambaran komprehensif kondisi kehamilan.",
      en: "Sensors recording maternal physiological parameters simultaneously with fetal data, providing a comprehensive view of pregnancy condition.",
    },
    svc_bio_drowsy_title: { id: "Deteksi Kantuk Pengemudi", en: "Driver Drowsiness Detection" },
    svc_bio_drowsy_desc: {
      id: "Hardware berbasis sensor fisiologis yang mendeteksi tanda-tanda kantuk pada pengemudi dan memberikan peringatan dini untuk mencegah kecelakaan.",
      en: "Physiological sensor-based hardware that detects signs of driver drowsiness and provides early warnings to prevent accidents.",
    },
    svc_bio_calib_title: { id: "Integrasi & Kalibrasi", en: "Integration & Calibration" },
    svc_bio_calib_desc: {
      id: "Layanan integrasi perangkat biomedis dengan sistem informasi klinis, kalibrasi berkala, dan dukungan teknis purna jual.",
      en: "Integration of biomedical devices with clinical information systems, periodic calibration, and after-sales technical support.",
    },
    svc_sw_finance_title: { id: "Sistem Keuangan Yayasan MBG", en: "MBG Foundation Financial System" },
    svc_sw_finance_desc: {
      id: "Platform manajemen keuangan yang dirancang khusus untuk kebutuhan yayasan Makan Bergizi Gratis: pencatatan transaksi, laporan keuangan, dan audit trail yang transparan.",
      en: "A financial management platform designed specifically for the Makan Bergizi Gratis foundation: transaction records, financial reports, and transparent audit trails.",
    },
    svc_sw_monitoring_title: { id: "Software Monitoring Janin", en: "Fetal Monitoring Software" },
    svc_sw_monitoring_desc: {
      id: "Aplikasi yang terintegrasi dengan hardware monitoring janin PT. LTI—menampilkan data real-time, riwayat rekaman, dan notifikasi kondisi kritis kepada tenaga medis.",
      en: "Application integrated with PT. LTI's fetal monitoring hardware—displaying real-time data, recording history, and critical condition notifications to medical personnel.",
    },
    svc_sw_custom_title: { id: "Pengembangan Aplikasi Custom", en: "Custom App Development" },
    svc_sw_custom_desc: {
      id: "Pengembangan web dan mobile application sesuai kebutuhan spesifik klien, dengan arsitektur yang skalabel dan antarmuka yang intuitif.",
      en: "Web and mobile application development tailored to client-specific needs, with scalable architecture and an intuitive interface.",
    },
    more_btn:    { id: "Selengkapnya", en: "Learn More" },
    cta_title: {
      id: "Belum Yakin Solusi Mana yang Tepat?",
      en: "Not Sure Which Solution is Right?",
    },
    cta_sub: {
      id: "Tim konsultan kami siap membantu mengidentifikasi kebutuhan dan merekomendasikan solusi terbaik—tanpa biaya.",
      en: "Our consultant team is ready to help identify your needs and recommend the best solution—at no cost.",
    },
    cta_btn: { id: "Konsultasi Gratis", en: "Free Consultation" },
  },

  // ── SERVICES — BIOMEDIC ──────────────────────────────────────────────────
  biomedic: {
    breadcrumb:   { id: "Layanan Kami",         en: "Our Services" },
    hero_label:   { id: "Perangkat Biomedis",   en: "Biomedical Devices" },
    hero_title:   { id: "Hardware Monitoring\n& Deteksi", en: "Monitoring & Detection\nHardware" },
    hero_sub: {
      id: "Dua produk biomedis utama PT. LTI dirancang untuk menjawab kebutuhan kritis: keselamatan ibu hamil melalui monitoring janin, dan keselamatan pengemudi melalui deteksi kantuk berbasis sensor fisiologis.",
      en: "PT. LTI's two core biomedical products address critical needs: maternal safety through fetal monitoring, and driver safety through physiological sensor-based drowsiness detection.",
    },
    hero_cta:     { id: "Lihat Layanan",        en: "View Services" },
    section_label:{ id: "Produk & Layanan",     en: "Products & Services" },
    section_title:{ id: "Solusi Biomedis Kami", en: "Our Biomedical Solutions" },
    svc1_title:   { id: "NuVia",                en: "NuVia" },
    svc1_desc: {
      id: "Perangkat monitoring janin berbasis teknologi CTG (Cardiotocography) yang dirancang untuk memantau detak jantung janin secara real-time dengan tingkat akurasi tinggi. Cocok digunakan di rumah sakit, klinik bersalin, maupun layanan pemeriksaan mobile.",
      en: "A fetal monitoring device based on CTG (Cardiotocography) technology designed to monitor fetal heart rate in real-time with high accuracy. Suitable for use in hospitals, maternity clinics, or mobile examination services.",
    },
    svc1_specs: {
      id: ["Real-time CTG monitoring","Portabel & mudah digunakan","Daya tahan baterai hingga 8 jam","Tampilan data ramah tenaga medis"],
      en: ["Real-time CTG monitoring","Portable & easy to use","Battery life up to 8 hours","Medical staff-friendly display"],
    },
    svc2_title:   { id: "Aleron",               en: "Aleron" },
    svc2_desc: {
      id: "Perangkat keselamatan berbasis sensor fisiologis dan computer vision yang dirancang untuk mendeteksi tanda-tanda kelelahan dan kantuk pengemudi secara dini. Sistem akan memberikan peringatan audio dan visual secara otomatis guna membantu mengurangi risiko kecelakaan akibat microsleep.",
      en: "A safety device based on physiological sensors and computer vision designed to detect early signs of driver fatigue and drowsiness. The system automatically issues audio and visual warnings to help reduce the risk of microsleep accidents.",
    },
    svc2_specs: {
      id: ["Sensor EEG & kamera infra merah","Respon deteksi kurang dari 2 detik","Peringatan audio-visual otomatis","Penyimpanan log perjalanan"],
      en: ["EEG sensor & infrared camera","Detection response under 2 seconds","Automatic audio-visual warning","Journey log storage"],
    },
    svc3_title: {
      id: "Integrasi, Kalibrasi & Dukungan Teknis",
      en: "Integration, Calibration & Technical Support",
    },
    svc3_desc: {
      id: "Layanan profesional untuk integrasi perangkat biomedis dengan sistem rumah sakit dan klinik seperti EMR/HIS, termasuk kalibrasi berkala, pengujian performa perangkat, serta dukungan teknis purna jual oleh tim teknisi bersertifikasi.",
      en: "Professional services for integrating biomedical devices with hospital and clinic systems such as EMR/HIS, including periodic calibration, device performance testing, and after-sales technical support by a certified technician team.",
    },
    svc3_specs: {
      id: ["Integrasi EMR / HIS","Kalibrasi & maintenance berkala","Dukungan teknis purna jual","Sesuai standar & regulasi Kemenkes"],
      en: ["EMR / HIS Integration","Periodic calibration & maintenance","After-sales technical support","Compliant with Ministry of Health standards"],
    },
    catalogue_label: { id: "Katalog Produk",     en: "Product Catalogue" },
    catalogue_title: { id: "Produk Biomedis Kami",en: "Our Biomedical Products" },
    cat1_tag:  { id: "Monitoring",   en: "Monitoring" },
    cat1_desc: {
      id: "Perangkat hardware portabel untuk memantau detak jantung janin secara real-time. Dirancang untuk kemudahan penggunaan di klinik maupun rumah, dengan output data yang akurat dan mudah dibaca tenaga medis.",
      en: "Portable hardware device for real-time fetal heart rate monitoring. Designed for ease of use in clinics and at home, with accurate and easy-to-read data output for medical staff.",
    },
    cat1_highlights: {
      id: ["Real-time CTG output","Portabel & ringan","Baterai 8 jam","Antarmuka tenaga medis"],
      en: ["Real-time CTG output","Portable & lightweight","8-hour battery","Medical staff interface"],
    },
    cat1_wa: {
      id: "Halo PT. LTI, saya tertarik dengan produk Monitoring Detak Jantung Janin. Boleh saya tahu lebih lanjut?",
      en: "Hello PT. LTI, I am interested in the Fetal Heart Rate Monitoring product. May I learn more?",
    },
    cat2_tag:  { id: "Keselamatan", en: "Safety" },
    cat2_desc: {
      id: "Hardware berbasis sensor fisiologis (EEG, kamera IR, dan akelerometer) yang mendeteksi tanda-tanda kantuk pada pengemudi secara dini dan memberikan peringatan audio-visual sebelum kecelakaan terjadi.",
      en: "Physiological sensor-based hardware (EEG, IR camera, and accelerometer) that detects early signs of driver drowsiness and issues audio-visual warnings before accidents occur.",
    },
    cat2_highlights: {
      id: ["EEG + kamera IR","Latensi deteksi <2 detik","Peringatan audio-visual","Log perjalanan onboard"],
      en: ["EEG + IR camera","Detection latency <2 seconds","Audio-visual warning","Onboard journey log"],
    },
    cat2_wa: {
      id: "Halo PT. LTI, saya tertarik dengan produk Deteksi Kantuk Pengemudi. Boleh saya tahu lebih lanjut?",
      en: "Hello PT. LTI, I am interested in the Driver Drowsiness Detection product. May I learn more?",
    },
    cat1_pay: {
      id: "Halo PT. LTI, saya ingin melakukan pembayaran untuk produk NuVia (Monitoring Detak Jantung Janin). Bagaimana prosedur pembayarannya?",
      en: "Hello PT. LTI, I would like to make a payment for the NuVia (Fetal Heart Rate Monitoring) product. What is the payment procedure?",
    },
    cat2_pay: {
      id: "Halo PT. LTI, saya ingin melakukan pembayaran untuk produk Aleron (Deteksi Kantuk Pengemudi). Bagaimana prosedur pembayarannya?",
      en: "Hello PT. LTI, I would like to make a payment for the Aleron (Driver Drowsiness Detection) product. What is the payment procedure?",
    },
    wa_btn: { id: "Konsultasi via WA", en: "Consult via WA" },
    pay_btn: { id: "Pembayaran", en: "Payment" },
    why_label: { id: "Keunggulan Kami",      en: "Our Advantages" },
    why_title: { id: "Mengapa Memilih PT. LTI?", en: "Why Choose PT. LTI?" },
    why_sub: {
      id: "Perangkat biomedis PT. LTI bukan sekadar alat ukur—melainkan sistem deteksi cerdas yang dirancang bersama tenaga medis. Setiap fitur lahir dari kebutuhan nyata di lapangan, bukan asumsi dari meja desain.",
      en: "PT. LTI's biomedical devices are not merely measuring tools—they are intelligent detection systems designed together with medical professionals. Every feature emerges from real field needs, not assumptions from a design desk.",
    },
    adv1_title: { id: "Keamanan Klinis",    en: "Clinical Safety" },
    adv1_desc: {
      id: "Setiap perangkat dirancang memenuhi standar keamanan medis internasional dan regulasi Kemenkes RI—keselamatan pasien adalah prioritas utama.",
      en: "Every device is designed to meet international medical safety standards and Indonesian Ministry of Health regulations—patient safety is the top priority.",
    },
    adv2_title: { id: "Konektivitas Terpadu", en: "Integrated Connectivity" },
    adv2_desc: {
      id: "Data dari perangkat kami dapat langsung tersinkron ke platform cloud atau sistem EMR klinis Anda melalui koneksi aman terenkripsi.",
      en: "Data from our devices can sync directly to your cloud platform or clinical EMR system via a secure encrypted connection.",
    },
    adv3_title: { id: "Ekosistem Terintegrasi", en: "Integrated Ecosystem" },
    adv3_desc: {
      id: "Hardware monitoring janin bekerja beriringan dengan software monitoring janin PT. LTI—satu ekosistem, satu vendor, nol gesekan integrasi.",
      en: "Fetal monitoring hardware works seamlessly with PT. LTI's fetal monitoring software—one ecosystem, one vendor, zero integration friction.",
    },
    adv4_title: { id: "Peringatan Dini Cerdas", en: "Smart Early Warning" },
    adv4_desc: {
      id: "Algoritma deteksi anomali memberikan alert otomatis kepada tenaga medis sebelum kondisi berkembang menjadi darurat—intervensi lebih cepat, risiko lebih rendah.",
      en: "Anomaly detection algorithms automatically alert medical staff before a condition escalates to an emergency—faster intervention, lower risk.",
    },
    cta_title: { id: "Konsultasi Langsung Dengan Kami", en: "Consult Directly With Us" },
    cta_sub: {
      id: "Ceritakan kebutuhan Anda—tim kami akan membantu anda dengan solusi yang tepat, efisien, dan terjangkau tanpa biaya konsultasi awal.",
      en: "Tell us your needs—our team will help you find the right, efficient, and affordable solution with no initial consultation fee.",
    },
    cta_btn1: { id: "Konsultasi Gratis",  en: "Free Consultation" },
    cta_btn2: { id: "Layanan Lainnya",    en: "Other Services" },
  },

  // ── SERVICES — ROBOTICS ──────────────────────────────────────────────────
  robotics: {
    breadcrumb:    { id: "Layanan Kami",        en: "Our Services" },
    hero_label:    { id: "Robotika Industri",   en: "Industrial Robotics" },
    hero_title:    { id: "Arm Robot Industri",  en: "Industrial Robot Arms" },
    hero_sub: {
      id: "Kami merancang dan mengintegrasikan arm robot presisi tinggi untuk otomasi manufaktur, perakitan, dan penanganan material—meningkatkan efisiensi lini produksi secara signifikan.",
      en: "We design and integrate high-precision robotic arms for manufacturing automation, assembly, and material handling—significantly improving production line efficiency.",
    },
    hero_cta:      { id: "Lihat Layanan",       en: "View Services" },
    section_label: { id: "Layanan Spesifik",    en: "Specific Services" },
    section_title: { id: "Apa yang Kami Kerjakan", en: "What We Do" },
    svc1_title:    { id: "Arm Robot Industri",  en: "Industrial Robot Arm" },
    svc1_desc: {
      id: "Kami menyediakan solusi arm robot industri yang dapat dikustomisasi sesuai kebutuhan operasional perusahaan Anda. Mulai dari perakitan presisi, pick-and-place, palletizing, welding, fabrikasi, inspeksi visual, hingga integrasi dengan conveyor, PLC, SCADA, dan sistem ERP/WMS.",
      en: "We provide customizable industrial robot arm solutions tailored to your company's operational needs. From precision assembly, pick-and-place, palletizing, welding, fabrication, visual inspection, to integration with conveyors, PLC, SCADA, and ERP/WMS systems.",
    },
    svc1_specs: {
      id: ["Payload: 3 – 210 kg","Reach: 500 – 2700 mm","Repeatability: ±0.02 mm","Integrasi PLC / SCADA / WMS","Vision system support","Custom end-effector & gripper","Remote monitoring 24/7","Support commissioning & training"],
      en: ["Payload: 3 – 210 kg","Reach: 500 – 2700 mm","Repeatability: ±0.02 mm","PLC / SCADA / WMS Integration","Vision system support","Custom end-effector & gripper","Remote monitoring 24/7","Commissioning & training support"],
    },
    catalogue_label: { id: "Katalog Produk",     en: "Product Catalogue" },
    catalogue_title: { id: "Produk Robotika Kami",en: "Our Robotics Products" },
    cat1_tag:  { id: "Photobooth", en: "Photobooth" },
    cat1_name: { id: "Arm Robot - Axionix Orbit 1", en: "Robot Arm - Axionix Orbit 1" },
    cat1_desc: {
      id: "Arm robot interaktif untuk kebutuhan photobooth modern, event activation, dan pengalaman visual otomatis. Dirancang untuk menghasilkan gerakan kamera yang halus dan presisi tinggi sehingga menciptakan video sinematik yang menarik.",
      en: "Interactive robot arm for modern photobooth, event activation, and automated visual experiences. Designed to produce smooth and high-precision camera movements for cinematic video.",
    },
    cat1_highlights: {
      id: ["Payload: 3 – 210 kg","Reach: 500 – 2700 mm","Repeatability: ±0.02 mm","IP67 wrist"],
      en: ["Payload: 3 – 210 kg","Reach: 500 – 2700 mm","Repeatability: ±0.02 mm","IP67 wrist"],
    },
    cat1_wa: {
      id: "Halo PT. LTI, saya tertarik dengan produk Arm Robot Perakitan. Boleh saya tahu lebih lanjut?",
      en: "Hello PT. LTI, I am interested in the Assembly Robot Arm product. May I learn more?",
    },
    cat2_tag:  { id: "Industri", en: "Industry" },
    cat2_name: { id: "Arm Robot - Axionix Orbit 2", en: "Robot Arm - Axionix Orbit 2" },
    cat2_desc: {
      id: "Arm robot industri untuk otomasi lini produksi, penanganan material, dan integrasi sistem manufaktur modern. Cocok digunakan pada proses pick-and-place, palletizing, dan workflow berbasis conveyor.",
      en: "Industrial robot arm for production line automation, material handling, and modern manufacturing system integration. Suitable for pick-and-place, palletizing, and conveyor-based workflows.",
    },
    cat2_highlights: {
      id: ["Cycle time < 1 detik","Multi-gripper support","Integrasi WMS/ERP","3D bin-picking vision"],
      en: ["Cycle time < 1 second","Multi-gripper support","WMS/ERP Integration","3D bin-picking vision"],
    },
    cat2_wa: {
      id: "Halo PT. LTI, saya tertarik dengan produk Arm Robot Penanganan Material. Boleh saya tahu lebih lanjut?",
      en: "Hello PT. LTI, I am interested in the Material Handling Robot Arm product. May I learn more?",
    },
    cat1_pay: {
      id: "Halo PT. LTI, saya ingin melakukan pembayaran untuk produk Axionix Orbit 1 (Arm Robot Photobooth). Bagaimana prosedur pembayarannya?",
      en: "Hello PT. LTI, I would like to make a payment for the Axionix Orbit 1 (Photobooth Robot Arm) product. What is the payment procedure?",
    },
    cat2_pay: {
      id: "Halo PT. LTI, saya ingin melakukan pembayaran untuk produk Axionix Orbit 2 (Arm Robot Industri). Bagaimana prosedur pembayarannya?",
      en: "Hello PT. LTI, I would like to make a payment for the Axionix Orbit 2 (Industrial Robot Arm) product. What is the payment procedure?",
    },
    wa_btn: { id: "Konsultasi via WA", en: "Consult via WA" },
    pay_btn: { id: "Pembayaran", en: "Payment" },
    why_label: { id: "Keunggulan Kami",      en: "Our Advantages" },
    why_title: { id: "Mengapa Memilih PT. LTI?", en: "Why Choose PT. LTI?" },
    why_sub: {
      id: "Kami bukan sekadar reseller robot. Tim insinyur kami merancang solusi dari nol—mulai dari studi kelayakan, desain cell, hingga pelatihan operator—sehingga Anda mendapatkan sistem yang benar-benar sesuai proses produksi, bukan solusi generik dari katalog.",
      en: "We are not just robot resellers. Our engineering team designs solutions from scratch—from feasibility studies, cell design, to operator training—so you get a system truly tailored to your production process, not a generic catalog solution.",
    },
    adv1_title: { id: "Integrasi Cepat",     en: "Fast Integration" },
    adv1_desc: {
      id: "Standar komunikasi terbuka (OPC-UA, MQTT, Modbus) memungkinkan integrasi dengan sistem existing dalam hitungan minggu, bukan bulan.",
      en: "Open communication standards (OPC-UA, MQTT, Modbus) enable integration with existing systems in weeks, not months.",
    },
    adv2_title: { id: "Solusi End-to-End",   en: "End-to-End Solutions" },
    adv2_desc: {
      id: "Dari konsultasi, desain cell, instalasi, hingga pelatihan operator—semua dikerjakan oleh satu tim sehingga tanggung jawab jelas.",
      en: "From consultation, cell design, installation, to operator training—all handled by one team for clear accountability.",
    },
    adv3_title: { id: "Dukungan Lokal",      en: "Local Support" },
    adv3_desc: {
      id: "Tim teknisi bersertifikasi siaga di wilayah Anda. Spare part stok lokal, respon kunjungan dalam 24 jam kerja.",
      en: "Certified technician team ready in your area. Local spare parts stock, on-site response within 24 business hours.",
    },
    adv4_title: { id: "Monitoring Real-Time", en: "Real-Time Monitoring" },
    adv4_desc: {
      id: "Dashboard OEE terhubung ke setiap robot: pantau utilitas, prediksi keausan komponen, dan terima alert sebelum downtime terjadi.",
      en: "OEE dashboard connected to every robot: monitor utilization, predict component wear, and receive alerts before downtime occurs.",
    },
    cta_title: { id: "Konsultasi Langsung Dengan Kami", en: "Consult Directly With Us" },
    cta_sub: {
      id: "Ceritakan kebutuhan Anda—tim kami akan membantu anda dengan solusi yang tepat, efisien, dan terjangkau tanpa biaya konsultasi awal.",
      en: "Tell us your needs—our team will help you find the right, efficient, and affordable solution with no initial consultation fee.",
    },
    cta_btn1: { id: "Konsultasi Gratis",  en: "Free Consultation" },
    cta_btn2: { id: "Layanan Lainnya",    en: "Other Services" },
  },

  // ── SERVICES — SOFTWARE ──────────────────────────────────────────────────
  software: {
    breadcrumb:    { id: "Layanan Kami",          en: "Our Services" },
    hero_label:    { id: "Perangkat Lunak",        en: "Software" },
    hero_title:    { id: "Software Enterprise\n& Monitoring", en: "Enterprise Software\n& Monitoring" },
    hero_sub: {
      id: "Tim software PT. LTI mengembangkan solusi digital yang terintegrasi erat dengan kebutuhan operasional klien—mulai dari manajemen keuangan yayasan hingga platform monitoring kesehatan yang terhubung dengan perangkat biomedis kami.",
      en: "PT. LTI's software team develops digital solutions closely integrated with clients' operational needs—from foundation financial management to health monitoring platforms connected to our biomedical devices.",
    },
    hero_cta:      { id: "Lihat Produk",           en: "View Products" },
    section_label: { id: "Produk & Layanan",        en: "Products & Services" },
    section_title: { id: "Solusi Software Kami",    en: "Our Software Solutions" },
    svc1_title:    { id: "Website",                 en: "Website" },
    svc1_desc: {
      id: "Pengembangan website profesional mulai dari company profile, landing page, hingga platform web enterprise. Dibangun dengan teknologi modern, responsif di semua perangkat, dan dioptimalkan untuk performa serta SEO.",
      en: "Professional website development from company profiles and landing pages to enterprise web platforms. Built with modern technology, responsive on all devices, and optimized for performance and SEO.",
    },
    svc1_specs: {
      id: ["Company profile & landing page","Web app & dashboard","SEO & performa optimal","Responsif semua perangkat"],
      en: ["Company profile & landing page","Web app & dashboard","Optimal SEO & performance","Responsive on all devices"],
    },
    svc2_title: { id: "Mobile", en: "Mobile" },
    svc2_desc: {
      id: "Pengembangan aplikasi mobile native dan cross-platform untuk iOS dan Android. Dari aplikasi konsumen hingga tools internal perusahaan—kami membangun pengalaman mobile yang intuitif dan andal.",
      en: "Native and cross-platform mobile application development for iOS and Android. From consumer apps to internal company tools—we build intuitive and reliable mobile experiences.",
    },
    svc2_specs: {
      id: ["iOS & Android","React Native / Flutter","Push notification","Offline-ready"],
      en: ["iOS & Android","React Native / Flutter","Push notification","Offline-ready"],
    },
    svc3_title: { id: "Software", en: "Software" },
    svc3_desc: {
      id: "Pengembangan perangkat lunak custom sesuai kebutuhan spesifik bisnis Anda—dari sistem manajemen, ERP, hingga platform SaaS. Arsitektur skalabel, keamanan terstandar, dan delivery berbasis sprint yang transparan.",
      en: "Custom software development tailored to your specific business needs—from management systems, ERP, to SaaS platforms. Scalable architecture, standardized security, and transparent sprint-based delivery.",
    },
    svc3_specs: {
      id: ["ERP & sistem manajemen","SaaS & platform digital","Integrasi API pihak ketiga","Metodologi Agile/Scrum"],
      en: ["ERP & management systems","SaaS & digital platforms","Third-party API integration","Agile/Scrum methodology"],
    },
    catalogue_label: { id: "Katalog Produk",      en: "Product Catalogue" },
    catalogue_title: { id: "Produk Siap Pakai Kami", en: "Our Ready-Made Products" },
    cat1_tag:  { id: "Enterprise", en: "Enterprise" },
    cat1_name: { id: "Sistem Keuangan Yayasan SPPG", en: "SPPG Foundation Financial System" },
    cat1_desc: {
      id: "Platform manajemen keuangan multi-entitas dengan audit trail, laporan otomatis, dan ekspor PDF/Excel. Dirancang khusus untuk kebutuhan pelaporan yayasan dan lembaga nirlaba.",
      en: "Multi-entity financial management platform with audit trail, automated reports, and PDF/Excel export. Specifically designed for foundation and non-profit reporting needs.",
    },
    cat1_highlights: {
      id: ["Multi-rekening & entitas","Laporan keuangan otomatis","Audit trail lengkap","Ekspor PDF / Excel"],
      en: ["Multi-account & entities","Automated financial reports","Full audit trail","PDF / Excel export"],
    },
    cat1_wa: {
      id: "Halo PT. LTI, saya tertarik dengan produk Sistem Keuangan Yayasan SPPG. Boleh saya tahu lebih lanjut?",
      en: "Hello PT. LTI, I am interested in the SPPG Foundation Financial System. May I learn more?",
    },
    cat2_tag:  { id: "Enterprise", en: "Enterprise" },
    cat2_name: { id: "Sistem Inventori SPPG", en: "SPPG Inventory System" },
    cat2_desc: {
      id: "Platform manajemen inventaris gudang SPPG, notifikasi real-time ke divisi MRP.",
      en: "SPPG warehouse inventory management platform with real-time notifications to the MRP division.",
    },
    cat2_highlights: {
      id: ["Automation","Early notification"],
      en: ["Automation","Early notification"],
    },
    cat2_wa: {
      id: "Halo PT. LTI, saya tertarik dengan produk Sistem Inventori SPPG. Boleh saya tahu lebih lanjut?",
      en: "Hello PT. LTI, I am interested in the SPPG Inventory System. May I learn more?",
    },
    cat3_tag:  { id: "Custom", en: "Custom" },
    cat3_name: { id: "Pengembangan Aplikasi Custom", en: "Custom App Development" },
    cat3_desc: {
      id: "Pengembangan web dan mobile application dari MVP hingga skala enterprise. Metodologi Agile, arsitektur skalabel, dan UI/UX research-driven untuk hasil yang benar-benar sesuai kebutuhan.",
      en: "Web and mobile application development from MVP to enterprise scale. Agile methodology, scalable architecture, and research-driven UI/UX for results that truly fit your needs.",
    },
    cat3_highlights: {
      id: ["Web & mobile (iOS/Android)","Arsitektur skalabel","Metodologi Agile/Scrum","UI/UX research driven"],
      en: ["Web & mobile (iOS/Android)","Scalable architecture","Agile/Scrum methodology","Research-driven UI/UX"],
    },
    cat3_wa: {
      id: "Halo PT. LTI, saya ingin mendiskusikan kebutuhan pengembangan aplikasi custom. Boleh kita jadwalkan konsultasi?",
      en: "Hello PT. LTI, I would like to discuss custom app development needs. Can we schedule a consultation?",
    },
    cat1_pay: {
      id: "Halo PT. LTI, saya ingin melakukan pembayaran untuk produk Sistem Keuangan Yayasan SPPG. Bagaimana prosedur pembayarannya?",
      en: "Hello PT. LTI, I would like to make a payment for the SPPG Foundation Financial System. What is the payment procedure?",
    },
    cat2_pay: {
      id: "Halo PT. LTI, saya ingin melakukan pembayaran untuk produk Sistem Inventori SPPG. Bagaimana prosedur pembayarannya?",
      en: "Hello PT. LTI, I would like to make a payment for the SPPG Inventory System. What is the payment procedure?",
    },
    cat3_pay: {
      id: "Halo PT. LTI, saya ingin melakukan pembayaran untuk Pengembangan Aplikasi Custom. Bagaimana prosedur pembayarannya?",
      en: "Hello PT. LTI, I would like to make a payment for Custom App Development. What is the payment procedure?",
    },
    wa_btn: { id: "Konsultasi via WA", en: "Consult via WA" },
    pay_btn: { id: "Pembayaran", en: "Payment" },
    why_label: { id: "Keunggulan Kami",      en: "Our Advantages" },
    why_title: { id: "Mengapa Memilih PT. LTI?", en: "Why Choose PT. LTI?" },
    why_sub: {
      id: "Pengembangan software kami tidak berhenti di kode yang berjalan. Kami memastikan setiap produk benar-benar menyelesaikan masalah operasional klien—dengan onboarding yang terstruktur dan dukungan pasca-launch yang responsif.",
      en: "Our software development doesn't stop at running code. We ensure every product truly solves the client's operational problems—with structured onboarding and responsive post-launch support.",
    },
    adv1_title: { id: "Integrasi Ekosistem",    en: "Ecosystem Integration" },
    adv1_desc: {
      id: "Software kami dirancang untuk terhubung mulus dengan perangkat keras biomedis PT. LTI maupun sistem pihak ketiga seperti EMR, ERP, dan platform cloud populer.",
      en: "Our software is designed to connect seamlessly with PT. LTI's biomedical hardware as well as third-party systems such as EMR, ERP, and popular cloud platforms.",
    },
    adv2_title: { id: "Pengembangan Iteratif",  en: "Iterative Development" },
    adv2_desc: {
      id: "Metodologi Agile dengan sprint dua mingguan memastikan klien selalu melihat progres nyata dan dapat memberikan umpan balik sebelum produk final terbentuk.",
      en: "Agile methodology with two-week sprints ensures clients always see real progress and can provide feedback before the final product is formed.",
    },
    adv3_title: { id: "Keamanan Data",          en: "Data Security" },
    adv3_desc: {
      id: "Setiap aplikasi dibangun dengan prinsip security-by-design: enkripsi data at-rest & in-transit, autentikasi dua faktor, dan audit log untuk kepatuhan regulasi.",
      en: "Every application is built with security-by-design principles: at-rest & in-transit data encryption, two-factor authentication, and audit logs for regulatory compliance.",
    },
    adv4_title: { id: "Analytics Terpadu",      en: "Integrated Analytics" },
    adv4_desc: {
      id: "Dashboard analitik bawaan memungkinkan pengambil keputusan memantau KPI operasional secara real-time—dari transaksi keuangan hingga data fisiologis pasien.",
      en: "Built-in analytics dashboard allows decision-makers to monitor operational KPIs in real-time—from financial transactions to patient physiological data.",
    },
    cta_title: { id: "Konsultasi Langsung Dengan Kami", en: "Consult Directly With Us" },
    cta_sub: {
      id: "Ceritakan kebutuhan Anda—tim kami akan membantu anda dengan solusi yang tepat, efisien, dan terjangkau tanpa biaya konsultasi awal.",
      en: "Tell us your needs—our team will help you find the right, efficient, and affordable solution with no initial consultation fee.",
    },
    cta_btn1: { id: "Konsultasi Gratis",  en: "Free Consultation" },
    cta_btn2: { id: "Layanan Lainnya",    en: "Other Services" },
  },

  // ── PORTFOLIO ────────────────────────────────────────────────────────────
  portfolio: {
    hero_label:  { id: "Proyek Kami",        en: "Our Projects" },
    hero_title:  { id: "Portofolio & Proyek",en: "Portfolio & Projects" },
    hero_sub: {
      id: "Setiap proyek adalah cerminan komitmen kami terhadap kualitas, ketepatan waktu, dan kepuasan klien.",
      en: "Every project reflects our commitment to quality, timeliness, and client satisfaction.",
    },
    stat_done:    { id: "Proyek Selesai",  en: "Completed Projects" },
    stat_satisfy: { id: "Kepuasan Klien", en: "Client Satisfaction" },
    stat_year:    { id: "Tahun Pertama",  en: "First Year" },
    selected:     { id: "Proyek Terpilih",en: "Selected Projects" },
    result_label: { id: "Hasil",          en: "Result" },
    p1_title: {
      id: "Sistem Manajemen Keuangan Yayasan",
      en: "Foundation Financial Management System",
    },
    p1_desc: {
      id: "Pengembangan platform manajemen keuangan khusus untuk Yayasan Ahmad dalam program Makan Bergizi Gratis (MBG). Sistem mencakup pencatatan transaksi harian, manajemen anggaran, laporan keuangan otomatis, dan audit trail yang transparan untuk keperluan pertanggungjawaban.",
      en: "Development of a dedicated financial management platform for Yayasan Ahmad under the Makan Bergizi Gratis (MBG) program. The system covers daily transaction recording, budget management, automated financial reports, and transparent audit trails for accountability.",
    },
    p1_tags: {
      id: ["Sistem Keuangan","Web Application","Yayasan MBG"],
      en: ["Financial System","Web Application","MBG Foundation"],
    },
    p1_result: {
      id: "Pengelolaan keuangan lebih terstruktur dan transparan",
      en: "More structured and transparent financial management",
    },
    p2_title: {
      id: "Sistem Manajemen Keuangan Yayasan",
      en: "Foundation Financial Management System",
    },
    p2_desc: {
      id: "Implementasi sistem keuangan serupa untuk Yayasan Panam—disesuaikan dengan struktur organisasi dan alur pelaporan internal yayasan. Platform memungkinkan pengurus mengakses laporan keuangan real-time dan menghasilkan dokumen pelaporan yang siap audit.",
      en: "Implementation of a similar financial system for Yayasan Panam—tailored to the foundation's organizational structure and internal reporting workflow. The platform allows administrators to access real-time financial reports and generate audit-ready reporting documents.",
    },
    p2_tags: {
      id: ["Sistem Keuangan","Web Application","Yayasan MBG"],
      en: ["Financial System","Web Application","MBG Foundation"],
    },
    p2_result: {
      id: "Pelaporan keuangan lebih cepat dan akurat",
      en: "Faster and more accurate financial reporting",
    },
    next_title:  { id: "Proyek Berikutnya",  en: "Next Projects" },
    next_sub: {
      id: "Kami sedang mengerjakan beberapa proyek baru di bidang robotika dan biomedis. Pantau terus halaman ini.",
      en: "We are working on several new projects in robotics and biomedics. Stay tuned to this page.",
    },
    cta_title:   { id: "Jadilah Klien Berikutnya", en: "Become Our Next Client" },
    cta_sub: {
      id: "Diskusikan kebutuhan Anda bersama tim PT. LTI dan temukan solusi yang tepat untuk bisnis Anda.",
      en: "Discuss your needs with the PT. LTI team and find the right solution for your business.",
    },
    cta_btn: { id: "Mulai Diskusi", en: "Start Discussion" },
  },

  // ── PRIVACY POLICY ────────────────────────────────────────────────────────
  privacy: {
    hero_label: { id: "Legal",          en: "Legal" },
    hero_title: { id: "Privacy Policy", en: "Privacy Policy" },
    updated:    { id: "Terakhir diperbarui", en: "Last updated" },
    intro: {
      id: 'PT. Lestari Teknologi Inovasi ("PT. LTI", "kami", atau "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda ketika Anda menggunakan website atau layanan kami.',
      en: 'PT. Lestari Teknologi Inovasi ("PT. LTI", "we", or "the company") is committed to protecting your personal data privacy and security. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website or services.',
    },
    s1_title: { id: "Informasi yang Kami Kumpulkan",   en: "Information We Collect" },
    s1: {
      id: ["Informasi identitas pribadi seperti nama, alamat email, dan nomor telepon yang Anda berikan secara sukarela melalui formulir kontak kami.","Data teknis seperti alamat IP, jenis browser, halaman yang dikunjungi, dan waktu kunjungan yang dikumpulkan secara otomatis melalui cookie dan teknologi serupa.","Informasi bisnis yang Anda bagikan saat bernegosiasi atau menjalin kerjasama dengan PT. Lestari Teknologi Inovasi."],
      en: ["Personal identity information such as name, email address, and phone number that you voluntarily provide through our contact form.","Technical data such as IP address, browser type, pages visited, and visit times collected automatically via cookies and similar technologies.","Business information you share when negotiating or establishing a partnership with PT. Lestari Teknologi Inovasi."],
    },
    s2_title: { id: "Bagaimana Kami Menggunakan Informasi Anda", en: "How We Use Your Information" },
    s2: {
      id: ["Merespons pertanyaan, permintaan layanan, dan komunikasi bisnis Anda secara tepat waktu.","Meningkatkan kualitas website, layanan, dan pengalaman pengguna berdasarkan analisis data.","Mengirimkan informasi terkait produk, layanan baru, atau pembaruan yang relevan (hanya jika Anda telah memberikan persetujuan).","Memenuhi kewajiban hukum dan peraturan yang berlaku di Indonesia."],
      en: ["Responding to your inquiries, service requests, and business communications in a timely manner.","Improving website quality, services, and user experience based on data analysis.","Sending information about relevant products, new services, or updates (only if you have given consent).","Fulfilling legal obligations and applicable regulations in Indonesia."],
    },
    s3_title: { id: "Keamanan Data", en: "Data Security" },
    s3: {
      id: ["Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang tepat untuk melindungi informasi pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghapusan.","Data sensitif dienkripsi menggunakan protokol standar industri. Akses ke data pribadi dibatasi hanya untuk karyawan yang memerlukan akses tersebut untuk keperluan pekerjaan.","Meskipun kami berupaya keras melindungi data Anda, tidak ada metode transmisi melalui internet yang 100% aman."],
      en: ["We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or deletion.","Sensitive data is encrypted using industry-standard protocols. Access to personal data is restricted to employees who require it for work purposes.","Although we strive to protect your data, no method of internet transmission is 100% secure."],
    },
    s4_title: { id: "Berbagi Informasi dengan Pihak Ketiga", en: "Sharing Information with Third Parties" },
    s4: {
      id: ["PT. LTI tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga.","Kami dapat berbagi informasi dengan mitra terpercaya yang membantu kami dalam operasional bisnis, dengan syarat mereka sepakat untuk menjaga kerahasiaan informasi tersebut.","Pengungkapan dapat dilakukan jika diwajibkan oleh hukum atau dalam rangka melindungi hak-hak sah perusahaan."],
      en: ["PT. LTI does not sell, trade, or rent your personal information to third parties.","We may share information with trusted partners who assist us in business operations, provided they agree to maintain the confidentiality of such information.","Disclosure may occur if required by law or to protect the company's legitimate rights."],
    },
    s5_title: { id: "Cookie dan Teknologi Pelacakan", en: "Cookies and Tracking Technologies" },
    s5: {
      id: ["Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menganalisis traffic website. Cookie adalah file teks kecil yang disimpan di perangkat Anda.","Anda dapat mengatur browser Anda untuk menolak semua cookie atau menginformasikan ketika cookie dikirim. Namun, beberapa fitur website mungkin tidak berfungsi dengan baik jika cookie dinonaktifkan."],
      en: ["Our website uses cookies to improve user experience and analyze website traffic. Cookies are small text files stored on your device.","You can set your browser to reject all cookies or to notify you when cookies are sent. However, some website features may not function properly if cookies are disabled."],
    },
    s6_title: { id: "Hak-Hak Anda", en: "Your Rights" },
    s6: {
      id: ["Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus informasi pribadi yang kami simpan tentang Anda.","Anda dapat menarik persetujuan yang sebelumnya diberikan untuk pemrosesan data kapan saja.","Untuk menggunakan hak-hak tersebut, silakan hubungi kami melalui contact@lti.company."],
      en: ["You have the right to access, correct, or delete personal information we hold about you.","You may withdraw previously given consent for data processing at any time.","To exercise these rights, please contact us at contact@lti.company."],
    },
    contact_title: { id: "Ada Pertanyaan?",    en: "Have Questions?" },
    contact_sub: {
      id: "Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami.",
      en: "If you have questions about this privacy policy, please contact us.",
    },
  },

  // ── TERMS OF SERVICE ─────────────────────────────────────────────────────
  terms: {
    hero_label: { id: "Legal",           en: "Legal" },
    hero_title: { id: "Terms of Service",en: "Terms of Service" },
    updated:    { id: "Terakhir diperbarui", en: "Last updated" },
    intro: {
      id: 'Selamat datang di PT. Lestari Teknologi Inovasi. Syarat Layanan ini ("Syarat") mengatur penggunaan Anda terhadap website dan layanan yang kami sediakan. Harap baca syarat-syarat ini dengan cermat sebelum menggunakan layanan kami. Dengan mengakses website kami, Anda menyetujui syarat-syarat yang tercantum di sini.',
      en: 'Welcome to PT. Lestari Teknologi Inovasi. These Terms of Service ("Terms") govern your use of our website and services. Please read these terms carefully before using our services. By accessing our website, you agree to the terms stated here.',
    },
    s1_title: { id: "Penerimaan Syarat", en: "Acceptance of Terms" },
    s1: {
      id: ["Dengan mengakses dan menggunakan website PT. Lestari Teknologi Inovasi, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat Layanan ini.","Jika Anda tidak menyetujui syarat-syarat ini, harap tidak menggunakan website atau layanan kami.","Kami berhak mengubah syarat ini sewaktu-waktu. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini."],
      en: ["By accessing and using the PT. Lestari Teknologi Inovasi website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.","If you do not agree to these terms, please do not use our website or services.","We reserve the right to modify these terms at any time. Changes take effect immediately upon publication on this page."],
    },
    s2_title: { id: "Penggunaan Layanan", en: "Use of Services" },
    s2: {
      id: ["Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan sesuai dengan semua hukum serta peraturan yang berlaku di Indonesia.","Anda tidak boleh menggunakan layanan kami untuk menyebarkan konten yang menyinggung, ilegal, mengancam, atau melanggar hak kekayaan intelektual pihak lain.","Anda bertanggung jawab untuk menjaga kerahasiaan akun dan kata sandi Anda serta membatasi akses ke perangkat komputer Anda.","Anda setuju untuk segera memberitahu kami tentang penggunaan tidak sah atas akun Anda."],
      en: ["You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations in Indonesia.","You may not use our services to distribute offensive, illegal, threatening content, or content that infringes on the intellectual property rights of others.","You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer device.","You agree to immediately notify us of any unauthorized use of your account."],
    },
    s3_title: { id: "Hak Kekayaan Intelektual", en: "Intellectual Property Rights" },
    s3: {
      id: ["Semua konten di website ini, termasuk namun tidak terbatas pada teks, grafik, logo, ikon, gambar, klip audio, dan perangkat lunak, adalah milik PT. LTI atau pemberi lisensinya.","Konten dilindungi oleh undang-undang hak cipta Indonesia dan perjanjian internasional. Dilarang mereproduksi, mendistribusikan, atau menggunakan konten ini tanpa izin tertulis dari kami.","Merek dagang, merek layanan, dan logo yang ditampilkan di website ini adalah milik PT. Lestari Teknologi Inovasi."],
      en: ["All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, and software, is the property of PT. LTI or its licensors.","Content is protected by Indonesian copyright law and international agreements. Reproduction, distribution, or use of this content without our written permission is prohibited.","Trademarks, service marks, and logos displayed on this website are the property of PT. Lestari Teknologi Inovasi."],
    },
    s4_title: { id: "Batasan Tanggung Jawab", en: "Limitation of Liability" },
    s4: {
      id: ["Informasi di website ini disediakan 'sebagaimana adanya' tanpa jaminan apapun, baik tersurat maupun tersirat.","PT. LTI tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan kami.","Kami tidak menjamin bahwa website akan selalu tersedia, bebas dari kesalahan, atau bebas dari virus dan program berbahaya lainnya."],
      en: ["Information on this website is provided 'as is' without any warranty, express or implied.","PT. LTI is not liable for direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services.","We do not guarantee that the website will always be available, error-free, or free from viruses and other harmful programs."],
    },
    s5_title: { id: "Larangan Penggunaan", en: "Prohibited Uses" },
    s5: {
      id: ["Dilarang menggunakan teknik web scraping, data mining, robot, atau metode pengumpulan data otomatis lainnya tanpa izin tertulis.","Dilarang mencoba mendapatkan akses tidak sah ke server kami, sistem komputer, atau jaringan yang terhubung ke website kami.","Dilarang menggunakan layanan kami untuk transmisi spam, phishing, malware, atau konten berbahaya lainnya.","Dilarang melakukan tindakan yang dapat merusak, menonaktifkan, atau membebani infrastruktur kami."],
      en: ["Use of web scraping, data mining, robots, or other automated data collection methods without written permission is prohibited.","Attempting to gain unauthorized access to our servers, computer systems, or networks connected to our website is prohibited.","Using our services for the transmission of spam, phishing, malware, or other harmful content is prohibited.","Actions that could damage, disable, or overburden our infrastructure are prohibited."],
    },
    s6_title: { id: "Hukum yang Berlaku", en: "Governing Law" },
    s6: {
      id: ["Syarat Layanan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia.","Setiap perselisihan yang timbul dari atau terkait dengan penggunaan layanan kami akan diselesaikan melalui musyawarah mufakat. Jika tidak tercapai, perselisihan akan diselesaikan melalui pengadilan yang berwenang di Bandung, Jawa Barat.","Jika ada ketentuan dalam syarat ini yang dinyatakan tidak sah, ketentuan lainnya tetap berlaku sepenuhnya."],
      en: ["These Terms of Service are governed by and construed in accordance with the laws of the Republic of Indonesia.","Any dispute arising from or related to the use of our services will be resolved through mutual consultation. If unresolved, disputes will be settled through the competent court in Bandung, West Java.","If any provision of these terms is found invalid, the remaining provisions shall remain in full effect."],
    },
    contact_title: { id: "Butuh Klarifikasi?", en: "Need Clarification?" },
    contact_sub: {
      id: "Jika Anda memiliki pertanyaan mengenai syarat layanan ini, jangan ragu untuk menghubungi kami.",
      en: "If you have questions about these terms of service, don't hesitate to contact us.",
    },
  },
};

export const t = mergeDeep(baseT, overrides);

/** Helper: resolve a bilingual string based on current lang */
export function tx(obj: { id: string; en: string }, lang: "id" | "en"): string {
  return obj[lang];
}

```

## app\translations\overrides.json
```json
{}
```

## app\layout.tsx
```tsx
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { CmsProvider } from "./context/CmsContext";
import LayoutWrapper from "./components/LayoutWrapper";

export const metadata: Metadata = {
  title: "PT.LTI | Robotics · Healthcare · Software",
  description: "Leading provider of advanced robotics, healthcare equipment, and enterprise software solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <CmsProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </CmsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}


```

## app\page.tsx
```tsx
"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Star, Cpu, Activity, Code2, Zap } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import { t } from "./translations";
import { useCms } from "./context/CmsContext";
import EditableText from "./components/EditableText";

const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans: "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 56, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

export default function HomePage() {
  const { lang } = useLanguage();
  const { homeTranslations: h } = useCms();

  return (
    <div style={{ overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg,#1A2744 0%,#243356 50%,#1A2744 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "0 280px 280px 0", borderColor: "transparent rgba(201,168,76,0.06) transparent transparent" }} />

        <div className="hero-inner page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
              <span style={lbl}>
                <EditableText fieldKey="hero_label">{h.hero_label[lang]}</EditableText>
              </span>
            </div>
            <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", lineHeight: 1.1, fontSize: "clamp(48px,6.5vw,84px)", marginBottom: 28 }}>
              <EditableText fieldKey="hero_title1">{h.hero_title1[lang]}</EditableText>{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C9A84C" }}>
                <EditableText fieldKey="hero_em">{h.hero_em[lang]}</EditableText>
              </em>{" "}
              <EditableText fieldKey="hero_title2">{h.hero_title2[lang]}</EditableText>
            </h1>
            <p style={{ fontFamily: ff.sans, fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, maxWidth: 520, marginBottom: 44 }}>
              <EditableText fieldKey="hero_sub" inline={false}>{h.hero_sub[lang]}</EditableText>
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/services" className="btn-solid-gold" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
                <EditableText fieldKey="hero_cta1">{h.hero_cta1[lang]}</EditableText> <ArrowRight size={13} />
              </Link>
              <Link href="/contact" className="btn-outline-light" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
                <EditableText fieldKey="hero_cta2">{h.hero_cta2[lang]}</EditableText>
              </Link>
            </div>
          </div>

          <div className="grid-4" style={{ marginTop: 80, borderTop: "1px solid rgba(201,168,76,0.25)" }}>
            {[
              { num: "2026", label: h.stat_founded[lang], key: "stat_founded" },
              { num: "3+",   label: h.stat_products[lang], key: "stat_products" },
              { num: "2",    label: h.stat_clients[lang], key: "stat_clients" },
              { num: "100%", label: h.stat_quality[lang], key: "stat_quality" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "24px 0 24px 12px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontFamily: ff.serif, fontSize: 32, fontWeight: 600, color: "#C9A84C" }}>{s.num}</div>
                <div style={{ ...lbl, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                  <EditableText fieldKey={s.key}>{s.label}</EditableText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad page-container">
        <div className="grid-2" style={{ alignItems: "center" }}>
          <div>
            <div style={lbl}>
              <EditableText fieldKey="overview_label">{h.overview_label[lang]}</EditableText>
            </div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", lineHeight: 1.15, fontSize: "clamp(32px,4vw,52px)", margin: "12px 0 20px" }}>
              <EditableText fieldKey="overview_title1">{h.overview_title1[lang]}</EditableText>{" "}
              <em style={{ fontStyle: "italic" }}>
                <EditableText fieldKey="overview_em">{h.overview_em[lang]}</EditableText>
              </em>{" "}
              <EditableText fieldKey="overview_title2">{h.overview_title2[lang]}</EditableText>
            </h2>
            <div style={{ ...goldLine, marginBottom: 24 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85, marginBottom: 16 }}>
              <EditableText fieldKey="overview_p1" inline={false}>{h.overview_p1[lang]}</EditableText>
            </p>
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85, marginBottom: 40 }}>
              <EditableText fieldKey="overview_p2" inline={false}>{h.overview_p2[lang]}</EditableText>
            </p>
            <Link
              href="/about"
              className="link-text-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: ff.sans,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                textDecoration: "none",
                paddingBottom: 4,
              }}
            >
              <EditableText fieldKey="overview_cta">{h.overview_cta[lang]}</EditableText> <ChevronRight size={13} />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ background: "#F5F4F1", aspectRatio: "1", maxWidth: 440, marginLeft: "auto", position: "relative" }}>
              <div style={{ position: "absolute", inset: 32, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", padding: "40px 32px" }}>
                  <div style={{ width: 64, height: 64, margin: "0 auto 20px", background: "#1A2744", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Cpu size={28} color="#C9A84C" />
                  </div>
                  <div style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", marginBottom: 8 }}>Est. 2026</div>
                  <div style={lbl}>Bandung, Indonesia</div>
                  <div style={{ margin: "20px 0 0", paddingTop: 20, borderTop: "1px solid #E2DDD5" }}>
                    <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.7 }}>
                      <EditableText fieldKey="overview_card_tagline" inline={false}>{h.overview_card_tagline[lang]}</EditableText>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -16, right: -16, width: 120, height: 120, background: "#C9A84C", opacity: 0.15 }} />
            <div style={{ position: "absolute", top: -16, left: -16, width: 72, height: 72, border: "2px solid #C9A84C", opacity: 0.25 }} />
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={lbl}>
              <EditableText fieldKey="services_label">{h.services_label[lang]}</EditableText>
            </div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(32px,4vw,50px)", margin: "12px 0 20px" }}>
              <EditableText fieldKey="services_title">{h.services_title[lang]}</EditableText>
            </h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>
          <div className="grid-3">
            {[
              { icon: <Cpu size={26} color="#C9A84C" />,      title: h.svc_robotics_title[lang], desc: h.svc_robotics_desc[lang], tKey: "svc_robotics_title", dKey: "svc_robotics_desc" },
              { icon: <Activity size={26} color="#C9A84C" />, title: h.svc_biomedic_title[lang], desc: h.svc_biomedic_desc[lang], tKey: "svc_biomedic_title", dKey: "svc_biomedic_desc" },
              { icon: <Code2 size={26} color="#C9A84C" />,    title: h.svc_software_title[lang], desc: h.svc_software_desc[lang], tKey: "svc_software_title", dKey: "svc_software_desc" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#FEFEFE", padding: "40px 36px", border: "1px solid #E2DDD5" }}>
                <div style={{ width: 52, height: 52, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 14 }}>
                  <EditableText fieldKey={s.tKey}>{s.title}</EditableText>
                </h3>
                <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 24 }}>
                  <EditableText fieldKey={s.dKey} inline={false}>{s.desc}</EditableText>
                </p>
                <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", textDecoration: "none" }}>
                  <EditableText fieldKey="svc_more">{h.svc_more[lang]}</EditableText> <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={lbl}>
              <EditableText fieldKey="testi_label">{h.testi_label[lang]}</EditableText>
            </div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(32px,4vw,50px)", margin: "12px 0 20px" }}>
              <EditableText fieldKey="testi_title">{h.testi_title[lang]}</EditableText>
            </h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>
          <div className="grid-2" style={{ maxWidth: 900, margin: "0 auto" }}>
            {[
              { quote: lang === "id" ? "PT. LTI hadir dengan solusi software keuangan yang tepat sasaran untuk operasional yayasan kami. Tim mereka responsif dan memahami kebutuhan spesifik sektor nirlaba." : "PT. LTI delivered a targeted financial software solution for our foundation's operations. Their team is responsive and understands the specific needs of the non-profit sector.", name: "Dimas", title: "Contact Person, Yayasan Ahmad" },
              { quote: lang === "id" ? "Sistem monitoring yang dikembangkan PT. LTI sangat membantu pengelolaan keuangan yayasan kami. Antarmuka yang bersih dan laporan yang akurat." : "The monitoring system developed by PT. LTI greatly helps our foundation's financial management. A clean interface and accurate reports.", name: "Farhan Zamril", title: "Contact Person, Yayasan Panam" },
            ].map((t, i) => (
              <div key={i} style={{ padding: "40px 36px", border: "1px solid #E2DDD5", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 24, fontFamily: ff.serif, fontSize: 80, color: "#EEECE7", lineHeight: 1, userSelect: "none" }}>&ldquo;</div>
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#C9A84C" stroke="none" />)}
                </div>
                <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85, marginBottom: 28, position: "relative", zIndex: 1 }}>{t.quote}</p>
                <div style={{ borderTop: "1px solid #E2DDD5", paddingTop: 20 }}>
                  <div style={{ fontFamily: ff.serif, fontSize: 15, fontWeight: 600, color: "#1A2744" }}>{t.name}</div>
                  <div style={{ fontFamily: ff.sans, fontSize: 10, color: "#C9A84C", letterSpacing: 0.5, marginTop: 4 }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-pad-sm" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="page-container" style={{ position: "relative", zIndex: 1, maxWidth: 720, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} /><Zap size={16} color="#C9A84C" /><div style={{ height: 1, width: 48, background: "#C9A84C" }} />
          </div>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,4vw,52px)", marginBottom: 20 }}>
            <EditableText fieldKey="cta_title1">{h.cta_title1[lang]}</EditableText>{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>
              <EditableText fieldKey="cta_em">{h.cta_em[lang]}</EditableText>
            </em>{" "}
            <EditableText fieldKey="cta_title2">{h.cta_title2[lang]}</EditableText>
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 40 }}>
            <EditableText fieldKey="cta_sub" inline={false}>{h.cta_sub[lang]}</EditableText>
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-solid-gold" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              <EditableText fieldKey="cta_btn1">{h.cta_btn1[lang]}</EditableText> <ArrowRight size={13} />
            </Link>
            <Link href="/portfolio" className="btn-outline-light" style={{ display: "inline-flex", alignItems: "center", padding: "16px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
              <EditableText fieldKey="cta_btn2">{h.cta_btn2[lang]}</EditableText>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## lib\supabase.ts
```ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

```

## AGENTS.md
```md
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

```

## CLAUDE.md
```md
@AGENTS.md

```

## next-env.d.ts
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## next.config.ts
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

```

## package-lock.json
```json
{
  "name": "company-profile",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "company-profile",
      "version": "0.1.0",
      "dependencies": {
        "@supabase/supabase-js": "^2.108.2",
        "lucide-react": "^1.8.0",
        "next": "16.2.4",
        "react": "19.2.4",
        "react-dom": "19.2.4"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "eslint": "^9",
        "eslint-config-next": "16.2.4",
        "tailwindcss": "^4",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.0.tgz",
      "integrity": "sha512-9NhCeYjq9+3uxgdtp20LSiJXJvN0FeCtNGpJxuMFZ1Kv3cWUNb6DOhJwUvcVCzKGR66cw4njwM6hrJLqgOwbcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.28.5",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.0.tgz",
      "integrity": "sha512-T1NCJqT/j9+cn8fvkt7jtwbLBfLC/1y1c7NtCeXFRgzGTsafi68MRv8yzkYSapBnFA6L3U2VSc02ciDzoAJhJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.0.tgz",
      "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-compilation-targets": "^7.28.6",
        "@babel/helper-module-transforms": "^7.28.6",
        "@babel/helpers": "^7.28.6",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/traverse": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.1",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.1.tgz",
      "integrity": "sha512-qsaF+9Qcm2Qv8SRIMMscAvG4O3lJ0F1GuMo5HR/Bp02LopNgnZBC/EkbevHFeGs4ls/oPz9v+Bsmzbkbe+0dUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.28.6.tgz",
      "integrity": "sha512-JYtls3hqi15fcx5GaSNL7SCTJ2MNmjrkHXg4FSpOA/grxK8KwyZ5bubHsCq8FXCkua6xhuaaBit+3b7+VZRfcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.28.6",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.28.6.tgz",
      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.6.tgz",
      "integrity": "sha512-67oXFAYr2cDLDVGLXTEABjdBJZ6drElUSI7WKp70NrpyISso3plG9SAGEF6y7zbha/wOzUByWWTJvEDVNIUGcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.28.6",
        "@babel/helper-validator-identifier": "^7.28.5",
        "@babel/traverse": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.2",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.2.tgz",
      "integrity": "sha512-HoGuUs4sCZNezVEKdVcwqmZN8GoHirLUcLaYVNBK2J0DadGtdcqgr3BCbvH8+XUo4NGjNl3VOtSjEKNzqfFgKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.2",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.2.tgz",
      "integrity": "sha512-4GgRzy/+fsBa72/RZVJmGKPmZu9Byn8o4MoLpmNe1m8ZfYnz5emHLQz3U4gLud6Zwl0RZIcgiLD7Uq7ySFuDLA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.0"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.28.6.tgz",
      "integrity": "sha512-YA6Ma2KsCdGb+WC6UpBVFJGXL58MDA6oyONbjyF/+5sBgxY/dwkhLogbMT2GXXyU84/IhRw/2D1Os1B/giz+BQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.28.6",
        "@babel/parser": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.0.tgz",
      "integrity": "sha512-4HPiQr0X7+waHfyXPZpWPfWL/J7dcN1mx9gL6WdQVMbPnF3+ZhSMs8tCxN7oHddJE9fhNE7+lxdnlyemKfJRuA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.0.tgz",
      "integrity": "sha512-LwdZHpScM4Qz8Xw2iKSzS+cfglZzJGvofQICy7W7v4caru4EaAmyUuO6BGrbyQ2mYV11W0U8j5mBhd14dd3B0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.2.tgz",
      "integrity": "sha512-nJl2KGTlrf9GjLimgIru+V/mzgSK0ABCDQRvxw5BjURL7WfH5uoWmizbH7QB6MmnMBd8cIC9uceWnezL1VZWWw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.5"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.5.tgz",
      "integrity": "sha512-4IlJx0X0qftVsN5E+/vGujTRIFtwuLbNsVUe7TO6zYPDR1O6nFwvwhIKEKSrl6dZchmYBITazxKoUYOjdtjlRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.14.0",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.5",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.4",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.4.tgz",
      "integrity": "sha512-nE7DEIchvtiFTwBw4Lfbu59PG+kCofhjsKaCWzxTpt4lfRjRMqG6uMBzKXuEcyXhOHoUp9riAm7/aWYGhXZ9cw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.5.tgz",
      "integrity": "sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.5.tgz",
      "integrity": "sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.4.tgz",
      "integrity": "sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.4.tgz",
      "integrity": "sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.4.tgz",
      "integrity": "sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.4.tgz",
      "integrity": "sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.4.tgz",
      "integrity": "sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.2.4.tgz",
      "integrity": "sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA==",
      "cpu": [
        "riscv64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.4.tgz",
      "integrity": "sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.4.tgz",
      "integrity": "sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.4.tgz",
      "integrity": "sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.4.tgz",
      "integrity": "sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.5.tgz",
      "integrity": "sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.5.tgz",
      "integrity": "sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.5.tgz",
      "integrity": "sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.34.5.tgz",
      "integrity": "sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw==",
      "cpu": [
        "riscv64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.5.tgz",
      "integrity": "sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.5.tgz",
      "integrity": "sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.5.tgz",
      "integrity": "sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.5.tgz",
      "integrity": "sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.5.tgz",
      "integrity": "sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.7.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.5.tgz",
      "integrity": "sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.5.tgz",
      "integrity": "sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.5.tgz",
      "integrity": "sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "0.2.12",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
      "integrity": "sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.4.3",
        "@emnapi/runtime": "^1.4.3",
        "@tybys/wasm-util": "^0.10.0"
      }
    },
    "node_modules/@next/env": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.2.4.tgz",
      "integrity": "sha512-dKkkOzOSwFYe5RX6y26fZgkSpVAlIOJKQHIiydQcrWH6y/97+RceSOAdjZ14Qa3zLduVUy0TXcn+EiM6t4rPgw==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-16.2.4.tgz",
      "integrity": "sha512-tOX826JJ96gYK/go18sPUgMq9FK1tqxBFfUCEufJb5XIkWFFmpgU7mahJANKGkHs7F41ir3tReJ3Lv5La0RvhA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-glob": "3.3.1"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.2.4.tgz",
      "integrity": "sha512-OXTFFox5EKN1Ym08vfrz+OXxmCcEjT4SFMbNRsWZE99dMqt2Kcusl5MqPXcW232RYkMLQTy0hqgAMEsfEd/l2A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.2.4.tgz",
      "integrity": "sha512-XhpVnUfmYWvD3YrXu55XdcAkQtOnvaI6wtQa8fuF5fGoKoxIUZ0kWPtcOfqJEWngFF/lOS9l3+O9CcownhiQxQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.2.4.tgz",
      "integrity": "sha512-Mx/tjlNA3G8kg14QvuGAJ4xBwPk1tUHq56JxZ8CXnZwz1Etz714soCEzGQQzVMz4bEnGPowzkV6Xrp6wAkEWOQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.2.4.tgz",
      "integrity": "sha512-iVMMp14514u7Nup2umQS03nT/bN9HurK8ufylC3FZNykrwjtx7V1A7+4kvhbDSCeonTVqV3Txnv0Lu+m2oDXNg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.2.4.tgz",
      "integrity": "sha512-EZOvm1aQWgnI/N/xcWOlnS3RQBk0VtVav5Zo7n4p0A7UKyTDx047k8opDbXgBpHl4CulRqRfbw3QrX2w5UOXMQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.2.4.tgz",
      "integrity": "sha512-h9FxsngCm9cTBf71AR4fGznDEDx1hS7+kSEiIRjq5kO1oXWm07DxVGZjCvk0SGx7TSjlUqhI8oOyz7NfwAdPoA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.2.4.tgz",
      "integrity": "sha512-3NdJV5OXMSOeJYijX+bjaLge3mJBlh4ybydbT4GFoB/2hAojWHtMhl3CYlYoMrjPuodp0nzFVi4Tj2+WaMg+Ow==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.2.4.tgz",
      "integrity": "sha512-kMVGgsqhO5YTYODD9IPGGhA6iprWidQckK3LmPeW08PIFENRmgfb4MjXHO+p//d+ts2rpjvK5gXWzXSMrPl9cw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@supabase/auth-js": {
      "version": "2.108.2",
      "resolved": "https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.108.2.tgz",
      "integrity": "sha512-tNaQmBgodDZwgB40mRwVbxFy8IDYwjdpcZ0BYrWiwlULCSQoJj4QoG4zgJT7QRPXcqipefNOzvO/qAu4dF98ag==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/functions-js": {
      "version": "2.108.2",
      "resolved": "https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.108.2.tgz",
      "integrity": "sha512-RNUX8EiBy3iLwAX19jtRzLyePnl11/fHcgwDHLnpKcDSXt/5qBnh3LUwAtIjT21Q66QsmNUR2esrHziLCpNubw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/phoenix": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/@supabase/phoenix/-/phoenix-0.4.4.tgz",
      "integrity": "sha512-Gt0pqoXuIqX/8dvG0OKp/wMCobXNH3klNbUPBNyOfN0YA1IswrM3HyWFMOPk1Jy+BRaIyDPcFx4jLBwHNmlyfQ==",
      "license": "MIT"
    },
    "node_modules/@supabase/postgrest-js": {
      "version": "2.108.2",
      "resolved": "https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-2.108.2.tgz",
      "integrity": "sha512-GQ28/Y8hk3CFmkb3kXH1h/AQx6JIYSQfO0CJMRVBcEKZoNy6C45cXAZ4fcJvRC5Id0cs6xnkUV0+c0rIocigsw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/realtime-js": {
      "version": "2.108.2",
      "resolved": "https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.108.2.tgz",
      "integrity": "sha512-aAGxCSUemZvQIibnCdvNvgaKib28I4rfrNjKbQ9cG1uBLwUsI7hVpGXgEbypCCDhLjQlDTAiJlu7rgljYUT73g==",
      "license": "MIT",
      "dependencies": {
        "@supabase/phoenix": "^0.4.2",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/storage-js": {
      "version": "2.108.2",
      "resolved": "https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.108.2.tgz",
      "integrity": "sha512-TVZPQxXGxY2+A6yTtm77zUHsh70lBhYUEaJL8RQC+BghcX/ygiMG/rmXrNVBce30/WAeNPa8FiG8HbqlGeV05g==",
      "license": "MIT",
      "dependencies": {
        "iceberg-js": "^0.8.1",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/supabase-js": {
      "version": "2.108.2",
      "resolved": "https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.108.2.tgz",
      "integrity": "sha512-hFhnPveb5JQg4a0QYicM0swT253YHMdfeRAl2BKHOlI5VAzuHxUGSr8RbwNLYNPauWOgQMS1H8sz8bvYlgwUfQ==",
      "license": "MIT",
      "dependencies": {
        "@supabase/auth-js": "2.108.2",
        "@supabase/functions-js": "2.108.2",
        "@supabase/postgrest-js": "2.108.2",
        "@supabase/realtime-js": "2.108.2",
        "@supabase/storage-js": "2.108.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.2.4.tgz",
      "integrity": "sha512-Ai7+yQPxz3ddrDQzFfBKdHEVBg0w3Zl83jnjuwxnZOsnH9pGn93QHQtpU0p/8rYWxvbFZHneni6p1BSLK4DkGA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.19.0",
        "jiti": "^2.6.1",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.2.4"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.2.4.tgz",
      "integrity": "sha512-9El/iI069DKDSXwTvB9J4BwdO5JhRrOweGaK25taBAvBXyXqJAX+Jqdvs8r8gKpsI/1m0LeJLyQYTf/WLrBT1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.2.4",
        "@tailwindcss/oxide-darwin-arm64": "4.2.4",
        "@tailwindcss/oxide-darwin-x64": "4.2.4",
        "@tailwindcss/oxide-freebsd-x64": "4.2.4",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.2.4",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.2.4",
        "@tailwindcss/oxide-linux-arm64-musl": "4.2.4",
        "@tailwindcss/oxide-linux-x64-gnu": "4.2.4",
        "@tailwindcss/oxide-linux-x64-musl": "4.2.4",
        "@tailwindcss/oxide-wasm32-wasi": "4.2.4",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.2.4",
        "@tailwindcss/oxide-win32-x64-msvc": "4.2.4"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.2.4.tgz",
      "integrity": "sha512-e7MOr1SAn9U8KlZzPi1ZXGZHeC5anY36qjNwmZv9pOJ8E4Q6jmD1vyEHkQFmNOIN7twGPEMXRHmitN4zCMN03g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.2.4.tgz",
      "integrity": "sha512-tSC/Kbqpz/5/o/C2sG7QvOxAKqyd10bq+ypZNf+9Fi2TvbVbv1zNpcEptcsU7DPROaSbVgUXmrzKhurFvo5eDg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.2.4.tgz",
      "integrity": "sha512-yPyUXn3yO/ufR6+Kzv0t4fCg2qNr90jxXc5QqBpjlPNd0NqyDXcmQb/6weunH/MEDXW5dhyEi+agTDiqa3WsGg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.2.4.tgz",
      "integrity": "sha512-BoMIB4vMQtZsXdGLVc2z+P9DbETkiopogfWZKbWwM8b/1Vinbs4YcUwo+kM/KeLkX3Ygrf4/PsRndKaYhS8Eiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.2.4.tgz",
      "integrity": "sha512-7pIHBLTHYRAlS7V22JNuTh33yLH4VElwKtB3bwchK/UaKUPpQ0lPQiOWcbm4V3WP2I6fNIJ23vABIvoy2izdwA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.2.4.tgz",
      "integrity": "sha512-+E4wxJ0ZGOzSH325reXTWB48l42i93kQqMvDyz5gqfRzRZ7faNhnmvlV4EPGJU3QJM/3Ab5jhJ5pCRUsKn6OQw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.2.4.tgz",
      "integrity": "sha512-bBADEGAbo4ASnppIziaQJelekCxdMaxisrk+fB7Thit72IBnALp9K6ffA2G4ruj90G9XRS2VQ6q2bCKbfFV82g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.2.4.tgz",
      "integrity": "sha512-7Mx25E4WTfnht0TVRTyC00j3i0M+EeFe7wguMDTlX4mRxafznw0CA8WJkFjWYH5BlgELd1kSjuU2JiPnNZbJDA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.2.4.tgz",
      "integrity": "sha512-2wwJRF7nyhOR0hhHoChc04xngV3iS+akccHTGtz965FwF0up4b2lOdo6kI1EbDaEXKgvcrFBYcYQQ/rrnWFVfA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.2.4.tgz",
      "integrity": "sha512-FQsqApeor8Fo6gUEklzmaa9994orJZZDBAlQpK2Mq+DslRKFJeD6AjHpBQ0kZFQohVr8o85PPh8eOy86VlSCmw==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.8.1",
        "@emnapi/runtime": "^1.8.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.1",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.2.4.tgz",
      "integrity": "sha512-L9BXqxC4ToVgwMFqj3pmZRqyHEztulpUJzCxUtLjobMCzTPsGt1Fa9enKbOpY2iIyVtaHNeNvAK8ERP/64sqGQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.2.4.tgz",
      "integrity": "sha512-ESlKG0EpVJQwRjXDDa9rLvhEAh0mhP1sF7sap9dNZT0yyl9SAG6T7gdP09EH0vIv0UNTlo6jPWyujD6559fZvw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.2.4.tgz",
      "integrity": "sha512-wgAVj6nUWAolAu8YFvzT2cTBIElWHkjZwFYovF+xsqKsW2ADxM/X2opxj5NsF/qVccAOjRNe8X2IdPzMsWyHTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.2.4",
        "@tailwindcss/oxide": "4.2.4",
        "postcss": "^8.5.6",
        "tailwindcss": "4.2.4"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.19.39",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.39.tgz",
      "integrity": "sha512-orrrD74MBUyK8jOAD/r0+lfa1I2MO6I+vAkmAWzMYbCcgrN4lCrmK52gRFQq/JRxfYPfonkr4b0jcY7Olqdqbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.14",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.14.tgz",
      "integrity": "sha512-ilcTH/UniCkMdtexkoCN0bI7pMcJDvmQFPvuPvmEaYA/NSfFTAgdUSLAoVjaRJm7+6PvcM+q1zYOwS4wTYMF9w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.59.0.tgz",
      "integrity": "sha512-HyAZtpdkgZwpq8Sz3FSUvCR4c+ScbuWa9AksK2Jweub7w4M3yTz4O11AqVJzLYjy/B9ZWPyc81I+mOdJU/bDQw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.59.0",
        "@typescript-eslint/type-utils": "8.59.0",
        "@typescript-eslint/utils": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.59.0",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.59.0.tgz",
      "integrity": "sha512-TI1XGwKbDpo9tRW8UDIXCOeLk55qe9ZFGs8MTKU6/M08HWTw52DD/IYhfQtOEhEdPhLMT26Ka/x7p70nd3dzDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.59.0",
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/typescript-estree": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.59.0.tgz",
      "integrity": "sha512-Lw5ITrR5s5TbC19YSvlr63ZfLaJoU6vtKTHyB0GQOpX0W7d5/Ir6vUahWi/8Sps/nOukZQ0IB3SmlxZnjaKVnw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.59.0",
        "@typescript-eslint/types": "^8.59.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.59.0.tgz",
      "integrity": "sha512-UzR16Ut8IpA3Mc4DbgAShlPPkVm8xXMWafXxB0BocaVRHs8ZGakAxGRskF7FId3sdk9lgGD73GSFaWmWFDE4dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.59.0.tgz",
      "integrity": "sha512-91Sbl3s4Kb3SybliIY6muFBmHVv+pYXfybC4Oolp3dvk8BvIE3wOPc+403CWIT7mJNkfQRGtdqghzs2+Z91Tqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.59.0.tgz",
      "integrity": "sha512-3TRiZaQSltGqGeNrJzzr1+8YcEobKH9rHnqIp/1psfKFmhRQDNMGP5hBufanYTGznwShzVLs3Mz+gDN7HkWfXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/typescript-estree": "8.59.0",
        "@typescript-eslint/utils": "8.59.0",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.59.0.tgz",
      "integrity": "sha512-nLzdsT1gdOgFxxxwrlNVUBzSNBEEHJ86bblmk4QAS6stfig7rcJzWKqCyxFy3YRRHXDWEkb2NralA1nOYkkm/A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.59.0.tgz",
      "integrity": "sha512-O9Re9P1BmBLFJyikRbQpLku/QA3/AueZNO9WePLBwQrvkixTmDe8u76B6CYUAITRl/rHawggEqUGn5QIkVRLMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.59.0",
        "@typescript-eslint/tsconfig-utils": "8.59.0",
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/visitor-keys": "8.59.0",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.5.tgz",
      "integrity": "sha512-VZznLgtwhn+Mact9tfiwx64fA9erHH/MCXEUfB/0bX/6Fz6ny5EGTXYltMocqg4xFAQZtnO3DHWWXi8RiuN7cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.59.0.tgz",
      "integrity": "sha512-I1R/K7V07XsMJ12Oaxg/O9GfrysGTmCRhvZJBv0RE0NcULMzjqVpR5kRRQjHsz3J/bElU7HwCO7zkqL+MSUz+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.59.0",
        "@typescript-eslint/types": "8.59.0",
        "@typescript-eslint/typescript-estree": "8.59.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.59.0.tgz",
      "integrity": "sha512-/uejZt4dSere1bx12WLlPfv8GktzcaDtuJ7s42/HEZ5zGj9oxRaD4bj7qwSunXkf+pbAhFt2zjpHYUiT5lHf0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.0",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
      "integrity": "sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.11.1.tgz",
      "integrity": "sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.11.1.tgz",
      "integrity": "sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.11.1.tgz",
      "integrity": "sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.11.1.tgz",
      "integrity": "sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.11.1.tgz",
      "integrity": "sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.11.1.tgz",
      "integrity": "sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.11.1.tgz",
      "integrity": "sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.11.1.tgz",
      "integrity": "sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.11.1.tgz",
      "integrity": "sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.11.1.tgz",
      "integrity": "sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.11.1.tgz",
      "integrity": "sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.11.1.tgz",
      "integrity": "sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.11.1.tgz",
      "integrity": "sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.11.1.tgz",
      "integrity": "sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.11.1.tgz",
      "integrity": "sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^0.2.11"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.11.1.tgz",
      "integrity": "sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.11.1.tgz",
      "integrity": "sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.11.1.tgz",
      "integrity": "sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.16.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.16.0.tgz",
      "integrity": "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.14.0.tgz",
      "integrity": "sha512-IWrosm/yrn43eiKqkfkHis7QioDleaXQHdDVPKg0FSwwd/DuvyX79TZnFOnYpB7dcsFAMmtFztZuXPDvSePkFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.11.3",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.11.3.tgz",
      "integrity": "sha512-zBQouZixDTbo3jMGqHKyePxYxr1e5W8UdTmBQ7sNtaA9M2bE32daxxPLS/jojhKOHxQ7LWwPjfiwf/fhaJWzlg==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.21",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.21.tgz",
      "integrity": "sha512-Q+rUQ7Uz8AHM7DEaNdwvfFCTq7a43lNTzuS94eiWqwyxfV/wJv+oUivef51T91mmRY4d4A1u9rcSvkeufCVXlA==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.14.tgz",
      "integrity": "sha512-MWPGfDxnyzKU7rNOW9SP/c50vi3xrmrua/+6hfPbCS2ABNWfx24vPidzvC7krjU/RTo235sV776ymlsMtGKj8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.2",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.2.tgz",
      "integrity": "sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.10.12",
        "caniuse-lite": "^1.0.30001782",
        "electron-to-chromium": "^1.5.328",
        "node-releases": "^2.0.36",
        "update-browserslist-db": "^1.2.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001790",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001790.tgz",
      "integrity": "sha512-bOoxfJPyYo+ds6W0YfptaCWbFnJYjh2Y1Eow5lRv+vI2u8ganPZqNm1JwNh0t2ELQCqIWg4B3dWEusgAmsoyOw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.343",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.343.tgz",
      "integrity": "sha512-YHnQ3MXI08icvL9ZKnEBy05F2EQ8ob01UaMOuMbM8l+4UcAq6MPPbBTJBbsBUg3H8JeZNt+O4fjsoWth3p6IFg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.20.1",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.20.1.tgz",
      "integrity": "sha512-Qohcme7V1inbAfvjItgw0EaxVX5q2rdVEZHRBrEQdRZTssLDGsL8Lwrznl8oQ/6kuTJONLaDcGjkNP247XEhcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.2.tgz",
      "integrity": "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.3.2.tgz",
      "integrity": "sha512-HVLACW1TppGYjJ8H6/jqH/pqOtKRw6wMlrB23xfExmFWxFquAIWCmwoLsOyN96K4a5KbmOf5At9ZUO3GZbetAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.4",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.4.tgz",
      "integrity": "sha512-XoMjdBOwe/esVgEvLmNsD3IRHkm7fbKIUGvrleloJXUZgDHig2IPWNniv+GwjyJXzuNqVjlr5+4yVUZjycJwfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.2",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.5",
        "@eslint/js": "9.39.4",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.5",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-16.2.4.tgz",
      "integrity": "sha512-A6ekXYFj/YQxBPMl45g3e+U8zJo+X2+ZQwcz34pPKjpc/3S4roBA2Rd9xWB4FKuSxhofo1/95WjzmUY+wHrOhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "16.2.4",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-jsx-a11y": "^6.10.0",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^7.0.0",
        "globals": "16.4.0",
        "typescript-eslint": "^8.46.0"
      },
      "peerDependencies": {
        "eslint": ">=9.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next/node_modules/globals": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.4.0.tgz",
      "integrity": "sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.10.tgz",
      "integrity": "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.16.1",
        "resolve": "^2.0.0-next.6"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.1.tgz",
      "integrity": "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.1.1.tgz",
      "integrity": "sha512-f2I7Gw6JbvCexzIInuSbZpfdQ44D7iqdWX01FKLvrPgqxoE7oMj8clOfto8U6vYiz4yd5oKu39rRSVOe1zRu0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0 || ^10.0.0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.1.tgz",
      "integrity": "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.0.tgz",
      "integrity": "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.3.tgz",
      "integrity": "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/iceberg-js": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/iceberg-js/-/iceberg-js-0.8.1.tgz",
      "integrity": "sha512-1dhVQZXhcHje7798IVM+xoo/1ZdVfzOMIc8/rgVSijRK38EDqOJoGula9N/8ZI5RD8QTxNQtK/Gozpr+qUqRRA==",
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-bun-module/node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.8.0.tgz",
      "integrity": "sha512-WuvlsjngSk7TnTBJ1hsCy3ql9V9VOdcPkd3PKcSmM34vJD8KG6molxz7m7zbYFgICwsanQWmJ13JlYs4Zp7Arw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "16.2.4",
      "resolved": "https://registry.npmjs.org/next/-/next-16.2.4.tgz",
      "integrity": "sha512-kPvz56wF5frc+FxlHI5qnklCzbq53HTwORaWBGdT0vNoKh1Aya9XC8aPauH4NJxqtzbWsS5mAbctm4cr+EkQ2Q==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.2.4",
        "@swc/helpers": "0.5.15",
        "baseline-browser-mapping": "^2.9.19",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.2.4",
        "@next/swc-darwin-x64": "16.2.4",
        "@next/swc-linux-arm64-gnu": "16.2.4",
        "@next/swc-linux-arm64-musl": "16.2.4",
        "@next/swc-linux-x64-gnu": "16.2.4",
        "@next/swc-linux-x64-musl": "16.2.4",
        "@next/swc-win32-arm64-msvc": "16.2.4",
        "@next/swc-win32-x64-msvc": "16.2.4",
        "sharp": "^0.34.5"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-exports-info": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/node-exports-info/-/node-exports-info-1.6.0.tgz",
      "integrity": "sha512-pyFS63ptit/P5WqUkt+UUfe+4oevH+bFeIiPPdfb0pFeYEu/1ELnJu5l+5EcTKYL5M7zaAa7S8ddywgXypqKCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array.prototype.flatmap": "^1.3.3",
        "es-errors": "^1.3.0",
        "object.entries": "^1.1.9",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.38",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.38.tgz",
      "integrity": "sha512-3qT/88Y3FbH/Kx4szpQQ4HzUbVrHPKTLVpVocKiLfoYvw9XSGOX2FmD2d6DrXbVYyAQTF2HeF6My8jmzx7/CRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.10",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.10.tgz",
      "integrity": "sha512-pMMHxBOZKFU6HgAZ4eyGnwXF/EvPGGqUr0MnZ5+99485wwW41kW91A4LOGxSHhgugZmSChL5AlElNdwlNgcnLQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.4.tgz",
      "integrity": "sha512-9nfp2hYpCwOjAN+8TZFGhtWEwgvWHXqESH8qT89AT/lWklpLON22Lc8pEtnpsZz7VmawabSU0gCjnj8aC0euHQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.4.tgz",
      "integrity": "sha512-AXJdLo8kgMbimY95O2aKQqsz2iWi9jMgKJhRBAxECE4IFxfcazB2LmzloIoibJI3C12IlY20+KFaLv+71bUJeQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.4"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "2.0.0-next.6",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.6.tgz",
      "integrity": "sha512-3JmVl5hMGtJ3kMmB3zi3DL25KfkCEyy3Tw7Gmw7z5w8M9WlwoPFnIvwChzu1+cF3iaK3sp18hhPz8ANeimdJfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.1",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.4.tgz",
      "integrity": "sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.5.tgz",
      "integrity": "sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.7.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.2.4.tgz",
      "integrity": "sha512-HhKppgO81FQof5m6TEnuBWCZGgfRAWbaeOaGT00KOy/Pf/j6oUihdvBpA7ltCeAvZpFhW3j0PTclkxsd4IXYDA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.16",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.16.tgz",
      "integrity": "sha512-pn99VhoACYR8nFHhxqix+uvsbXineAasWm5ojXoN8xEwK5Kd3/TrhNn1wByuD52UxWRLy8pu+kRMniEi6Eq9Zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.59.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.59.0.tgz",
      "integrity": "sha512-BU3ONW9X+v90EcCH9ZS6LMackcVtxRLlI3XrYyqZIwVSHIk7Qf7bFw1z0M9Q0IUxhTMZCf8piY9hTYaNEIASrw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.59.0",
        "@typescript-eslint/parser": "8.59.0",
        "@typescript-eslint/typescript-estree": "8.59.0",
        "@typescript-eslint/utils": "8.59.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unrs-resolver": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
      "integrity": "sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.0"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.11.1",
        "@unrs/resolver-binding-android-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-x64": "1.11.1",
        "@unrs/resolver-binding-freebsd-x64": "1.11.1",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-musl": "1.11.1",
        "@unrs/resolver-binding-wasm32-wasi": "1.11.1",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.20",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.20.tgz",
      "integrity": "sha512-LYfpUkmqwl0h9A2HL09Mms427Q1RZWuOHsukfVcKRq9q95iQxdw0ix1JQrqbcDR9PH1QDwf5Qo8OZb5lksZ8Xg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.3.6",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.3.6.tgz",
      "integrity": "sha512-rftlrkhHZOcjDwkGlnUtZZkvaPHCsDATp4pGpuOOMDaTdDDXF91wuVDJoWoPsKX/3YPQ5fHuF3STjcYyKr+Qhg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}

```

## package.json
```json
{
  "name": "company-profile",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.108.2",
    "lucide-react": "^1.8.0",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

## README.md
```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

## skills-lock.json
```json
{
  "version": 1,
  "skills": {
    "supabase": {
      "source": "supabase/agent-skills",
      "sourceType": "github",
      "skillPath": "skills/supabase/SKILL.md",
      "computedHash": "61638e85394d2e39d1109cbf607593afb9733e0de19cdf0b52ec9bc32d95ea74"
    },
    "supabase-postgres-best-practices": {
      "source": "supabase/agent-skills",
      "sourceType": "github",
      "skillPath": "skills/supabase-postgres-best-practices/SKILL.md",
      "computedHash": "3639bed1f40b3fbadae79fee631c42c89b2d1f5c30b05d5aa3cca06422a6bbbc"
    }
  }
}

```

## tailwind.config.ts
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#C9A84C", light: "#E8D5A3", dark: "#9B7A2E" },
        navy: { DEFAULT: "#1A2744", light: "#2C3E6B" },
        charcoal: "#2D2D2D",
        "warm-gray": "#6B6B6B",
        "light-gray": "#F5F4F1",
        "brand-border": "#E2DDD5",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

```

## tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```
