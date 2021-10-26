import { customAlphabet } from 'nanoid/async';

const CHARSET = '346789ABCDEFGHJKMNPQRTWXY';
const LENGTH  = 16;
const nanoid  = customAlphabet(CHARSET, LENGTH);

export { nanoid };
