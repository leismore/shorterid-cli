#!/usr/bin/env node

import { nanoid } from './lib/nanoid';
import { insert_separator, CHUNK_SIZE, SEPARATOR } from './lib/insert_separator';

nanoid().then( id => {
    console.log( insert_separator(id, CHUNK_SIZE, SEPARATOR) );
});
