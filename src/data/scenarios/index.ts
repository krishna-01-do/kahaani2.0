import type { Scenario } from '../types';
import { officeScenario } from './office';
import { gymScenario } from './gym';
import { collegeScenario } from './college';
import { cafeScenario } from './cafe';
import { clubScenario } from './club';
import { travelScenario } from './travel';

export type { Scenario, Chapter, GuideTopic } from '../types';

export const scenarios: Scenario[] = [
  officeScenario,
  gymScenario,
  collegeScenario,
  cafeScenario,
  clubScenario,
  travelScenario,
];

export function getScenario(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}
