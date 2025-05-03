/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { z } from 'zod';
import { FunctionDeclaration, Schema } from './types';
/**
 * Represents the possible JSON schema types.
 */
export type JSONSchemaType = 'string' | 'number' | 'integer' | 'object' | 'array' | 'boolean' | 'null';
/**
 * A subset of JSON Schema according to 2020-12 JSON Schema draft.
 *
 * Represents a subset of a JSON Schema object that can be used by Gemini API.
 * The difference between this interface and the Schema interface is that this
 * interface is compatible with OpenAPI 3.1 schema objects while the
 * types.Schema interface @see {@link Schema} is used to make API call to
 * Gemini API.
 */
export interface JSONSchema {
    /**
     * Validation succeeds if the type of the instance matches the type
     * represented by the given type, or matches at least one of the given types
     * in the array.
     */
    type?: JSONSchemaType | JSONSchemaType[];
    /**
     * Defines semantic information about a string instance (e.g., "date-time",
     * "email").
     */
    format?: string;
    /**
     * A preferably short description about the purpose of the instance
     * described by the schema. This is not supported for Gemini API.
     */
    title?: string;
    /**
     * An explanation about the purpose of the instance described by the
     * schema.
     */
    description?: string;
    /**
     * This keyword can be used to supply a default JSON value associated
     * with a particular schema. The value should be valid according to the
     * schema. This is not supported for Gemini API.
     */
    default?: unknown;
    /**
     * Used for arrays. This keyword is used to define the schema of the elements
     * in the array.
     */
    items?: JSONSchema;
    /**
     * Key word for arrays. Specify the minimum number of elements in the array.
     */
    minItems?: string;
    /**
     * Key word for arrays. Specify the maximum number of elements in the array.e
     */
    maxItems?: string;
    /**
     * Used for specify the possible values for an enum.
     */
    enum?: unknown[];
    /**
     * Used for objects. This keyword is used to define the schema of the
     * properties in the object.
     */
    properties?: Record<string, JSONSchema>;
    /**
     * Used for objects. This keyword is used to specify the properties of the
     * object that are required to be present in the instance.
     */
    required?: string[];
    /**
     * The key word for objects. Specify the minimum number of properties in the
     * object.
     */
    minProperties?: string;
    /**
     * The key word for objects. Specify the maximum number of properties in the
     * object.
     */
    maxProperties?: string;
    /**
     * Used for numbers. Specify the minimum value for a number.
     */
    minimum?: number;
    /**
     * Used for numbers. specify the maximum value for a number.
     */
    maximum?: number;
    /**
     * Used for strings. The keyword to specify the minimum length of the
     * string.
     */
    minLength?: string;
    /**
     * Used for strings. The keyword to specify the maximum length of the
     * string.
     */
    maxLength?: string;
    /**
     * Used for strings. Key word to specify a regular
     * expression (ECMA-262) matches the instance successfully.
     */
    pattern?: string;
    /**
     * Used for Union types and Intersection types. This keyword is used to define
     * the schema of the possible values.
     */
    anyOf?: JSONSchema[];
}
/**
 * Converts a Zod object into the Gemini schema format.
 *
 * [Experimental] This function first validates the structure of the input
 * `zodSchema` object against an internal representation of JSON Schema (see
 * {@link JSONSchema}).
 * Any mismatch in data types and inrecongnized properties will cause an error.
 *
 * @param zodSchema The Zod schema object to convert. Its structure is validated
 * against the {@link JSONSchema} interface before conversion to JSONSchema
 * schema.
 * @return The resulting Schema object. @see {@link Schema}
 * @throws {ZodError} If the input `zodSchema` does not conform to the expected
 * JSONSchema structure during the initial validation step.
 * @see {@link JSONSchema} The interface used to validate the input `zodSchema`.
 */
export declare function schemaFromZodType(zodSchema: z.ZodType): Schema;
/**
 * Object for passing the details of the zod function schema.
 * This is to set up the named parameters for the functionDeclarationFromZod
 * function.
 */
export interface ZodFunction {
    name: string;
    zodFunctionSchema: z.ZodFunction<z.ZodTuple<any, z.ZodTypeAny>, z.ZodTypeAny>;
}
/**
 * Converts a Zod function schema definition into a FunctionDeclaration object.
 *
 * [Experimental] This function help to convert the zod function to the function
 * declaration format. Currently, the function only support the function with
 * one parameter value, the parameter can be object or void.
 *
 * @param zodFunction The zodFunction object for passing the name and zod
 *     function
 * schema. see {@link ZodFunction} for more details.
 * @return The resulting FunctionDeclaration object. @see {@link FunctionDeclaration}
 * @throws {ZodError} If the input `zodFunction` contains paramters that can not
 * be converteed to Schema object @see {@link Schema}
 * @throws {Error} If the input `zodFunction` contains more than one parameter
 * or the parameter is not object.
 */
export declare function functionDeclarationFromZodFunction(zodFunction: ZodFunction): FunctionDeclaration;
