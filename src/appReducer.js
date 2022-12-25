import { createContext } from 'react';
import { v4 } from 'uuid';

import CounterWindow from './CounterWindow';

// context
export const AppContext = createContext();

// initial state
export const initialState = {
  allWindowIds: [1],
  windowById: {
    1: {
      id: 1,
      title: 'Counter',
      icon: 'bg-directory_closed_1',
      Component: CounterWindow,
      passThroughProps: {},
      isMinimized: false,
    },
  },
  allDesktopShortcutIds: [1, 2, 3, 4, 5, 6, 7, 8],
  desktopShortcutById: {
    1: { id: 1, text: 'My Computer', icon: 'bg-computer_explorer_5', column: 1, row: undefined },
    2: { id: 2, text: 'My Documents', icon: 'bg-directory_open_file_mydocs_4', column: 1, row: undefined },
    3: { id: 3, text: 'Internet Explorer', icon: 'bg-msie1_2', column: 1, row: undefined },
    4: { id: 4, text: 'Network', icon: 'bg-network_cool_two_pcs_0', column: 1, row: undefined },
    5: { id: 5, text: 'Recycle Bin', icon: 'bg-recycle_bin_empty_4', column: 1, row: undefined },
    6: { id: 6, text: 'Setup MSN Internet Assistant', icon: 'bg-msn2_0', column: 1, row: undefined },
    7: { id: 7, text: 'Outlook Express', icon: 'bg-outlook_express_4', column: 2, row: 2 },
    8: { id: 8, text: 'Online Services', icon: 'bg-directory_closed_4', column: 2, row: 1 },
  },
};

// action types
const ADD_WINDOW = '@app/ADD_WINDOW';
const REMOVE_WINDOW = '@app/REMOVE_WINDOW';
const MINIMIZE_WINDOW = '@app/MINIMIZE_WINDOW';
const RESTORE_WINDOW = '@app/RESTORE_WINDOW';

// actions
export function addWindow(title, icon, element) {
  return {
    type: ADD_WINDOW,
    payload: { title, icon, element },
  };
}

export function removeWindow(windowId) {
  return {
    type: REMOVE_WINDOW,
    payload: windowId,
  };
}

export function minimizeWindow(windowId) {
  return {
    type: MINIMIZE_WINDOW,
    payload: windowId,
  };
}

export function restoreWindow(windowId) {
  return {
    type: RESTORE_WINDOW,
    payload: windowId,
  };
}

// reducer
export default function appReducer(draft, action) {
  switch (action.type) {
    case ADD_WINDOW: {
      const { title, icon, element } = action.payload;
      const id = v4();
      draft.allWindowIds = [...draft.allWindowIds, id];
      draft.windowById[id] = {
        id,
        title,
        icon,
        element,
        isMinimized: false,
      };
      return;
    }
    case REMOVE_WINDOW: {
      const idToRemove = action.payload;
      draft.allWindowIds = draft.allWindowIds.filter((id) => id !== idToRemove);
      delete draft.windowById[idToRemove];
      return;
    }
    case MINIMIZE_WINDOW: {
      const id = action.payload;
      draft.windowById[id].isMinimized = true;
      return;
    }
    case RESTORE_WINDOW: {
      const id = action.payload;
      draft.windowById[id].isMinimized = false;
      return;
    }
    default:
      return;
  }
}
