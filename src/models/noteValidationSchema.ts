import { object, string, number, boolean} from 'yup';

export let bodyValidation = object({
  name: string().required(),
  text_content: string().required(),
  category: string().required(),
});