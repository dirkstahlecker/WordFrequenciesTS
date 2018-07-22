// import * as React from 'react';

export class MarkupUtils
{
    public static makeMarkup(firstName: string, lastName: string, displayName: string): string
    {
        return "[!!" + displayName + "|" + firstName + "_" + lastName + "!!]";
    }
}

export default MarkupUtils;