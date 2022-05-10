
export class ImageVoca {
  constructor(
    public days: number,
    public chapter: number,
    public id: number,
    public form: string,
    public enWord: string,
    public pronunciation: string,
    public enSynonyms: string,
    public enAntonyms: string,
    public korDefinition: string,
    public enExample: string,
    public exKorDefinition: string,
    public quizAnswer: string,
    public filename: string,
    public chGanDefinition?: string,
    public chBunDefinition?: string,
    public jpDefinition?: string
  ) {}
}
