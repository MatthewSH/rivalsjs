// import { fromPromise, ok, type Result } from "neverthrow";
// import type { Client } from "@/index";
// import type {
//   AllAchievementsResponse,
//   APIAllAchievementsResponse,
// } from "@/types/v1";
// import { routes } from "..";
// import { transformAllAchievementsResponse } from "../transformers";

// export async function getAllAchievements(
//   client: Client,
//   page = 1,
//   perPage = 10,
// ): Promise<Result<AllAchievementsResponse, Error>> {
//   return fromPromise(
//     client
//       .get(routes.allAchievements(page, perPage))
//       // .error(429, () => {
//       //   throw new Error("Rate limit exceeded. Please try again later.");
//       // })
//       .res((response) => {
//         console.log(
//           response.headers.get("x-ratelimit-remaining") +
//             " " +
//             response.headers.get("x-ratelimit-reset"),
//         );

//         console.log("Status code: ", response.status);
//         return response.json();
//       }),
//     // .json<APIAllAchievementsResponse>(),
//     (error) => new Error(error as string),
//   ).andThen((response) => ok(transformAllAchievementsResponse(response)));
// }
