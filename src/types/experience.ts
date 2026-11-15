export interface RecognitionItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  category: "Recognition" | "Track & Education";
  summary: string;
  details: string[];
  highlightBadge?: string;
}

export interface VerifiedCertificate {
  id: string;
  title: string;
  issuer: string;
  collaborationWith?: string;
  issueDate: string;
  certificateId: string;
  verificationUrl: string;
  imagePath: string;
  skills: string[];
  description: string;
}
