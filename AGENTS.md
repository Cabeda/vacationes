# Vacationes — Project Guidelines

## Overview

Vacationes is a local-first, offline-capable web application for managing vacation and leave balances for individuals or families. It uses Martin Kleppmann's Automerge CRDT for peer-to-peer synchronization without requiring a central server.

## Tech Stack

- **Framework**: Astro (SSG) + Svelte (client islands)
- **Data/CRDT**: `@automerge/automerge-repo`
- **Storage**: IndexedDB via `automerge-repo-storage-indexeddb`
- **Tab Sync**: `BroadcastChannel` via `automerge-repo-network-broadcastchannel`
- **P2P Sync**: Custom WebRTC adapter with manual SDP exchange via QR codes
- **Holidays**: Nager.Date API (`https://date.nager.at/api/v3/PublicHolidays/`)
- **Styling**: Tailwind CSS
- **i18n**: svelte-i18n
- **QR Codes**: qrcode (generation) + html5-qrcode (scanning)
- **Testing**: Vitest + Testing Library + Playwright

## Architecture Principles

### Local-First

All data lives in the browser's IndexedDB via Automerge. No server required for core functionality. The app works fully offline.

### P2P Sync

Devices sync via WebRTC using a QR-code-based manual pairing flow (inspired by LocalSend). No signaling server needed for data — only for the initial WebRTC handshake. After pairing, data flows directly peer-to-peer.

### TDD Approach

- Write tests **before** implementing features
- Maintain >90% code coverage
- All new features must have corresponding tests
- Run tests frequently during development

## Development Workflow

### Prerequisites

- Node.js 20+
- pnpm (preferred) or npm

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm dev        # Start dev server
pnpm test       # Run unit tests (Vitest)
pnpm test:e2e  # Run E2E tests (Playwright)
pnpm coverage   # Generate coverage report
pnpm lint       # Lint code
pnpm typecheck  # TypeScript check
```

### Testing Strategy

- **Unit tests**: Vitest for all business logic, utilities, and Svelte components
- **Integration tests**: Test Automerge document operations and data flow
- **E2E tests**: Playwright for critical user flows (add vacation, sync pairing, settings)
- **Coverage threshold**: >90% for business logic files

### Git Workflow

1. Write failing tests first (TDD)
2. Implement the feature until tests pass
3. Ensure coverage meets threshold
4. Commit early and often with descriptive messages
5. Push only after all pre-push hooks pass

### Commit Message Convention

Follow Conventional Commits:

- `feat: add vacation entry form`
- `fix: correct balance calculation for half-days`
- `test: add tests for leave type CRUD`
- `refactor: extract holiday fetching logic`
- `docs: update AGENTS.md`

### Pre-Push Hooks

Before every `git push`, the following must pass:

1. `pnpm test` — all unit tests
2. `pnpm coverage` — coverage report (must exceed 90%)
3. `pnpm lint` — ESLint checks
4. `pnpm typecheck` — TypeScript type checking

### CI/CD

GitHub Actions runs on every push and PR:

1. Install dependencies
2. Run `pnpm test`
3. Run `pnpm coverage` (fail if <90%)
4. Run `pnpm lint`
5. Run `pnpm typecheck`
6. Run `pnpm test:e2e` (Playwright)

## Data Model

### LeaveType

```typescript
interface LeaveType {
  id: string
  name: { pt: string; en: string }
  color: string
  icon: string
  annualAllowance: number | null  // null = unlimited
  deductsFrom: string | null      // ID of type to deduct from (e.g., half-day from vacation)
  halfDayAllowed: boolean
  isDefault: boolean
  order: number
}
```

### Profile

```typescript
interface Profile {
  id: string
  name: string
  municipality: string
  color: string
  leaveBalances: Record<string, number>  // leaveTypeId -> annual allowance
}
```

### Entry

```typescript
interface Entry {
  id: string
  personId: string
  leaveTypeId: string
  startDate: string
  endDate: string
  halfDay: 'morning' | 'afternoon' | null
  label: string
  notes: string
  destination: string
  budget: number | null
  status: 'planned' | 'confirmed' | 'completed'
  createdAt: string
}
```

### Document

```typescript
interface VacationesDoc {
  profiles: Record<string, Profile>
  leaveTypes: Record<string, LeaveType>
  entries: Record<string, Entry>
  holidays: Record<number, Holiday[]>  // year -> holidays
  settings: {
    year: number
    language: 'pt' | 'en'
  }
}
```

## File Structure

```
src/
├── components/
│   ├── Calendar.svelte
│   ├── DayCell.svelte
│   ├── EntryForm.svelte
│   ├── LeaveTypePicker.svelte
│   ├── LeaveTypeManager.svelte
│   ├── BalanceOverview.svelte
│   ├── SyncPairing.svelte
│   ├── SettingsPanel.svelte
│   ├── LanguageToggle.svelte
│   └── Nav.svelte
├── lib/
│   ├── automerge.ts           # Repo initialization
│   ├── holidays.ts            # Nager.Date API + caching
│   ├── balance.ts             # Balance calculations
│   ├── leave-defaults.ts      # Default leave type definitions
│   ├── i18n.ts               # Translation store
│   ├── types.ts               # TypeScript interfaces
│   └── utils.ts               # Date helpers
├── i18n/
│   ├── pt.json
│   └── en.json
├── tests/
│   ├── unit/                  # Vitest unit tests
│   │   ├── utils.test.ts
│   │   ├── balance.test.ts
│   │   ├── holidays.test.ts
│   │   └── leave-defaults.test.ts
│   └── e2e/                  # Playwright E2E tests
│       └── app.spec.ts
└── layouts/
    └── Layout.astro
```

## P2P Sync Flow

1. **Device A** opens Sync page → taps "Pair new device"
2. App generates WebRTC SDP offer → displays as QR code
3. **Device B** opens Sync page → taps "Scan to pair"
4. Device B scans QR → generates SDP answer → displays as QR
5. Device A scans Device B's QR → WebRTC connection established
6. Automerge syncs document over WebRTC DataChannel
7. Pairing saved locally for automatic reconnection

## Holidays

- Fetched from Nager.Date API: `https://date.nager.at/api/v3/PublicHolidays/{year}/PT`
- Cached in IndexedDB per year
- National holidays apply to everyone
- Municipal holidays (from hardcoded list) apply based on user's municipality
- Manual holiday additions supported in settings

## Supported Leave Types (Defaults)

| Type | PT Name | Default Days | Notes |
|------|---------|-------------|-------|
| Férias | Férias | 22 | Standard PT vacation |
| Flex Days | Dias flex | 0 | Company benefit, configurable |
| Wedding | Casamento | 15 | PT labor law |
| Bereavement | Luto | 5 | PT labor law |
| Sick | Baixa | unlimited | Medical, not balance-tracked |
| Half-day | Meio-dia | — | Deducts 0.5 from Férias |
| Parental | Licença parental | — | PT law varies |

## Future Extensibility

The configurable leave type system allows adding:

- Sabbatical leave
- Unpaid leave
- Training/education leave
- Blood donation days
- Union activity days
- Any custom company-specific leave

## Important Notes

- All Svelte components use `client:only="svelte"` in Astro pages (Automerge requires browser APIs)
- The app must work fully offline after initial holiday data is cached
- Pre-push hooks are enforced locally; CI enforces them on all pushes
- Use Portuguese (PT) as default language with English (EN) as secondary
