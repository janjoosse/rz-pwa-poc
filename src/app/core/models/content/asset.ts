import { SelectedFile } from "./selected-file";

export interface Asset {
  id: string;
  src: string;
  original: string;
  height: string;
  width: string;
  extension: string[];
  dateCreated: string;
  name: string;
  selectedFile: SelectedFile;
  thumbnails?: { [key: string]: string };
}