export interface Team {
  teamId: number;
  teamName: string;
  teamIconUrl: string;
  shortName: string;
}

export interface Match {
  matchID: number;
  matchDateTime: string;
  group: {
    groupName: string;
  };
  team1: Team;
  team2: Team;
  matchIsFinished: boolean;
  matchResults: {
    resultID: number;
    resultName: string;
    pointsTeam1: number;
    pointsTeam2: number;
    resultOrderID: number;
    resultTypeID: number;
    resultDescription: string;
  }[];
}