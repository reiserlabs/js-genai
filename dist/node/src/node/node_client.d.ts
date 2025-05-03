/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client';
import { Caches } from '../caches';
import { Chats } from '../chats';
import { GoogleGenAIOptions } from '../client';
import { Files } from '../files';
import { Live } from '../live';
import { Models } from '../models';
import { Operations } from '../operations';
import { Tunings } from '../tunings';
/**
 * The Google GenAI SDK.
 *
 * @remarks
 * Provides access to the GenAI features through either the {@link
 * https://cloud.google.com/vertex-ai/docs/reference/rest | Gemini API} or
 * the {@link https://cloud.google.com/vertex-ai/docs/reference/rest | Vertex AI
 * API}.
 *
 * The {@link GoogleGenAIOptions.vertexai} value determines which of the API
 * services to use.
 *
 * When using the Gemini API, a {@link GoogleGenAIOptions.apiKey} must also be
 * set. When using Vertex AI, both {@link GoogleGenAIOptions.project} and {@link
 * GoogleGenAIOptions.location} must be set, or a {@link
 * GoogleGenAIOptions.apiKey} must be set when using Express Mode.
 *
 * Explicitly passed in values in {@link GoogleGenAIOptions} will always take
 * precedence over environment variables. If both project/location and api_key
 * exist in the environment variables, the project/location will be used.
 *
 * @example
 * Initializing the SDK for using the Gemini API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({apiKey: 'GEMINI_API_KEY'});
 * ```
 *
 * @example
 * Initializing the SDK for using the Vertex AI API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({
 *   vertexai: true,
 *   project: 'PROJECT_ID',
 *   location: 'PROJECT_LOCATION'
 * });
 * ```
 *
 */
export declare class GoogleGenAI {
    protected readonly apiClient: ApiClient;
    private readonly apiKey?;
    readonly vertexai: boolean;
    private readonly googleAuthOptions?;
    private readonly project?;
    private readonly location?;
    private readonly apiVersion?;
    readonly models: Models;
    readonly live: Live;
    readonly chats: Chats;
    readonly caches: Caches;
    readonly files: Files;
    readonly operations: Operations;
    readonly tunings: Tunings;
    constructor(options: GoogleGenAIOptions);
}
