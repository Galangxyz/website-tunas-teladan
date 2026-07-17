export type UserRole =
  | "Orang Tua"
  | "Alumni"
  | "Guru"
  | "Siswa"
  | "Calon Siswa"
  | "Masyarakat";

export interface Review {
  id: string;
  name: string;
  role: UserRole;
  rating: number;
  message: string;

  likes: number;
  replies: number;

  approved: boolean;

  createdAt: Date;
}