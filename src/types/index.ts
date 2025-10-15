export interface DoctorInfo {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface DoctorCardProps {
  name: string;
  designation: string;
  imageUrl?: string;
  isModerator?: boolean;
  doctorInfo: DoctorInfo[];
  className?: string;
}

export interface AgendaItem {
  id: string;
  title: string;
  completed?: boolean;
}

export interface GoalItem {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

export interface HeaderProps {
  logoSrc?: string;
  className?: string;
}
