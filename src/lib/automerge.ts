import { Repo, type DocHandle, isValidAutomergeUrl } from '@automerge/automerge-repo';
import { BroadcastChannelNetworkAdapter } from '@automerge/automerge-repo-network-broadcastchannel';
import { IndexedDBStorageAdapter } from '@automerge/automerge-repo-storage-indexeddb';
import { writable, type Writable } from 'svelte/store';

import { DEFAULT_LEAVE_TYPES } from './leave-defaults';
import type { VacationesDoc } from './types';
import { generateId } from './utils';

const STORAGE_KEY = 'vacationes-doc-url';

let repo: Repo | null = null;
let handle: DocHandle<VacationesDoc> | null = null;

export const vacationesDoc: Writable<VacationesDoc | null> = writable(null);

export function getRepo(): Repo {
  if (!repo) {
    repo = new Repo({
      storage: new IndexedDBStorageAdapter('vacationes-db'),
      network: [new BroadcastChannelNetworkAdapter()]
    });
  }
  return repo;
}

export function createInitialDoc(): VacationesDoc {
  const myProfileId = generateId();
  const wifeProfileId = generateId();

  return {
    profiles: {
      [myProfileId]: {
        id: myProfileId,
        name: 'Me',
        municipality: 'Lisboa',
        color: '#3B82F6',
        leaveBalances: { ferias: 22, flex: 5, casamento: 15, luto: 5 }
      },
      [wifeProfileId]: {
        id: wifeProfileId,
        name: 'Wife',
        municipality: 'Lisboa',
        color: '#EC4899',
        leaveBalances: { ferias: 22, flex: 0, casamento: 15, luto: 5 }
      }
    },
    leaveTypes: DEFAULT_LEAVE_TYPES.reduce(
      (acc, lt) => { acc[lt.id] = lt; return acc; },
      {} as VacationesDoc['leaveTypes']
    ),
    entries: {},
    holidays: {},
    settings: { year: new Date().getFullYear(), language: 'pt' },
    pairedDevices: {}
  };
}

export async function initializeDoc(): Promise<void> {
  // Already initialized — return immediately (idempotent)
  if (handle) {return;}

  const r = getRepo();
  const savedUrl = localStorage.getItem(STORAGE_KEY);

  if (savedUrl && isValidAutomergeUrl(savedUrl)) {
    try {
      handle = await r.find<VacationesDoc>(savedUrl);
      await handle.whenReady();
    } catch {
      handle = null;
    }
  }

  if (!handle) {
    handle = r.create<VacationesDoc>(createInitialDoc());
    localStorage.setItem(STORAGE_KEY, handle.url);
  }

  // Push initial state
  const current = handle.doc();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (current) {vacationesDoc.set(current);}

  // Subscribe to future changes
  handle.on('change', ({ doc }) => {
    vacationesDoc.set(doc);
  });
}

export function getDocHandle(): DocHandle<VacationesDoc> | null {
  return handle;
}

export function updateDoc(fn: (doc: VacationesDoc) => void): void {
  if (!handle) {
    console.warn('updateDoc called before initializeDoc');
    return;
  }
  handle.change(fn);
}
