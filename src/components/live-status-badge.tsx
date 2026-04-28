"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Badge } from "@/components/ui/badge";
import { operatingHours, formatHour } from "@/lib/hours";

dayjs.extend(utc);
dayjs.extend(timezone);

const NEPAL_TZ = "Asia/Kathmandu";

function getOpenStatus(): { isOpen: boolean; closesAt: string | null } {
  const now = dayjs().tz(NEPAL_TZ);
  const dayOfWeek = now.day();
  const schedule = operatingHours[dayOfWeek];
  if (!schedule) return { isOpen: false, closesAt: null };

  const currentHour = now.hour();
  const currentMinute = now.minute();
  const currentMinutes = currentHour * 60 + currentMinute;
  const closeMinutes = schedule.close * 60;
  const openMinutes = schedule.open * 60;

  const isOpen =
    currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  return {
    isOpen,
    closesAt: isOpen ? formatHour(schedule.close) : null,
  };
}

export function LiveStatusBadge() {
  const [status, setStatus] = useState(getOpenStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getOpenStatus());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Badge
      variant={status.isOpen ? "open" : "closed"}
      className="cursor-default select-none"
      aria-live="polite"
      aria-label={
        status.isOpen
          ? `Restaurant is currently open, closes at ${status.closesAt}`
          : "Restaurant is currently closed"
      }
    >
      <span
        className={`mr-1.5 h-2 w-2 rounded-full ${
          status.isOpen
            ? "bg-emerald-500 animate-pulse-dot"
            : "bg-amber-500 animate-pulse-dot"
        }`}
      />
      {status.isOpen ? (
        <>Open Now &middot; Closes {status.closesAt}</>
      ) : (
        "Closed"
      )}
    </Badge>
  );
}