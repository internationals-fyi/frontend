export const collegeModel = {
  id: {
    type: 'string',
    required: true,
    description: 'Unique identifier for the college'
  },
  name: {
    type: 'string',
    required: true,
    description: 'Full legal name of the college/university'
  },
  logoUrl: {
    type: 'string',
    required: true,
    description: 'URL to the college logo image'
  },
  websiteUrl: {
    type: 'string',
    required: true,
    description: 'Official website URL'
  },
  
  contact: {
    type: 'object',
    required: true,
    properties: {
      admissionsEmail: {
        type: 'string',
        required: true,
        description: 'Admissions office email'
      },
      admissionsPhone: {
        type: 'string',
        required: true,
        description: 'Admissions office phone'
      },
      streetAddress: {
        type: 'string',
        required: true,
        description: 'Full street address for map embedding'
      }
    }
  },

  location: {
    type: 'object',
    required: true,
    properties: {
      city: {
        type: 'string',
        required: true,
        description: 'City where the college is located'
      },
      state: {
        type: 'string',
        required: true,
        description: 'State or province where the college is located'
      },
      country: {
        type: 'string',
        required: true,
        description: 'Country where the college is located'
      },
      campusType: {
        type: 'string',
        required: true,
        enum: ['urban', 'suburban', 'rural'],
        description: 'Type of campus setting'
      },
      publicOrPrivate: {
        type: 'string',
        required: true,
        enum: ['public', 'private'],
        description: 'Institution type'
      }
    }
  },

  enrollment: {
    type: 'object',
    required: true,
    properties: {
      total: {
        type: 'number',
        required: true,
        description: 'Total number of enrolled students'
      },
      undergraduate: {
        type: 'number',
        required: true,
        description: 'Number of undergraduate students'
      },
      graduate: {
        type: 'number',
        required: true,
        description: 'Number of graduate students'
      },
      international: {
        type: 'object',
        required: true,
        properties: {
          percentage: {
            type: 'number',
            required: true,
            description: 'Percentage of international students'
          },
          topCountries: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                country: { type: 'string' },
                percentage: { type: 'number' }
              }
            },
            description: 'Top 5 sending countries'
          }
        }
      },
      genderDistribution: {
        type: 'object',
        required: true,
        properties: {
          male: { type: 'number' },
          female: { type: 'number' },
          nonBinary: { type: 'number' }
        }
      },
      racialEthnicBreakdown: {
        type: 'object',
        required: true,
        properties: {
          white: { type: 'number' },
          asian: { type: 'number' },
          hispanic: { type: 'number' },
          black: { type: 'number' },
          other: { type: 'number' }
        }
      },
      firstGenPercentage: {
        type: 'number',
        required: true,
        description: 'Percentage of first-generation students'
      },
      pellGrantPercentage: {
        type: 'number',
        required: true,
        description: 'Percentage of students receiving Pell Grants'
      }
    }
  },

  academics: {
    type: 'object',
    required: true,
    properties: {
      degreesOffered: {
        type: 'array',
        items: { type: 'string' },
        description: 'List of degrees offered (BS, BA, MS, PhD, etc.)'
      },
      popularMajors: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            enrollment: { type: 'number' }
          }
        },
        description: 'Top 5 majors by enrollment'
      },
      departmentalRankings: {
        type: 'object',
        description: 'Rankings by department/field'
      },
      studentFacultyRatio: {
        type: 'number',
        required: true,
        description: 'Student to faculty ratio'
      },
      avgClassSize: {
        type: 'number',
        required: true,
        description: 'Average class size'
      }
    }
  },

  admissions: {
    type: 'object',
    required: true,
    properties: {
      acceptanceRate: {
        type: 'object',
        required: true,
        properties: {
          current: { type: 'number' },
          trend: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                year: { type: 'number' },
                rate: { type: 'number' }
              }
            }
          }
        }
      },
      yieldRate: {
        type: 'number',
        required: true,
        description: 'Percentage of accepted students who enroll'
      },
      applicationDeadlines: {
        type: 'object',
        required: true,
        properties: {
          fall: { type: 'string' },
          spring: { type: 'string' },
          summer: { type: 'string' }
        }
      },
      testScores: {
        type: 'object',
        properties: {
          sat: {
            type: 'object',
            properties: {
              reading: { type: 'number' },
              math: { type: 'number' },
              writing: { type: 'number' }
            }
          },
          act: {
            type: 'object',
            properties: {
              composite: { type: 'number' },
              english: { type: 'number' },
              math: { type: 'number' }
            }
          },
          gre: {
            type: 'object',
            properties: {
              verbal: { type: 'number' },
              quantitative: { type: 'number' },
              writing: { type: 'number' }
            }
          },
          toefl: {
            type: 'number',
            description: 'Minimum TOEFL score required'
          }
        }
      },
      applicationFee: {
        type: 'number',
        required: true,
        description: 'Application fee in USD'
      }
    }
  },

  costs: {
    type: 'object',
    required: true,
    properties: {
      tuition: {
        type: 'object',
        required: true,
        properties: {
          inState: { type: 'number' },
          outOfState: { type: 'number' },
          international: { type: 'number' }
        }
      },
      roomAndBoard: { type: 'number' },
      fees: { type: 'number' },
      booksAndSupplies: { type: 'number' },
      financialAid: {
        type: 'object',
        properties: {
          needBasedAid: { type: 'number' },
          meritAid: { type: 'number' },
          percentReceivingAid: { type: 'number' },
          medianDebtAtGraduation: { type: 'number' }
        }
      }
    }
  },

  outcomes: {
    type: 'object',
    required: true,
    properties: {
      graduationRate: {
        type: 'object',
        properties: {
          fourYear: { type: 'number' },
          sixYear: { type: 'number' }
        }
      },
      medianStartingSalary: {
        type: 'object',
        properties: {
          overall: { type: 'number' },
          byMajor: {
            type: 'object',
            additionalProperties: { type: 'number' }
          }
        }
      },
      employmentRate: {
        type: 'number',
        description: 'Employment rate 6 months after graduation'
      },
      returnOnInvestment: {
        type: 'number',
        description: 'Calculated ROI (salary ÷ cost)'
      }
    }
  },

  research: {
    type: 'object',
    properties: {
      expenditure: { type: 'number' },
      librarySize: { type: 'number' },
      labsCount: { type: 'number' },
      exchangePrograms: {
        type: 'array',
        items: { type: 'string' }
      }
    }
  },

  campusLife: {
    type: 'object',
    properties: {
      housing: {
        type: 'object',
        properties: {
          onCampus: { type: 'boolean' },
          offCampus: { type: 'boolean' },
          avgCost: { type: 'number' }
        }
      },
      clubsAndOrgs: { type: 'number' },
      athletics: {
        type: 'object',
        properties: {
          division: { type: 'string' },
          conference: { type: 'string' }
        }
      },
      socialMedia: {
        type: 'object',
        properties: {
          facebook: { type: 'string' },
          instagram: { type: 'string' },
          twitter: { type: 'string' }
        }
      },
      supportServices: {
        type: 'array',
        items: { type: 'string' }
      }
    }
  },

  overallRanking: {
    type: 'number',
    required: true,
    description: 'Overall ranking of the college (e.g., US News ranking)'
  },
  matchScore: {
    type: 'number',
    required: true,
    description: 'Personalized match score for program-finder (0-100)'
  }
} as const; 