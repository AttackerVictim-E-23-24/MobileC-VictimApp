import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Toast } from '@capacitor/toast';

class WarningsRepository {
    async createNotification(message: string): Promise<void> {
        await Toast.show({
            text: message,
        });
    }

    async startCountdownAlert(seconds: number): Promise<void> {
        for (let i = seconds; i >= 0; i--) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await this.createNotification(`Countdown: ${i}`);
        }
    }

    async createSoundAlert(): Promise<void> {
        // Aquí necesitarías implementar la lógica para reproducir un sonido.
        // Capacitor no proporciona una API para reproducir sonidos, por lo que necesitarías usar una biblioteca de terceros.
    }

    async createVibrationAlert(): Promise<void> {
        Haptics.vibrate();
    }
}

export default WarningsRepository;