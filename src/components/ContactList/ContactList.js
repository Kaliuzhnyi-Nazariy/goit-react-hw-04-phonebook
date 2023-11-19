import {
  ContactItem,
  ContactListStyled,
  ConstactItem,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ items, deleteContact }) => {
  return (
    <ContactListStyled>
      {items.map(item => (
        <ContactItem key={item.id}>
          <ConstactItem>
            {item.name}: {item.number}
          </ConstactItem>
          <DeleteButton type="button" onClick={() => deleteContact(item.id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};
