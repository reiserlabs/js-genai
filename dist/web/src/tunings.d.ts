/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client';
import { BaseModule } from './_common';
import { Pager } from './pagers';
import * as types from './types';
export declare class Tunings extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Gets a TuningJob.
     *
     * @param name - The resource name of the tuning job.
     * @return - A TuningJob object.
     *
     * @experimental - The SDK's tuning implementation is experimental, and may
     * change in future versions.
     */
    get: (params: types.GetTuningJobParameters) => Promise<types.TuningJob>;
    /**
     * Lists tuning jobs.
     *
     * @param config - The configuration for the list request.
     * @return - A list of tuning jobs.
     *
     * @experimental - The SDK's tuning implementation is experimental, and may
     * change in future versions.
     */
    list: (params?: types.ListTuningJobsParameters) => Promise<Pager<types.TuningJob>>;
    /**
     * Creates a supervised fine-tuning job.
     *
     * @param params - The parameters for the tuning job.
     * @return - A TuningJob operation.
     *
     * @experimental - The SDK's tuning implementation is experimental, and may
     * change in future versions.
     */
    tune: (params: types.CreateTuningJobParameters) => Promise<types.TuningJob>;
    private getInternal;
    private listInternal;
    private tuneInternal;
    private tuneMldevInternal;
}
