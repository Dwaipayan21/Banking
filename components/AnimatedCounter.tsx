'use client'
import CountUp from 'react-countup';


const AnimatedCounter = ({ amount }: {amount:number }) => {
  return (
    <span>
        <CountUp 
            end={amount}
            decimals={2}
            duration={1.5}
            formattingFn={(value) =>
                new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                }).format(value)
            }
         />
    </span>
  );
};

export default AnimatedCounter; 