import { TEST_TYPE, TEST_TYPE_WITH_PAYLOAD } from "./types";

/**
 * @return { Object }
 **/
export function test() {
    return { type: TEST_TYPE };
}

/**
 * @return { Object }
 **/
export function testActionWithPayload(payload) {
    return { type: TEST_TYPE_WITH_PAYLOAD, payload };
}

