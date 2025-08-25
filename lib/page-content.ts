/**
 * Utility function to parse pageContent URL parameter and merge it with default content
 * while preserving privacy policy and terms of service from local content
 */

export type SearchParams = {
  pageContent?: string;
};

export function parsePageContent<T extends Record<string, any>>(
  searchParams: SearchParams,
  defaultContent: T,
): T {
  // Start with default content
  let pageData = defaultContent;

  if (searchParams.pageContent) {
    try {
      // First try to decode the URI component, with fallback if it's already decoded
      let decodedContent: string;
      try {
        decodedContent = decodeURIComponent(searchParams.pageContent);
      } catch (uriError) {
        decodedContent = searchParams.pageContent;
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
