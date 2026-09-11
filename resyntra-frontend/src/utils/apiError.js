// src/utils/apiError.js
//
// FastAPI errors come in two shapes:
//   1. HTTPException(detail="Invalid email or password")        -> string
//   2. Pydantic validation errors (422)                          -> array of
//      { loc, msg, type } objects
// Network failures (backend down, CORS, no internet) never reach FastAPI at
// all, so response is undefined. This helper normalizes all three cases into
// a single readable string so every catch block can do the same thing.

export function getApiErrorMessage(error, fallback = "Something went wrong. Please try again.") {
  if (!error?.response) {
    // Request never got a response — backend unreachable, CORS blocked, etc.
    return "Can't reach the server. Check your connection and try again.";
  }

  const detail = error.response.data?.detail;

  if (typeof detail === "string") {
    return detail;
  }

  if (Array.isArray(detail) && detail.length > 0) {
    // Pydantic validation error array
    return detail
      .map((d) => d.msg || d.message)
      .filter(Boolean)
      .join(" ");
  }

  return fallback;
}