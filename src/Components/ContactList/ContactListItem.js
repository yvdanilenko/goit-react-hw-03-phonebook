import { ListItem, Info, Button } from "./ContactList.styled";

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ListItem>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <Button type="button" id={id} onClick={onDeleteContact}>
        Delete contact
      </Button>
    </ListItem>
  );
};

export default ContactListItem;
