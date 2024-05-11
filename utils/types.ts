
export type SearchParamsType = {
  query?: string
  page?: number
  sort?: ( "POPULARITY_DESC" | "POPULARITY" | "TRENDING_DESC" | "TRENDING" | "UPDATED_AT_DESC" | "UPDATED_AT" | "START_DATE_DESC" | "START_DATE" | "END_DATE_DESC" | "END_DATE" | "FAVOURITES_DESC" | "FAVOURITES" | "SCORE_DESC" | "SCORE" | "TITLE_ROMAJI_DESC" | "TITLE_ROMAJI" | "TITLE_ENGLISH_DESC" | "TITLE_ENGLISH" | "TITLE_NATIVE_DESC" | "TITLE_NATIVE" | "EPISODES_DESC" | "EPISODES" | "ID" | "ID_DESC" )[]
  format?: "TV" | "TV_SHORT" | "OVA" | "ONA" | "MOVIE" | "SPECIAL" | "MUSIC"
  type?: string
  genres?: ( "Action" | "Adventure" | "Cars" | "Comedy" | "Drama" | "Fantasy" | "Horror" | "Mahou Shoujo" | "Mecha" | "Music" | "Mystery" | "Psychological" | "Romance" | "Sci-Fi" | "Slice of Life" | "Sports" | "Supernatural" | "Thriller" )[]
  year?: number
  season?: "WINTER" | "SPRING" | "SUMMER" | "FALL"
  id?: number
  status?: "RELEASING" | "NOT_YET_RELEASED" | "FINISHED" | "CANCELLED" | "HIATUS"
}
