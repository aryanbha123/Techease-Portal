// Utility function to shuffle an array
export const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() })) // Add random sort key
      .sort((a, b) => a.sort - b.sort) // Sort by the random key
      .map(({ value }) => value); // Extract the original values
  };
  