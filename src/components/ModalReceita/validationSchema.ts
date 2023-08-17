import * as yup from 'yup'

export const schema = yup
  .object({
    id: yup.number().notRequired(),
    description: yup
    .string()
    .required('A descrição é obrigatória.')
    .max(100, "Tamanho máximo de 100 caracteres."),
    price: yup
    .number()
    .required('O valor é obrigatório.'),
    dueDate: yup
    .date()
    .required('A data de vencimento é obrigatória.'),
    categoryId: yup.number().notRequired(),
    status: yup.number().default(0)
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>