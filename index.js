'use strict';

import { customAlphabet } from 'nanoid/async';

const CHARSET     = '346789ABCDEFGHJKMNPQRTWXY';
const LENGTH      = 16;
const LENGTH_PART = 4;
const SEPARATOR   = '-';
const nanoid      = customAlphabet(CHARSET, LENGTH);

function add_separators(id)
{
    const MAX_START = ( Math.ceil( LENGTH / LENGTH_PART ) - 1 ) * LENGTH_PART;
    let   parts     = [];

    for (let i=0, j=0; i <= MAX_START; i += LENGTH_PART, j++)
    {
        parts[j] = id.substr(i, LENGTH_PART);
    }

    return parts.join(SEPARATOR);
}

nanoid().then( id => {
    console.log( add_separators(id) );
});
