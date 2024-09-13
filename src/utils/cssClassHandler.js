/**
 * Utility functions for handling CSS class names.
 */

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple class names into a single string, removing duplicates.
 *
 * @param {...string} inputs - The class names to merge.
 * @returns {string} - The merged class names.
 */
const classMerger = (...inputs) => twMerge(clsx(inputs))

export { classMerger }
