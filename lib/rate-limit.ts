const requests = new Map<string, number[]>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const userRequests = requests.get(identifier) ?? [];
  const recentRequests = userRequests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) return false;

  recentRequests.push(now);
  requests.set(identifier, recentRequests);
  return true;
}
