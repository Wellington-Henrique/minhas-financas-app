import * as yup from 'yup'

export const schema = yup
  .object({
    login: yup
        .string()
        .required('O email é obrigatório.')
        .email('O email deve ser válido.'),
    password: yup
        .string()
        .required('A senha é obrigatória!')
    })
  .required()

export type FieldValues = yup.InferType<typeof schema>