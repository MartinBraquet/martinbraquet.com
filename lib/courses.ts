export interface Course {
  code: string
  name: string
  pdf: string
}

export interface Semester {
  term: string
  courses: Course[]
}

export interface Degree {
  label: string // eyebrow label
  title: string
  institution: string
  years: string
  courseCount: number
  semesters: Semester[]
}

// ── Data ──────────────────────────────────────────────────────────────────────

export const BASE = 'https://ewdq9sshhf9cseit.public.blob.vercel-storage.com/courses'

export const DEGREES: Degree[] = [
  {
    label: 'Graduate',
    title: 'MSc in Aerospace Engineering',
    institution: 'UT Austin',
    years: '2020 – 2022',
    courseCount: 9,
    semesters: [
      {
        term: 'Fall 2020',
        courses: [
          {
            code: 'ASE 380P 1',
            name: 'Analytical methods I',
            pdf: `${BASE}/Syllabus_ASE380P1_Fall2020.pdf`,
          },
          {
            code: 'ASE 381P 1',
            name: 'Linear systems analysis',
            pdf: `${BASE}/Syllabus_ASE381P1_Fall2020.pdf`,
          },
          {
            code: 'ASE 381P 6',
            name: 'Statistical estimation theory',
            pdf: `${BASE}/Syllabus_ASE381P6_Fall2020.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2021',
        courses: [
          {
            code: 'ASE 380P 2',
            name: 'Analytical methods II',
            pdf: `${BASE}/Syllabus_ASE380P2_Spring2021.pdf`,
          },
          {
            code: 'ASE 381P 3',
            name: 'Optimal control theory',
            pdf: `${BASE}/Syllabus_ASE381P3_Spring2021.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2021',
        courses: [
          {
            code: 'ASE 389',
            name: 'Modeling of multi-agent systems',
            pdf: `${BASE}/Syllabus_ASE389_Fridovich-Keil.pdf`,
          },
          {
            code: 'CS 391R',
            name: 'Robot learning',
            pdf: `${BASE}/Syllabus-CS391R-Robot-Learning.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2022',
        courses: [
          {
            code: 'ASE 381P 2',
            name: 'Multivariable control systems',
            pdf: `${BASE}/ASE381P2_Syllabus_v2.pdf`,
          },
          {
            code: 'SDS 380D',
            name: 'Statistical methods II',
            pdf: `${BASE}/StatMethsII-Syllabus-2022.pdf`,
          },
        ],
      },
    ],
  },
  {
    label: 'Graduate',
    title: 'MSc in Electromechanical Engineering',
    institution: 'UCLouvain',
    years: '2018 – 2020',
    courseCount: 25,
    semesters: [
      {
        term: 'Fall 2018',
        courses: [
          {
            code: 'ELEC2313',
            name: 'Dynamic modelling and control of electromechanical converters',
            pdf: `${BASE}/en-cours-2018-lelec2313.pdf`,
          },
          {
            code: 'ELEC2531',
            name: 'Design and architecture of digital electronic systems',
            pdf: `${BASE}/en-cours-2018-lelec2531.pdf`,
          },
          {
            code: 'ELEC2660',
            name: 'Power electronics',
            pdf: `${BASE}/en-cours-2018-lelec2660.pdf`,
          },
          {
            code: 'ELEC2811',
            name: 'Instrumentation and sensors',
            pdf: `${BASE}/en-cours-2018-lelec2811.pdf`,
          },
          {
            code: 'EPL2351',
            name: 'Group dynamics',
            pdf: `${BASE}/en-cours-2018-lepl2351.pdf`,
          },
          {
            code: 'MECA2755',
            name: 'Industrial automation',
            pdf: `${BASE}/en-cours-2018-lmeca2755.pdf`,
          },
          {
            code: 'MECA2801',
            name: 'Machine design',
            pdf: `${BASE}/en-cours-2018-lmeca2801.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2019',
        courses: [
          {
            code: 'ELEC2103',
            name: 'Project in electricity 3: electronic systems',
            pdf: `${BASE}/en-cours-2018-lelec2103.pdf`,
          },
          {
            code: 'ELEC2311',
            name: 'Physics of electromechanical converters',
            pdf: `${BASE}/en-cours-2018-lelec2311.pdf`,
          },
          {
            code: 'ELEC2590',
            name: 'Seminar in electronics and communications',
            pdf: `${BASE}/en-cours-2018-lelec2590.pdf`,
          },
          {
            code: 'ELEC2760',
            name: 'Secure electronic circuits and systems',
            pdf: `${BASE}/en-cours-2018-lelec2760.pdf`,
          },
          {
            code: 'ELME2002',
            name: 'Project in mechatronics',
            pdf: `${BASE}/en-cours-2018-lelme2002.pdf`,
          },
          {
            code: 'FSA2230',
            name: 'Introduction to management and business economics',
            pdf: `${BASE}/en-cours-2018-lfsa2230.pdf`,
          },
          {
            code: 'INGI2315',
            name: 'Design of embedded and real-time systems',
            pdf: `${BASE}/en-cours-2018-lingi2315.pdf`,
          },
          {
            code: 'INGI2347',
            name: 'Computer system security',
            pdf: `${BASE}/en-cours-2018-lingi2347.pdf`,
          },
          {
            code: 'MECA2732',
            name: 'Introduction to robotics',
            pdf: `${BASE}/en-cours-2018-lmeca2732.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2019',
        courses: [
          {
            code: 'ELEC2795',
            name: 'Radiation and communication systems',
            pdf: `${BASE}/en-cours-2019-lelec2795.pdf`,
          },
          {
            code: 'ELEC2870',
            name: 'Machine learning: regression, dimensionality reduction & visualization',
            pdf: `${BASE}/en-cours-2019-lelec2870.pdf`,
          },
          {
            code: 'INGI2261',
            name: 'Artificial intelligence: representation and reasoning',
            pdf: `${BASE}/en-cours-2019-lingi2261.pdf`,
          },
          {
            code: 'PHYS2143',
            name: 'Optics and lasers',
            pdf: `${BASE}/en-cours-2019-lphys2143.pdf`,
          },
          {
            code: 'TECO2300',
            name: 'Societies, cultures, religions: ethical questions',
            pdf: `${BASE}/en-cours-2019-lteco2300.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2020',
        courses: [
          {
            code: 'ELEC2532',
            name: 'Design and architecture of analog electronic systems',
            pdf: `${BASE}/en-cours-2019-lelec2532.pdf`,
          },
          {
            code: 'ELME2990',
            name: 'Master thesis',
            pdf: `${BASE}/en-cours-2019-lelme2990.pdf`,
          },
          {
            code: 'INMA2345',
            name: 'Game theory',
            pdf: `${BASE}/en-cours-2019-linma2345.pdf`,
          },
          {
            code: 'PHYS1231',
            name: 'Special relativity',
            pdf: `${BASE}/en-cours-2019-lphys1231.pdf`,
          },
        ],
      },
    ],
  },
  {
    label: 'Undergraduate',
    title: 'BSc in Electrical/Mechanical Engineering',
    institution: 'UCLouvain',
    years: '2015 – 2018',
    courseCount: 36,
    semesters: [
      {
        term: 'Fall 2015',
        courses: [
          {
            code: 'FSAB1101',
            name: 'Mathematics 1',
            pdf: `${BASE}/en-cours-2015-LFSAB1101.pdf`,
          },
          {code: 'FSAB1201', name: 'Physics 1', pdf: `${BASE}/en-cours-2015-LFSAB1201.pdf`},
          {
            code: 'FSAB1401',
            name: 'Computer science 1',
            pdf: `${BASE}/en-cours-2015-LFSAB1401.pdf`,
          },
          {code: 'FSAB1501', name: 'Project 1', pdf: `${BASE}/en-cours-2015-LFSAB1501.pdf`},
        ],
      },
      {
        term: 'Spring 2016',
        courses: [
          {
            code: 'ANGL1871',
            name: 'English for civil engineers',
            pdf: `${BASE}/en-cours-2015-LANGL1871.pdf`,
          },
          {
            code: 'FSAB1102',
            name: 'Mathematics 2',
            pdf: `${BASE}/en-cours-2015-LFSAB1102.pdf`,
          },
          {code: 'FSAB1202', name: 'Physics 2', pdf: `${BASE}/en-cours-2015-LFSAB1202.pdf`},
          {
            code: 'FSAB1301',
            name: 'Chemistry and physical chemistry',
            pdf: `${BASE}/en-cours-2015-LFSAB1301.pdf`,
          },
          {code: 'FSAB1502', name: 'Project 2', pdf: `${BASE}/en-cours-2015-LFSAB1502.pdf`},
          {
            code: 'FSAB1801',
            name: 'Critical history of science and technology',
            pdf: `${BASE}/en-cours-2015-LFSAB1801.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2016',
        courses: [
          {
            code: 'FSAB1103',
            name: 'Mathematics 3',
            pdf: `${BASE}/en-cours-2016-LFSAB1103.pdf`,
          },
          {code: 'FSAB1203', name: 'Physics 3', pdf: `${BASE}/en-cours-2016-LFSAB1203.pdf`},
          {
            code: 'FSAB1302',
            name: 'Chemistry and physical chemistry',
            pdf: `${BASE}/en-cours-2016-LFSAB1302.pdf`,
          },
          {
            code: 'FSAB1402',
            name: 'Computer science 2',
            pdf: `${BASE}/en-cours-2016-LFSAB1402.pdf`,
          },
          {code: 'FSAB1503', name: 'Project 3', pdf: `${BASE}/en-cours-2016-LFSAB1503.pdf`},
          {
            code: 'FSAB1104',
            name: 'Numerical methods',
            pdf: `${BASE}/en-cours-2016-LFSAB1104.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2017',
        courses: [
          {
            code: 'ANGL1872',
            name: 'English: listening comprehension',
            pdf: `${BASE}/en-cours-2016-LANGL1872.pdf`,
          },
          {
            code: 'ELEC1101',
            name: 'Project in electricity 1: electrical circuits',
            pdf: `${BASE}/en-cours-2016-LELEC1101.pdf`,
          },
          {
            code: 'ELEC1370',
            name: 'Measurements and electrical circuits',
            pdf: `${BASE}/en-cours-2016-LELEC1370.pdf`,
          },
          {
            code: 'FSAB1106',
            name: 'Applied mathematics: signals and systems',
            pdf: `${BASE}/en-cours-2016-LFSAB1106.pdf`,
          },
          {
            code: 'FSAB1803',
            name: 'Economy of the firm',
            pdf: `${BASE}/en-cours-2016-LFSAB1803.pdf`,
          },
          {
            code: 'MECA1120',
            name: 'Introduction to finite element methods',
            pdf: `${BASE}/en-cours-2016-LMECA1120.pdf`,
          },
          {
            code: 'MECA1210',
            name: 'Description and analysis of mechanisms',
            pdf: `${BASE}/en-cours-2016-LMECA1210.pdf`,
          },
        ],
      },
      {
        term: 'Fall 2017',
        courses: [
          {
            code: 'ANGL1873',
            name: 'English communication skills for engineers',
            pdf: `${BASE}/en-cours-2017-langl1873.pdf`,
          },
          {
            code: 'ELEC1530',
            name: 'Basic analog and digital electronic circuits',
            pdf: `${BASE}/en-cours-2017-lelec1530.pdf`,
          },
          {
            code: 'ELEC1755',
            name: 'Electricity: advanced topics',
            pdf: `${BASE}/en-cours-2017-lelec1755.pdf`,
          },
          {
            code: 'FSAB1105',
            name: 'Probability and statistics',
            pdf: `${BASE}/en-cours-2017-lfsab1105.pdf`,
          },
          {
            code: 'MECA1451',
            name: 'Mechanical manufacturing',
            pdf: `${BASE}/en-cours-2017-lmeca1451.pdf`,
          },
          {
            code: 'MECA1855',
            name: 'Thermodynamics and energetics',
            pdf: `${BASE}/en-cours-2017-lmeca1855.pdf`,
          },
          {
            code: 'MECA1901',
            name: 'Continuum mechanics',
            pdf: `${BASE}/en-cours-2017-lmeca1901.pdf`,
          },
        ],
      },
      {
        term: 'Spring 2018',
        courses: [
          {
            code: 'ELEC1310',
            name: 'Electromechanical converters',
            pdf: `${BASE}/en-cours-2017-lelec1310.pdf`,
          },
          {
            code: 'ELEC1360',
            name: 'Telecommunications',
            pdf: `${BASE}/en-cours-2017-lelec1360.pdf`,
          },
          {
            code: 'INMA1510',
            name: 'Linear control',
            pdf: `${BASE}/en-cours-2017-linma1510.pdf`,
          },
          {
            code: 'FSAB1504',
            name: 'Project 4 (mechanical engineering)',
            pdf: `${BASE}/en-cours-2017-lfsab1504.pdf`,
          },
          {
            code: 'MECA1100',
            name: 'Deformable solid mechanics',
            pdf: `${BASE}/en-cours-2017-lmeca1100.pdf`,
          },
          {
            code: 'MECA1321',
            name: 'Fluid mechanics and transfer phenomena',
            pdf: `${BASE}/en-cours-2017-lmeca1321.pdf`,
          },
        ],
      },
    ],
  },
]

export const TOTAL_COURSES = DEGREES.reduce((sum, d) => sum + d.courseCount, 0)
