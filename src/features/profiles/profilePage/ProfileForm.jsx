import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import { Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { updateUserProfile } from '../../../app/firestore/firestoreService';

export default function ProfileForm({profile , setEditMode}) {
    return (
        <Formik
            initialValues={{
                displayName: profile.displayName,
                description: profile.description || ''
            }}
            validationSchema={Yup.object({
                displayName: Yup.string().required()
            })}
            onSubmit={async (values, {setSubmitting}) => {
                try {
                    await updateUserProfile(values);
                } catch (error) {
                    toast.error(error.message);
                } finally {
                    setSubmitting(false);
                    setEditMode(false);
                }
            }}
        >
            {({isSubmitting, isValid, dirty}) => (
                <Form className='ui form'>
                <TextInput name='displayName' placeholder='Display Name' />
                <TextArea name='description' placeholder='Description' />
                <Button 
                    loading={isSubmitting}
                    disabled={isSubmitting || !isValid || !dirty}
                    floated='right'
                    type='submit'
                    size='large'
                    positive
                    content='Update profile'
                />
            </Form>
            )}

        </Formik>
    )
}