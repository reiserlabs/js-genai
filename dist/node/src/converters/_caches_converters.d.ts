/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client';
import * as types from '../types';
export declare function partToMldev(apiClient: ApiClient, fromObject: types.Part): Record<string, unknown>;
export declare function contentToMldev(apiClient: ApiClient, fromObject: types.Content): Record<string, unknown>;
export declare function googleSearchToMldev(): Record<string, unknown>;
export declare function dynamicRetrievalConfigToMldev(apiClient: ApiClient, fromObject: types.DynamicRetrievalConfig): Record<string, unknown>;
export declare function googleSearchRetrievalToMldev(apiClient: ApiClient, fromObject: types.GoogleSearchRetrieval): Record<string, unknown>;
export declare function enterpriseWebSearchToMldev(): Record<string, unknown>;
export declare function apiKeyConfigToMldev(apiClient: ApiClient, fromObject: types.ApiKeyConfig): Record<string, unknown>;
export declare function authConfigToMldev(apiClient: ApiClient, fromObject: types.AuthConfig): Record<string, unknown>;
export declare function googleMapsToMldev(apiClient: ApiClient, fromObject: types.GoogleMaps): Record<string, unknown>;
export declare function toolToMldev(apiClient: ApiClient, fromObject: types.Tool): Record<string, unknown>;
export declare function functionCallingConfigToMldev(apiClient: ApiClient, fromObject: types.FunctionCallingConfig): Record<string, unknown>;
export declare function toolConfigToMldev(apiClient: ApiClient, fromObject: types.ToolConfig): Record<string, unknown>;
export declare function createCachedContentConfigToMldev(apiClient: ApiClient, fromObject: types.CreateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.CreateCachedContentParameters): Record<string, unknown>;
export declare function getCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.GetCachedContentParameters): Record<string, unknown>;
export declare function deleteCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.DeleteCachedContentParameters): Record<string, unknown>;
export declare function updateCachedContentConfigToMldev(apiClient: ApiClient, fromObject: types.UpdateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function updateCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.UpdateCachedContentParameters): Record<string, unknown>;
export declare function listCachedContentsConfigToMldev(apiClient: ApiClient, fromObject: types.ListCachedContentsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listCachedContentsParametersToMldev(apiClient: ApiClient, fromObject: types.ListCachedContentsParameters): Record<string, unknown>;
export declare function partToVertex(apiClient: ApiClient, fromObject: types.Part): Record<string, unknown>;
export declare function contentToVertex(apiClient: ApiClient, fromObject: types.Content): Record<string, unknown>;
export declare function googleSearchToVertex(): Record<string, unknown>;
export declare function dynamicRetrievalConfigToVertex(apiClient: ApiClient, fromObject: types.DynamicRetrievalConfig): Record<string, unknown>;
export declare function googleSearchRetrievalToVertex(apiClient: ApiClient, fromObject: types.GoogleSearchRetrieval): Record<string, unknown>;
export declare function enterpriseWebSearchToVertex(): Record<string, unknown>;
export declare function apiKeyConfigToVertex(apiClient: ApiClient, fromObject: types.ApiKeyConfig): Record<string, unknown>;
export declare function authConfigToVertex(apiClient: ApiClient, fromObject: types.AuthConfig): Record<string, unknown>;
export declare function googleMapsToVertex(apiClient: ApiClient, fromObject: types.GoogleMaps): Record<string, unknown>;
export declare function toolToVertex(apiClient: ApiClient, fromObject: types.Tool): Record<string, unknown>;
export declare function functionCallingConfigToVertex(apiClient: ApiClient, fromObject: types.FunctionCallingConfig): Record<string, unknown>;
export declare function toolConfigToVertex(apiClient: ApiClient, fromObject: types.ToolConfig): Record<string, unknown>;
export declare function createCachedContentConfigToVertex(apiClient: ApiClient, fromObject: types.CreateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.CreateCachedContentParameters): Record<string, unknown>;
export declare function getCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.GetCachedContentParameters): Record<string, unknown>;
export declare function deleteCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.DeleteCachedContentParameters): Record<string, unknown>;
export declare function updateCachedContentConfigToVertex(apiClient: ApiClient, fromObject: types.UpdateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function updateCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.UpdateCachedContentParameters): Record<string, unknown>;
export declare function listCachedContentsConfigToVertex(apiClient: ApiClient, fromObject: types.ListCachedContentsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listCachedContentsParametersToVertex(apiClient: ApiClient, fromObject: types.ListCachedContentsParameters): Record<string, unknown>;
export declare function cachedContentFromMldev(apiClient: ApiClient, fromObject: types.CachedContent): Record<string, unknown>;
export declare function deleteCachedContentResponseFromMldev(): Record<string, unknown>;
export declare function listCachedContentsResponseFromMldev(apiClient: ApiClient, fromObject: types.ListCachedContentsResponse): Record<string, unknown>;
export declare function cachedContentFromVertex(apiClient: ApiClient, fromObject: types.CachedContent): Record<string, unknown>;
export declare function deleteCachedContentResponseFromVertex(): Record<string, unknown>;
export declare function listCachedContentsResponseFromVertex(apiClient: ApiClient, fromObject: types.ListCachedContentsResponse): Record<string, unknown>;
