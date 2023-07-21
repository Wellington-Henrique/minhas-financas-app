export interface ReceitaData {
    id: number
    description: string
    price: number
    dueDate: Date
    status: number
    categoryId: number | null
}