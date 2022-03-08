export interface IDiet {
  name: string;
  meal: [
    {
      name: string,
      date: string,
      food: [string]
    }
  ];
}