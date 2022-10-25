const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL
  : process.env.NEXT_PUBLIC_PRODUCTION_URL;
