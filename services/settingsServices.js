import { settings } from '../fakedb/settings';

export const settingsServices = {
    getSettings : () => {
        return settings;
    }
}