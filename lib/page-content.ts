/**
 * Utility function to parse pageContent URL parameter and merge it with default content
 * while preserving privacy policy and terms of service from local content
 */

export type SearchParams = Promise<{
  pageContent?: string;
}>;

export async function parsePageContent<T extends Record<string, any>>(
  searchParams: SearchParams,
  defaultContent: T,
): Promise<T> {
  // Await the search params since they're now async in Next.js
  const params = await searchParams;
  // Start with default content
  let pageData = defaultContent;

  if (params.pageContent) {
    try {
      // First try to decode the URI component, with fallback if it's already decoded
      let decodedContent: string;
      try {
        decodedContent = decodeURIComponent(params.pageContent);
      } catch (uriError) {
        decodedContent = params.pageContent;
      }

      // Parse the JSON content
      const customContent = JSON.parse(decodedContent);

      // Use custom content but always preserve privacy policy and terms from local content
      pageData = {
        ...customContent,
        privacy_policy: defaultContent.privacy_policy,
        terms_of_service: defaultContent.terms_of_service,
      } as T;
    } catch (error) {
      console.error('Failed to parse pageContent parameter:', error);
      // Fall back to default content if parsing fails
      pageData = defaultContent;
    }
  }

  return pageData;
}
