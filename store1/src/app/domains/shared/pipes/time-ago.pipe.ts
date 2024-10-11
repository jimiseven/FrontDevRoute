import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  // manera sin librerias
  // transform(value: string): string {
  //   const date = new Date(value);
  //   const now = new Date();
  //   const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  //   // Calcular las diferencias en tiempo
  //   const intervals = {
  //     year: 31536000,
  //     month: 2592000,
  //     week: 604800,
  //     day: 86400,
  //     hour: 3600,
  //     minute: 60,
  //     second: 1
  //   };

  //   for (const key in intervals) {
  //     const interval = intervals[key as keyof typeof intervals];
  //     const count = Math.floor(seconds / interval);
  //     if (count > 0) {
  //       return count === 1 ? `1 ${key} ago` : `${count} ${key}s ago`;
  //     }
  //   }

  //   return 'Just now';
  // }
  transform(value: string): string {
    const date = new Date(value);
    return formatDistanceToNow(date, { addSuffix: true });
  }
}
