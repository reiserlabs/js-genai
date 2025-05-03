/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client';
import { BaseModule } from './_common';
import { Pager } from './pagers';
import * as types from './types';
export declare class Models extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Makes an API request to generate content with a given model.
     *
     * For the `model` parameter, supported formats for Vertex AI API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The full resource name starts with 'projects/', for example:
     *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
     * - The partial resource name with 'publishers/', for example:
     *  'publishers/google/models/gemini-2.0-flash' or
     *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
     * - `/` separated publisher and model name, for example:
     * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
     *
     * For the `model` parameter, supported formats for Gemini API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The model name starts with 'models/', for example:
     *  'models/gemini-2.0-flash'
     * - For tuned models, the model name starts with 'tunedModels/',
     * for example:
     * 'tunedModels/1234567890123456789'
     *
     * Some models support multimodal input and output.
     *
     * @param params - The parameters for generating content.
     * @return The response from generating content.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents: 'why is the sky blue?',
     *   config: {
     *     candidateCount: 2,
     *   }
     * });
     * console.log(response);
     * ```
     */
    generateContent: (params: types.GenerateContentParameters) => Promise<types.GenerateContentResponse>;
    /**
     * Makes an API request to generate content with a given model and yields the
     * response in chunks.
     *
     * For the `model` parameter, supported formats for Vertex AI API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The full resource name starts with 'projects/', for example:
     *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
     * - The partial resource name with 'publishers/', for example:
     *  'publishers/google/models/gemini-2.0-flash' or
     *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
     * - `/` separated publisher and model name, for example:
     * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
     *
     * For the `model` parameter, supported formats for Gemini API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The model name starts with 'models/', for example:
     *  'models/gemini-2.0-flash'
     * - For tuned models, the model name starts with 'tunedModels/',
     * for example:
     *  'tunedModels/1234567890123456789'
     *
     * Some models support multimodal input and output.
     *
     * @param params - The parameters for generating content with streaming response.
     * @return The response from generating content.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContentStream({
     *   model: 'gemini-2.0-flash',
     *   contents: 'why is the sky blue?',
     *   config: {
     *     maxOutputTokens: 200,
     *   }
     * });
     * for await (const chunk of response) {
     *   console.log(chunk);
     * }
     * ```
     */
    generateContentStream: (params: types.GenerateContentParameters) => Promise<AsyncGenerator<types.GenerateContentResponse>>;
    /**
     * Generates an image based on a text description and configuration.
     *
     * @param model - The model to use.
     * @param prompt - A text description of the image to generate.
     * @param [config] - The config for image generation.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await client.models.generateImages({
     *  model: 'imagen-3.0-generate-002',
     *  prompt: 'Robot holding a red skateboard',
     *  config: {
     *    numberOfImages: 1,
     *    includeRaiReason: true,
     *  },
     * });
     * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */
    generateImages: (params: types.GenerateImagesParameters) => Promise<types.GenerateImagesResponse>;
    list: (params?: types.ListModelsParameters) => Promise<Pager<types.Model>>;
    private generateContentInternal;
    private generateContentStreamInternal;
    /**
     * Calculates embeddings for the given contents. Only text is supported.
     *
     * @param params - The parameters for embedding contents.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.embedContent({
     *  model: 'text-embedding-004',
     *  contents: [
     *    'What is your name?',
     *    'What is your favorite color?',
     *  ],
     *  config: {
     *    outputDimensionality: 64,
     *  },
     * });
     * console.log(response);
     * ```
     */
    embedContent(params: types.EmbedContentParameters): Promise<types.EmbedContentResponse>;
    /**
     * Generates an image based on a text description and configuration.
     *
     * @param params - The parameters for generating images.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateImages({
     *  model: 'imagen-3.0-generate-002',
     *  prompt: 'Robot holding a red skateboard',
     *  config: {
     *    numberOfImages: 1,
     *    includeRaiReason: true,
     *  },
     * });
     * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */
    private generateImagesInternal;
    /**
     * Fetches information about a model by name.
     *
     * @example
     * ```ts
     * const modelInfo = await ai.models.get({model: 'gemini-2.0-flash'});
     * ```
     */
    get(params: types.GetModelParameters): Promise<types.Model>;
    private listInternal;
    /**
     * Updates a tuned model by its name.
     *
     * @param params - The parameters for updating the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.update({
     *   model: 'tuned-model-name',
     *   config: {
     *     displayName: 'New display name',
     *     description: 'New description',
     *   },
     * });
     * ```
     */
    update(params: types.UpdateModelParameters): Promise<types.Model>;
    /**
     * Deletes a tuned model by its name.
     *
     * @param params - The parameters for deleting the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.delete({model: 'tuned-model-name'});
     * ```
     */
    delete(params: types.DeleteModelParameters): Promise<types.DeleteModelResponse>;
    /**
     * Counts the number of tokens in the given contents. Multimodal input is
     * supported for Gemini models.
     *
     * @param params - The parameters for counting tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.countTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'The quick brown fox jumps over the lazy dog.'
     * });
     * console.log(response);
     * ```
     */
    countTokens(params: types.CountTokensParameters): Promise<types.CountTokensResponse>;
    /**
     * Given a list of contents, returns a corresponding TokensInfo containing
     * the list of tokens and list of token ids.
     *
     * This method is not supported by the Gemini Developer API.
     *
     * @param params - The parameters for computing tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.computeTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'What is your name?'
     * });
     * console.log(response);
     * ```
     */
    computeTokens(params: types.ComputeTokensParameters): Promise<types.ComputeTokensResponse>;
    /**
     *  Generates videos based on a text description and configuration.
     *
     * @param params - The parameters for generating videos.
     * @return A Promise<GenerateVideosOperation> which allows you to track the progress and eventually retrieve the generated videos using the operations.get method.
     *
     * @example
     * ```ts
     * const operation = await ai.models.generateVideos({
     *  model: 'veo-2.0-generate-001',
     *  prompt: 'A neon hologram of a cat driving at top speed',
     *  config: {
     *    numberOfVideos: 1
     * });
     *
     * while (!operation.done) {
     *   await new Promise(resolve => setTimeout(resolve, 10000));
     *   operation = await ai.operations.getVideosOperation({operation: operation});
     * }
     *
     * console.log(operation.response?.generatedVideos?.[0]?.video?.uri);
     * ```
     */
    generateVideos(params: types.GenerateVideosParameters): Promise<types.GenerateVideosOperation>;
}
