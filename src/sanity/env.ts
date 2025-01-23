export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-23";

export const dataset = assertValue(
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SANITY_DATASET
    : process.env.SANITY_STUDIO_DATASET
      ? process.env.SANITY_STUDIO_DATASET
      : process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    : process.env.SANITY_STUDIO_PROJECT_ID
      ? process.env.SANITY_STUDIO_PROJECT_ID
      : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
