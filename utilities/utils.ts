import { expect } from '@playwright/test';
export class Utils {
    static validateUIandAPIResults(uiResults: string[], apiResults: string[]) {
    const uiCourses = new Set(uiResults.map(course => course.toLowerCase()));
    const apiCourses = new Set(apiResults.map(course => course.toLowerCase()));
    expect.soft(uiCourses.size).toEqual(apiCourses.size);
    for (const apiCourse of apiCourses) {
        expect(uiCourses.has(apiCourse)).toBeTruthy();
    }
}
}