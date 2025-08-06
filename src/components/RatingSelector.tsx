import { useState } from "react";

type RatingSelectorProps = {
    value?: number;
    onChange?: (rating: number) => void;
    max?: number; // default to 5
  };

export default function RatingSelector({value, max, onChange}: RatingSelectorProps) {
    const [rateValue, setRateVal] = useState<number>(value || 0);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const rateCount : number = max ?? 5;

    const handleClickRateItem = (rate: number) => {
       
        setRateVal(rate + 1);
        onChange && onChange(rate + 1);

    }

    const handleHoberRateItem = (rate: number) => {
        setHoverRating(rate + 1);
    }

  return (
    <div className="flex items-center">

        {[...Array(rateCount).keys()].map((rate) => {
            const isRated = rate < rateValue;
            const isHovered = rate < hoverRating;

            const color: string = isRated ? 'text-yellow-300' : 'text-gray-300';
            const hoverColor: string = isHovered ? 'text-yellow-100' : '';

            return (
                <button 
                    className="cursor-pointer" 
                    key={rate}
                    aria-checked={rate + 1 === rate}
                    aria-label={`rate ${rate + 1} of ${rateCount}`} 
                    onClick={() => handleClickRateItem(rate)} 
                    onMouseEnter={() => handleHoberRateItem(rate)} 
                    onMouseLeave={() => setHoverRating(0)}>
                     <svg className={`w-4 h-4 ${color} ${hoverColor} me-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </button>
            )
        })

        }
    </div>
  )
}
