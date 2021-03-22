export class Task {
  constructor(
    public id: string,
    public description: string,
    public customerId: string,
    public currentStep: number,
    public numOfSteps: number,
    public isCompleted: boolean
  ) {}
}
