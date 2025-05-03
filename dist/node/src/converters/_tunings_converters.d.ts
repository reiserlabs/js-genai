/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client';
import * as types from '../types';
export declare function getTuningJobParametersToMldev(apiClient: ApiClient, fromObject: types.GetTuningJobParameters): Record<string, unknown>;
export declare function listTuningJobsConfigToMldev(apiClient: ApiClient, fromObject: types.ListTuningJobsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listTuningJobsParametersToMldev(apiClient: ApiClient, fromObject: types.ListTuningJobsParameters): Record<string, unknown>;
export declare function tuningExampleToMldev(apiClient: ApiClient, fromObject: types.TuningExample): Record<string, unknown>;
export declare function tuningDatasetToMldev(apiClient: ApiClient, fromObject: types.TuningDataset): Record<string, unknown>;
export declare function tuningValidationDatasetToMldev(apiClient: ApiClient, fromObject: types.TuningValidationDataset): Record<string, unknown>;
export declare function createTuningJobConfigToMldev(apiClient: ApiClient, fromObject: types.CreateTuningJobConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createTuningJobParametersToMldev(apiClient: ApiClient, fromObject: types.CreateTuningJobParameters): Record<string, unknown>;
export declare function getTuningJobParametersToVertex(apiClient: ApiClient, fromObject: types.GetTuningJobParameters): Record<string, unknown>;
export declare function listTuningJobsConfigToVertex(apiClient: ApiClient, fromObject: types.ListTuningJobsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listTuningJobsParametersToVertex(apiClient: ApiClient, fromObject: types.ListTuningJobsParameters): Record<string, unknown>;
export declare function tuningExampleToVertex(apiClient: ApiClient, fromObject: types.TuningExample): Record<string, unknown>;
export declare function tuningDatasetToVertex(apiClient: ApiClient, fromObject: types.TuningDataset, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function tuningValidationDatasetToVertex(apiClient: ApiClient, fromObject: types.TuningValidationDataset): Record<string, unknown>;
export declare function createTuningJobConfigToVertex(apiClient: ApiClient, fromObject: types.CreateTuningJobConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createTuningJobParametersToVertex(apiClient: ApiClient, fromObject: types.CreateTuningJobParameters): Record<string, unknown>;
export declare function tunedModelFromMldev(apiClient: ApiClient, fromObject: types.TunedModel): Record<string, unknown>;
export declare function tuningJobFromMldev(apiClient: ApiClient, fromObject: types.TuningJob): Record<string, unknown>;
export declare function listTuningJobsResponseFromMldev(apiClient: ApiClient, fromObject: types.ListTuningJobsResponse): Record<string, unknown>;
export declare function operationFromMldev(apiClient: ApiClient, fromObject: types.Operation): Record<string, unknown>;
export declare function tunedModelFromVertex(apiClient: ApiClient, fromObject: types.TunedModel): Record<string, unknown>;
export declare function tuningJobFromVertex(apiClient: ApiClient, fromObject: types.TuningJob): Record<string, unknown>;
export declare function listTuningJobsResponseFromVertex(apiClient: ApiClient, fromObject: types.ListTuningJobsResponse): Record<string, unknown>;
