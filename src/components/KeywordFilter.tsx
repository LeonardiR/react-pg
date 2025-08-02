import { useEffect, useState } from "react";

type KeyboardFilterProps = {
    list: string[];
    label: string;
    onSelect?: (item: string) => void;
}
export default function KeywordFilter({list, label, onSelect}: KeyboardFilterProps) {
    const [input, setInput] = useState<string>('');
    const [filtered, setFiltered] = useState<string[]>(list);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    useEffect(() => {
        setFiltered(list);
    }, [list]);

    const  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        const cleaned = value.trim().toLowerCase();

        if(!cleaned) {
            setFiltered(list);
            return;
        }

        setFiltered(list.filter((item) => item.toLowerCase().includes(cleaned)));
        setShowOptions(true);
    }

    const handleSelection = (selection : string) => {
        setInput(selection);
        setShowOptions(false);

        onSelect?.(selection);
    }


    
  return (
    <div className="relative ml-auto mr-auto">
        <label htmlFor="search">{label}</label>
        <input  className="w-full p-2 border border-gray-300 rounded-md" id="search" type="text" value={input} onChange={handleInput}/>
        {showOptions && filtered.length > 0 && 
        <div className="absolute top-17 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="py-1">
                {filtered.map((item, index) => (
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" key={index} onClick={() => handleSelection(item)}>{item}</li>
                ))}
            </ul>
        </div>
        }
        
    </div>
  )
}
