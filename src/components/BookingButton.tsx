import React from 'react'
import Button from './Button'
import booking from '../../content/home/common/booking.json'

const { isBookingEnabled, label, link} = booking
interface props {
    size?: string,
    label?: string,
    className?: string,
}

export const BookingButton = ({size, className}: props) => isBookingEnabled ? <Button
    href={link}
    className={`text-sm ${className}`}
    target="_blank"
    rel="noopener"
    size={size}
  >
    {label}
  </Button>
: null


BookingButton.defaultProps = {
  size: 'default'
}

