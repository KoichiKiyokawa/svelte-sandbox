export default {
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
}
