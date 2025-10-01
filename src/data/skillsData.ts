import { SkillCategory } from '@/types/types'

export const skillsData: SkillCategory[] = [
  {
    category: 'Основной стек',
    side: 'left',
    groups: [
      {
        groupName: 'Frontend',
        skills: [
          'React',
          'TypeScript',
          'Next.js',
          'Zustand',
          'Tailwind CSS',
          'Styled Components',
          'MUI',
          'Webpack/Vite',
        ],
      },
      {
        groupName: 'Backend',
        skills: ['NestJS', 'REST API', 'PostgreSQL', 'MariaDB', 'Redis'],
      },
      {
        groupName: 'Infrastructure & DevOps',
        skills: ['Docker', 'GitLab CI/CD', 'Cloudflare'],
      },
    ],
  },
  {
    category: 'Экспертиза в Telegram',
    side: 'left',
    groups: [
      {
        groupName: 'Telegram Ecosystem',
        skills: ['Telegram API', 'Grammy', 'Telegram Bots & Web Apps'],
      },
    ],
  },
  {
    category: 'Инструменты',
    side: 'right',
    groups: [
      {
        groupName: 'Tools',
        skills: ['Postman', 'TypeORM', 'Webhook Architecture'],
      },
    ],
  },
  {
    category: 'Дополнительный опыт',
    side: 'right',
    groups: [
      { groupName: 'Frontend', skills: ['Vue.js'] },
      { groupName: 'Backend', skills: ['Laravel (PHP)'] },
    ],
  },
]