/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client';
import * as types from './types';
export declare function tModel(apiClient: ApiClient, model: string | unknown): string;
export declare function tCachesModel(apiClient: ApiClient, model: string | unknown): string;
export declare function tBlobs(apiClient: ApiClient, blobs: types.BlobImageUnion | types.BlobImageUnion[]): types.Blob[];
export declare function tBlob(apiClient: ApiClient, blob: types.BlobImageUnion): types.Blob;
export declare function tImageBlob(apiClient: ApiClient, blob: types.BlobImageUnion): types.Blob;
export declare function tAudioBlob(apiClient: ApiClient, blob: types.Blob): types.Blob;
export declare function tPart(apiClient: ApiClient, origin?: types.PartUnion | null): types.Part;
export declare function tParts(apiClient: ApiClient, origin?: types.PartListUnion | null): types.Part[];
export declare function tContent(apiClient: ApiClient, origin?: types.ContentUnion): types.Content;
export declare function tContentsForEmbed(apiClient: ApiClient, origin: types.ContentListUnion): types.ContentUnion[];
export declare function tContents(apiClient: ApiClient, origin?: types.ContentListUnion): types.Content[];
export declare function tSchema(apiClient: ApiClient, schema: types.Schema): types.Schema;
export declare function tSpeechConfig(apiClient: ApiClient, speechConfig: types.SpeechConfigUnion): types.SpeechConfig;
export declare function tTool(apiClient: ApiClient, tool: types.Tool): types.Tool;
export declare function tTools(apiClient: ApiClient, tool: types.Tool[] | unknown): types.Tool[];
export declare function tCachedContentName(apiClient: ApiClient, name: string | unknown): string;
export declare function tTuningJobStatus(apiClient: ApiClient, status: string | unknown): string;
export declare function tBytes(apiClient: ApiClient, fromImageBytes: string | unknown): string;
export declare function tFileName(apiClient: ApiClient, fromName: string | unknown): string;
export declare function tModelsUrl(apiClient: ApiClient, baseModels: boolean | unknown): string;
export declare function tExtractModels(apiClient: ApiClient, response: unknown): Record<string, unknown>[];
