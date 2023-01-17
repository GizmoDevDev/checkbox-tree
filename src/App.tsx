import './App.css'
import {CheckBox} from "./Checkbox/Checkbox";
import {useState} from "react";
import {CheckboxTree} from "./CheckboxTree/CheckboxTree";

const checkboxInfo = [
  {
    id: '1',
    label: 'checkbox-1',
    isChecked: false,
    isIndeterminate: false,
  },
  {
    id: '2',
    label: 'checkbox-2',
    isChecked: false,
    isIndeterminate: false,
  },
  {
    id: '3',
    label: 'checkbox-3',
    isChecked: false,
    isIndeterminate: false,
  },
]

const changeOneCheckbox = (prevState: typeof checkboxInfo, id: string) => {
  return prevState.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isChecked: !item.isChecked
      }
    }
    return item;
  })
}

const changeFewCheckbox = (prevState: typeof checkboxInfo, ids: string[]) => {
  return prevState.map((item) => {
    const isContain = ids.some((id) => id === item.id);
    if (isContain) {
      return {
        ...item,
        isChecked: !item.isChecked
      }
    }
    return item;
  })
}

function App() {
  const [checkboxData, setCheckboxData] = useState(checkboxInfo)
  const handleChange = (id: string | string[]) => {
    setCheckboxData((prevState) => {
      return Array.isArray(id)
        ? changeFewCheckbox(prevState, id)
        : changeOneCheckbox(prevState, id);
    })
  }
  return (
    <div className="App">
      <CheckboxTree
        label="root checkbox"
        childCheckboxes={checkboxData}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
