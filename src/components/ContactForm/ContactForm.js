import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormikFieldStyled,
  FormStyled,
  ErrorMessageStyled,
  LabelStyled,
  SubmitButtonStyled,
} from '../ContactForm/ContactFormStyled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(1, "Couldn't be empty").required('Required'),
  number: Yup.number()
    .required('Required')
    .min(7, 'Must have 7 numbers')
    .integer("A phone number can't include a decimal point")
    .min(7, 'Must have 7 numbers'),
});

export const ContactForm = ({ onClick }) => {
  return (
    <div>
      <Formik
        initialValues={{
          contacts: [],
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onClick(values);
          actions.resetForm();
        }}
      >
        <FormStyled>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <FormikFieldStyled id="name" name="name" />
          <ErrorMessageStyled name="name" component="span"></ErrorMessageStyled>
          <LabelStyled htmlFor="number">Number</LabelStyled>
          <FormikFieldStyled id="number" name="number" type="tel" />
          <ErrorMessageStyled
            name="number"
            component="span"
          ></ErrorMessageStyled>
          <SubmitButtonStyled type="submit" onSubmit={onClick}>
            Add contact
          </SubmitButtonStyled>
        </FormStyled>
      </Formik>
    </div>
  );
};
