export async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<{result?: T, error?: unknown}> {
  try {
    const response = await fetch(endpoint, options);
    if (response.ok) {
      const result = await response.json();
      return {result, error: undefined};
    } else {
      throw new Error("response not OK");
    }
  } catch (error) {
    return {result: undefined, error};
  }
}
