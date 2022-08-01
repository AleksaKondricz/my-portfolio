import * as React from 'react';

import Button from '@/components/buttons/Button';
import TextInput from '@/components/inputs/Input';
import TextArea from '@/components/textarea/Textarea';

export default function ContactForm() {
  return (
    <form
      target='_blank'
      action='https://formsubmit.co/al.kondricz@outlook.com'
      method='POST'
    >
      <div className='m-auto flex flex-col justify-between md:w-9/12 md:flex-row'>
        <TextInput
          placeholder='First Name'
          name='firstname'
          errorMsg=''
          disabled={false}
        />
        <TextInput
          placeholder='Last Name'
          name='lastname'
          errorMsg=''
          disabled={false}
        />
        <input
          type='hidden'
          name='_next'
          value='https://localhost:3000/thanks'
        ></input>
        <input type='hidden' name='_captcha' value='false'></input>
        <input
          type='hidden'
          name='_subject'
          value='Somebody wants you on board!'
        ></input>
      </div>
      <div className=' m-auto mt-4  flex  md:w-9/12'>
        <TextArea placeholder='How can I help you?' name='textarea' />
      </div>
      <div className=' m-auto mt-4 mb-10  flex justify-center md:w-9/12'>
        <Button variant='primary' className='w-fit py-4 px-12'>
          Submit
        </Button>
      </div>
    </form>
  );
}
