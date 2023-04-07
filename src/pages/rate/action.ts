import { IContestantProps } from "../../utils/components/contestant/Contestant";

export async function fetchContestant(
  contestId: string,
  contestantId: string
): Promise<IContestantProps> {
  return await Promise.resolve({
    id: "1",
    name: "Filip Garamvölgyi",
    performance: "Bingo Bongo",
    score: 5,
  });
}
