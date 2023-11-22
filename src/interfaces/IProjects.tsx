export interface IProjects {
  img: string;
  title: string;
  description: string;
  repository: string;
  demo?: string;
  type: ITypeProject;
}

export type ITypeProject = "Web-Development" | "App-Development" | "All-Works";

export interface ICategoryProjects {
  id: ITypeProject;
  name: string;
}
