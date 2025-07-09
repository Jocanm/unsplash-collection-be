import * as yup from 'yup';

export const envSchema = yup.object({
  UNSPLASH_CLIENT_ID: yup.string().required('UNSPLASH_CLIENT_ID is required').label('Unsplash Client ID'),
  UNSPLASH_API_URL: yup.string().url().required('UNSPLASH_API_URL is required').label('Unsplash API URL'),
  IMAGES_PER_PAGE: yup
    .number()
    .required()
    .default(10)
    .min(1, 'IMAGES_PER_PAGE must be at least 1')
    .max(100, 'IMAGES_PER_PAGE must be at most 100')
    .label('Images Per Page'),
})

export type EnvSchema = yup.InferType<typeof envSchema>;