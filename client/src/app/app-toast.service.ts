import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppToastService {
  constructor() {}
  toasts: any[] = [];

  show(body: string) {
    this.toasts.push({ body });
  }

  remove(toast) {
    this.toasts = this.toasts.filter((t) => t != toast);
  }
}
