import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

// export class SkillsComponent { }

export class SkillsComponent {
  skills = [
    {
      title: 'Languages',
      tags: ['C#', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Frontend',
      tags: ['Angular', 'Tailwind', 'RxJS']
    },
    {
      title: 'Backend',
      tags: ['.NET Core', 'Node.js']
    },
    {
      title: 'Databases',
      tags: ['MongoDB', 'SQL Server']
    },
    {
      title: 'Tools',
      tags: ['Docker', 'AWS', 'GitHub Actions']
    }
  ];

  techIcons: string[] = [
    'fab fa-angular',
    'fab fa-node',
    'fab fa-npm',
    'fab fa-php',
    'fab fa-js',
    'fab fa-html5',
    'fab fa-css',
    'fab fa-bootstrap',
    'fab fa-wordpress',
    'fab fa-windows',
    'fab fa-docker',
    'fab fa-linux',
    'fab fa-ubuntu',
    'fab fa-jenkins',
    'fab fa-aws',
    'fab fa-git-alt',
    'fab fa-github',
    'fab fa-cloudflare',
    'fab fa-jira',
    'fab fa-trello',
    'fab fa-slack',
    'fab fa-stripe',
    'fab fa-mailchimp',
  ];

}