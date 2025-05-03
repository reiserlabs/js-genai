/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client';
import * as types from '../types';
export declare function getOperationParametersToMldev(apiClient: ApiClient, fromObject: types.GetOperationParameters): Record<string, unknown>;
export declare function getOperationParametersToVertex(apiClient: ApiClient, fromObject: types.GetOperationParameters): Record<string, unknown>;
export declare function fetchPredictOperationParametersToVertex(apiClient: ApiClient, fromObject: types.FetchPredictOperationParameters): Record<string, unknown>;
export declare function videoFromMldev(apiClient: ApiClient, fromObject: types.Video): Record<string, unknown>;
export declare function generatedVideoFromMldev(apiClient: ApiClient, fromObject: types.GeneratedVideo): Record<string, unknown>;
export declare function generateVideosResponseFromMldev(apiClient: ApiClient, fromObject: types.GenerateVideosResponse): Record<string, unknown>;
export declare function generateVideosOperationFromMldev(apiClient: ApiClient, fromObject: types.GenerateVideosOperation): Record<string, unknown>;
export declare function videoFromVertex(apiClient: ApiClient, fromObject: types.Video): Record<string, unknown>;
export declare function generatedVideoFromVertex(apiClient: ApiClient, fromObject: types.GeneratedVideo): Record<string, unknown>;
export declare function generateVideosResponseFromVertex(apiClient: ApiClient, fromObject: types.GenerateVideosResponse): Record<string, unknown>;
export declare function generateVideosOperationFromVertex(apiClient: ApiClient, fromObject: types.GenerateVideosOperation): Record<string, unknown>;
