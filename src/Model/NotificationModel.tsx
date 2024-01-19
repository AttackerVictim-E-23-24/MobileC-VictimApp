export class NotificationModel {
  title: string;
  body: string;
  token: string;
  // Agrega más campos según sea necesario

  private static instance: NotificationModel;

  private constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.token = localStorage.getItem('token') || 'token';
  }

  public static getInstance(): NotificationModel {
    if (!NotificationModel.instance) {
      NotificationModel.instance = new NotificationModel('default title', 'default body');
    }
    return NotificationModel.instance;
  }

  toJson() {
    return {
      title: this.title,
      body: this.body,
      token: this.token,
    };
  }

  getTitle() {
    return this.title;
  }

  getBody() {
    return this.body;
  }

  getToken() {
    return this.token;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setBody(body: string) {
    this.body = body;
  }

  setToken(token: string) {
    this.token = token;
  }


}
