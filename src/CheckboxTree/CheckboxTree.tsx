import {CheckBox, CheckboxProps} from "../Checkbox/Checkbox";
import classnames from './CheckboxTree.module.css'

type Props = {
  label: string;
  childCheckboxes: (CheckboxProps & {id: string})[]
  onChange: (id: string | string[]) => void;
}

export const CheckboxTree = ({
   label,
   childCheckboxes,
   onChange
}: Props) => {
  const isChecked = childCheckboxes.every(({isChecked}) => isChecked)
  const isIndeterminate = childCheckboxes.some(({isChecked}) => isChecked)
  const handleRootChange = () => {
    const ids = childCheckboxes
      .filter((child) => isChecked === child.isChecked)
      .map(({id}) => id)
    onChange(ids)
  }
  return <div className={classnames.mainContainer}>
    <CheckBox
      label={label}
      isChecked={isChecked}
      isIndeterminate={isIndeterminate}
      onChange={handleRootChange}
    />
    <div className={classnames.childContainer}>
      {childCheckboxes
        .map((props) => (
        <CheckBox
          {...props}
          key={props.id}
          onChange={() => onChange(props.id)}
        />
        ))}
    </div>
  </div>
}