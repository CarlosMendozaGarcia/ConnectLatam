export interface Noticia {
  _id: string;
  title: string;
  resume: string;
  img: string; // aquí lo manejamos como string (URL/base64) en lugar de Buffer
  createdAt?: string;
  updatedAt?: string;
}