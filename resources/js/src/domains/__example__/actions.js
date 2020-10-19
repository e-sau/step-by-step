import { TEST_TYPE, TEST_TYPE_WITH_PAYLOAD } from './types';

/**
 * @return { Object<{ type: String }> }
 **/
export function test() {
    return { type: TEST_TYPE };
}

/**
 * @return { Object<{ type: String, payload: any }> }
 **/
export function testWithPayload( payload ) {
    return { type: TEST_TYPE_WITH_PAYLOAD, payload };
}