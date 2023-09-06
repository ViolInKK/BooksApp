import { FC } from "react"

interface SelectOptionsProps{
    selectOptions: string[]
    setter: (event: string) => void
}

export const SelectOptions: FC<SelectOptionsProps> = ({ selectOptions, setter }) => {
    return(
        <>
            <select onChange={(e) => setter(e.target.value)}>
                {selectOptions.map((option: string) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </>
    )
}
