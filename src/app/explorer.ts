
export class FileDetails {
  public isFile!: boolean;
  public isDir!: boolean;
  public isSymbolicLink!: boolean;
  public size!: string;
  public modified!: Date;
  public created!: Date;
  public type!: string;
}
