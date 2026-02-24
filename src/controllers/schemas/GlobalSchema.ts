import { object, string, number, boolean, array } from 'yup';

export const ValidarUUIDSchema = string().uuid("ID inválido").required();