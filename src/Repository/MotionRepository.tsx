import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";
import { MotionModel } from "../Model/MotionModel";
import { MotionRemote } from "../Remote/MotionRemote";
import { NetworkModel } from "../Model/NetworkModel";
import { LoginModel } from "../Model/LoginModel"; // Asegúrate de que este es el archivo correcto

let rotationHandler: PluginListenerHandle;

export class MotionRepository {
  private currentMotion: MotionModel;
  private previousMotion: MotionModel;
  private motionRemote: MotionRemote;
  private networkModel: NetworkModel; // Añadido

  constructor() {
    this.currentMotion = new MotionModel();
    this.previousMotion = new MotionModel();
    this.motionRemote = new MotionRemote();
    this.networkModel = NetworkModel.getInstance(); // Obtenemos la instancia única
  }

  startListening(callback: (isMoving: boolean) => void) {
    // Cuando los datos de rotación cambian, actualiza el modelo
    rotationHandler = Motion.addListener("orientation", (event) => {
      this.previousMotion.setMovement(
        this.currentMotion.getMovement().x,
        this.currentMotion.getMovement().y,
        this.currentMotion.getMovement().z
      );
      this.currentMotion.setTimestamp();
      this.currentMotion.setMovement(event.alpha, event.beta, event.gamma);

      // Calcular la diferencia en la rotación
      const deltaAlpha = Math.abs(
        this.currentMotion.getMovement().x - this.previousMotion.getMovement().x
      );
      const deltaBeta = Math.abs(
        this.currentMotion.getMovement().y - this.previousMotion.getMovement().y
      );
      const deltaGamma = Math.abs(
        this.currentMotion.getMovement().z - this.previousMotion.getMovement().z
      );

      // Si la diferencia es mayor que un cierto umbral, el dispositivo está en movimiento
      callback(deltaAlpha > 0.5 || deltaBeta > 0.5 || deltaGamma > 0.5);
    });
  }

  stopListening() {
    if (rotationHandler) {
      rotationHandler.remove();
    }
  }
  async sendData(isMoving: boolean, timestamp: Date) {
    const motion = { isMoving, timestamp }; // Crea un nuevo objeto con los parámetros de entrada

    if (this.networkModel.getStatus()) {
      this.motionRemote.sendMotion([motion]); // Envía un solo elemento si hay conexión
    }
  }
}
