import React from 'react'
import { Heading, Center, Stack, Text, Divider } from '@chakra-ui/react'
import RegisterForm from 'Components/Auth/Register/RegisterForm'
import { fontSizes } from 'Token/Token'
import { useForm } from 'react-hook-form'
import WrapperAuth from 'Components/Auth/WrapperAuth'
import { Link } from 'react-router-dom'

const RegisterContainer = () => {
  const { register, handleSubmit, errors, watch } = useForm()

  return (
    <WrapperAuth>
      <Center>
        <Heading fontSize={fontSizes.Heading}>Register</Heading>
      </Center>

      <Stack marginY={2} spacing={4}>
        <RegisterForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          watch={watch}
        />
      </Stack>

      <Divider marginY={4} />

      <Link to="/login">
        <Center>
          <Text
            colorScheme="twitter"
            _hover={{ textDecoration: 'underline' }}
            color="twitter.700"
          >
            Already have an account? Log In
          </Text>
        </Center>
      </Link>
    </WrapperAuth>
  )
}

export default RegisterContainer
