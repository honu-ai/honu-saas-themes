// Mock database connection for template purposes
// In a real implementation, this would connect to your database

export const db = {
  // Mock database instance
  query: {},
  select: () => ({ from: () => ({ where: () => Promise.resolve([]) }) }),
  insert: () => ({ values: () => Promise.resolve({ insertId: 'mock' }) }),
  update: () => ({ set: () => ({ where: () => Promise.resolve() }) }),
  delete: () => ({ where: () => Promise.resolve() }),
};
