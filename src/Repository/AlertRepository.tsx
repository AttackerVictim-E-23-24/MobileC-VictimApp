import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { AlertModel, AlertType } from "../Model/AlertModel";
import { MonitoringModel } from "../Model/MonitoringModel";
import { AlertRemote } from "../Remote/AlertRemote"; // Importa AlertRemote

export class AlertRepository {
  private alertModel: AlertModel;
  private monitoringModel: MonitoringModel;
  private alertRemote: AlertRemote; // Agrega una propiedad para AlertRemote

  constructor() {
    this.alertModel = new AlertModel();
    this.monitoringModel = MonitoringModel.getInstance();
    this.alertRemote = new AlertRemote(); // Inicializa AlertRemote
  }

  async proximityAlert(): Promise<void> {
    if (this.monitoringModel.getMinDistance()) {
    }
    await Haptics.impact({ style: ImpactStyle.Medium }); // Vibración media para alertas de proximidad
  }

  async SOSAlert(riskLevel: number): Promise<void> {
    this.alertModel.setRiskLevel(riskLevel);
    if (riskLevel >= 5) {
      this.alertModel.setType(AlertType.Emergency);
      await Haptics.impact({ style: ImpactStyle.Heavy });
    } else {
      this.alertModel.setType(AlertType.Warning);
      await Haptics.impact({ style: ImpactStyle.Medium });
    }
    this.alertRemote.sendAlert(this.alertModel.getType(), riskLevel);
  }
}