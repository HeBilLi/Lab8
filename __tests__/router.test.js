/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

describe('test for pushToHistory', () => {
    test('checkSettingCase', () => {
        history = pushToHistory("settings", 2);
        expect(history.state['page']).toBe("settings");
    });

    test('checkEntryCase', () => {
        let entryNum = 2;
        history = pushToHistory("entry", entryNum);
        expect(history.state['page']).toBe(`entry${entryNum}`);
    });

    test('checkDefaultCase', () => {
        history = pushToHistory("default", 1);
        expect(history.state['page']).toBe(undefined);
    });
});