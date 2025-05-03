/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client';
import * as types from '../types';
export declare function listFilesConfigToMldev(apiClient: ApiClient, fromObject: types.ListFilesConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listFilesParametersToMldev(apiClient: ApiClient, fromObject: types.ListFilesParameters): Record<string, unknown>;
export declare function fileStatusToMldev(apiClient: ApiClient, fromObject: types.FileStatus): Record<string, unknown>;
export declare function fileToMldev(apiClient: ApiClient, fromObject: types.File): Record<string, unknown>;
export declare function createFileParametersToMldev(apiClient: ApiClient, fromObject: types.CreateFileParameters): Record<string, unknown>;
export declare function getFileParametersToMldev(apiClient: ApiClient, fromObject: types.GetFileParameters): Record<string, unknown>;
export declare function deleteFileParametersToMldev(apiClient: ApiClient, fromObject: types.DeleteFileParameters): Record<string, unknown>;
export declare function fileStatusFromMldev(apiClient: ApiClient, fromObject: types.FileStatus): Record<string, unknown>;
export declare function fileFromMldev(apiClient: ApiClient, fromObject: types.File): Record<string, unknown>;
export declare function listFilesResponseFromMldev(apiClient: ApiClient, fromObject: types.ListFilesResponse): Record<string, unknown>;
export declare function createFileResponseFromMldev(): Record<string, unknown>;
export declare function deleteFileResponseFromMldev(): Record<string, unknown>;
