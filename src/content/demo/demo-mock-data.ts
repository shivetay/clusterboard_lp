export type DemoView =
  | 'cluster'
  | 'projects'
  | 'project'
  | 'files'
  | 'inspirations'
  | 'messages';

export type ProjectStatus = 'w toku' | 'w przygotowaniu' | 'zakończony';

export interface DemoTaskComment {
  author_name: string;
  comment_text: string;
  updatedAt: string;
}

export interface DemoTask {
  id: string;
  task_name: string;
  is_done: boolean;
  task_comments?: DemoTaskComment[];
}

export interface DemoStage {
  id: string;
  stage_name: string;
  stage_description: string;
  is_done: boolean;
  stage_tasks: DemoTask[];
}

export interface DemoFile {
  id: string;
  file_name: string;
  file_size: string;
  uploaded_at: string;
  uploaded_by_name: string;
}

export interface DemoInspiration {
  id: string;
  title: string;
  imageUrl: string;
}

export interface DemoMessageThread {
  id: string;
  author_name: string;
  created_at: string;
  body: string;
  replies: {
    id: string;
    author_name: string;
    body: string;
    created_at: string;
    is_owner: boolean;
  }[];
}

export const DEMO_PROJECT = {
  id: 'demo-project',
  name: 'Apartament Mokotów',
  status: 'w toku' as ProjectStatus,
  description:
    'Kompleksowy projekt wnętrz salonu z aneksem kuchennym i sypialni głównej. Klient oczekuje stylu japandi z akcentami mosiądzu i ciepłych beży.',
  investor: 'Anna Kowalska',
  startDate: '2026-03-01',
  endDate: '2026-06-30',
  stages: [
    {
      id: 'stage-1',
      stage_name: 'Koncepcja i moodboard',
      stage_description:
        'Zebranie inspiracji, paleta kolorów, wstępny układ funkcjonalny.',
      is_done: true,
      stage_tasks: [
        {
          id: 'task-1',
          task_name: 'Prezentacja moodboardu',
          is_done: true,
          task_comments: [
            {
              author_name: 'Anna Kowalska',
              comment_text: 'Bardzo podoba mi się kierunek z drewnem dębowym.',
              updatedAt: '12.03.2026',
            },
          ],
        },
        {
          id: 'task-2',
          task_name: 'Akceptacja palety barw',
          is_done: true,
        },
      ],
    },
    {
      id: 'stage-2',
      stage_name: 'Projekt wykonawczy',
      stage_description:
        'Rysunki techniczne, specyfikacja materiałów, kosztorys wstępny.',
      is_done: false,
      stage_tasks: [
        {
          id: 'task-3',
          task_name: 'Rzuty z rozmieszczeniem mebli',
          is_done: true,
        },
        {
          id: 'task-4',
          task_name: 'Wybór płytek i podłóg',
          is_done: false,
        },
        {
          id: 'task-5',
          task_name: 'Kosztorys materiałów',
          is_done: false,
        },
      ],
    },
    {
      id: 'stage-3',
      stage_name: 'Realizacja i odbiór',
      stage_description:
        'Nadzór nad wykonawcami, wizyty kontrolne, lista poprawek.',
      is_done: false,
      stage_tasks: [
        {
          id: 'task-6',
          task_name: 'Harmonogram prac wykończeniowych',
          is_done: false,
        },
      ],
    },
  ] satisfies DemoStage[],
  files: [
    {
      id: 'file-1',
      file_name: 'Umowa projektowa.pdf',
      file_size: '245 KB',
      uploaded_at: '01.03.2026',
      uploaded_by_name: 'Katarzyna Nowak',
    },
    {
      id: 'file-2',
      file_name: 'Kosztorys wstępny.xlsx',
      file_size: '128 KB',
      uploaded_at: '18.03.2026',
      uploaded_by_name: 'Katarzyna Nowak',
    },
    {
      id: 'file-3',
      file_name: 'Rzut salonu v2.pdf',
      file_size: '1.2 MB',
      uploaded_at: '25.03.2026',
      uploaded_by_name: 'Katarzyna Nowak',
    },
  ] satisfies DemoFile[],
  inspirations: [
    {
      id: 'insp-1',
      title: 'Salon — japandi',
      imageUrl: '/assets/images/board-mockup.jpg',
    },
    {
      id: 'insp-2',
      title: 'Kuchnia — blat kamienny',
      imageUrl: '/assets/images/board-mockup.jpg',
    },
    {
      id: 'insp-3',
      title: 'Sypialnia — tkaniny',
      imageUrl: '/assets/images/board-mockup.jpg',
    },
    {
      id: 'insp-4',
      title: 'Łazienka — armatura mosiężna',
      imageUrl: '/assets/images/board-mockup.jpg',
    },
  ] satisfies DemoInspiration[],
  messageThreads: [
    {
      id: 'thread-1',
      author_name: 'Anna Kowalska',
      created_at: '10.03.2026',
      body: 'Czy możemy rozważyć płytki w formacie 60×120 w odcieniu piaskowym?',
      replies: [
        {
          id: 'msg-1',
          author_name: 'Anna Kowalska',
          body: 'Czy możemy rozważyć płytki w formacie 60×120 w odcieniu piaskowym?',
          created_at: '10:24',
          is_owner: false,
        },
        {
          id: 'msg-2',
          author_name: 'Katarzyna Nowak',
          body: 'Tak, przygotuję dwie wersje — matową i z delikatną strukturą kamienia.',
          created_at: '11:05',
          is_owner: true,
        },
      ],
    },
    {
      id: 'thread-2',
      author_name: 'Anna Kowalska',
      created_at: '05.03.2026',
      body: 'Czy w przyszłym tygodniu możemy umówić wizytę kontrolną?',
      replies: [
        {
          id: 'msg-3',
          author_name: 'Anna Kowalska',
          body: 'Czy w przyszłym tygodniu możemy umówić wizytę kontrolną?',
          created_at: 'Wczoraj',
          is_owner: false,
        },
      ],
    },
  ] satisfies DemoMessageThread[],
};
