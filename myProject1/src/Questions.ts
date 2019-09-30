

export const QUESTIONS: any = [
  {
    Diagnosis: 'כאב גרון',
    Type: 2,
    Section: 'התחלתי',
    Question: 'מתלונן על כאב גרון מס ימים:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'מחלות רקע:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'תרופות קבועות:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'ניתוחים בעבר:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'אלרגיות:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'עישון:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'חום מעל 38.5:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'צמרמורת:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'קושי בבליעה:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'שיעול:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'התחלתי',
    Question: 'תבחין אנטיגני מהיר חיובי:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'סיבוכים',
    Question: 'דלקת אוזניים:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'סיבוכים',
    Question: 'סינוסיטיס:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'סיבוכים',
    Question: 'אבצסט פריטונסילרי:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 2,
    Section: 'ממצאים',
    Question: 'חום:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 2,
    Section: 'ממצאים',
    Question: 'לחץ דם:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 2,
    Section: 'ממצאים',
    Question: 'דופק:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 3,
    Options: ['בחר מצב', 'נראה חולה', 'משביע רצון'],
    Section: 'ממצאים',
    Question: 'מצב כללי:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'ממצאים',
    Question: 'בלוטות לימפה צוואריות מוגדלות/רגישות:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'בדיקת לוע',
    Question: 'תפליטים:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'בדיקת לוע',
    Question: 'שקדים מוגדלים:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 1,
    Section: 'בדיקת לב',
    Question: 'איוושות:'
  },
  {
    Diagnosis: 'כאב גרון',
    Type: 4,
    Section: 'בדיקת ריאות',
    Question: 'שקדים מוגדלים:'
  }
];


export function findQuestionsByDiagnosis(diagnosis: string) {
  return QUESTIONS.find(question => question.Diagnosis === diagnosis);
}
export function findSections(diagnosis: string) {
  let sections: string [];
  sections = [];
  for (const ques of QUESTIONS) {
    if (ques.Diagnosis === diagnosis && !sections.includes(ques.Section)) {
      sections.push(ques.Section);
    }
  }
  return sections;
}
export function findQuesForSec(diagnosis: string, section: string) {
  let questions: any [];
  questions = [];
  for (const ques of QUESTIONS) {
    if (ques.Diagnosis === diagnosis && ques.Section === section) {
      questions.push(ques);
    }
  }
  return questions;
}
