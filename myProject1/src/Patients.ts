

export const PATIENTS: any = [
  {
    id: '111111111',
    FirstName: "israel",
    LastName: "israeli",
    Age: 38,
  },
  {
    id: '111111112',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  },
  {
    id: '111111113',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  },

  {
    id: '111111114',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  },
  {
    id: '111111115',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  },
  {
    id: '111111116',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  },
  {
    id: '111111117',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  },
  {
    id: '111111118',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  },
  {
    id: '111111119',
    FirstName: "Israel",
    LastName: "Israeli",
    Age: 38,
  }
];


export function findPatientById(PatientId: string) {
  return PATIENTS.find(patient => patient.id === PatientId);
}
