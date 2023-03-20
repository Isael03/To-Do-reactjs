import { useState } from 'react'

export const Checkbox = ({ checked, onClick }) => {
    const [isChecked, setIsChecked] = useState(checked)

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    return (
        <span>
            <label htmlFor="checkbox">
                <input type="checkbox" id="checkbox"
                    checked={isChecked}
                    onChange={checkHandler}
                    onClick={onClick} />
            </label>
        </span>
    )
}