import React from "react";
import Button from "./Button";
import booking from "../../content/home/common/booking.json";
import "twin.macro";

const { isBookingEnabled, label, link } = booking;
interface props {
  size?: string;
  label?: string;
  className?: string;
}

export const BookingButton = ({ size, className }: props) =>
  isBookingEnabled ? (
    <Button
      href={link}
      tw="text-sm"
      className={className}
      target="_blank"
      rel="noopener"
      size={size}
    >
      {label}
    </Button>
  ) : null;

BookingButton.defaultProps = {
  size: "default",
};
