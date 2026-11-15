import type { RecognitionItem, VerifiedCertificate } from "@/types/experience";

export const recognitions: RecognitionItem[] = [
  {
    id: "deci-level-3",
    title: "Embedded Systems & Robotics Track — DECI Level 3",
    organization: "Digital Egypt Cubs Initiative (DECI) & Udacity",
    period: "DECI Level 3",
    location: "Egypt",
    category: "Track & Education",
    summary:
      "Successfully graduated from DECI Level 3 in Robotics & Embedded Systems, mastering foundational microcontroller electronics, sensor integration, and C programming.",
    details: [
      "Graduated from the specialized curriculum managed by Udacity in partnership with Egypt's Ministry of Communications and Information Technology.",
      "Completed hands-on practical milestones in circuit design, sensor reading, and embedded logic.",
    ],
    highlightBadge: "DECI Level 3 Graduate",
  },
  {
    id: "deci-level-4-completion",
    title: "Robotics & Embedded Systems Track — DECI Level 4",
    organization: "Digital Egypt Cubs Initiative (DECI) & Udacity",
    period: "DECI Level 4",
    location: "Egypt",
    category: "Track & Education",
    summary:
      "Completed DECI Level 4 in the Robotics & Embedded Systems track, progressing through the initiative's advanced engineering curriculum.",
    details: [
      "Graduated from the DECI Level 4 program delivered with Udacity and Egypt's Ministry of Communications and Information Technology.",
      "The Level 4 completion certificate is listed separately from the nationwide ranking recognition.",
    ],
    highlightBadge: "DECI Level 4 Graduate",
  },
  {
    id: "deci-level-4-recognition",
    title: "First Rank Nationwide Recognition — DECI Level 4",
    organization: "Digital Egypt Cubs Initiative (DECI) & Udacity",
    period: "October 2025",
    location: "Egypt",
    category: "Recognition",
    summary:
      "Received separate recognition for achieving First Rank Nationwide in DECI Level 4 (Batch 3), Robotics & Embedded Systems.",
    details: [
      "Recognized for performance across national assessments in problem-solving, firmware design, and robotics engineering.",
      "This nationwide ranking recognition is separate from the DECI Level 4 program completion certificate.",
    ],
    highlightBadge: "1st Place Nationwide — DECI Level 4",
  },
  {
    id: "deci-level-5",
    title: "Embedded Systems & Robotics Track — DECI Level 5",
    organization: "Digital Egypt Cubs Initiative (DECI)",
    period: "DECI Level 5 (Active)",
    location: "Egypt",
    category: "Track & Education",
    summary:
      "Advanced to the fifth and final level of DECI's engineering curriculum, developing advanced real-time systems and RTOS architectures.",
    details: [
      "Designed embedded projects including the Solar Panel Sun Tracker (SPST) and MetroExpress Ticket Machine.",
      "Continued study in real-time systems, robotics, and embedded engineering.",
    ],
    highlightBadge: "Level 5",
  },
];

export const certificates: VerifiedCertificate[] = [
  {
    id: "deci-first-rank-l4",
    title: "Certificate of Recognition — 1st Rank Nationwide in DECI Level 4",
    issuer: "Ministry of Communications and Information Technology (MCIT), Egypt",
    collaborationWith: "Digital Egypt Cubs Initiative (DECI) & Udacity",
    issueDate: "October 2025",
    certificateId: "DECI-B3-L4-RANK-1",
    verificationUrl: "https://www.udacity.com/certificate/e/cd5c637a-a27d-11ef-8406-f735d362cb58",
    imagePath: "/certificates/1st-rank-deci-l4.jpg",
    skills: ["Embedded Systems", "Robotics", "Microcontrollers", "DECI Level 4", "1st Rank Nationwide"],
    description:
      "Official Certificate of Recognition awarded for achieving First Rank Nationwide in DECI Level 4 (Batch 3) in the Robotics and Embedded Systems track under the scholarship sponsored by Egypt's Ministry of Communications and Information Technology.",
  },
  {
    id: "deci-level-4-cert",
    title: "DECI Level 4 — Robotics & Embedded Systems",
    issuer: "Digital Egypt Cubs Initiative (DECI) & Udacity",
    collaborationWith: "Ministry of Communications and Information Technology (MCIT), Egypt",
    issueDate: "October 2025",
    certificateId: "cd5c637a-a27d-11ef-8406-f735d362cb58",
    verificationUrl: "https://www.udacity.com/certificate/e/cd5c637a-a27d-11ef-8406-f735d362cb58",
    imagePath: "/certificates/l4.svg",
    skills: ["Robotics & Embedded Systems", "Microcontrollers", "DECI Level 4", "Firmware"],
    description:
      "Official certificate of graduation for DECI Level 4 in Robotics and Embedded Systems, verified by Udacity and sponsored by Egypt's MCIT.",
  },
  {
    id: "deci-level-3-cert",
    title: "DECI Level 3 — Robotics & Embedded Systems",
    issuer: "Digital Egypt Cubs Initiative (DECI) & Udacity",
    collaborationWith: "Ministry of Communications and Information Technology (MCIT), Egypt",
    issueDate: "December 2023",
    certificateId: "b71a0c5a-9ad3-11ee-85bd-9781be815aad",
    verificationUrl: "https://www.udacity.com/certificate/e/b71a0c5a-9ad3-11ee-85bd-9781be815aad",
    imagePath: "/certificates/l3.svg",
    skills: ["Robotics & Embedded Systems", "Electronics", "C Programming", "DECI Level 3"],
    description:
      "Official certificate of graduation for DECI Level 3 in Robotics and Embedded Systems, verified by Udacity and sponsored by Egypt's MCIT.",
  },
  {
    id: "tofas-js-3",
    title: "TOFAS — JavaScript Level 3",
    issuer: "SPRIX Inc. & Hiroshima University",
    collaborationWith: "Ministry of Education and Technical Education, Egypt",
    issueDate: "July 30, 2026",
    certificateId: "0019fb38ba3706918747a966ee72db6c6",
    verificationUrl:
      "https://result.egy.programming-testing.com/certificate-check/0019fb38ba3706918747a966ee72db6c6",
    imagePath: "/images/certs/tofas-js-level-3.png",
    skills: ["JavaScript", "Data Structures", "Algorithms", "Problem Solving"],
    description:
      "Passed Level 3 in the International Test of Fundamental Academic Skills (TOFAS) in Programming (JavaScript), demonstrating advanced fundamental academic and algorithmic competence.",
  },
  {
    id: "tofas-js-2",
    title: "TOFAS — JavaScript Level 2",
    issuer: "SPRIX Inc. & Hiroshima University",
    collaborationWith: "Ministry of Education and Technical Education, Egypt",
    issueDate: "June 28, 2026",
    certificateId: "0019f0e26fc0a3fb2407d69e4da2e3e00",
    verificationUrl:
      "https://result.egy.programming-testing.com/certificate-check/0019f0e26fc0a3fb2407d69e4da2e3e00",
    imagePath: "/images/certs/tofas-js-level-2.png",
    skills: ["JavaScript", "Logic Flow", "Control Structures", "Core Programming"],
    description:
      "Certified in fundamental JavaScript and computational logic by SPRIX Inc. and Hiroshima University under the testing framework authorized by Egypt's Ministry of Education.",
  },
];
