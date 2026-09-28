import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILL_CATEGORIES, SKILL_LEVEL_META, SkillLevel } from '../../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;
  readonly levelMeta = SKILL_LEVEL_META;

  levelClass(level: SkillLevel): string {
    return `level-badge level-badge--${level}`;
  }
}
