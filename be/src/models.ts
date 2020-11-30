export interface Task {
    id : string;
    description : string;
}

export interface Achievement {
    id: string;
    description: string;
    image : string;
    checkComplete?(tasksStatus: Status[]) : Status;
}

export interface Status {
    state: State;
    updated: Date;
}

export interface Challenge {
    id: string;
    state: ChallengeState;
    startDate: Date;
    tasksOrder: string[];
    tasksStatus: Map<string, Status>;
    achievementStatus: Map<string, Status>;
}

export interface ArchiveItem extends Task {
    status: Status;
}

export interface ActualTask extends Task {
    status: Status;
}

export interface ActualAchievement {
    id: string;
    description: string;
    image : string;
    status: Status;
}

export type State = 'Pending' | 'Success' | 'Failure';
export type ChallengeState = 'In Progress' | 'Success' | 'Failure';