import { Center } from '@chakra-ui/layout';
import React from 'react'
import { useTimer } from 'react-timer-hook';

export default function QuzeTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        // days,
        // isRunning,
        // start,
        // pause,
        // resume,
        // restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <Center fontSize="40px">
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </Center>
    )
}
