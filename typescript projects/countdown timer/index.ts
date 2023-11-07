import { Date } from 'date-fns';

class CountdownTimer {
  private deadline: Date;
  private interval: NodeJS.Timer;

  constructor(deadline: Date) {
    this.deadline = deadline;
    this.interval = setInterval(() => this.update(), 1000);
  }

  private update() {
    const now = new Date();
    const remainingTime = this.deadline - now;

    if (remainingTime <= 0) {
      clearInterval(this.interval);
      console.log('Countdown complete!');
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor(remainingTime / 1000);

    console.log('Remaining time:', `${days}d ${hours}h ${minutes}m ${seconds}s`);
  }

  public stop() {
    clearInterval(this.interval);
  }
}

const deadline = new Date(2023, 11, 7, 23, 59, 59);
const timer = new CountdownTimer(deadline);

timer.stop(); // Start the timer when you're ready
