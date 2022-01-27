import { Label, Input } from "./Filter.styled";

const Filter = ({ onFilter, filterValue }) => {
  return (
    <Label>
      <p>Find contacts by name</p>
      <Input
        name="filter"
        type="text"
        onChange={onFilter}
        value={filterValue}
      ></Input>
    </Label>
  );
};

export default Filter;
