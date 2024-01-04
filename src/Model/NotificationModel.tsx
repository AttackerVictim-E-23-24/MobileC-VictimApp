export class NotificationModel {
  title: string;
  body: string;
  token: string;
  // Agrega más campos según sea necesario

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.token = 'token';
  }
}
