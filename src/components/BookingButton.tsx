import React from 'react'
import Button from './Button'
import { isBookingEnabled, label, link} from '../../content/home/common/booking.json'


interface props {
    size?: string,
    label?: string,
}

const BookingButton = ({size}: props) => isBookingEnabled ? <Button
    href={link}
    className="text-sm"
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