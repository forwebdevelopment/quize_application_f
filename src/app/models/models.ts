
export interface Category {
  catName: string;
  catId: string;
}

export interface Level {
  levelName: string;
  levelId: number;
}

export interface Subject {
  subject_Name: string;
  subjectId: number;
  catname: string;
}

export interface TenantData {
  categories: Category[];
  levels: Level[];
  subjects: Subject[];
}

export interface TenantDataResponse {
  data: TenantData;
  statusCode: number;
  message: string;
}
