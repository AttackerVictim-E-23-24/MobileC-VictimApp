export enum AlertType {
  Warning = "Advertencia",
  Emergency = "Emergencia",
}

export class AlertModel {
  private type: AlertType;
  private riskLevel: number;
  private timestamp: Date; // Nuevo campo para la fecha y hora

  constructor() {
    this.type = AlertType.Warning;
    this.riskLevel = 1;
    this.timestamp = new Date(); // Establece la fecha y hora actuales
  }

  getType(): AlertType {
    return this.type;
  }

  getRiskLevel(): number {
    return this.riskLevel;
  }

  getTimestamp(): Date {
    // Nuevo getter para la fecha y hora
    return this.timestamp;
  }

  setType(type: AlertType): void {
    this.type = type;
  }

  setRiskLevel(riskLevel: number): void {
    if (riskLevel < 1 || riskLevel > 5) {
      throw new Error("Risk level must be between 1 and 5");
    }
    this.riskLevel = riskLevel;
  }
}
