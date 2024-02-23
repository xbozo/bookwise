function calculateAverageBookRate(ratings: number[]): number {
  if (ratings.length === 0) {
    return 0;
  }

  const sum = ratings.reduce((acc, rating) => acc + rating, 0);

  return sum / ratings.length;
}

export function mapBooksAverageRating(
  booksArr: { ratings: { rate: number }[] }[],
) {
  const mapped = booksArr.map((book: any) => {
    const ratings = book.ratings.map((rating: any) => rating.rate);

    const averageRating = calculateAverageBookRate(ratings);
    return {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at,
      categories: book.categories,
      ratings: book.ratings,
      average_rating: averageRating,
    };
  });

  mapped.sort((a, b) => b.average_rating - a.average_rating);

  return mapped;
}
