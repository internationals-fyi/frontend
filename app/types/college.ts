export interface College {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  contact: {
    admissionsEmail: string;
    admissionsPhone: string;
    streetAddress: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
    campusType: 'urban' | 'suburban' | 'rural';
    publicOrPrivate: 'public' | 'private';
  };
  enrollment: {
    total: number;
    undergraduate: number;
    graduate: number;
    international: {
      percentage: number;
      topCountries: Array<{
        country: string;
        percentage: number;
      }>;
    };
    genderDistribution: {
      male: number;
      female: number;
      nonBinary: number;
    };
    racialEthnicBreakdown: {
      white: number;
      asian: number;
      hispanic: number;
      black: number;
      other: number;
    };
    firstGenPercentage: number;
    pellGrantPercentage: number;
  };
  academics: {
    degreesOffered: string[];
    popularMajors: Array<{
      name: string;
      enrollment: number;
    }>;
    departmentalRankings: Record<string, number>;
    studentFacultyRatio: number;
    avgClassSize: number;
  };
  admissions: {
    acceptanceRate: {
      current: number;
      trend: Array<{
        year: number;
        rate: number;
      }>;
    };
    yieldRate: number;
    applicationDeadlines: {
      fall: string;
      spring: string;
      summer: string;
    };
    testScores: {
      sat?: {
        reading: number;
        math: number;
        writing: number;
      };
      act?: {
        composite: number;
        english: number;
        math: number;
      };
      gre?: {
        verbal: number;
        quantitative: number;
        writing: number;
      };
      toefl?: number;
    };
    applicationFee: number;
  };
  costs: {
    tuition: {
      inState: number;
      outOfState: number;
      international: number;
    };
    roomAndBoard: number;
    fees: number;
    booksAndSupplies: number;
    financialAid: {
      needBasedAid: number;
      meritAid: number;
      percentReceivingAid: number;
      medianDebtAtGraduation: number;
    };
  };
  outcomes: {
    graduationRate: {
      fourYear: number;
      sixYear: number;
    };
    medianStartingSalary: {
      overall: number;
      byMajor: Record<string, number>;
    };
    employmentRate: number;
    returnOnInvestment: number;
  };
  research: {
    expenditure: number;
    librarySize: number;
    labsCount: number;
    exchangePrograms: string[];
  };
  campusLife: {
    housing: {
      onCampus: boolean;
      offCampus: boolean;
      avgCost: number;
    };
    clubsAndOrgs: number;
    athletics: {
      division: string;
      conference: string;
    };
    socialMedia: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    supportServices: string[];
  };
  overallRanking: number;
  matchScore: number;
} 