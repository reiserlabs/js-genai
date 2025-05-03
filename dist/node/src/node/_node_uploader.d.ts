import { ApiClient } from '../_api_client';
import { FileStat, Uploader } from '../_uploader';
import { File } from '../types';
export declare class NodeUploader implements Uploader {
    stat(file: string | Blob): Promise<FileStat>;
    upload(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
    /**
     * Infers the MIME type of a file based on its extension.
     *
     * @param filePath The path to the file.
     * @returns The MIME type of the file, or undefined if it cannot be inferred.
     */
    private inferMimeType;
    private uploadFileFromPath;
}
