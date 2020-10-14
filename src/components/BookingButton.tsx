import React from 'react'
import Button from './Button'
import { isBookingEnabled, label, link} from '../../content/home/common/booking.json'


interface props {
    size?: string,
    label?: string,
    className?: string,
}

const BookingButton = ({size, className}: props) => isBookingEnabled ? <Button
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

export {BookingButton}