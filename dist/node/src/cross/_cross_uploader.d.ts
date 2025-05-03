/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client';
import { FileStat, Uploader } from '../_uploader';
import { File } from '../types';
export declare const MAX_CHUNK_SIZE: number;
export declare class CrossUploader implements Uploader {
    upload(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
    stat(file: string | Blob): Promise<FileStat>;
}
export declare function uploadBlob(file: Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
export declare function getBlobStat(file: Blob): Promise<FileStat>;
