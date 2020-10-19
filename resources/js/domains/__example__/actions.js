import { TEST_TYPE, TEST_TYPE_WITH_PAYLOAD } from './types';

export function test() {
    return { type: TEST_TYPE };
}

export function testWithPayload( payload ) {
    return { type: TEST_TYPE_WITH_PAYLOAD, payload };
}