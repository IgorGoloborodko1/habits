import { v4 as uuidv4 } from 'uuid';
import { Challenge, ActualTask, ActualAchievement, ArchiveItem, Task, Achievement, Status, ChallengeState } from './models';
import { tasks } from '../json-data/tasks.json';
import { achievements } from '../json-data/achievements.json';

const defaultStatus: Status = { state: 'Pending', updated: new Date()};
const challenges: Challenge[] = [];
const user = {
    id : '1',
    name : 'Igor',
    challenges,
  }

export function getCurrentChallenge(userId: string): Challenge | null {
    if(user.challenges.length > 0) {
        return user.challenges[0];
    }

    return null;
}

export function getCurrentTask(challengeId: string): ActualTask {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    console.log(requiredChallenge);
    const dayOfChallenge: number = Math.floor((Date.now() - requiredChallenge.startDate) / (1000 * 60 *  60 * 24));
    const actualTaskId: string = requiredChallenge.tasksOrder[dayOfChallenge];
    const actualTask: any = tasks.find(t => t.id == actualTaskId);

    return {
        id: actualTask.id,
        description: actualTask.description,
        status: defaultStatus,
    }
}

export function getAchievements(challengeId: string): ActualAchievement[] {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const achievementsIds: string[] = Array.from(requiredChallenge.achievementStatus.keys());
    console.log(requiredChallenge.achievementStatus.keys());
    const actualAchievements = achievements.filter(a => {
        if(!(achievementsIds.indexOf(a.id) !== -1)) {
            return a;
        }
    });
    const actualAchievementsWStatus: ActualAchievement[] = actualAchievements.map(a => {
        return {
            id: a.id,
            description: a.description,
            image : a.image,
            status: defaultStatus,
        }
    });

    return actualAchievementsWStatus;
}

export function getTaskArchive(challengeId: string): ArchiveItem[] {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const achievedItems: ArchiveItem[] = requiredChallenge.tasksOrder.filter((t: any) => t.status !== 'Pending');

    if(!achievedItems) {
        return null;
    }

    return achievedItems;
}

export function startNewChallenge(tasks: Task[],
                                    achievements: Achievement[],
                                    duration: number = 30,
                                    numOfAchievements: number)
                                    : Challenge {

    if(!numOfAchievements) numOfAchievements = Math.floor(duration / 6);
    const seletedTasksIds: string[] = pickRandomTasks(tasks, duration);
    const selectedAchievementsIds: string[] = pickAchievements(achievements, numOfAchievements);

    const actualChallenge: Challenge = {
        id : uuidv4(),
        state: 'In Progress',
        startDate: new Date(),
        tasksOrder: seletedTasksIds,
        tasksStatus: seletedTasksIds.reduce((acc, cur) => acc.set(cur, defaultStatus), new Map<string, Status>()),
        achievementStatus: selectedAchievementsIds.reduce((acc, cur) => acc.set(cur, defaultStatus), new Map<string, Status>())
    };

    //kostyl:)
    challenges.push(actualChallenge);

    return actualChallenge;
}

export function calculateAchievementsStatus(achievements: Achievement[], tasksStatus: Status[]): Map<string, Status> {
    const achievementsStatuses: Map<string, Status> = achievements.reduce((acc, current) => {
        return acc.set(current.id, {state: 'Pending', updated: new Date()});
    }, new Map());

    return achievementsStatuses;
}

function pickRandomTasks(tasks: Task[], duration: number): string[] {
    const ids: string[] = tasks.map(t => t.id);

    for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
    }

    return ids.slice(0, duration);
}

function pickAchievements(achievements: Achievement[], numOfAchievements: number): string[] {
    const requiredAchievements: Achievement[] = achievements.filter(a => a.description === 'Complete all tasks' || a.description === 'Complete half of the tasks');
    const otherAchievements: Achievement[] = achievements.filter(a => a.description !== 'Complete all the tasks' && a.description !== 'Complete half of the tasks');
    const ids: string[] = otherAchievements.map(a => a.id);

    for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
    }

    return ids.slice(0, numOfAchievements - 2).concat(requiredAchievements.map(a => a.id));
}