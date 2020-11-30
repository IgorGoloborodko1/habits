import { v4 as uuidv4 } from 'uuid';
import { Challenge, ActualTask, ActualAchievement, ArchiveItem, Task, Achievement, Status, ChallengeState } from './models';
import { tasks } from '../json-data/tasks.json';
import { achievements } from '../json-data/achievements.json';

const defaultStatus: Status = { state: 'Pending', updated: new Date()};

export function getCurrentTask(challengeId: string, challenges: Challenge[]): ActualTask {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const dayOfChallenge: number = Math.floor((Date.now() - requiredChallenge.startDate) / (1000 * 60 *  60 * 24));
    const actualTaskId: string = requiredChallenge.tasksOrder[dayOfChallenge];
    const actualTask: any = tasks.find(t => t.id == actualTaskId);

    return {
        id: actualTask.id,
        description: actualTask.description,
        status: defaultStatus,
    }
}

export function getAchievements(challengeId: string, challenges: Challenge[]): ActualAchievement[] {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const achievementsIds: string[] = requiredChallenge.achievementStatus.keys();
    const actualAchievements = achievements.filter(a => achievementsIds.includes(a.id));
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

export function getTaskArchive(challengeId: string, challenges: Challenge[]): ArchiveItem[] {
    const requiredChallenge: any = challenges.find(c => c.id === challengeId);
    const achievedItems: ArchiveItem[] = requiredChallenge.tasksOrder.filter((t: any) => t.status !== 'Pending');

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
    const requiredAchievements: Achievement[] = achievements.filter(a => a.description === 'Complete all the tasks' || a.description === 'Complete half of the tasks');
    const otherAchievements: Achievement[] = achievements.filter(a => a.description !== 'Complete all the tasks' && a.description !== 'Complete half of the tasks');
    const ids: string[] = otherAchievements.map(a => a.id);

    for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
    }

    return ids;
}