import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
    getDeviceInfo(): {
        platform: string;
        osVersion: string;
        timeZone: string;
    };
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeSystemInfo',
);