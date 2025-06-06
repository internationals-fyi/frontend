import { College } from "../types/college"

export const mockColleges: College[] = [
  {
    id: "1",
    name: "Stanford University",
    logoUrl: "/logos/stanford.png",
    websiteUrl: "https://www.stanford.edu",
    contact: {
      admissionsEmail: "admissions@stanford.edu",
      admissionsPhone: "(650) 723-2091",
      streetAddress: "450 Serra Mall, Stanford, CA 94305"
    },
    location: {
      city: "Stanford",
      state: "CA",
      country: "USA",
      campusType: "suburban",
      publicOrPrivate: "private"
    },
    enrollment: {
      total: 17349,
      undergraduate: 7342,
      graduate: 10007,
      international: {
        percentage: 23.2,
        topCountries: [
          { country: "China", percentage: 8.1 },
          { country: "India", percentage: 4.2 },
          { country: "Canada", percentage: 2.1 },
          { country: "South Korea", percentage: 1.8 },
          { country: "United Kingdom", percentage: 1.5 }
        ]
      },
      genderDistribution: {
        male: 52,
        female: 48,
        nonBinary: 0.2
      },
      racialEthnicBreakdown: {
        white: 30,
        asian: 24,
        hispanic: 15,
        black: 7,
        other: 24
      },
      firstGenPercentage: 17,
      pellGrantPercentage: 16
    },
    academics: {
      degreesOffered: ["BS", "BA", "MS", "PhD", "MD", "JD", "MBA"],
      popularMajors: [
        { name: "Computer Science", enrollment: 1200 },
        { name: "Engineering", enrollment: 1100 },
        { name: "Biology", enrollment: 900 },
        { name: "Economics", enrollment: 850 },
        { name: "Psychology", enrollment: 750 }
      ],
      departmentalRankings: {
        "Computer Science": 1,
        "Engineering": 2,
        "Business": 1,
        "Law": 2
      },
      studentFacultyRatio: 4,
      avgClassSize: 16
    },
    admissions: {
      acceptanceRate: {
        current: 4.3,
        trend: [
          { year: 2023, rate: 4.3 },
          { year: 2022, rate: 4.7 },
          { year: 2021, rate: 5.2 }
        ]
      },
      yieldRate: 82,
      applicationDeadlines: {
        fall: "January 5",
        spring: "October 15",
        summer: "February 15"
      },
      testScores: {
        sat: {
          reading: 720,
          math: 770,
          writing: 740
        },
        act: {
          composite: 34,
          english: 35,
          math: 35
        }
      },
      applicationFee: 90
    },
    costs: {
      tuition: {
        inState: 56169,
        outOfState: 56169,
        international: 56169
      },
      roomAndBoard: 17500,
      fees: 2000,
      booksAndSupplies: 1500,
      financialAid: {
        needBasedAid: 45000,
        meritAid: 25000,
        percentReceivingAid: 63,
        medianDebtAtGraduation: 12000
      }
    },
    outcomes: {
      graduationRate: {
        fourYear: 95,
        sixYear: 96
      },
      medianStartingSalary: {
        overall: 85000,
        byMajor: {
          "Computer Science": 120000,
          "Engineering": 95000,
          "Business": 85000
        }
      },
      employmentRate: 94,
      returnOnInvestment: 2.8
    },
    research: {
      expenditure: 1650000000,
      librarySize: 9000000,
      labsCount: 150,
      exchangePrograms: [
        "Global Studies Program",
        "Bing Overseas Studies Program"
      ]
    },
    campusLife: {
      housing: {
        onCampus: true,
        offCampus: true,
        avgCost: 12000
      },
      clubsAndOrgs: 625,
      athletics: {
        division: "NCAA Division I",
        conference: "Pac-12"
      },
      socialMedia: {
        facebook: "stanford",
        instagram: "stanford",
        twitter: "stanford"
      },
      supportServices: [
        "Career Center",
        "Counseling Services",
        "Health Center",
        "International Student Services"
      ]
    },
    overallRanking: 2,
    matchScore: 95
  }
] 