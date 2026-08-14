import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
    getDate(format: string): string;
    getDateAsync(format: string): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeLocalDate',
);