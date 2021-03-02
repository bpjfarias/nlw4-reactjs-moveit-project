import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let countdownTimeout: NodeJS.Timeout

interface CountdownContextData{
    
    startCountdown: () => void,
    resetCountdown: () => void,
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children}: CountdownProviderProps){

    const { startNewChallenge } = useContext(ChallengesContext)

    const CLOCK_TIMER = 25 * 60

    const [time, setTime] = useState(CLOCK_TIMER)

    const [isActive, setIsActive] = useState(false)

    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountdown() {
        setIsActive(true)
    }


    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(CLOCK_TIMER)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])
    
    return (
        <CountdownContext.Provider 
        value = {{
            startCountdown,
            resetCountdown,
            minutes,
            seconds,
            hasFinished,
            isActive,
        }}>
        {children}        
        </CountdownContext.Provider>
    )
}