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

  async SOSAlert(): Promise<void> {
    await this.alertRemote.sendSOSAlert(); // Envía la alerta SOS al servidor
  }

  async controlPointAlert(): Promise<void> {
    await this.alertRemote.sendControlPointAlert(); // Envía la alerta de punto de control al servidor
  }
}