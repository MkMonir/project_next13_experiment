import Movie from './Movie';

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return (
    <main>
      <h1 className="mb-8 text-3xl font-medium">Top Rated IMDB Movies</h1>
      <div className="grid grid-cols-fluid gap-16">
        {data.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
