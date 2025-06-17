// utils/timeAgo.js
import {
    differenceInYears,
    differenceInMonths,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
  } from "date-fns";
  
  /**
   * Return a compact “n y / n mo / n d / n h / n m / just now” string.
   *
   * @param {Date|string|number} date – Any value accepted by new Date().
   * @returns {string}
   */
  export function getTimeAgo(date) {
    const now   = new Date();
    const input = new Date(date);
  
    const years   = differenceInYears(now,   input);
    if (years   >= 1) return `${years}y ago`;
  
    const months  = differenceInMonths(now,  input);
    if (months  >= 1) return `${months}mo ago`;
  
    const days    = differenceInDays(now,    input);
    if (days    >= 1) return `${days}d ago`;
  
    const hours   = differenceInHours(now,   input);
    if (hours   >= 1) return `${hours}h ago`;
  
    const minutes = differenceInMinutes(now, input);
    if (minutes >= 1) return `${minutes}m ago`;
  
    const seconds = differenceInSeconds(now, input);
    if (seconds >= 10) return `${seconds}s ago`;
  
    return "just now";
  }
  