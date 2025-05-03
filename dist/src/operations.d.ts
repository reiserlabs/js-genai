/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client';
import { BaseModule } from './_common';
import * as types from './types';
export declare class Operations extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Gets the status of a long-running operation.
     *
     * @param parameters The parameters for the get operation request.
     * @return The updated Operation object, with the latest status or result.
     */
    getVideosOperation(parameters: types.OperationGetParameters): Promise<types.GenerateVideosOperation>;
    private getVideosOperationInternal;
    private fetchPredictVideosOperationInternal;
}
