/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client';
import { FileStat, Uploader } from '../_uploader';
import { File } from '../types';
export declare class BrowserUploader implements Uploader {
    upload(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
    stat(file: string | Blob): Promise<FileStat>;
}
